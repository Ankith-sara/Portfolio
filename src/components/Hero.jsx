import React, { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactDrawer from './ContactDrawer';
import Resume from '../assets/Resume.pdf';

const Hero = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="max-w-3xl"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-6">
                    Crafting Digital Excellence
                </h1>
                <p className="text-lg md:text-xl text-light-text dark:text-dark-text mb-10">
                    I'm Ankith Sara, a Full Stack Engineer passionate about building beautiful and functional web applications.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsDrawerOpen(true)}
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 font-medium text-light-text dark:text-dark-text bg-light-card dark:bg-dark-card border border-white/20 shadow-lg backdrop-blur-xl"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative flex items-center">
                            Let's Connect <ArrowRight className="w-4 h-4 ml-2" />
                        </span>
                    </motion.button>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 rounded-full px-6 py-3 font-semibold text-light-text dark:text-dark-text bg-light-card/50 dark:bg-dark-card/50 border border-white/10 shadow-md backdrop-blur-xl"
                    >
                        <span>View Resume</span>
                        <Download className="w-4 h-4" />
                    </motion.a>
                </div>
            </motion.div>
            <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </section>
    );
};

export default Hero;