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
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // For mobile: show/hide based on scroll direction
            if (window.innerWidth < 640) { // sm breakpoint
                if (currentScrollY < lastScrollY || currentScrollY < 10) {
                    setShowNavbar(true);
                } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setShowNavbar(false);
                }
            }
            
            setScrollY(currentScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { id: "/", label: "Home", path: "/", icon: <Home size={20} /> },
        { id: "/about", label: "About", path: "/about", icon: <User size={20} /> },
        { id: "/projects", label: "Projects", path: "/projects", icon: <Code size={20} /> },
        { id: "contact", label: "Contact", isDrawer: true, icon: <Mail size={20} /> },
    ];

    const socialLinks = [
        { id: "linkedin", label: "LinkedIn", path: "https://www.linkedin.com/in/ankith-kumar-sara-958ab026a", icon: <Linkedin size={20} /> },
        { id: "github", label: "Github", path: "https://github.com/Ankith-sara", icon: <Github size={20} /> },
    ];

    useEffect(() => {
        const setHighlight = () => {
            const activeItem = navItems.find(item => item.path === currentPath) || navItems[0];
            const activeElement = itemRefs.current[activeItem.id];
            if (activeElement) {
                const { offsetLeft, offsetTop, clientWidth, clientHeight } = activeElement;
                setHighlightStyle({
                    width: `${clientWidth}px`,
                    height: `${clientHeight}px`,
                    transform: `translate(${offsetLeft}px, ${offsetTop}px)`,
                });
            }
        };

        const timeoutId = setTimeout(() => {
            setHighlight();
            if (isInitialLoad) setIsInitialLoad(false);
        }, 100);

        window.addEventListener("resize", setHighlight);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", setHighlight);
        };
    }, [currentPath]);

    const handleMouseEnter = (id) => {
        const element = itemRefs.current[id];
        if (element) {
            playHover();
            const { offsetLeft, offsetTop, clientWidth, clientHeight } = element;
            setHighlightStyle({
                width: `${clientWidth}px`,
                height: `${clientHeight}px`,
                transform: `translate(${offsetLeft}px, ${offsetTop}px)`,
            });
        }
    };

    const handleMouseLeave = () => {
        const activeItem = navItems.find(item => item.path === currentPath) || navItems[0];
        const activeElement = itemRefs.current[activeItem.id];
        if (activeElement) {
            const { offsetLeft, offsetTop, clientWidth, clientHeight } = activeElement;
            setHighlightStyle({
                width: `${clientWidth}px`,
                height: `${clientHeight}px`,
                transform: `translate(${offsetLeft}px, ${offsetTop}px)`,
            });
        }
    };

    const renderNavItem = (item) => {
        const isActive = item.path === currentPath;
        const commonProps = {
            ref: (el) => (itemRefs.current[item.id] = el),
            onMouseEnter: () => handleMouseEnter(item.id),
            className: `relative z-10 flex items-center justify-center w-11 h-11 my-2 mx-1 group transition-all duration-300 hover:scale-105 ${
                isActive ? "text-blue-400" : "text-neutral-300 hover:text-white"
            }`,
        };

        const content = (
            <>
                <div className={`transition-all duration-300 ${isActive ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' : ''}`}>
                    {item.icon}
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-black/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 pointer-events-none shadow-xl border border-neutral-700/50 whitespace-nowrap">
                    {item.label}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-l border-t border-neutral-700/50"></div>
                </div>
            </>
        );

        if (item.isDrawer) {
            return (
                <button
                    key={item.id}
                    {...commonProps}
                    onClick={() => {
                        playClick();
                        setIsDrawerOpen(true);
                    }}
                >
                    {content}
                </button>
            );
        }

        return (
            <Link
                key={item.id}
                {...commonProps}
                to={item.path}
                onClick={() => {
                    playClick();
                    playTransition();
                }}
            >
                {content}
            </Link>
        );
    };

    return (
        <>
            {/* Desktop navbar */}
            <nav className={`fixed w-full top-0 pt-6 z-50 transition-all duration-500 ${scrollY > 50 ? "pt-3" : "pt-6"}`}>
                <div className="hidden sm:flex justify-center">
                    <div
                        ref={navRef}
                        onMouseLeave={handleMouseLeave}
                        className="relative flex gap-1 w-fit backdrop-blur-2xl bg-black/20 border border-neutral-600/30 rounded-2xl mx-auto shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 p-1"
                    >
                        {navItems.map(renderNavItem)}
                        
                        {/* Enhanced separator */}
                        <div className="w-px h-8 bg-gradient-to-b from-transparent via-neutral-500/50 to-transparent mx-2 self-center"></div>
                        
                        {socialLinks.map((social) => (
                            <div className="relative group my-2 mx-1" key={social.id}>
                                <a
                                    href={social.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={playClick}
                                    onMouseEnter={playHover}
                                    className="flex items-center justify-center w-11 h-11 rounded-xl text-neutral-300 hover:text-white transition-all duration-300 z-10 relative hover:scale-105 hover:bg-neutral-800/50"
                                >
                                    {social.icon}
                                </a>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-black/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 pointer-events-none shadow-xl border border-neutral-700/50 whitespace-nowrap">
                                    {social.label}
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-l border-t border-neutral-700/50"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile navbar with scroll behavior */}
            <div className={`sm:hidden fixed bottom-6 inset-x-0 mx-auto w-fit z-50 transition-all duration-500 ${
                showNavbar ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
            }`}>
                <div className="flex items-center gap-2 backdrop-blur-2xl bg-black/30 border border-neutral-600/30 rounded-2xl p-2 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                    {/* Mobile gradient overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10"></div>
                    
                    {navItems.map((item) => {
                        const isActive = currentPath === item.path;
                        
                        if (item.isDrawer) {
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        playClick();
                                        setIsDrawerOpen(true);
                                    }}
                                    className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-105 z-10 ${
                                        isActive 
                                            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30" 
                                            : "text-neutral-300 hover:text-white hover:bg-neutral-800/50"
                                    }`}
                                >
                                    <div className={`transition-all duration-300 ${isActive ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : ''}`}>
                                        {item.icon}
                                    </div>
                                </button>
                            );
                        }
                        
                        return (
                            <Link
                                key={item.id}
                                to={item.path}
                                onClick={() => {
                                    playClick();
                                    playTransition();
                                }}
                                className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-105 z-10 ${
                                    isActive 
                                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30" 
                                        : "text-neutral-300 hover:text-white hover:bg-neutral-800/50"
                                }`}
                            >
                                <div className={`transition-all duration-300 ${isActive ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : ''}`}>
                                    {item.icon}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
};

export default Navbar;