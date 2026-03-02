import React, { useState, useRef } from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import ContactDrawer from './ContactDrawer';

function CTA() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setPosition({ x, y });
    };

    return (
        <div className="relative overflow-hidden py-28 px-4">
            {/* Horizontal separator */}
            <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.15) 30%, rgba(26,108,240,0.2) 50%, rgba(0,212,255,0.15) 70%, transparent)' }} />

            {/* Deep nebula glow for CTA */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{ width: 600, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(26,108,240,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
            </div>

            {/* Spinning orbit badge */}
            <div className="absolute top-12 right-8 md:right-24 hidden md:block">
                <div className="relative w-28 h-28">
                    <div className="w-full h-full rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(6,6,18,0.9)', border: '1px solid rgba(0,212,255,0.15)', boxShadow: '0 0 20px rgba(26,108,240,0.1)' }}>
                        <Rocket className="w-6 h-6" style={{ color: 'rgba(0,212,255,0.8)' }} />
                    </div>
                    <svg className="absolute inset-0 w-28 h-28 orbit" viewBox="0 0 100 100">
                        <path id="ctaCircle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                        <text fill="rgba(0,212,255,0.5)" fontSize="8" fontFamily="DM Mono, monospace" letterSpacing="3">
                            <textPath href="#ctaCircle">LET'S BUILD • LET'S BUILD •</textPath>
                        </text>
                    </svg>
                </div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <p className="font-mono text-xs tracking-widest mb-5" style={{ color: 'rgba(0,212,255,0.5)' }}>[ READY TO COLLABORATE ]</p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-tight">
                    FROM CONCEPT TO{' '}
                    <span className="grad-text">CREATION</span>
                </h2>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-10">
                    LET'S MAKE IT{' '}
                    <span style={{ color: 'rgba(0,212,255,0.9)' }}>HAPPEN.</span>
                </h3>

                {/* Magnetic button */}
                <div className="mb-12">
                    <button
                        ref={buttonRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setPosition({ x: 0, y: 0 })}
                        onClick={() => setIsDrawerOpen(true)}
                        className="group relative rounded-2xl p-[1px] transition-all duration-300"
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px)`,
                            background: 'linear-gradient(135deg, rgba(0,212,255,0.5), rgba(26,108,240,0.8))',
                            boxShadow: '0 0 30px rgba(26,108,240,0.3)',
                            transition: 'transform 0.15s ease-out, box-shadow 0.3s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 50px rgba(26,108,240,0.5)'}
                    >
                        <div className="relative rounded-2xl px-10 py-4 flex items-center gap-4 font-mono text-lg font-medium text-white"
                            style={{ background: 'rgba(0,0,0,0.8)' }}>
                            Get In Touch
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </button>
                </div>

                {/* Availability card */}
                <div className="space-card rounded-2xl p-5 max-w-md w-full">
                    <div className="flex items-center gap-4">
                        <div className="relative flex-shrink-0">
                            <div className="w-3 h-3 bg-green-400 rounded-full" />
                            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-50" />
                        </div>
                        <p className="font-mono text-sm text-slate-300 leading-relaxed">
                            Available for <span className="text-green-400">full-time roles</span> & freelance projects.
                            Open to building <span style={{ color: 'rgba(0,212,255,0.8)' }}>AI-powered products</span> and <span className="text-purple-400">scalable apps</span>.
                        </p>
                    </div>
                </div>
            </div>

            <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </div>
    );
}

export default CTA;