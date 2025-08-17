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

    const navRef = useRef(null);
    const itemRefs = useRef({});
    const [highlightStyle, setHighlightStyle] = useState({});
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            className: `relative z-10 flex items-center justify-center w-10 h-10 my-2 mx-1 group transition-colors duration-300 ${
                isActive ? "text-blue-600" : "text-neutral-400 hover:text-blue-400"
            }`,
        };

        const content = (
            <>
                {item.icon}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-neutral-100 text-neutral-900 text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 pointer-events-none shadow-lg">
                    {item.label}
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
            <nav className={`fixed w-full top-0 pt-6 z-50 transition-all duration-300 ${scrollY > 50 ? "pt-2" : "pt-4"}`}>
                <div className="hidden sm:flex justify-center">
                    <div
                        ref={navRef}
                        onMouseLeave={handleMouseLeave}
                        className="relative flex gap-2 w-fit backdrop-blur-xl border border-neutral-600/50 rounded-full mx-auto shadow-2xl"
                    >
                        <div
                            className="absolute bg-neutral-800/80 rounded-full"
                            style={{
                                ...highlightStyle,
                                transition: isInitialLoad ? "none" : "all 350ms cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                        />
                        {navItems.map(renderNavItem)}
                        <div className="w-px h-8 bg-neutral-600/50 mx-1 self-center"></div>
                        {socialLinks.map((social) => (
                            <div className="relative group my-2 mx-1" key={social.id}>
                                <a
                                    href={social.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={playClick}
                                    onMouseEnter={playHover}
                                    className="flex items-center justify-center w-10 h-10 rounded-full text-neutral-300 hover:text-white transition-all duration-300 z-10 relative"
                                >
                                    {social.icon}
                                </a>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-neutral-100 text-neutral-900 text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 pointer-events-none shadow-lg">
                                    {social.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile navbar */}
                <div className="sm:hidden fixed bottom-4 inset-x-0 mx-auto w-fit">
                    <div className="flex items-center gap-2 backdrop-blur-xl border border-neutral-600/50 rounded-full p-1 shadow-2xl">
                        {navItems.map((item) => {
                            if (item.isDrawer) {
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            playClick();
                                            setIsDrawerOpen(true);
                                        }}
                                        className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 text-white"
                                    >
                                        {item.icon}
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
                                    className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors ${
                                        currentPath === item.path ? "bg-neutral-800 text-white" : "text-neutral-400"
                                    }`}
                                >
                                    {item.icon}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>

            <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
};

export default Navbar;