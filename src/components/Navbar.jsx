import React, { useState, useEffect } from "react";
import { Home, User, Code, Mail, Linkedin, Github } from "lucide-react";
import { useSound } from "../context/SoundContext";
import ContactDrawer from "./ContactDrawer";

const navItems = [
    { id: "home", label: "Home", path: "home", icon: <Home size={20} /> },
    { id: "about", label: "About", path: "about", icon: <User size={20} /> },
    { id: "projects", label: "Projects", path: "projects", icon: <Code size={20} /> },
    { id: "contact", label: "Contact", isDrawer: true, icon: <Mail size={20} /> },
];

const socialLinks = [
    { id: "linkedin", label: "LinkedIn", path: "https://www.linkedin.com/in/ankith-kumar-sara-958ab026a", icon: <Linkedin size={20} /> },
    { id: "github", label: "Github", path: "https://github.com/Ankith-sara", icon: <Github size={20} /> },
];

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { playClick, playHover } = useSound();
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
    const [activeSection, setActiveSection] = useState("home");

    // Track scroll direction for mobile navbar auto-hide
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
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

    // Track scroll position for active section highlight
    useEffect(() => {
        const sections = ["home", "about", "projects"];
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const renderNavItem = (item) => {
        const isActive = item.path === activeSection;
        const commonProps = {
            onMouseEnter: () => playHover(),
            className: `relative z-10 flex items-center justify-center w-11 h-11 my-2 mx-1 group transition-all duration-300 hover:scale-105 ${
                isActive ? "text-blue-400" : "text-neutral-300 hover:text-white"
            }`,
            "data-hover": true
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
            <button
                key={item.id}
                {...commonProps}
                onClick={() => {
                    playClick();
                    scrollToSection(item.path);
                }}
            >
                {content}
            </button>
        );
    };

    return (
        <>
            {/* Desktop navbar */}
            <nav className={`fixed w-full top-0 pt-6 z-50 transition-all duration-500 ${scrollY > 50 ? "pt-3" : "pt-6"}`}>
                <div className="hidden sm:flex justify-center">
                    <div
                        className="relative flex gap-1 w-fit backdrop-blur-2xl bg-neutral-950/40 border border-neutral-900 rounded-2xl mx-auto shadow-2xl transition-all duration-500 p-1"
                    >
                        {navItems.map(renderNavItem)}
                        
                        {/* Enhanced separator */}
                        <div className="w-px h-8 bg-gradient-to-b from-transparent via-neutral-800 to-transparent mx-2 self-center"></div>
                        
                        {socialLinks.map((social) => (
                            <div className="relative group my-2 mx-1" key={social.id}>
                                <a
                                    href={social.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={playClick}
                                    onMouseEnter={playHover}
                                    className="flex items-center justify-center w-11 h-11 rounded-xl text-neutral-400 hover:text-white transition-all duration-300 z-10 relative hover:scale-105 hover:bg-neutral-900/50"
                                    data-hover
                                >
                                    {social.icon}
                                </a>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-black/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 pointer-events-none shadow-xl border border-neutral-850 whitespace-nowrap">
                                    {social.label}
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-l border-t border-neutral-850"></div>
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
                <div className="flex items-center gap-2 backdrop-blur-2xl bg-neutral-950/60 border border-neutral-900 rounded-2xl p-2 shadow-2xl transition-all duration-300">
                    
                    {navItems.map((item) => {
                        const isActive = activeSection === item.path;
                        
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
                                    data-hover
                                >
                                    <div className={`transition-all duration-300 ${isActive ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : ''}`}>
                                        {item.icon}
                                    </div>
                                </button>
                            );
                        }
                        
                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    playClick();
                                    scrollToSection(item.path);
                                }}
                                className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-105 z-10 ${
                                    isActive 
                                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30" 
                                        : "text-neutral-300 hover:text-white hover:bg-neutral-800/50"
                                    }`}
                                    data-hover
                            >
                                <div className={`transition-all duration-300 ${isActive ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : ''}`}>
                                    {item.icon}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
};

export default Navbar;