import React, { useState, useEffect, useRef } from "react";
import { Home, User, Code, Mail, Linkedin, Github } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSound } from "../context/SoundContext";
import ContactDrawer from "./ContactDrawer";

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { playClick, playHover, playTransition } = useSound();
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
    const navRef = useRef(null);
    const itemRefs = useRef({});
    const [highlightStyle, setHighlightStyle] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (window.innerWidth < 640) {
                if (currentScrollY < lastScrollY || currentScrollY < 10) setShowNavbar(true);
                else if (currentScrollY > lastScrollY && currentScrollY > 100) setShowNavbar(false);
            }
            setScrollY(currentScrollY);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { id: "/", label: "Home", path: "/", icon: <Home size={18} /> },
        { id: "/about", label: "About", path: "/about", icon: <User size={18} /> },
        { id: "/projects", label: "Projects", path: "/projects", icon: <Code size={18} /> },
        { id: "contact", label: "Contact", isDrawer: true, icon: <Mail size={18} /> },
    ];

    const socialLinks = [
        { id: "linkedin", label: "LinkedIn", path: "https://www.linkedin.com/in/ankith-kumar-sara-958ab026a", icon: <Linkedin size={16} /> },
        { id: "github", label: "Github", path: "https://github.com/Ankith-sara", icon: <Github size={16} /> },
    ];

    useEffect(() => {
        const setHighlight = () => {
            const activeItem = navItems.find(item => item.path === currentPath) || navItems[0];
            const activeElement = itemRefs.current[activeItem.id];
            if (activeElement) {
                const { offsetLeft, offsetTop, clientWidth, clientHeight } = activeElement;
                setHighlightStyle({ width: `${clientWidth}px`, height: `${clientHeight}px`, transform: `translate(${offsetLeft}px, ${offsetTop}px)` });
            }
        };
        const timeoutId = setTimeout(setHighlight, 100);
        window.addEventListener("resize", setHighlight);
        return () => { clearTimeout(timeoutId); window.removeEventListener("resize", setHighlight); };
    }, [currentPath]);

    const handleMouseEnter = (id) => {
        const element = itemRefs.current[id];
        if (element) {
            playHover();
            const { offsetLeft, offsetTop, clientWidth, clientHeight } = element;
            setHighlightStyle({ width: `${clientWidth}px`, height: `${clientHeight}px`, transform: `translate(${offsetLeft}px, ${offsetTop}px)` });
        }
    };

    const handleMouseLeave = () => {
        const activeItem = navItems.find(item => item.path === currentPath) || navItems[0];
        const activeElement = itemRefs.current[activeItem.id];
        if (activeElement) {
            const { offsetLeft, offsetTop, clientWidth, clientHeight } = activeElement;
            setHighlightStyle({ width: `${clientWidth}px`, height: `${clientHeight}px`, transform: `translate(${offsetLeft}px, ${offsetTop}px)` });
        }
    };

    const renderNavItem = (item) => {
        const isActive = item.path === currentPath;
        const commonProps = {
            ref: (el) => (itemRefs.current[item.id] = el),
            onMouseEnter: () => handleMouseEnter(item.id),
            className: `relative z-10 flex items-center justify-center w-10 h-10 my-1.5 mx-0.5 group transition-all duration-300 hover:scale-110 rounded-xl ${isActive ? "text-cyan-300" : "text-slate-400 hover:text-white"}`,
        };
        const content = (
            <>
                <div className={`transition-all duration-300 ${isActive ? 'drop-shadow-[0_0_8px_rgba(0,212,255,0.7)]' : ''}`}>{item.icon}</div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-2.5 py-1 bg-black/95 text-white text-xs font-mono rounded-md opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none shadow-xl border border-cyan-900/50 whitespace-nowrap">
                    {item.label}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/95 rotate-45 border-l border-t border-cyan-900/50"></div>
                </div>
            </>
        );
        if (item.isDrawer) return <button key={item.id} {...commonProps} onClick={() => { playClick(); setIsDrawerOpen(true); }}>{content}</button>;
        return <Link key={item.id} {...commonProps} to={item.path} onClick={() => { playClick(); playTransition(); }}>{content}</Link>;
    };

    return (
        <>
            {/* Desktop — top center pill */}
            <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrollY > 50 ? "pt-3" : "pt-5"}`}>
                <div className="hidden sm:flex justify-center">
                    <div
                        ref={navRef}
                        onMouseLeave={handleMouseLeave}
                        className="relative flex gap-0.5 w-fit backdrop-blur-2xl border border-cyan-900/30 rounded-2xl mx-auto p-1 shadow-2xl"
                        style={{ background: 'rgba(0,0,0,0.85)', boxShadow: '0 0 0 1px rgba(0,212,255,0.06), 0 4px 40px rgba(0,0,0,0.8), 0 0 20px rgba(26,108,240,0.08)' }}
                    >
                        {/* Sliding highlight */}
                        <div className="absolute rounded-xl transition-all duration-300 ease-out nav-active" style={{ ...highlightStyle, top: 0, left: 0 }} />
                        {navItems.map(renderNavItem)}
                        <div className="w-px h-6 bg-gradient-to-b from-transparent via-cyan-900/50 to-transparent mx-1.5 self-center"></div>
                        {socialLinks.map((social) => (
                            <div className="relative group my-1.5 mx-0.5" key={social.id}>
                                <a href={social.path} target="_blank" rel="noopener noreferrer" onClick={playClick} onMouseEnter={playHover}
                                    className="flex items-center justify-center w-10 h-10 rounded-xl text-slate-400 hover:text-white transition-all duration-300 z-10 relative hover:scale-110"
                                    style={{ '&:hover': { background: 'rgba(0,212,255,0.06)' } }}
                                >
                                    {social.icon}
                                </a>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-2.5 py-1 bg-black/95 text-white text-xs font-mono rounded-md opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none shadow-xl border border-cyan-900/50 whitespace-nowrap">
                                    {social.label}
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/95 rotate-45 border-l border-t border-cyan-900/50"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile — bottom pill */}
            <div className={`sm:hidden fixed bottom-6 inset-x-0 mx-auto w-fit z-50 transition-all duration-500 ${showNavbar ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
                <div className="flex items-center gap-1 p-2 rounded-2xl shadow-2xl border border-cyan-900/30"
                    style={{ background: 'rgba(0,0,0,0.92)', boxShadow: '0 0 0 1px rgba(0,212,255,0.08), 0 8px 40px rgba(0,0,0,0.9), 0 0 20px rgba(26,108,240,0.1)' }}
                >
                    {navItems.map((item) => {
                        const isActive = currentPath === item.path;
                        const cls = `relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 ${isActive ? "text-cyan-300" : "text-slate-400 hover:text-white"}`;
                        const style = isActive ? { background: 'rgba(0,212,255,0.1)', boxShadow: '0 0 12px rgba(0,212,255,0.3)' } : {};
                        if (item.isDrawer) return <button key={item.id} className={cls} style={style} onClick={() => { playClick(); setIsDrawerOpen(true); }}><div className={isActive ? 'drop-shadow-[0_0_6px_rgba(0,212,255,0.8)]' : ''}>{item.icon}</div></button>;
                        return <Link key={item.id} to={item.path} className={cls} style={style} onClick={() => { playClick(); playTransition(); }}><div className={isActive ? 'drop-shadow-[0_0_6px_rgba(0,212,255,0.8)]' : ''}>{item.icon}</div></Link>;
                    })}
                </div>
            </div>

            <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
};

export default Navbar;