import React, { useState } from 'react';
import { Home, User, Code, Mail, Linkedin, Github } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactDrawer from './ContactDrawer';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home', path: '/', icon: <Home size={24} /> },
        { id: 'about', label: 'About', path: '/about', icon: <User size={24} /> },
        { id: 'projects', label: 'Projects', path: '/projects', icon: <Code size={24} /> },
    ];

    const socialLinks = [
        { id: 'linkedin', label: 'LinkedIn', path: 'https://www.linkedin.com/in/ankith-kumar-sara-958ab026a', icon: <Linkedin size={24} /> },
        { id: 'github', label: 'Github', path: 'https://github.com/Ankith-sara', icon: <Github size={24} /> },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
            >
                <div className="flex items-center gap-4 p-2 rounded-full bg-light-card/80 dark:bg-dark-card/80 border border-white/20 shadow-lg backdrop-blur-xl">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={`flex flex-col items-center justify-center w-16 h-16 rounded-full transition-colors ${
                                currentPath === item.path
                                    ? 'bg-accent-blue/20 text-accent-blue'
                                    : 'text-light-text dark:text-dark-text/70 hover:bg-black/5 dark:hover:bg-white/5'
                            }`}
                        >
                            {item.icon}
                            <span className="text-xs mt-1">{item.label}</span>
                        </Link>
                    ))}
                    <div className="w-px h-12 bg-white/20" />
                    {socialLinks.map((social) => (
                         <a
                            key={social.id}
                            href={social.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center w-16 h-16 rounded-full text-light-text dark:text-dark-text/70 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                            {social.icon}
                            <span className="text-xs mt-1">{social.label}</span>
                        </a>
                    ))}
                     <div className="w-px h-12 bg-white/20" />
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="flex flex-col items-center justify-center w-16 h-16 rounded-full text-light-text dark:text-dark-text/70 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                        <Mail size={24} />
                        <span className="text-xs mt-1">Contact</span>
                    </button>
                </div>
            </motion.nav>
            <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
};

export default Navbar;