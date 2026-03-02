import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Star, Calendar, ArrowRight } from 'lucide-react';

function ProjectsPage() {
    const [activeProject, setActiveProject] = useState(0);
    const containerRef = useRef(null);
    const projectRefs = useRef([]);

    const projects = [
        {
            id: 1,
            title: "AI Tour Planner",
            description: "Personalized travel itineraries powered by Gemini AI, Maps, and real-time flight data.",
            longDescription:
                "An immersive travel planning application that leverages Gemini AI and third-party APIs to generate intelligent itineraries. It allows users to plan trips, explore destinations with real-time maps, view relevant imagery, and book flights — all while storing and managing trip data securely using Firebase.",
            tech: ["React Native", "Firebase", "Firestore", "Firebase Auth", "Google Maps API", "Pixabay API", "Gemini AI"],
            status: "Live",
            githubStars: "18 stars",
            lastUpdated: "2024",
            image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
            demoUrl: "https://github.com/Ankith-sara/ai-tour-planner",
            githubUrl: "https://github.com/Ankith-sara/ai-tour-planner",
            gradient: "linear-gradient(188.62deg, rgb(7, 14, 87) 49.9%, rgb(41, 50, 203) 81.7%, rgb(121, 128, 255) 93.88%, rgb(249, 215, 147) 113.5%)",
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
            id: 2,
            title: "AI Video Generator",
            description: "Text prompt → rendered 1080p video via a serverless async pipeline. No manual editing.",
            longDescription:
                "AI Video Gen is a modern platform designed to streamline video creation using AI and serverless tools. Leveraging Next.js and Remotion, it allows users to generate stunning visuals from dynamic prompts. Convex and Firebase power the real-time backend and data handling, while Inngest manages background rendering workflows.",
            tech: ["Next.js", "Convex", "Remotion", "Firebase", "Inngest", "Tailwind CSS"],
            status: "Beta",
            githubStars: "12 stars",
            lastUpdated: "2024",
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
            demoUrl: "https://github.com/Ankith-sara/ai-video-gen",
            githubUrl: "https://github.com/Ankith-sara/ai-video-gen",
            gradient: "linear-gradient(188.62deg, rgb(19, 78, 74) 49.9%, rgb(20, 184, 166) 81.7%, rgb(94, 234, 212) 93.88%, rgb(249, 215, 147) 113.5%)",
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
            id: 3,
            title: "Book Store",
            description: "A platform for discovering and exploring regional literature with a clean, minimal UI.",
            longDescription: "An online platform where users can seamlessly explore, manage, and engage with regional books. Designed with a clean and intuitive interface, it offers an immersive reading experience while promoting local literature to a wider audience.",
            tech: ["React.js", "Tailwind CSS", "Express.js", "MongoDB", "Firebase"],
            status: "Featured",
            githubStars: "24 stars",
            lastUpdated: "2024",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
            demoUrl: "https://github.com/Ankith-sara/book-Store",
            githubUrl: "https://github.com/Ankith-sara/book-Store",
            gradient: "linear-gradient(188.62deg, rgb(107, 13, 51) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 93.88%, rgb(249, 215, 147) 113.5%)",
            textColor: "text-pink-300",
            shadowColor: "#DB2777",
            features: [
                "Discover and explore a wide range of regional books with category-based filtering.",
                "Minimalist, clean UI for an enjoyable and distraction-free browsing experience.",
                "Optimized performance using modern frameworks for fast and seamless navigation."
            ]
        },
        {
            id: 4,
            title: "Demand Forecasting System",
            description: "Hybrid SARIMA + LSTM model for Indian retail demand prediction — ~82% accuracy.",
            longDescription: "A hybrid ML forecasting system combining SARIMA (statistical) with LSTM (deep learning) to predict product demand for small and medium retailers in Indian markets. SARIMA captures seasonality and trend; its output feeds into LSTM which learns non-linear demand patterns. Achieved ~82% forecasting accuracy on real retail datasets.",
            tech: ["Python", "SARIMA", "LSTM", "Keras", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
            status: "Research",
            githubStars: "8 stars",
            lastUpdated: "2024",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
            demoUrl: "https://github.com/Ankith-sara/demand-forecasting",
            githubUrl: "https://github.com/Ankith-sara/demand-forecasting",
            gradient: "linear-gradient(188.62deg, rgb(30, 27, 75) 49.9%, rgb(99, 102, 241) 81.7%, rgb(147, 197, 253) 93.88%, rgb(249, 215, 147) 113.5%)",
            textColor: "text-indigo-300",
            shadowColor: "#6366F1",
            features: [
                "Hybrid SARIMA + LSTM pipeline: statistical baseline + deep learning refinement.",
                "~82% forecasting accuracy on real Indian retail sales data.",
                "Covers preprocessing, training, evaluation (MAE, RMSE, MAPE), and visualization.",
                "Modular folder structure: separate modules for each model and evaluation.",
                "Practical output: inventory optimization and procurement planning support."
            ]
        },
        {
            id: 5,
            title: "AI Website Builder",
            description: "Natural language → fully responsive website layout. Structured generation, not templates.",
            longDescription: "An AI-first web builder that allows users to generate responsive web layouts using plain text prompts. Built with Next.js App Router and a real-time Convex backend, it maps AI-generated structured output to prebuilt React components and Tailwind styles instantly.",
            tech: ["Next.js", "TailwindCSS", "Firebase", "Convex", "Vercel"],
            status: "Beta",
            githubStars: "9 stars",
            lastUpdated: "2025",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
            demoUrl: "https://github.com/Ankith-sara/AI-website-Builder",
            githubUrl: "https://github.com/Ankith-sara/AI-website-Builder",
            gradient: "linear-gradient(188.62deg, rgb(61, 26, 122) 49.9%, rgb(126, 34, 206) 81.7%, rgb(192, 132, 252) 93.88%, rgb(249, 215, 147) 113.5%)",
            textColor: "text-purple-300",
            shadowColor: "#7E22CE",
            features: [
                "Instant page generation from natural language prompts.",
                "Prebuilt UI components powered by AI structured output.",
                "Real-time backend with Convex queries and mutations.",
                "Optimized for fast deployments via Vercel.",
                "Clean Next.js App Router architecture with separation of concerns."
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
                <style>{`
                    @keyframes float {
                        0% { transform: translateY(100vh); opacity: 0; }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { transform: translateY(-100vh); opacity: 0; }
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
                        <p className="text-slate-300 text-lg font-light leading-relaxed max-w-3xl mx-auto">A collection of web apps, AI systems, and digital experiences — each built to solve a real problem.</p>
                    </div>

                    <section className="relative">
                        <div className="relative mx-auto lg:flex lg:items-center w-full">
                            <div ref={containerRef} className="lg:w-[65%] lg:max-h-[91vh] lg:overflow-y-auto lg:scroll-smooth lg:pr-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                                {projects.map((project, index) => (
                                    <div key={project.id} ref={(el) => (projectRefs.current[index] = el)} className="mb-16 lg:mb-24">
                                        <div className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-800/20 p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2">
                                            <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl transition-all duration-300">
                                                <div className="absolute inset-0 -z-10" style={{ background: project.gradient }} />
                                                <div className="hidden lg:flex w-full flex-row items-center justify-between px-12 py-8" style={{ color: project.textColor }}>
                                                    <h3 className="max-w-[90%] text-2xl font-medium">{project.description}</h3>
                                                    <ArrowRight className="size-6" />
                                                </div>
                                                <img alt={project.title} src={project.image} className="w-full max-w-[85%] translate-y-5 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 object-cover" style={{ boxShadow: `0 0 30px ${project.shadowColor}`, height: '340px' }} loading="lazy" />
                                            </div>
                                        </div>

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
                                                <div className="flex items-center gap-2 text-white/70"><Star className="w-4 h-4 text-yellow-400" /><span className="text-sm">{project.githubStars}</span></div>
                                                <div className="flex items-center gap-2 text-white/70"><Calendar className="w-4 h-4" /><span className="text-sm">{project.lastUpdated}</span></div>
                                            </div>

                                            <div className="flex gap-4 mt-6">
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 w-full justify-center px-6 py-3 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-white/90 hover:scale-105"><ExternalLink className="w-4 h-4" />View Project</a>
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 w-full justify-center px-6 py-3 border border-white/20 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10"><Github className="w-4 h-4" />Source</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

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
                                                <div className="flex items-center gap-2 text-white/70"><Star className="w-4 h-4 text-yellow-400" /><span className="text-sm">{currentProject.githubStars}</span></div>
                                                <div className="flex items-center gap-2 text-white/70"><Calendar className="w-4 h-4" /><span className="text-sm">{currentProject.lastUpdated}</span></div>
                                            </div>
                                            <div className="flex gap-4 mt-8">
                                                <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-white/90 hover:scale-105"><ExternalLink className="w-4 h-4" />View Project</a>
                                                <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10"><Github className="w-4 h-4" />Source</a>
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