import React, { useState } from 'react';
import { Mail, Copy, Github, Linkedin, ExternalLink } from 'lucide-react';

function Footer() {
    const [emailCopied, setEmailCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('ankithkumarsara@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <footer className="relative px-4 pb-8 pt-16">
            <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.1) 30%, rgba(26,108,240,0.15) 50%, rgba(0,212,255,0.1) 70%, transparent)' }} />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 mb-10">
                    {/* Brand */}
                    <div className="flex-shrink-0 lg:w-72">
                        <div className="inline-flex items-center gap-4 mb-5">
                            <div className="w-11 h-11 rounded-full p-0.5" style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.6), rgba(26,108,240,0.8))' }}>
                                <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#000' }}>
                                    <span className="font-display font-bold text-sm text-white">AKS</span>
                                </div>
                            </div>
                            <div>
                                <p className="font-display font-semibold text-white">Ankith Kumar Sara</p>
                                <p className="font-mono text-xs" style={{ color: 'rgba(0,212,255,0.6)' }}>Full Stack Developer</p>
                            </div>
                        </div>

                        <p className="font-mono text-sm text-slate-500 leading-relaxed mb-5 max-w-xs" style={{ fontSize: '0.78rem' }}>
                            Full-stack developer & AI builder based in Hyderabad. Building things that work and look good doing it.
                        </p>

                        <div className="flex gap-3">
                            <a href="https://www.linkedin.com/in/ankith-kumar-sara-958ab026a" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 transition-all duration-300 hover:text-white"
                                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; e.currentTarget.style.color = 'rgba(0,212,255,0.8)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0,212,255,0.15)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = ''; e.currentTarget.style.boxShadow = 'none'; }}
                            ><Linkedin className="w-4 h-4" /></a>
                            <a href="https://github.com/Ankith-sara" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 transition-all duration-300 hover:text-white"
                                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; e.currentTarget.style.color = 'rgba(0,212,255,0.8)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0,212,255,0.15)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = ''; e.currentTarget.style.boxShadow = 'none'; }}
                            ><Github className="w-4 h-4" /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex-1 flex justify-between md:justify-start md:gap-24 lg:justify-end lg:gap-20">
                        <div>
                            <p className="font-display font-semibold text-sm text-white mb-5">Navigate</p>
                            <ul className="flex flex-col gap-3 font-mono text-xs">
                                {['/', '/about', '/projects'].map((path, i) => (
                                    <li key={i}>
                                        <a href={path} className="text-slate-500 transition-colors duration-200 hover:text-white">
                                            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="font-display font-semibold text-sm text-white mb-5">Services</p>
                            <ul className="flex flex-col gap-3 font-mono text-xs text-slate-500">
                                <li>Web Development</li>
                                <li>Frontend Engineering</li>
                                <li>Backend APIs</li>
                                <li>AI Integration</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-display font-semibold text-sm text-white mb-5">Contact</p>
                            <ul className="flex flex-col gap-3 font-mono text-xs">
                                <li>
                                    <button onClick={copyEmail} className="flex items-center gap-2 text-slate-500 transition-colors duration-200 hover:text-white group">
                                        <Mail className="w-3.5 h-3.5" />
                                        {emailCopied ? <span style={{ color: 'rgba(0,212,255,0.8)' }}>Copied!</span> : 'Email'}
                                        <Copy className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                                    </button>
                                </li>
                                <li><span className="text-slate-600">Hyderabad, IN</span></li>
                                <li>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        <span className="text-green-500">Available</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="font-mono text-xs text-slate-600">© 2025 Ankith Kumar Sara. All rights reserved.</p>
                        <p className="font-mono text-xs text-slate-700">Built with React + Vite + Tailwind</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;