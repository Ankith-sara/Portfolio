import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Star, GitBranch, Calendar, ArrowRight } from 'lucide-react';

function ProjectsPage() {
    const [activeProject, setActiveProject] = useState(0);
    const containerRef = useRef(null);
    const projectRefs = useRef([]);

    const projects = [
        {
            id: 1,
            title: "Book Store",
            description: "A online space for users to manage, explore, and gain exposure with the regional books with clean design.",
            longDescription: "An online platform where users can seamlessly explore, manage, and engage with regional books. Designed with a clean and intuitive interface, it offers an immersive reading experience while promoting local literature to a wider audience.",
            tech: ["React.js", "Tailwind CSS", "Express.js", "MongoDB", "Google Firebase"],
            status: "Featured",
            stars: 245,
            forks: 32,
            year: "2024",
            image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.9ff457d3.webp&w=1200&q=75",
            demoUrl: "#",
            githubUrl: "https://github.com/Ankith-sara/book-Store",
            gradient: "linear-gradient(188.62deg, rgb(107, 13, 51) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 93.88%, rgb(249, 215, 147) 113.5%)",
            textColor: "text-pink-300",
            shadowColor: "#DB2777",
            features: [
                "Discover and explore a wide range of regional books with category-based filtering.",
                "Minimalist, clean UI for an enjoyable and distraction-free Browse experience.",
                "Optimized performance using modern frameworks for fast and seamless navigation."
            ]
        },
        {
            id: 2,
            title: "AI Tour Planner",
            description: "Personalized travel planner app using AI and real-time APIs.",
            longDescription:
                "An immersive travel planning application that leverages Gemini AI and third-party APIs to generate intelligent itineraries. It allows users to plan trips, explore destinations with real-time maps, view relevant imagery, and book flights — all while storing and managing trip data securely using Firebase.",
            tech: ["React Native", "Firebase", "Firestore", "Firebase Auth", "Google Maps Places API", "Pixabay API", "Gemini AI"],
            status: "Live",
            stars: 189,
            forks: 28,
            year: "2024",
            image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.9208c264.jpg&w=1200&q=75",
            demoUrl: "#",
            githubUrl: "https://github.com/Ankith-sara/ai-tour-planner",
            gradient:
                "linear-gradient(188.62deg, rgb(7, 14, 87) 49.9%, rgb(41, 50, 203) 81.7%, rgb(121, 128, 255) 93.88%, rgb(249, 215, 147) 113.5%)",
            textColor: "text-blue-300",
            shadowColor: "#2932CB",
            features: [
                "AI-generated personalized travel itineraries powered by Gemini AI.",
                "Flight booking integration with real-time airline and price details.",
                "Dynamic map-based destination suggestions using Google Maps API.",
                "Activity-specific imagery retrieved via the Pixabay API.",
                "User authentication and secure trip data storage with Firebase."
            ]
        },
        {
            id: 3,
            title: "AI Video Gen",
            description: "A next-gen platform to generate AI-driven videos with automation, rendering, and realtime sync.",
            longDescription:
                "AI Video Gen is a modern platform designed to streamline video creation using AI and serverless tools. Leveraging Next.js and Remotion, it allows users to generate stunning visuals from dynamic prompts. Convex and Firebase power the real-time backend and data handling, while Inngest manages background rendering workflows. Built for creators and developers alike, it brings automation, scalability, and intelligent design together in one seamless interface.",
            tech: [
                "Next.js",
                "Convex",
                "Remotion",
                "Firebase",
                "Inngest",
                "Tailwind CSS"
            ],
            status: "Beta",
            stars: 156,
            forks: 19,
            year: "2024",
            image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.0372515c.png&w=1200&q=75",
            demoUrl: "#",
            githubUrl: "#",
            gradient:
                "linear-gradient(188.62deg, rgb(19, 78, 74) 49.9%, rgb(20, 184, 166) 81.7%, rgb(94, 234, 212) 93.88%, rgb(249, 215, 147) 113.5%)",
            textColor: "text-teal-300",
            shadowColor: "#14B8A6",
            features: [
                "AI-based video generation using dynamic input prompts.",
                "Serverless backend powered by Convex with real-time sync.",
                "Automated background workflows using Inngest.",
                "Frame-accurate rendering with Remotion and FFmpeg.",
                "Firebase for authentication and secure cloud storage."
            ]
        },
        {
            id: 4,
            title: "Personal Portfolio",
            description: "Design Unleashed: A Captivating Portfolio Showcasing Innovative Web Development and UI/UX",
            longDescription: "A showcase of creative web development and user experience design, featuring cutting-edge animations and modern aesthetics.",
            tech: ["Next.js", "Three.js", "Framer Motion", "GSAP"],
            status: "Live",
            stars: 312,
            forks: 45,
            year: "2024",
            image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.5816691c.webp&w=1200&q=75",
            demoUrl: "#",
            githubUrl: "https://github.com/Ankith-sara/ai-video-gen",
            gradient: "linear-gradient(188.62deg, rgb(61, 26, 122) 49.9%, rgb(126, 34, 206) 81.7%, rgb(192, 132, 252) 93.88%, rgb(249, 215, 147) 113.5%)",
            textColor: "text-purple-300",
            shadowColor: "#7E22CE",
            features: [
                "Cutting-edge 3D animations and interactions.",
                "Responsive design optimized for all devices.",
                "Performance-focused with lighthouse scores of 95+."
            ]
        },
        {
            id: 5,
            title: "AI Website Builder",
            description: "A lightning-fast AI-powered website builder inspired by bolt.new, crafted for effortless UI generation.",
            longDescription: "An AI-first web builder that mimics the sleek functionality of bolt.new, allowing users to generate responsive web layouts using plain text prompts. Built with a focus on performance, minimalism, and developer experience.",
            tech: ["Next.js", "TailwindCSS", "Google Firebase", "Convex", "Vercel"],
            status: "Beta",
            stars: 312,
            forks: 40,
            year: "2025",
            image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.d39d4d1a.webp&w=1200&q=75",
            demoUrl: "#",
            githubUrl: "https://github.com/Ankith-sara/AI-website-Builder",
            gradient: "linear-gradient(188.62deg, rgb(30, 27, 75) 49.9%, rgb(99, 102, 241) 81.7%, rgb(147, 197, 253) 93.88%, rgb(249, 215, 147) 113.5%)",
            textColor: "text-indigo-300",
            shadowColor: "#6366F1",
            features: [
                "Instant page generation from natural language prompts.",
                "Prebuilt UI components powered by AI.",
                "Optimized for fast deployments via Vercel, Convex and static exports."
            ]
        }
    ];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const containerHeight = container.clientHeight;
            const containerTop = container.getBoundingClientRect().top;
            const containerCenter = containerTop + containerHeight / 2;

            let closestProjectIndex = 0;
            let smallestDistance = Infinity;

            projectRefs.current.forEach((ref, index) => {
                if (!ref) return;
                const rect = ref.getBoundingClientRect();
                const elementCenter = rect.top + rect.height / 2;
                const distance = Math.abs(elementCenter - containerCenter);

                if (distance < smallestDistance) {
                    smallestDistance = distance;
                    closestProjectIndex = index;
                }
            });

            if (activeProject !== closestProjectIndex) {
                setActiveProject(closestProjectIndex);
            }
        };

        // Only attach scroll listener on large screens
        let isLargeScreen = window.innerWidth >= 1024;
        if (isLargeScreen) {
            container.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();
        }

        return () => {
            if (isLargeScreen) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [activeProject]);

    const getStatusColor = (status) => {
        const colors = {
            "Featured": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
            "Live": "bg-green-500/20 text-green-300 border-green-500/30",
            "Beta": "bg-blue-500/20 text-blue-300 border-blue-500/30",
            "Research": "bg-purple-500/20 text-purple-300 border-purple-500/30",
            "Enterprise": "bg-red-500/20 text-red-300 border-red-500/30"
        };
        return colors[status] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
    };

    const currentProject = projects[activeProject];

    return (
        <div className="min-h-screen text-white relative overflow-hidden">
            <div className="absolute inset-0">
                {[...Array(60)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${8 + Math.random() * 8}s linear infinite`,
                            animationDelay: `${Math.random() * 8}s`
                        }}
                    />
                ))}
                <style jsx>{`
                        @keyframes float {
                            0% { transform: translateY(100vh) translateX(0); opacity: 0; }
                            10% { opacity: 1; }
                            90% { opacity: 1; }
                            100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
                        }
                        @keyframes gradient-animation {
                            0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
                            50% { transform: translateY(-10px) rotate(1deg); opacity: 1; }
                            100% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
                        }
                        @keyframes curve-glow {
                            0% { 
                                border-color: rgba(147, 197, 253, 0.6);
                                box-shadow: inset 0 4px 20px rgba(59, 130, 246, 0.3), 0 -8px 40px rgba(59, 130, 246, 0.2);
                            }
                            50% { 
                                border-color: rgba(147, 197, 253, 0.9);
                                box-shadow: inset 0 6px 30px rgba(59, 130, 246, 0.5), 0 -12px 60px rgba(59, 130, 246, 0.4);
                            }
                            100% { 
                                border-color: rgba(147, 197, 253, 0.6);
                                box-shadow: inset 0 4px 20px rgba(59, 130, 246, 0.3), 0 -8px 40px rgba(59, 130, 246, 0.2);
                            }
                        }
                        @keyframes curve-float {
                            0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
                            50% { transform: translateY(-15px) scale(1.2); opacity: 1; }
                        }
                        @keyframes glow-shift {
                            0% { 
                                transform: translateX(-8.56001px);
                                filter: blur(57px);
                            }
                            50% { 
                                transform: translateX(8px);
                                filter: blur(50px);
                            }
                            100% { 
                                transform: translateX(-8.56001px);
                                filter: blur(57px);
                            }
                        }
                        @keyframes semicircle-glow {
                            0% { 
                                box-shadow: rgba(59, 130, 246, 0.6) 0px 2px 20.5864px inset, rgba(59, 130, 246, 0.3) 0px -10px 50.5864px 1px;
                            }
                            50% { 
                                box-shadow: rgba(59, 130, 246, 0.9) 0px 4px 30px inset, rgba(59, 130, 246, 0.5) 0px -15px 70px 2px;
                            }
                            100% { 
                                box-shadow: rgba(59, 130, 246, 0.6) 0px 2px 20.5864px inset, rgba(59, 130, 246, 0.3) 0px -10px 50.5864px 1px;
                            }
                        }
                    `}</style>
            </div>
            <div className="relative z-20 px-4 pt-28 pb-12 md:pt-36 md:pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-20">
                        <p className="text-xs md:text-sm font-normal tracking-widest text-slate-400 uppercase mb-3">Portfolio Showcase</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Featured <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-clip-text text-transparent animate-pulse">Projects</span>
                        </h1>
                        <p className="text-slate-300 text-lg font-light leading-relaxed max-w-3xl mx-auto">A collection of innovative web applications and digital experiences that showcase modern development practices and creative problem-solving.</p>
                    </div>

                    <section className="relative">
                        <div className="relative mx-auto lg:flex lg:items-center w-full">
                            <div ref={containerRef} className="lg:w-[65%] lg:max-h-[91vh] lg:overflow-y-auto lg:scroll-smooth lg:pr-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                <style jsx>{` div::-webkit-scrollbar { display: none; } `}</style>

                                {projects.map((project, index) => (
                                    <div key={project.id} ref={(el) => (projectRefs.current[index] = el)} className="mb-16 lg:mb-24">
                                        {/* --- Image Card (Visible on all screens) --- */}
                                        <div className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-800/20 p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2">
                                            <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl transition-all duration-300">
                                                <div className="absolute inset-0 -z-10" style={{ background: project.gradient }} />
                                                <div className="hidden lg:flex w-full flex-row items-center justify-between px-12 py-8" style={{ color: project.textColor }}>
                                                    <h3 className="max-w-[90%] text-2xl font-medium">{project.description}</h3>
                                                    <ArrowRight className="size-6" />
                                                </div>
                                                <img alt={project.title} src={project.image} className="w-full max-w-[85%] translate-y-5 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3" style={{ boxShadow: `0 0 30px ${project.shadowColor}` }} loading="lazy" />
                                            </div>
                                        </div>

                                        {/* --- NEW: Details Section for Mobile/Tablet (Hidden on Desktop) --- */}
                                        <div className="p-4 md:p-6 lg:hidden">
                                            <div className="flex flex-wrap items-center gap-3 mt-4 mb-3">
                                                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                                                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>{project.status}</span>
                                            </div>
                                            <p className="text-white/70 my-4 text-base font-light leading-relaxed">{project.longDescription}</p>

                                            <h4 className="font-semibold text-white mt-6 mb-3">Features</h4>
                                            <ul className="text-white/85 flex flex-col gap-y-2 text-base">
                                                {project.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start text-sm"><div className="mt-1 mr-3 size-5 shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: `${project.shadowColor}20` }}><div className="size-2 rounded-full" style={{ backgroundColor: project.shadowColor }} /></div>{feature}</li>
                                                ))}
                                            </ul>

                                            <h4 className="font-semibold text-white mt-8 mb-3">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2 text-sm">{project.tech.map((tech) => (<span key={tech} className="inline-flex items-center justify-center rounded-lg border px-3 py-1.5 text-xs bg-slate-800/50 border-slate-700/50 text-white backdrop-blur-sm">{tech}</span>))}</div>

                                            <div className="flex items-center gap-6 mt-8 border-t border-white/10 pt-6">
                                                <div className="flex items-center gap-2 text-white/70"><Star className="w-4 h-4 text-yellow-400" /><span className="text-sm">{project.stars}</span></div>
                                                <div className="flex items-center gap-2 text-white/70"><GitBranch className="w-4 h-4 text-blue-400" /><span className="text-sm">{project.forks}</span></div>
                                                <div className="flex items-center gap-2 text-white/70"><Calendar className="w-4 h-4" /><span className="text-sm">{project.year}</span></div>
                                            </div>

                                            <div className="flex gap-4 mt-6">
                                                <a href={project.demoUrl} className="group flex items-center gap-2 w-full justify-center px-6 py-3 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-white/90 hover:scale-105"><ExternalLink className="w-4 h-4" />Live Demo</a>
                                                <a href={project.githubUrl} className="group flex items-center gap-2 w-full justify-center px-6 py-3 border border-white/20 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10"><Github className="w-4 h-4" />Source</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* --- Right side - Sticky Details for Desktop Only --- */}
                            <div className="hidden py-4 lg:sticky lg:top-24 lg:block lg:w-[35%] h-full">
                                {currentProject && (
                                    <div className="flex">
                                        <div className="my-4 mr-4 h-auto w-1 rounded-full" style={{ backgroundColor: currentProject.shadowColor, transition: 'background-color 0.3s ease' }} />
                                        <div className="flex flex-col items-start">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-white text-2xl font-bold">{currentProject.title}</h3>
                                                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(currentProject.status)}`}>{currentProject.status}</span>
                                            </div>
                                            <p className="text-white/70 my-2 text-base font-light leading-relaxed">{currentProject.longDescription}</p>
                                            <ul className="text-white/85 mt-4 flex flex-col gap-y-2 text-base">
                                                {currentProject.features.map((feature, i) => (<li key={i} className="flex items-start text-sm"><div className="mt-1 mr-2 size-5 shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: `${currentProject.shadowColor}20` }}><div className="size-2 rounded-full" style={{ backgroundColor: currentProject.shadowColor }} /></div>{feature}</li>))}
                                            </ul>
                                            <div className="mt-6 flex flex-wrap gap-3 text-sm">{currentProject.tech.map((tech) => (<span key={tech} className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm bg-slate-800/50 border-slate-700/50 text-white backdrop-blur-sm">{tech}</span>))}</div>
                                            <div className="flex items-center gap-6 mt-6">
                                                <div className="flex items-center gap-2 text-white/70"><Star className="w-4 h-4 text-yellow-400" /><span className="text-sm">{currentProject.stars}</span></div>
                                                <div className="flex items-center gap-2 text-white/70"><GitBranch className="w-4 h-4 text-blue-400" /><span className="text-sm">{currentProject.forks}</span></div>
                                                <div className="flex items-center gap-2 text-white/70"><Calendar className="w-4 h-4" /><span className="text-sm">{currentProject.year}</span></div>
                                            </div>
                                            <div className="flex gap-4 mt-8">
                                                <a href={currentProject.demoUrl} className="group flex items-center gap-2 px-4 py-1 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-white/90 hover:scale-105"><ExternalLink className="w-4 h-4" />Live Demo</a>
                                                <a href={currentProject.githubUrl} className="group flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10"><Github className="w-4 h-4" />Source</a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;