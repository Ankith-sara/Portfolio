import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactDrawer from './ContactDrawer';
import Resume from '../assets/Ankith_resume.pdf';
import AKS from '../assets/images/AKS.png';

const Hero = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Subtle parallax on mouse move
    useEffect(() => {
        const handleMouse = (e) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, []);

    const skills = {
        frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Python'],
        tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase'],
    };

    return (
        <div className="relative overflow-hidden" style={{ background: 'transparent' }}>
            <div className="absolute inset-0 pointer-events-none" style={{ transform: `translate(${(mousePos.x - 0.5) * -20}px, ${(mousePos.y - 0.5) * -15}px)`, transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)'}}>
                <div style={{ position: 'absolute', top: '10%', left: '20%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,108,240,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
                <div style={{ position: 'absolute', top: '30%', right: '15%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />
            </div>

            {/* Hero Section */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <motion.h1
                    className="max-w-5xl text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-white mb-6 leading-[1.05] tracking-tight"
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                >
                    Building AI-powered apps &amp;
                    <br />
                    production-grade{' '}
                    <span className="grad-text">full-stack systems</span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl text-slate-400 text-base md:text-lg font-mono mb-10 leading-relaxed"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Full-stack engineer & AI builder. Architect of Aharyas — a live marketplace for 300+ Indian artisans. I own the entire dev lifecycle and ship things that scale.
                </motion.p>

                {/* Profile intro */}
                <motion.div
                    className="flex flex-row gap-5 items-center mb-10"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
                >
                    <div className="relative">
                        <motion.div
                            className="w-20 h-20 rounded-full p-0.5"
                            style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.6), rgba(26,108,240,0.8))' }}
                            animate={{ boxShadow: ['0 0 20px rgba(0,212,255,0.2)', '0 0 40px rgba(0,212,255,0.5)', '0 0 20px rgba(0,212,255,0.2)'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <div className="w-full h-full rounded-full overflow-hidden" style={{ background: '#000' }}>
                                <img src={AKS} alt="Ankith" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                        {/* Orbit ring */}
                        <div className="absolute inset-0 rounded-full orbit" style={{ scale: 1.4, border: '1px solid rgba(0,212,255,0.15)' }} />
                        <div className="absolute inset-0 rounded-full orbit-reverse" style={{ scale: 1.8, border: '1px dashed rgba(26,108,240,0.1)' }} />
                    </div>
                    <div className="text-left">
                        <p className="text-white text-lg font-display font-semibold">Ankith Kumar Sara</p>
                        <p className="font-mono text-sm" style={{ color: 'rgba(0,212,255,0.7)' }}>Full Stack Engineer</p>
                    </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="group relative inline-flex items-center justify-between gap-3 overflow-hidden rounded-full px-6 py-3 font-mono text-sm font-medium text-white transition-all duration-300"
                        style={{ background: 'rgba(26,108,240,0.9)', boxShadow: '0 0 20px rgba(26,108,240,0.4)' }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(26,108,240,0.7)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(26,108,240,0.4)'}
                    >
                        Let's Connect
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <a href={Resume} target="_blank" rel="noopener noreferrer"
                        className="group flex items-center gap-2 rounded-full border px-6 py-3 font-mono text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white"
                        style={{ borderColor: 'rgba(0,212,255,0.2)', background: 'rgba(0,0,0,0.5)' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.5)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(0,212,255,0.15)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                        View Resume
                        <Download className="w-4 h-4 opacity-70" style={{ color: 'rgba(0,212,255,0.8)' }} />
                    </a>
                </motion.div>
            </div>

            {/* divider with glow */}
            <div className="relative h-40 sm:h-48 lg:h-56 w-full">
                <div
                    className="absolute bottom-0 left-1/2 z-0 h-[400px] w-[1200px] -translate-x-1/2 transform overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
                        WebkitMaskImage:
                            'linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
                    }}
                >
                    <div
                        className="absolute bottom-[120px] left-1/2 h-[120px] w-[700px] -translate-x-1/2 transform bg-[radial-gradient(50%_50%_at_50%_50%,#3b82f6_0%,rgba(10,10,10,0)_100%)] blur-[60px]"
                        style={{ animation: 'glow-shift 8s ease-in-out infinite alternate' }}
                    />
                    <div
                        className="absolute right-[-510px] bottom-[-679px] left-[-532px] h-[946px] rounded-[100%] bg-black"
                        style={{ animation: 'semicircle-glow 10s ease-in-out infinite alternate' }}
                    />
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="relative pb-28 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-mono text-xs tracking-widest mb-3" style={{ color: 'rgba(0,212,255,0.6)' }}>[ ABOUT ME ]</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                            A little bit of{' '}
                            <span className="grad-text">me</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        {/* Photo */}
                        <div className="relative flex-shrink-0 order-2 lg:order-1">
                            <div className="relative">
                                <div className="w-52 h-52 sm:w-72 sm:h-72 rounded-full overflow-hidden border"
                                    style={{ borderColor: 'rgba(0,212,255,0.15)', boxShadow: '0 0 60px rgba(26,108,240,0.15), inset 0 0 30px rgba(0,0,0,0.5)' }}
                                >
                                    <img src={AKS} alt="Ankith" className="w-full h-full object-cover" />
                                </div>
                                {/* Floating labels */}
                                <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full font-mono text-xs font-medium"
                                    style={{ background: 'rgba(26,108,240,0.9)', boxShadow: '0 0 12px rgba(26,108,240,0.5)', color: '#fff' }}>
                                    Developer
                                </div>
                                <div className="absolute -bottom-2 -left-6 px-3 py-1.5 rounded-full font-mono text-xs font-medium"
                                    style={{ background: 'rgba(6,6,18,0.95)', border: '1px solid rgba(0,212,255,0.2)', color: 'rgba(0,212,255,0.8)' }}>
                                    CS Student
                                </div>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="order-1 lg:order-2 max-w-xl text-center lg:text-left">
                            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                                Hey! I'm{' '}
                                <span className="grad-text relative">
                                    ANKITH
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5" style={{ background: 'linear-gradient(to right, rgba(0,212,255,0.6), transparent)' }} />
                                </span>
                            </h3>
                            <p className="text-slate-300 text-base leading-8 mb-5 font-mono" style={{ fontSize: '0.92rem' }}>
                                Hooked on building the moment I realized I could turn a blank editor into something real people use. What started with simple React apps evolved into full-stack systems, AI pipelines, and live production platforms.
                            </p>
                            <p className="text-slate-300 text-base leading-8 mb-6 font-mono" style={{ fontSize: '0.92rem' }}>
                                Today I specialize in React, Next.js, Node.js, and applied AI — with a focus on the gap between prototype and production. I led Aharyas from scratch to 300+ artisan sellers with zero deployment failures across 2 months of CI/CD.
                            </p>
                            <p className="font-mono text-sm italic" style={{ color: 'rgba(0,212,255,0.6)' }}>
                                "The best way to learn is to build something you'd actually want to use."
                            </p>
                        </div>
                    </div>

                    {/* Skill pills */}
                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {Object.entries(skills).map(([category, techList]) => {
                            const colors = { frontend: 'rgba(0,212,255,', backend: 'rgba(26,108,240,', tools: 'rgba(124,58,237,' };
                            const c = colors[category];
                            return (
                                <div key={category} className="space-card rounded-2xl p-6 transition-all duration-300"
                                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <h3 className="font-display font-bold text-lg mb-4 capitalize" style={{ color: `${c}0.9)` }}>
                                        {category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {techList.map((tech) => (
                                            <span key={tech} className="px-3 py-1 rounded-full font-mono text-xs"
                                                style={{ background: `${c}0.06)`, border: `1px solid ${c}0.15)`, color: `${c}0.8)` }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

            <style>
            {`
            @keyframes orbit {
                     0% {
                        transform: translate(0, 0) scale(1);
                        opacity: 0.5;
                    }
                    25% {
                        transform: translate(10px, -15px) scale(1.1);
                        opacity: 0.8;
                    }
                    50% {
                        transform: translate(-10px, -25px) scale(0.9);
                        opacity: 1;
                    }
                    75% {
                        transform: translate(-15px, -5px) scale(1.05);
                        opacity: 0.7;
                    }
                    100% {
                        transform: translate(0, 0) scale(1);
                        opacity: 0.5;
                        }
                    }
                @keyframes glow {
                    0%, 100% {
                        box-shadow: 0 0 2px 0 rgba(96, 165, 250, 0.4); /* soft blue glow */
                    }
                    50% {
                        box-shadow: 0 0 6px 2px rgba(96, 165, 250, 0.6);
                    }
                }
                @keyframes float {
                    0% {
                        transform: translateY(100vh);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh);
                        opacity: 0;
                    }
                }
                @keyframes glow-shift {
                    0% {
                        transform: translateX(-10px);
                        filter: blur(60px);
                    }
                    50% {
                        transform: translateX(10px);
                        filter: blur(50px);
                    }
                    100% {
                        transform: translateX(-10px);
                        filter: blur(60px);
                    }
                }
                @keyframes semicircle-glow {
                    0% {
                        box-shadow: rgba(59, 130, 246, 0.5) 0px 2px 20px inset,
                        rgba(59, 130, 246, 0.2) 0px -10px 50px 1px;
                    }
                    50% {
                        box-shadow: rgba(59, 130, 246, 0.8) 0px 4px 30px inset,
                        rgba(59, 130, 246, 0.4) 0px -15px 70px 2px;
                    }
                    100% {
                        box-shadow: rgba(59, 130, 246, 0.5) 0px 2px 20px inset,
                        rgba(59, 130, 246, 0.2) 0px -10px 50px 1px;
                    }
                }
                @keyframes gradient-x {
                    0%,
                    100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 4s ease infinite;
                }
                .font-script {
                    font-family: 'Brush Script MT', 'Bradley Hand', cursive;
                }
            `}
            </style>
        </div>
    );
};

export default Hero;