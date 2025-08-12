import React, { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactDrawer from './ContactDrawer';
import Resume from '../assets/Resume.pdf';

const Hero = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const skills = {
        frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Python'],
        tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase']
    };

    return (
        <div className="relative overflow-hidden text-white">
            {/* Background floating particles */}
            <div className="absolute inset-0 z-0">
                {[...Array(60)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${8 + Math.random() * 8}s linear infinite`,
                            animationDelay: `${Math.random() * 8}s`
                        }}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <h1 className="max-w-4xl text-4xl md:text-6xl font-extrabold text-slate-100 mb-8 leading-tight tracking-tight">
                    I help founders turn ideas
                    <br />
                    into seamless{' '}
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 font-script drop-shadow-sm">
                        digital experiences
                    </span>
                </h1>

                {/* Profile intro */}
                <div className="flex items-center space-x-6 mb-12">
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div
                            className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-2xl"
                            animate={{
                                boxShadow: [
                                    "0 0 20px rgba(59, 130, 246, 0.3)",
                                    "0 0 40px rgba(59, 130, 246, 0.6)",
                                    "0 0 20px rgba(59, 130, 246, 0.3)",
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-blue-500/20">
                                <span className="text-2xl font-bold text-white">AKS</span>
                            </div>
                        </motion.div>

                        {/* Orbital rings */}
                        <motion.div
                            className="absolute inset-0 rounded-full border border-blue-500/30"
                            style={{ scale: 1.5 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>

                    <div className="text-left">
                        <p className="text-white text-xl font-semibold">
                            Hello! I'm Ankith Kumar Sara
                        </p>
                        <p className="text-blue-300 text-lg">Full Stack Space Explorer</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button onClick={() => setIsDrawerOpen(true)} className="group relative inline-flex items-center justify-between overflow-hidden rounded-full border border-slate-700/50 bg-slate-800/20 px-4 py-2 font-medium opacity-90 backdrop-blur-sm transition-all hover:bg-transparent">
                        <span className="z-10 pr-3 text-slate-100 transition-colors duration-300 group-hover:text-slate-900">
                            Let's Connect
                        </span>
                        <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-blue-500 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
                        <span className="z-10 flex items-center justify-center rounded-full bg-blue-500 p-2 transition-colors duration-300 group-hover:bg-transparent">
                            <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </button>

                    <a href={Resume} target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 rounded-full border border-slate-700/30 bg-slate-800/10 px-5 py-3 font-semibold text-slate-300 transition-all hover:border-blue-500/50 hover:bg-slate-800/20 hover:text-white">
                        <span>View Resume</span>
                        <Download className="w-4 h-4 opacity-70 text-blue-400" />
                    </a>
                </div>
            </div>

            {/* Curved Gradient Divider */}
            <div className="relative h-72 md:h-56 w-full z-10">
                <div
                    className="absolute bottom-0 left-1/2 z-0 h-[330px] w-[1200px] -translate-x-1/2 transform overflow-hidden"
                    style={{
                        maskImage:
                            'linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
                        WebkitMaskImage:
                            'linear-gradient(to right, transparent, black 30%, black 70%, transparent)'
                    }}
                >
                    <div
                        className="absolute bottom-[130px] left-1/2 h-[100px] w-[700px] -translate-x-1/2 transform bg-[radial-gradient(50%_50%_at_50%_50%,#3b82f6_0%,rgba(10,10,10,0)_100%)] blur-[60px]"
                        style={{ animation: 'glow-shift 8s ease-in-out infinite alternate' }}
                    ></div>
                    <div
                        className="absolute right-[-510px] bottom-[-689px] left-[-532px] h-[956px] rounded-[100%] bg-black"
                        style={{ animation: 'semicircle-glow 10s ease-in-out infinite alternate' }}
                    ></div>
                </div>
            </div>

            {/* About Section */}
            <section className="relative overflow-hidden min-h-screen">
                <div className="absolute inset-0 pointer-events-none z-0">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-blue-400/20 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `float ${8 + Math.random() * 8}s linear infinite`,
                                animationDelay: `${Math.random() * 8}s`
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 px-4 py-10 mb-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="mb-4 text-sm font-medium tracking-widest text-slate-400 uppercase">
                                Know About Me
                            </p>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4 leading-tight">
                                A little bit of{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient-x font-script">
                                    me
                                </span>
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                                <p>
                                    I'm{' '}
                                    <span className="text-blue-400 font-semibold">
                                        Ankith Kumar Sara
                                    </span>
                                    , a proactive full-stack developer passionate about creating
                                    dynamic web experiences. From frontend to backend, I thrive on
                                    solving complex problems with clean, efficient code.
                                </p>
                                <p>
                                    My expertise spans{' '}
                                    <span className="text-blue-300 font-medium">
                                        React, Next.js, TypeScript, and Node.js
                                    </span>
                                    , and I'm always eager to learn more. I believe in building
                                    impactful products that make lives easier, smarter, and more
                                    connected.
                                </p>
                                <p className="text-blue-400 italic">
                                    I wake up each day eager to make a difference.
                                </p>
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <div className="relative hover:scale-105 transition-transform duration-500">
                                    <div className="w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-[60px] backdrop-blur-md border border-slate-700/30 rotate-3">
                                        <div className="absolute inset-4 bg-slate-800/40 rounded-[50px] flex items-center justify-center">
                                            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">
                                                AKS
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {Object.entries(skills).map(([category, techList]) => (
                                <div
                                    key={category}
                                    className="group bg-slate-800/20 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/30 transition-all duration-300"
                                >
                                    <h3
                                        className={`text-xl font-bold mb-4 ${category === 'frontend'
                                            ? 'text-blue-400'
                                            : category === 'backend'
                                                ? 'text-green-400'
                                                : 'text-purple-400'
                                            }`}
                                    >
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {techList.map((tech) => (
                                            <span
                                                key={tech}
                                                className={`px-3 py-1 text-xs rounded-full border ${category === 'frontend'
                                                    ? 'bg-blue-500/10 border-blue-500/20 text-blue-300'
                                                    : category === 'backend'
                                                        ? 'bg-green-500/10 border-green-500/20 text-green-300'
                                                        : 'bg-purple-500/10 border-purple-500/20 text-purple-300'
                                                    }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
                </div>

                <style jsx>{`
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
                `}</style>
            </section>
        </div>
    );
};

export default Hero;