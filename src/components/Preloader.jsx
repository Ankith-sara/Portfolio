import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-light-bg dark:bg-dark-bg">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple"
            />
        </div>
    );
};

export default Preloader;