import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactDrawer from './ContactDrawer';
import Resume from '../assets/Resume.pdf';
import AKS from '../assets/images/AKS.png';
import navChange from '../assets/sounds/navChange.wav';
import clickSound from '../assets/sounds/mouseClick.wav';

const Hero = () => {
    const soundRef = useRef(new Audio(navChange));

    const playSound = () => {
        soundRef.current.currentTime = 0;
        soundRef.current.play();
    };
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const skills = {
        frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Python'],
        tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase'],
    };

    useEffect(() => {
        const audio = new Audio(clickSound);

        const enableSound = () => {
            audio.play().catch(err => console.log("Autoplay blocked:", err));
            document.removeEventListener("click", enableSound); // remove after first click
        };

        document.addEventListener("click", enableSound);
        return () => document.removeEventListener("click", enableSound);
    }, []);

    return (
        <div className="relative overflow-hidden text-white">
            <div className="absolute inset-0 z-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-600/30 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${8 + Math.random() * 8}s linear infinite`,
                            animationDelay: `${Math.random() * 8}s`,
                        }}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 mb-8 leading-tight tracking-tight">
                    I help founders turn ideas
                    <br />
                    into seamless{' '}
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 font-script drop-shadow-sm">
                        digital experiences
                    </span>
                </h1>

                {/* Profile intro */}
                <div className="flex flex-row gap-6 md:gap-1 items-center space-y-5 sm:space-y-0 sm:space-x-6 mb-12">
                    {/* Animated Avatar */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        whileHover={{ scale: 1.1 }}
                        onMouseEnter={playSound}
                    >
                        <motion.div
                            className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-2xl"
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(59, 130, 246, 0.3)',
                                    '0 0 40px rgba(59, 130, 246, 0.6)',
                                    '0 0 20px rgba(59, 130, 246, 0.3)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-blue-500/20">
                                <span className="text-xl md:text-2xl font-bold text-white">AKS</span>
                            </div>
                        </motion.div>

                        {/* Orbital ring */}
                        <motion.div
                            className="absolute inset-0 rounded-full border border-blue-500/30"
                            style={{ scale: 1.5 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        />
                    </motion.div>

                    {/* Intro Text */}
                    <div className="text-center sm:text-left">
                        <p className="text-white text-xl font-semibold">Hello! I'm Ankith Sara</p>
                        <p className="text-blue-300 text-lg">Full Stack Engineer</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button
                        onClick={() => {
                            playSound();
                            setIsDrawerOpen(true);
                        }}
                        className="group relative inline-flex items-center justify-between overflow-hidden rounded-full border border-slate-700/50 bg-slate-800/20 px-5 py-3 font-medium opacity-90 backdrop-blur-sm transition-all hover:bg-transparent"
                    >
                        <span className="z-10 pr-3 text-slate-100 transition-colors duration-300 group-hover:text-slate-900">
                            Let's Connect
                        </span>
                        <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-blue-500 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
                        <span className="z-10 flex items-center justify-center rounded-full bg-blue-500 p-2 transition-colors duration-300 group-hover:bg-transparent">
                            <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </button>

                    <a
                        href={Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playSound}
                        className="group flex items-center space-x-2 rounded-full border border-slate-700/30 bg-slate-800/10 px-5 py-3 font-semibold text-slate-300 transition-all hover:border-blue-500/50 hover:bg-slate-800/20 hover:text-white"
                    >
                        <span>View Resume</span>
                        <Download className="w-4 h-4 opacity-70 text-blue-400" />
                    </a>
                </div>
            </div>

            {/* Curved Gradient Divider */}
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
                        className="absolute right-[-510px] bottom-[-679px] left-[-532px] h-[956px] rounded-[100%] bg-black"
                        style={{ animation: 'semicircle-glow 10s ease-in-out infinite alternate' }}
                    />
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="relative overflow-hidden min-h-screen  text-gray-300">
                <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-slate-600/5 rounded-full blur-3xl -z-10"></div>
                <div className="relative z-10 px-4 mb-20 text-center">
                    <p className="mb-4 text-sm font-medium tracking-widest text-slate-400 uppercase">
                        Know About Me
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
                        A little bit of{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient-x font-script">
                            me
                        </span>
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    <div className="relative order-2 lg:order-1 flex-shrink-0">
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-slate-500/20 blur-lg -z-10"></div>
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/30 to-slate-500/30 -z-10"></div>
                            <div className="flex justify-center size-48 sm:size-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-slate-800/40">
                                <img
                                    src={AKS}
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg animate-float-badge">
                                Developer
                            </div>
                            <div className="absolute -bottom-4 -left-6 bg-gradient-to-br from-slate-600 to-slate-800 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg animate-float-badge-delayed">
                                CS Student
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 max-w-xl text-center lg:text-left">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
                            Hey! I'm{' '}
                            <span className="relative">
                                <span className="bg-gradient-to-r from-blue-500 to-slate-400 bg-clip-text text-transparent font-bold">
                                    ANKITH
                                </span>
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-slate-400 rounded-full animate-pulse"></span>
                            </span>
                        </h3>
                        <p className="text-base sm:text-lg leading-7 mb-5 text-gray-200">
                            I'm Ankith Kumar Sara, a Full Stack developer and Computer Science student with
                            expertise in modern web technologies. I specialize in building clean, responsive,
                            and dynamic applications using React, Next.js, TypeScript, Node.js, PostgreSQL, and
                            MongoDB.
                        </p>
                        <p className="text-base sm:text-lg leading-7 mb-6 text-gray-200">
                            I'm always leveling up my skills and currently diving deeper into backend and
                            DevOps. Whether it's full-time or freelance, I'm open to exciting opportunities where
                            I can grow and build amazing products with incredible people.
                        </p>
                        <p className="text-blue-400 italic mb-8">I wake up each day eager to make a difference.</p>
                    </div>
                </div>
                <div className="mt-16 px-4 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, techList]) => (
                        <div
                            key={category}
                            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all shadow-lg hover:shadow-blue-500/30"
                        >
                            <h3
                                className={`text-lg sm:text-xl font-bold mb-4 ${category === 'frontend'
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
            </section>

            {/* Contact Drawer */}
            <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

            <style>{`
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
            `}</style>
        </div>
    );
};

export default Hero;