import React, { useEffect, useRef } from 'react';

// ---- Lightweight 2D simplex noise ----
class SimplexNoise {
  constructor(seed = Math.random()) {
    this.p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) this.p[i] = i;
    let n;
    let q;
    let rand = seed;
    const random = () => {
      rand = (rand * 9301 + 49297) % 233280;
      return rand / 233280;
    };
    for (let i = 255; i > 0; i--) {
      n = Math.floor((i + 1) * random());
      q = this.p[i];
      this.p[i] = this.p[n];
      this.p[n] = q;
    }
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (let i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }
  }

  static grad3 = [
    [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
    [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
    [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]
  ];

  noise2D(xin, yin) {
    const grad3 = SimplexNoise.grad3;
    const permMod12 = this.permMod12;
    const perm = this.perm;
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const G2 = (3 - Math.sqrt(3)) / 6;

    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const X0 = i - t;
    const Y0 = j - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;

    let i1, j1;
    if (x0 > y0) { i1 = 1; j1 = 0; } else { i1 = 0; j1 = 1; }

    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;

    const ii = i & 255;
    const jj = j & 255;

    const gi0 = permMod12[ii + perm[jj]];
    const gi1 = permMod12[ii + i1 + perm[jj + j1]];
    const gi2 = permMod12[ii + 1 + perm[jj + 1]];

    const dot = (g, x, y) => g[0] * x + g[1] * y;

    let n0 = 0.5 - x0 * x0 - y0 * y0;
    n0 = n0 < 0 ? 0 : (n0 *= n0) * n0 * dot(grad3[gi0], x0, y0);

    let n1 = 0.5 - x1 * x1 - y1 * y1;
    n1 = n1 < 0 ? 0 : (n1 *= n1) * n1 * dot(grad3[gi1], x1, y1);

    let n2 = 0.5 - x2 * x2 - y2 * y2;
    n2 = n2 < 0 ? 0 : (n2 *= n2) * n2 * dot(grad3[gi2], x2, y2);

    return 70 * (n0 + n1 + n2);
  }
}

// --- Scroll zoom-out tuning ---
// Canvas shrinks gradually from scale 1 -> SCALE_FLOOR as the Hero section
// scrolls past. Background lives ONLY inside Hero now, so the zoom should
// finish roughly by the time Hero scrolls out (~0.9 viewport, since Hero is
// min-h-[90vh]) rather than spanning multiple sections.
const SCALE_FLOOR = 0.85;
const ZOOM_SCROLL_DISTANCE_VH = 0.9;

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const outerRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const noiseA = new SimplexNoise(11);
    const noiseB = new SimplexNoise(99);
    const noiseC = new SimplexNoise(55);
    // separate noise fields purely for ambient drift, decoupled from density field
    const driftX = new SimplexNoise(213);
    const driftY = new SimplexNoise(742);

    // --- Tunables ---
    const CELL = 4;
    const SCALE1 = 0.0034;
    const SCALE2 = 0.007;
    const SCALE3 = 0.015;
    const THRESHOLD = 0.26;
    const EDGE_SOFTNESS = 0.25;
    const MAX_DENSITY = 0.6;

    // Cursor interaction — stronger + more playful than before
    const REPEL_RADIUS = 110;        // was 70
    const REPEL_STRENGTH = 26;       // was 15
    const REPEL_EASE = 0.18;         // slightly softer ease-in for a "trailing" feel
    const EASE_BACK = 0.06;          // slower return so it feels springy, not snappy

    // Ambient idle drift — particles wander even with no cursor
    const DRIFT_SCALE = 0.02;        // spatial frequency of drift field
    const DRIFT_SPEED = 0.00018;     // how fast the drift field evolves over time
    const DRIFT_AMOUNT = 5.5;        // px wander radius

    let particles = [];
    let t = 0;

    const buildParticles = () => {
      particles = [];
      const cols = Math.ceil(width / CELL);
      const rows = Math.ceil(height / CELL);

      for (let cy = 0; cy < rows; cy++) {
        const y = cy * CELL;
        for (let cx = 0; cx < cols; cx++) {
          const x = cx * CELL;

          const n1 = noiseA.noise2D(x * SCALE1, y * SCALE1) * 0.5 + 0.5;
          const n2 = noiseB.noise2D(x * SCALE2, y * SCALE2) * 0.5 + 0.5;
          const n3 = noiseC.noise2D(x * SCALE3, y * SCALE3) * 0.5 + 0.5;
          const combined = n1 * (0.4 + 0.6 * n2) * (0.5 + 0.5 * n3);

          if (combined < THRESHOLD) continue;

          const edge = (combined - THRESHOLD) / EDGE_SOFTNESS;
          const density = Math.min(MAX_DENSITY, edge);
          if (Math.random() > density) continue;

          particles.push({
            baseX: x,
            baseY: y,
            x,
            y,
            size: 1.5 + Math.random() * 1,
            density,
            bright: Math.random() > 0.92,
            // per-particle phase offset so drift doesn't look uniform/robotic
            phase: Math.random() * 1000,
          });
        }
      }
    };

    const setSize = () => {
      const outer = outerRef.current;
      width = outer ? outer.clientWidth : window.innerWidth;
      height = outer ? outer.clientHeight : window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };
    setSize();

    const handleResize = () => setSize();
    window.addEventListener('resize', handleResize);

    const handlePointerMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handlePointerLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseleave', handlePointerLeave);

    // --- Scroll-driven zoom out ---
    // Progress is based on how far the Hero container itself has scrolled
    // past the top of the viewport, since this canvas is now `absolute`
    // inside Hero (not `fixed` to the whole page).
    let targetScale = 1.0;
    let currentScale = 1.0;
    let targetBlur = 0;
    let currentBlur = 0;
    let targetOpacity = 1.0;
    let currentOpacity = 1.0;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const zoomDistance = window.innerHeight * ZOOM_SCROLL_DISTANCE_VH;
      const progress = Math.min(1, scrolled / zoomDistance);
      
      targetScale = 1 - progress * (1 - SCALE_FLOOR);
      targetBlur = progress * 12; // 0px -> 12px blur at the end of Hero
      targetOpacity = 1 - progress * 0.75; // 1.0 -> 0.25 opacity (darker)
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const render = () => {
      t += 1;
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate scale, blur, and opacity at 60fps (lerp) - increased to 0.15 for snappier response
      currentScale += (targetScale - currentScale) * 0.15;
      currentBlur += (targetBlur - currentBlur) * 0.15;
      currentOpacity += (targetOpacity - currentOpacity) * 0.15;

      const wrapper = wrapperRef.current;
      if (wrapper) {
        wrapper.style.transform = `scale(${currentScale})`;
        wrapper.style.filter = `blur(${currentBlur}px)`;
        wrapper.style.opacity = currentOpacity;
      }

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const timeVal = t * DRIFT_SPEED;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Ambient idle drift: gentle wander sourced from time-evolving noise field,
        // independent of cursor — keeps things alive even with no interaction.
        const dxDrift = driftX.noise2D(p.baseX * DRIFT_SCALE + p.phase, timeVal) * DRIFT_AMOUNT;
        const dyDrift = driftY.noise2D(p.baseY * DRIFT_SCALE + p.phase, timeVal) * DRIFT_AMOUNT;
        const driftTargetX = p.baseX + dxDrift;
        const driftTargetY = p.baseY + dyDrift;

        const dx = p.baseX - mx;
        const dy = p.baseY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Modulate repel radius with simplex noise to make it organic & messy (not a perfect circle)
        const noiseVal = noiseA.noise2D(p.baseX * 0.015, p.baseY * 0.015);
        const dynamicRadius = REPEL_RADIUS * (1 + noiseVal * 0.45);

        if (dist < dynamicRadius) {
          const falloff = 1 - dist / dynamicRadius;
          const pushX = (dx / (dist || 1)) * REPEL_STRENGTH * falloff;
          const pushY = (dy / (dist || 1)) * REPEL_STRENGTH * falloff;
          const targetX = p.baseX + pushX;
          const targetY = p.baseY + pushY;
          p.x += (targetX - p.x) * REPEL_EASE;
          p.y += (targetY - p.y) * REPEL_EASE;
        } else {
          // ease back toward the ambient drift target (not just baseX/baseY) so
          // particles keep gently wandering instead of going fully static
          p.x += (driftTargetX - p.x) * EASE_BACK;
          p.y += (driftTargetY - p.y) * EASE_BACK;
        }

        const alpha = 0.3 + Math.min(0.55, p.density * 0.55) + Math.random() * 0.15;
        ctx.fillStyle = p.bright
          ? `rgba(255, 255, 255, ${Math.min(alpha + 0.25, 1)})`
          : `rgba(200, 200, 200, ${alpha})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // Fixed + full viewport: this is now ONE continuous background that sits
    // behind the entire page (Hero -> About -> Process -> Services -> Projects),
    // not just behind the Hero section. `wrapperRef` is what gets scaled down
    // on scroll, the outer fixed div stays put so it doesn't clip/reposition.
    <div ref={outerRef} className="fixed inset-0 overflow-hidden z-0 pointer-events-none bg-[#03030a]">
      <div
        ref={wrapperRef}
        className="absolute inset-0 origin-center will-change-transform"
        style={{ transition: 'transform 0.05s linear' }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: 'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
            backgroundSize: '64px',
            backgroundRepeat: 'repeat',
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 45%, rgba(3,3,10,0) 25%, rgba(3,3,10,0.55) 75%, rgba(3,3,10,0.85) 100%)',
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundCanvas;