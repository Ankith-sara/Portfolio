import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, GitBranch, Calendar, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "AI Tour Planner",
      description: "Personalized travel itineraries powered by Gemini AI, Maps, and real-time flight data.",
      longDescription: "An immersive travel planning application that leverages Gemini AI and third-party APIs to generate intelligent itineraries. Plan trips, explore destinations with real-time maps, view relevant imagery, and book flights — all while storing and managing trip data securely using Firebase.",
      tech: ["React Native", "Firebase", "Firestore", "Google Maps API", "Pixabay API", "Gemini AI"],
      status: "Live",
      githubStars: "18 stars",
      lastUpdated: "2024",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
      githubUrl: "https://github.com/Ankith-sara/ai-tour-planner",
      gradient: "linear-gradient(160deg, rgb(7,14,87) 0%, rgb(41,50,203) 60%, rgb(121,128,255) 85%, rgb(200,220,255) 100%)",
      textColor: "#a8c8ff",
      shadowColor: "#2932CB",
      features: ["AI-generated personalized travel itineraries.", "Flight booking with real-time airline data.", "Google Maps API destination suggestions.", "Activity imagery via Pixabay.", "Firebase auth & trip data storage."]
    },
    {
      id: 2,
      title: "AI Video Generator",
      description: "Text prompt → rendered 1080p video via a serverless async pipeline.",
      longDescription: "AI Video Gen streamlines video creation using AI and serverless tools. Leveraging Next.js and Remotion, users generate stunning visuals from prompts. Convex and Firebase power real-time backend while Inngest manages background rendering workflows.",
      tech: ["Next.js", "Convex", "Remotion", "Firebase", "Inngest", "Tailwind CSS"],
      status: "Beta",
      githubStars: "12 stars",
      lastUpdated: "2024",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
      githubUrl: "https://github.com/Ankith-sara/ai-video-gen",
      gradient: "linear-gradient(160deg, rgb(19,78,74) 0%, rgb(20,184,166) 60%, rgb(94,234,212) 85%, rgb(200,250,245) 100%)",
      textColor: "#a0f0e8",
      shadowColor: "#14B8A6",
      features: ["AI-based video generation from prompts.", "Serverless backend via Convex.", "Automated workflows using Inngest.", "Frame-accurate rendering with Remotion.", "Firebase auth & cloud storage."]
    },
    {
      id: 3,
      title: "Book Store",
      description: "A platform for discovering and exploring regional literature.",
      longDescription: "An online platform where users explore, manage, and engage with regional books. Clean and intuitive interface offering an immersive reading experience while promoting local literature to a wider audience.",
      tech: ["React.js", "Tailwind CSS", "Express.js", "MongoDB", "Firebase"],
      status: "Featured",
      githubStars: "24 stars",
      lastUpdated: "2024",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
      githubUrl: "https://github.com/Ankith-sara/book-Store",
      gradient: "linear-gradient(160deg, rgb(107,13,51) 0%, rgb(219,39,119) 60%, rgb(244,114,182) 85%, rgb(255,200,230) 100%)",
      textColor: "#ffb0d8",
      shadowColor: "#DB2777",
      features: ["Browse regional books with category filtering.", "Minimalist, clean UI for focused browsing.", "Optimized for fast, seamless navigation."]
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.innerWidth < 1024) return;

    const handleScroll = () => {
      const center = container.getBoundingClientRect().top + container.clientHeight / 2;
      let closest = 0, minDist = Infinity;
      projectRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const d = Math.abs(ref.getBoundingClientRect().top + ref.getBoundingClientRect().height / 2 - center);
        if (d < minDist) { minDist = d; closest = i; }
      });
      if (activeProject !== closest) setActiveProject(closest);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeProject]);

  const statusColors = {
    "Featured": "rgba(250,204,21,",
    "Live":     "rgba(74,222,128,",
    "Beta":     "rgba(96,165,250,",
  };

  const StatusBadge = ({ status }) => {
    const c = statusColors[status] || "rgba(148,163,184,";
    return (
      <span className="px-3 py-1 text-xs font-mono rounded-full"
        style={{ background: `${c}0.08)`, color: `${c}0.9)`, border: `1px solid ${c}0.2)` }}>
        {status}
      </span>
    );
  };

  const current = projects[activeProject];

  return (
    <section className="relative z-10 px-4 py-20 text-white">
      <div className='max-w-7xl mx-auto'>
        <div className="relative z-20 mb-16 text-center">
          <p className="font-mono text-xs tracking-widest mb-3" style={{ color: 'rgba(0,212,255,0.6)' }}>[ FEATURED WORK ]</p>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4 leading-tight">
            Featured{' '}<span className="grad-text">Projects</span>
          </h2>
        </div>

        <div className="relative mx-auto lg:flex lg:items-start w-full gap-8">
          {/* Scrollable project cards */}
          <div ref={containerRef}
            className="lg:w-[60%] lg:max-h-[91vh] lg:overflow-y-auto lg:scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

            {projects.map((project, index) => (
              <div key={project.id} ref={(el) => (projectRefs.current[index] = el)} className="mb-16 lg:mb-20">
                <div className="relative cursor-pointer overflow-hidden rounded-3xl p-1 shadow-2xl transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl transition-all duration-300 lg:h-[520px]"
                    style={{ minHeight: '260px' }}>
                    <div className="absolute inset-0 -z-10" style={{ background: project.gradient }} />
                    {/* Frosted glass overlay */}
                    <div className="absolute inset-0 -z-10" style={{ background: 'rgba(0,0,20,0.15)', backdropFilter: 'blur(0px)' }} />

                    <div className="hidden lg:flex w-full flex-row items-start justify-between px-10 py-7 gap-4">
                      <h3 className="text-xl font-display font-bold max-w-[85%] leading-snug" style={{ color: project.textColor }}>
                        {project.description}
                      </h3>
                      <ArrowRight className="size-5 flex-shrink-0 mt-1" style={{ color: project.textColor }} />
                    </div>

                    <img alt={project.title} src={project.image}
                      className="w-full max-w-[86%] translate-y-5 rounded-t-xl border border-white/15 transition-all duration-500 will-change-transform lg:group-hover:scale-[1.06] lg:group-hover:-rotate-2 object-cover"
                      style={{ boxShadow: `0 0 40px ${project.shadowColor}60, 0 20px 60px rgba(0,0,0,0.5)`, height: '320px' }}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Mobile details */}
                <div className="p-4 lg:hidden">
                  <div className="flex flex-wrap items-center gap-3 mt-4 mb-3">
                    <h3 className="text-white text-2xl font-display font-black">{project.title}</h3>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="text-slate-400 my-4 text-sm leading-relaxed font-mono">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map(t => (
                      <span key={t} className="space-tag px-3 py-1 rounded-lg">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="group flex items-center gap-2 flex-1 justify-center px-5 py-2.5 rounded-full font-display text-sm font-bold text-black transition-all duration-300 hover:scale-105"
                      style={{ background: 'rgba(255,255,255,0.92)' }}>
                      <ExternalLink className="w-4 h-4" />View Project
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="glass-btn-outline flex items-center gap-2 flex-1 justify-center px-5 py-2.5 rounded-full font-display text-sm font-bold text-white">
                      <Github className="w-4 h-4" />Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky detail panel (desktop) */}
          <div className="hidden lg:block lg:w-[40%] lg:sticky lg:top-24 h-fit">
            {current && (
              <div className="glass-card ice-shimmer rounded-3xl p-7 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-8 rounded-full" style={{ background: current.shadowColor, boxShadow: `0 0 12px ${current.shadowColor}` }} />
                  <h3 className="text-white text-2xl font-display font-black">{current.title}</h3>
                  <StatusBadge status={current.status} />
                </div>

                <p className="text-slate-400 text-sm leading-relaxed font-mono mb-5">{current.longDescription}</p>

                <h4 className="font-display font-bold text-white text-xs mb-3 uppercase tracking-wider" style={{ color: 'rgba(160,215,255,0.6)' }}>
                  Key Features
                </h4>
                <ul className="space-y-2 mb-6">
                  {current.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 font-mono text-slate-400" style={{ fontSize: '0.78rem' }}>
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: current.shadowColor }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {current.tech.map(t => (
                    <span key={t} className="space-tag px-3 py-1 rounded-lg">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-5 mb-6 font-mono text-xs text-slate-600">
                  <div className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-yellow-500" />{current.githubStars}</div>
                  <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{current.lastUpdated}</div>
                </div>

                <div className="flex gap-3">
                  <a href={current.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-2 flex-1 justify-center px-5 py-2.5 rounded-xl font-display text-sm font-bold text-black transition-all duration-300 hover:scale-105"
                    style={{ background: 'rgba(255,255,255,0.9)' }}>
                    <ExternalLink className="w-4 h-4" />View
                  </a>
                  <a href={current.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="glass-btn-outline flex items-center gap-2 flex-1 justify-center px-5 py-2.5 rounded-xl font-display text-sm font-bold text-white">
                    <Github className="w-4 h-4" />Code
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <Link to='/projects'
          className="group flex w-fit items-center justify-center gap-2 font-display font-bold text-slate-500 hover:text-white transition-colors mx-auto mt-10">
          See all projects
          <div className="w-7 h-7 overflow-hidden rounded-full glass-card flex items-center justify-center transition-all duration-300 group-hover:border-cyan-500/30">
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
