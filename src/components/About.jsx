import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="p-6 rounded-4xl bg-light-card/80 dark:bg-dark-card/80 border border-white/20 shadow-lg backdrop-blur-xl max-w-4xl mx-auto my-12"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-accent-blue/20 text-accent-blue">
                    <User size={24} />
                </div>
                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">About Me</h2>
            </div>
            <p className="text-light-text dark:text-dark-text/80 leading-relaxed">
                I'm Ankith Kumar Sara, a Full Stack developer and Computer Science student with
                expertise in modern web technologies. I specialize in building clean, responsive,
                and dynamic applications using React, Next.js, TypeScript, Node.js, PostgreSQL, and
                MongoDB. I'm always leveling up my skills and currently diving deeper into backend and
                DevOps.
            </p>
        </motion.section>
    );
};

export default About;
