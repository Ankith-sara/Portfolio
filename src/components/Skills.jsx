import { color } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import {
    FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAws, FaDocker
} from "react-icons/fa";
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiExpress, SiPython, SiPostgresql,
    SiMongodb, SiPrisma, SiPnpm, SiVercel, SiExpo
} from "react-icons/si";

const Skills = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const skills = [
        { name: "ReactJS", icon: <FaReact />, color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
        { name: "Next.JS", icon: <SiNextdotjs />, color: "text-gray-300 bg-gray-500/10 border-gray-500/30" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30" },
        { name: "Framer Motion", icon: <SiFramer />, color: "text-purple-400 bg-purple-500/10 border-purple-500/30" },
        { name: "Node.JS", icon: <FaNodeJs />, color: "text-green-400 bg-green-500/10 border-green-500/30" },
        { name: "Express.JS", icon: <SiExpress />, color: "text-gray-300 bg-gray-500/10 border-gray-500/30" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500 bg-blue-500/10 border-blue-500/30" },
        { name: "Python", icon: <SiPython />, color: "text-blue-400 bg-blue-500/10 border-blue-500/30"},
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400 bg-green-500/10 border-green-500/30" },
        { name: "Prisma", icon: <SiPrisma />, color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30" },
        { name: "pnpm", icon: <SiPnpm />, color: "text-orange-400 bg-orange-500/10 border-orange-500/30" },
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-400 bg-orange-500/10 border-orange-500/30" },
        { name: "GitHub", icon: <FaGithub />, color: "text-gray-300 bg-gray-500/10 border-gray-500/30" },
        { name: "Vercel", icon: <SiVercel />, color: "text-gray-300 bg-gray-500/10 border-gray-500/30" },
        { name: "AWS", icon: <FaAws />, color: "text-orange-400 bg-orange-500/10 border-orange-500/30" },
        { name: "Docker", icon: <FaDocker />, color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
        {name: "React Native", icon: <FaReact />, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30"},
        { name: "Expo", icon: <SiExpo />, color: "text-gray-300 bg-gray-500/10 border-gray-500/30" },
    ];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const skillRows = [
        skills.slice(0, 7),
        skills.slice(7, 14),
        skills.slice(14, 21),
    ];

    return (
        <div className="min-h-[70vh] relative overflow-hidden">
            {/* Star-like particles */}
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
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="text-center mb-8">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 italic font-script">Skills</span>
                    </h1>
                </div>

                {/* Skills Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center space-y-2 md:space-y-3">
                        {skillRows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="flex flex-wrap justify-center items-center gap-1 md:gap-2"
                            >
                                {row.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className={`group relative ${skill.color} backdrop-blur-sm border rounded-xl px-2 py-1 md:px-4 md:py-2 transition-all animate-fade-in-up`}
                                        style={{
                                            animationDelay: `${rowIndex * 0.1 + index * 0.05}s`,
                                            animationFillMode: 'both'
                                        }}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-lg md:text-xl">{skill.icon}</span>
                                            <span className="font-semibold text-sm md:text-base whitespace-nowrap text-white">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

            <style jsx>{`
                @keyframes animate-fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: animate-fade-in-up 0.6s ease-out forwards;
                    opacity: 0;
                }
                .font-script { font-family: 'Brush Script MT', cursive; }
            `}</style>
        </div>
    );
};

export default Skills;