import React, { useState } from 'react';
import { Mail, Copy, Github, Linkedin, ExternalLink, Twitter, Instagram } from 'lucide-react';

function Footer() {
    const [emailCopied, setEmailCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('ankithkumarsara@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <footer className="relative py-10 px-4">
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 mb-10">
                    <div className="flex-shrink-0 lg:w-80">
                        <div className="inline-flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
                                <div className="w-full h-full rounded-full bg-slate-800/90 flex items-center justify-center">
                                    <span className="text-lg font-bold text-slate-100">AKS</span>
                                </div>
                            </div>
                            <div className="text-left">
                                <p className="text-slate-200 font-semibold text-lg">Ankith Kumar Sara</p>
                                <p className="text-slate-400 text-sm">Full Stack Developer</p>
                            </div>
                        </div>

                        <p className="text-slate-400 leading-relaxed text-sm mb-6 w-60">
                            I'm Ankith - a full-stack developer, problem solver & tech enthusiast. Thanks for checking out my work!
                        </p>

                        <div className="flex space-x-3">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300" aria-label="GitHub">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-between md:justify-start md:gap-x-36 lg:justify-end lg:gap-x-20">
                        <div>
                            <span className="text-slate-200 mb-4 inline-block text-base font-medium">General</span>
                            <ul className="flex flex-col gap-y-3 text-sm">
                                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 relative after:bg-blue-400 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Home</a></li>
                                <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 relative after:bg-blue-400 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">About</a></li>
                                <li><a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 relative after:bg-blue-400 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Projects</a></li>
                                <li><a href="#experience" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 relative after:bg-blue-400 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Experience</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <span className="text-slate-200 mb-4 inline-block text-base font-medium">Services</span>
                            <ul className="flex flex-col gap-y-3 text-sm">
                                <li><span className="text-slate-400">Web Development</span></li>
                                <li><span className="text-slate-400">Frontend Development</span></li>
                                <li><span className="text-slate-400">Backend Development</span></li>
                                <li><span className="text-slate-400">UI/UX Consulting</span></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <span className="text-slate-200 mb-4 inline-block text-base font-medium">Contact</span>
                            <ul className="flex flex-col gap-y-3 text-sm">
                                <li>
                                    <button onClick={copyEmail} className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors duration-300 group">
                                        <Mail className="w-4 h-4" />
                                        <span className="text-xs">
                                            {emailCopied ? "Copied!" : "Email"}
                                        </span>
                                        <Copy className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                                    </button>
                                </li>
                                <li>
                                    <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 relative after:bg-blue-400 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
                                        Get in Touch
                                    </a>
                                </li>
                                <li>
                                    <span className="text-slate-400 text-xs">Hyderabad, IN</span>
                                </li>
                                <li>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-slate-400 text-xs">Available for work</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-slate-700/50 pt-6">
                    <div className="text-center lg:text-left">
                        <p className="text-slate-400 text-sm">
                            © 2025 Ankith Kumar Sara
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;