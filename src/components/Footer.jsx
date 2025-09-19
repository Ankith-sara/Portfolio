import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 px-4 text-center">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-light-text dark:text-dark-text/60 text-sm">
                    © 2025 Ankith Kumar Sara. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <a href="https://github.com/Ankith-sara" target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-dark-text/60 hover:text-light-text dark:hover:text-dark-text transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/ankith-kumar-sara-958ab026a" target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-dark-text/60 hover:text-light-text dark:hover:text-dark-text transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-light-text dark:text-dark-text/60 hover:text-light-text dark:hover:text-dark-text transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;