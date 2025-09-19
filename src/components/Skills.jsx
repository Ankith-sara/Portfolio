import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Skills = () => {
    const skills = {
        frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Python'],
        tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase'],
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="p-6 rounded-4xl bg-light-card/80 dark:bg-dark-card/80 border border-white/20 shadow-lg backdrop-blur-xl max-w-4xl mx-auto my-12"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-accent-purple/20 text-accent-purple">
                    <Code size={24} />
                </div>
                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">Skills</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, techList]) => (
                    <div key={category}>
                        <h3 className="text-lg font-semibold mb-2 text-light-text dark:text-dark-text capitalize">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {techList.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-sm rounded-full bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text/80"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;