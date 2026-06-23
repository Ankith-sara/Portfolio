import React, { useEffect } from 'react';
import { useSound } from '../context/SoundContext';

// LIQUID GLASS CARD WRAPPER FOR FOOTER
const FooterGlass = ({ children, className = '', style = {}, ...props }) => (
  <div
    className={`relative overflow-hidden ${className}`}
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.05) 100%)',
      border: '1px solid rgba(255,255,255,0.1)',
      backdropFilter: 'blur(24px) saturate(180%) brightness(1.05)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%) brightness(1.05)',
      boxShadow: '0 0 0 0.5px rgba(255,255,255,0.06) inset, 0 1px 0 0 rgba(255,255,255,0.08) inset, 0 8px 32px rgba(0,0,0,0.45), 0 0 60px rgba(59,130,246,0.03)',
      ...style
    }}
    {...props}
  >
    {/* Top gloss line */}
    <div
      className="absolute top-0 left-0 right-0 pointer-events-none z-10"
      style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18) 30%, rgba(255,255,255,0.12) 70%, transparent)',
      }}
    />
    {/* Subtle inner light */}
    <div
      className="absolute inset-0 pointer-events-none z-10"
      style={{
        background: 'radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.04) 0%, transparent 60%)',
      }}
    />
    {children}
  </div>
);

const Footer = () => {
  const { playHover, playClick } = useSound();

  useEffect(() => {
    function fitWatermark() {
      const svg = document.getElementById('watermarkSvg');
      const text = document.getElementById('watermarkText');
      if (!svg || !text) return;
      try {
        const bbox = text.getBBox();
        svg.setAttribute('viewBox',
          `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      } catch (e) {}
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitWatermark);
    } else {
      window.addEventListener('load', fitWatermark);
    }
    window.addEventListener('resize', fitWatermark);
    return () => window.removeEventListener('resize', fitWatermark);
  }, []);

  const scrollToSection = (id) => {
    playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-transparent px-4 pb-12 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto pt-12 grid grid-cols-1 min-[860px]:grid-cols-[350px_1fr] gap-4 items-stretch">
        {/* LEFT CARD — Video Background */}
        <FooterGlass 
          className="relative min-h-auto min-[860px]:min-h-[340px] gap-10 min-[860px]:gap-0 rounded-[20px] p-8 flex flex-col justify-between"
          style={{ background: 'linear-gradient(135deg, rgba(12,26,61,0.5) 0%, rgba(8,18,45,0.3) 50%, rgba(10,22,53,0.4) 100%)' }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-85 grayscale"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"

          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4"
              type="video/mp4"
            />
          </video>

          {/* Logo */}
          <div className="flex flex-row items-center gap-[10px] relative z-10">
            <div className="w-10 h-10 rounded-lg bg-white/[0.08] border-[1.5px] border-white/25 flex items-center justify-center font-display text-base font-bold text-white tracking-tight">
              AKS
            </div>
            <span className="text-[22px] font-bold text-white tracking-tight font-display">
              Ankith Kumar Sara
            </span>
          </div>

          {/* Tagline */}
          <div className="mt-10 min-[860px]:mt-auto mb-7 relative z-10">
            <p className="text-[19px] font-normal text-white leading-[1.45] font-display">
              Digital products<br />
              <span className="text-white/45">that you need indeed.</span>
            </p>
          </div>

          {/* Social Row */}
          <div className="flex flex-row justify-between items-center gap-3 relative z-10">
            <span className="text-[13px] font-medium text-white/60 tracking-[0.3px] italic">
              Stay in touch!
            </span>
            <div className="flex flex-row gap-[7px]">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ankith-kumar-sara-958ab026a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.4)] text-white/70 backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-blue-500/15 hover:border-blue-500/30 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.1)]"
                onMouseEnter={playHover}
                onClick={playClick}
                data-hover
                aria-label="LinkedIn"
              >
                <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Ankith-sara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.4)] text-white/70 backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-blue-500/15 hover:border-blue-500/30 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.1)]"
                onMouseEnter={playHover}
                onClick={playClick}
                data-hover
                aria-label="GitHub"
              >
                <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </FooterGlass>

        {/* RIGHT CARD — Dark Glass */}
        <FooterGlass className="relative p-6 min-[560px]:p-10 flex flex-col justify-between rounded-[20px]">
          {/* Top — Navigation Columns */}
          <div className="flex-1">
            <div className="flex flex-row gap-10 min-[560px]:gap-[72px] pt-2">
              <div className="flex flex-col">
                <h5 className="font-mono text-[10px] font-bold text-white/35 mb-[18px] uppercase tracking-widest">
                  Navigation
                </h5>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} onMouseEnter={playHover} data-hover className="block font-mono text-xs text-neutral-400 mb-3.5 hover:text-white transition-colors duration-200">Home</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} onMouseEnter={playHover} data-hover className="block font-mono text-xs text-neutral-400 mb-3.5 hover:text-white transition-colors duration-200">About</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }} onMouseEnter={playHover} data-hover className="block font-mono text-xs text-neutral-400 mb-3.5 hover:text-white transition-colors duration-200">Process</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} onMouseEnter={playHover} data-hover className="block font-mono text-xs text-neutral-400 mb-3.5 hover:text-white transition-colors duration-200">Services</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} onMouseEnter={playHover} data-hover className="block font-mono text-xs text-neutral-400 mb-3.5 hover:text-white transition-colors duration-200">Projects</a>
              </div>
              <div className="flex flex-col">
                <h5 className="font-mono text-[10px] font-bold text-white/35 mb-[18px] uppercase tracking-widest">
                  Services
                </h5>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} onMouseEnter={playHover} data-hover className="block font-mono text-xs text-neutral-400 mb-3.5 hover:text-white transition-colors duration-200">Web Development</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} onMouseEnter={playHover} data-hover className="block font-mono text-xs text-neutral-400 mb-3.5 hover:text-white transition-colors duration-200">UI/UX Design</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} onMouseEnter={playHover} data-hover className="block font-mono text-xs text-neutral-400 mb-3.5 hover:text-white transition-colors duration-200">App Development</a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col min-[560px]:flex-row min-[560px]:items-end justify-between mt-12 gap-6 min-[560px]:gap-0">
            <span className="text-[11px] font-normal text-white/25 font-mono">
              © 2026 Ankith Kumar Sara. All rights reserved.
            </span>
            <div className="flex">
              <span className="font-mono text-[11px] text-neutral-500">
                Built with React + Vite + Tailwind CSS
              </span>
            </div>
          </div>
        </FooterGlass>
      </div>
    </section>
  );
};

export default Footer;