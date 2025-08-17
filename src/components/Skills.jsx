import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAws, FaDocker
} from "react-icons/fa";
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiExpress, SiPython, SiPostgresql,
    SiMongodb, SiPrisma, SiPnpm, SiVercel, SiExpo
} from "react-icons/si";

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const skillCategories = {
        "Frontend": [
            { name: "React.js", icon: <FaReact />, color: "text-cyan-400", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-500/30", shadowColor: "#06B6D4", level: 95 },
            { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-300", bgColor: "bg-gray-500/10", borderColor: "border-gray-500/30", shadowColor: "#6B7280", level: 90 },
            { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30", shadowColor: "#3B82F6", level: 85 },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-500/30", shadowColor: "#06B6D4", level: 92 },
            { name: "Framer Motion", icon: <SiFramer />, color: "text-purple-400", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/30", shadowColor: "#A855F7", level: 80 },
            { name: "React Native", icon: <FaReact />, color: "text-cyan-400", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-500/30", shadowColor: "#06B6D4", level: 75 },
        ],
        "Backend": [
            { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400", bgColor: "bg-green-500/10", borderColor: "border-green-500/30", shadowColor: "#10B981", level: 88 },
            { name: "Express.js", icon: <SiExpress />, color: "text-gray-300", bgColor: "bg-gray-500/10", borderColor: "border-gray-500/30", shadowColor: "#6B7280", level: 85 },
            { name: "Python", icon: <SiPython />, color: "text-yellow-400", bgColor: "bg-yellow-500/10", borderColor: "border-yellow-500/30", shadowColor: "#F59E0B", level: 82 },
            { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30", shadowColor: "#3B82F6", level: 78 },
            { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400", bgColor: "bg-green-500/10", borderColor: "border-green-500/30", shadowColor: "#10B981", level: 80 },
            { name: "Prisma", icon: <SiPrisma />, color: "text-indigo-400", bgColor: "bg-indigo-500/10", borderColor: "border-indigo-500/30", shadowColor: "#6366F1", level: 75 },
        ],
        "Tools & Platforms": [
            { name: "Git", icon: <FaGitAlt />, color: "text-orange-400", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/30", shadowColor: "#F97316", level: 90 },
            { name: "GitHub", icon: <FaGithub />, color: "text-gray-300", bgColor: "bg-gray-500/10", borderColor: "border-gray-500/30", shadowColor: "#6B7280", level: 88 },
            { name: "Docker", icon: <FaDocker />, color: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30", shadowColor: "#3B82F6", level: 70 },
            { name: "AWS", icon: <FaAws />, color: "text-orange-400", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/30", shadowColor: "#F97316", level: 65 },
            { name: "Vercel", icon: <SiVercel />, color: "text-gray-300", bgColor: "bg-gray-500/10", borderColor: "border-gray-500/30", shadowColor: "#6B7280", level: 85 },
            { name: "pnpm", icon: <SiPnpm />, color: "text-orange-400", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/30", shadowColor: "#F97316", level: 88 },
            { name: "Expo", icon: <SiExpo />, color: "text-gray-300", bgColor: "bg-gray-500/10", borderColor: "border-gray-500/30", shadowColor: "#6B7280", level: 75 },
        ]
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.08
            }
        }
    };

    const skillCardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        hover: {
            scale: 1.02,
            y: -5,
            transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const glowVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: {
            opacity: [0, 0.4, 0],
            scale: [0.8, 1.2, 0.8],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const progressVariants = {
        initial: { width: "0%" },
        animate: (level) => ({
            width: `${level}%`,
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3
            }
        })
    };

    const iconVariants = {
        hover: {
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <div className="min-h-screen text-white relative overflow-hidden">
            {/* Animated Background Particles */}
            <motion.div className="absolute inset-0 z-0">
                {[...Array(80)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            y: [-20, -100],
                            x: [0, Math.random() * 100 - 50],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeOut"
                        }}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </motion.div>

            {/* Gradient Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
            <motion.div
                className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.3, 0.15]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            <div className="relative z-20 px-4 py-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <motion.div
                        className="text-center mb-16 md:mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.p
                            className="text-xs md:text-sm font-normal tracking-widest text-slate-400 uppercase mb-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Technical Expertise
                        </motion.p>
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Skills & <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 font-script drop-shadow-sm">Technologies</span>
                        </motion.h1>
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                        className="space-y-12 md:space-y-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
                            <motion.div key={category} className="relative" variants={categoryVariants}>
                                {/* Category Header */}
                                <div className="flex items-center mb-8">
                                    <motion.div
                                        className="w-1 h-8 rounded-full mr-4"
                                        initial={{ height: 0 }}
                                        animate={{ height: 32 }}
                                        transition={{ delay: 0.5 + categoryIndex * 0.1, duration: 0.6 }}
                                        style={{
                                            background: categoryIndex === 0 ? '#06B6D4' : categoryIndex === 1 ? '#10B981' : '#F59E0B',
                                        }}
                                    />
                                    <motion.h3
                                        className="text-2xl md:text-3xl font-bold text-white"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + categoryIndex * 0.1, duration: 0.6 }}
                                    >
                                        {category}
                                    </motion.h3>
                                    <motion.div
                                        className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-6"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 0.7 + categoryIndex * 0.1, duration: 0.8 }}
                                    />
                                </div>

                                {/* Skills Cards */}
                                <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                                    variants={{
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.1
                                            }
                                        }
                                    }}
                                >
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            className="group relative"
                                            variants={skillCardVariants}
                                            whileHover="hover"
                                            onHoverStart={() => setHoveredSkill(skill.name)}
                                            onHoverEnd={() => setHoveredSkill(null)}
                                        >
                                            {/* Subtle Glow Effect on Hover */}
                                            <AnimatePresence>
                                                {hoveredSkill === skill.name && (
                                                    <motion.div
                                                        className="absolute inset-0 rounded-2xl -z-10"
                                                        style={{
                                                            background: `radial-gradient(circle, ${skill.shadowColor}15 0%, transparent 70%)`,
                                                        }}
                                                        variants={glowVariants}
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="initial"
                                                    />
                                                )}
                                            </AnimatePresence>

                                            {/* Main Card */}
                                            <motion.div className={`
                                                relative p-6 rounded-2xl border backdrop-blur-sm transition-colors duration-300
                                                ${skill.bgColor} ${skill.borderColor}
                                                hover:border-white/30
                                            `}>
                                                {/* Content */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center space-x-3">
                                                        <motion.div
                                                            className={`text-3xl ${skill.color}`}
                                                            variants={iconVariants}
                                                            whileHover="hover"
                                                        >
                                                            {skill.icon}
                                                        </motion.div>
                                                        <span className="font-semibold text-lg text-white">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                    <motion.span
                                                        className="text-sm text-slate-400 font-medium"
                                                        animate={{
                                                            color: hoveredSkill === skill.name ? skill.shadowColor : '#94a3b8'
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        {skill.level}%
                                                    </motion.span>
                                                </div>

                                                {/* Progress Bar */}
                                                <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full rounded-full"
                                                        style={{
                                                            background: `linear-gradient(90deg, ${skill.shadowColor}60, ${skill.shadowColor})`,
                                                        }}
                                                        variants={progressVariants}
                                                        initial="initial"
                                                        animate={hoveredSkill === skill.name ? "animate" : "initial"}
                                                        custom={skill.level}
                                                    />
                                                </div>

                                                {/* Skill Level Indicator */}
                                                <motion.div
                                                    className="mt-3 text-xs text-slate-400"
                                                    animate={{
                                                        opacity: hoveredSkill === skill.name ? 1 : 0.7
                                                    }}
                                                >
                                                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Learning'}
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Skills;