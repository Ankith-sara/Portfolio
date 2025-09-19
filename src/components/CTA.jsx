import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactDrawer from './ContactDrawer';

const CTA = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <section className="py-20 px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="max-w-2xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-6">
                    Have a project in mind?
                </h2>
                <p className="text-lg text-light-text dark:text-dark-text/80 mb-10">
                    Let's turn your ideas into a reality. I'm available for freelance projects and full-time roles.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsDrawerOpen(true)}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-medium text-light-text dark:text-dark-text bg-light-card dark:bg-dark-card border border-white/20 shadow-lg backdrop-blur-xl"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center text-lg">
                        Get In Touch <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                </motion.button>
            </motion.div>
            <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </section>
    );
};

export default CTA;