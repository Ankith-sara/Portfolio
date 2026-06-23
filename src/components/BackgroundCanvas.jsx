import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Animated blobs with slow trigonometric drifting
    const blobs = [
      {
        x: width * 0.25,
        y: height * 0.25,
        radius: Math.min(width, height) * 0.5,
        colorStart: 'rgba(59, 130, 246, 0.11)', // soft blue
        colorEnd: 'rgba(59, 130, 246, 0)',
        timeX: Math.random() * 100,
        timeY: Math.random() * 100,
        speed: 0.0006
      },
      {
        x: width * 0.75,
        y: height * 0.35,
        radius: Math.min(width, height) * 0.55,
        colorStart: 'rgba(139, 92, 246, 0.11)', // soft violet
        colorEnd: 'rgba(139, 92, 246, 0)',
        timeX: Math.random() * 100,
        timeY: Math.random() * 100,
        speed: 0.0004
      },
      {
        x: width * 0.45,
        y: height * 0.75,
        radius: Math.min(width, height) * 0.48,
        colorStart: 'rgba(6, 182, 212, 0.09)', // soft cyan
        colorEnd: 'rgba(6, 182, 212, 0)',
        timeX: Math.random() * 100,
        timeY: Math.random() * 100,
        speed: 0.0008
      }
    ];

    const render = () => {
      // Clear with very dark base
      ctx.fillStyle = '#040404';
      ctx.fillRect(0, 0, width, height);

      // Draw organic morphing blobs
      blobs.forEach((blob) => {
        blob.timeX += blob.speed;
        blob.timeY += blob.speed;

        // Smooth wander coordinates
        const wanderX = Math.sin(blob.timeX) * width * 0.2;
        const wanderY = Math.cos(blob.timeY) * height * 0.2;

        const x = blob.x + wanderX;
        const y = blob.y + wanderY;

        // Radius pulses gently
        const pulse = Math.sin(blob.timeX * 1.5) * 40;
        const currentRadius = Math.max(100, blob.radius + pulse);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, currentRadius);
        gradient.addColorStop(0, blob.colorStart);
        gradient.addColorStop(0.4, blob.colorStart.replace(/0\.\d+\)$/, '0.04)'));
        gradient.addColorStop(1, blob.colorEnd);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay" 
        style={{
          backgroundImage: 'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
          backgroundSize: '64px',
          backgroundRepeat: 'repeat',
        }}
      />
      {/* Soft dark vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 30%, rgba(4, 4, 4, 0.5) 100%)',
        }}
      />
    </div>
  );
};

export default BackgroundCanvas;
