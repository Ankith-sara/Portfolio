import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAws, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiExpress, SiPython, SiPostgresql, SiMongodb, SiPrisma, SiPnpm, SiVercel, SiExpo } from "react-icons/si";

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillCategories = {
        "Frontend": [
            { name: "React.js", icon: <FaReact />, color: "#06B6D4", level: 95, label: "Expert" },
            { name: "Next.js", icon: <SiNextdotjs />, color: "#e2e8f0", level: 90, label: "Expert" },
            { name: "TypeScript", icon: <SiTypescript />, color: "#3B82F6", level: 85, label: "Advanced" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", level: 92, label: "Expert" },
            { name: "Framer Motion", icon: <SiFramer />, color: "#A855F7", level: 80, label: "Advanced" },
            { name: "React Native", icon: <FaReact />, color: "#06B6D4", level: 75, label: "Intermediate" },
        ],
        "Backend": [
            { name: "Node.js", icon: <FaNodeJs />, color: "#10B981", level: 88, label: "Advanced" },
            { name: "Express.js", icon: <SiExpress />, color: "#e2e8f0", level: 85, label: "Advanced" },
            { name: "Python", icon: <SiPython />, color: "#F59E0B", level: 82, label: "Advanced" },
            { name: "PostgreSQL", icon: <SiPostgresql />, color: "#3B82F6", level: 78, label: "Intermediate" },
            { name: "MongoDB", icon: <SiMongodb />, color: "#10B981", level: 80, label: "Advanced" },
            { name: "Prisma", icon: <SiPrisma />, color: "#6366F1", level: 75, label: "Intermediate" },
        ],
        "Tools & Platforms": [
            { name: "Git", icon: <FaGitAlt />, color: "#F97316", level: 90, label: "Expert" },
            { name: "GitHub", icon: <FaGithub />, color: "#e2e8f0", level: 88, label: "Advanced" },
            { name: "Docker", icon: <FaDocker />, color: "#3B82F6", level: 70, label: "Intermediate" },
            { name: "AWS", icon: <FaAws />, color: "#F97316", level: 65, label: "Intermediate" },
            { name: "Vercel", icon: <SiVercel />, color: "#e2e8f0", level: 85, label: "Advanced" },
            { name: "Expo", icon: <SiExpo />, color: "#e2e8f0", level: 75, label: "Intermediate" },
        ]
    };

    const catColors = { "Frontend": "#00d4ff", "Backend": "#1a6cf0", "Tools & Platforms": "#7c3aed" };

    return (
        <div className="relative py-24 px-4">
            {/* Section header */}
            <div className="text-center mb-16">
                <p className="font-mono text-xs tracking-widest mb-3" style={{ color: 'rgba(0,212,255,0.6)' }}>[ TECHNICAL STACK ]</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                    Skills &{' '}
                    <span className="grad-text">Technologies</span>
                </h2>
            </div>

            <div className="max-w-7xl mx-auto space-y-14">
                {Object.entries(skillCategories).map(([category, skills], catIdx) => (
                    <div key={category}>
                        {/* Category header */}
                        <div className="flex items-center gap-4 mb-7">
                            <div className="w-1 h-7 rounded-full" style={{ background: catColors[category], boxShadow: `0 0 10px ${catColors[category]}` }} />
                            <h3 className="font-display font-bold text-xl text-white">{category}</h3>
                            <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${catColors[category]}30, transparent)` }} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="space-card rounded-2xl p-5 cursor-default transition-all duration-300"
                                    whileHover={{ y: -4 }}
                                    onHoverStart={() => setHoveredSkill(skill.name)}
                                    onHoverEnd={() => setHoveredSkill(null)}
                                    style={{ borderColor: hoveredSkill === skill.name ? `${skill.color}30` : 'rgba(0,212,255,0.08)' }}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="text-2xl" style={{ color: skill.color, filter: hoveredSkill === skill.name ? `drop-shadow(0 0 6px ${skill.color})` : 'none', transition: 'filter 0.3s' }}>
                                                {skill.icon}
                                            </div>
                                            <span className="font-display font-semibold text-white text-sm">{skill.name}</span>
                                        </div>
                                        <span className="font-mono text-xs px-2 py-0.5 rounded-full"
                                            style={{ background: `${skill.color}10`, color: `${skill.color}`, border: `1px solid ${skill.color}25` }}>
                                            {skill.label}
                                        </span>
                                    </div>

                                    {/* Progress bar — always visible */}
                                    <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.2, delay: 0.2 + catIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                    </div>
                                    <div className="mt-2 text-right">
                                        <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{skill.level}%</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;