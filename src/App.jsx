import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, MapPin, Compass, Cpu, Rocket, Monitor,
  Server, Database, Brain, ExternalLink, Zap
} from 'lucide-react';
import SoundProvider, { useSound } from './context/SoundContext';
import Navbar from './components/Navbar';
import ContactDrawer from './components/ContactDrawer';
import BackgroundCanvas from './components/BackgroundCanvas';
import Footer from './components/Footer';
import AKS from './assets/images/AKS.jpg';

// LIQUID GLASS CURSOR CIRCLE
const LiquidCursor = () => {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const trailX = useMotionValue(-200);
  const trailY = useMotionValue(-200);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const trailConfig = { damping: 40, stiffness: 120, mass: 0.8 };

  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const trailSpringX = useSpring(trailX, trailConfig);
  const trailSpringY = useSpring(trailY, trailConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-hover], [role="button"]');
      setIsHovering(!!target);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer liquid glass ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-screen"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 64 : 44,
            height: isHovering ? 64 : 44,
            opacity: isHovering ? 0.8 : 0.55,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            borderRadius: '50%',
            background: 'transparent',
            border: '2px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(4px)',
            boxShadow: isHovering
              ? '0 0 24px rgba(99,170,255,0.3), inset 0 1px 0 rgba(255,255,255,0.25)'
              : '0 0 14px rgba(99,170,255,0.15), inset 0 1px 0 rgba(255,255,255,0.15)',
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 12 : 8,
            height: isHovering ? 12 : 8,
            opacity: isHovering ? 1 : 0.9,
          }}
          transition={{ duration: 0.2 }}
          style={{
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.95)',
            boxShadow: '0 0 8px rgba(180,220,255,0.8)',
          }}
        />
      </motion.div>
    </>
  );
};

// LIQUID GLASS CARD WRAPPER
const GlassCard = ({ children, className = '', style = {}, hover = true, ...props }) => (
  <div
    className={`relative overflow-hidden ${className}`}
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.05) 100%)',
      border: '1px solid rgba(255,255,255,0.1)',
      backdropFilter: 'blur(24px) saturate(180%) brightness(1.05)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%) brightness(1.05)',
      boxShadow: '0 0 0 0.5px rgba(255,255,255,0.06) inset, 0 1px 0 0 rgba(255,255,255,0.08) inset, 0 8px 32px rgba(0,0,0,0.45), 0 0 60px rgba(59,130,246,0.03)',
      ...style
    }}
    {...props}
  >
    {/* Top gloss line */}
    <div
      className="absolute top-0 left-0 right-0 pointer-events-none"
      style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18) 30%, rgba(255,255,255,0.12) 70%, transparent)',
      }}
    />
    {/* Subtle inner light */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.04) 0%, transparent 60%)',
      }}
    />
    {children}
  </div>
);


// HERO SECTION
const Hero = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { playHover, playClick } = useSound();
  const scrollToSection = (id) => {
    playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
      <div className="relative z-10 text-center max-w-4xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[10px] tracking-wider text-neutral-300 uppercase select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Work & Collaboration
          </GlassCard>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white leading-[1.08] tracking-tight"
        >
          Digital products <br />
          <span className="text-neutral-500">that you need indeed.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-neutral-100 font-mono text-xs md:text-sm max-w-xl mx-auto leading-relaxed"
        >
          Hi, I'm Ankith. A Full Stack Developer & AI Builder. I engineer responsive, performance-driven web products, transforming ideas into polished production assets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <button
            onMouseEnter={playHover}
            onClick={() => { playClick(); setIsDrawerOpen(true); }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-display text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,255,0.9) 100%)',
              color: '#0a0a0a',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.2) inset, 0 4px 20px rgba(255,255,255,0.1)',
            }}
          >
            Get in Touch
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onMouseEnter={playHover}
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-display text-sm font-bold text-neutral-300 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 0 0 0.5px rgba(255,255,255,0.05) inset',
            }}
          >
            See Projects
          </button>
        </motion.div>
      </div>
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

// ABOUT SECTION
const MeetAnkith = () => {
  const { playHover, playClick } = useSound();
  const experiences = [
    {
      company: "Aharyas",
      role: "Full Stack Engineer",
      period: "Nov 2024 – Present",
      location: "Hyderabad, IN (Remote)",
      color: "#3b82f6",
      desc: "Developed the artisan e-commerce platform using React, TailwindCSS, and MongoDB to connect regional artisans with buyers."
    },
    {
      company: "INVEZORO",
      role: "Lead Web Developer",
      period: "May 2025 – Jul 2025",
      location: "Hyderabad, IN (Remote)",
      color: "#06b6d4",
      desc: "Led the design & frontend architecture for INVEZORO's portal, utilizing TypeScript, Firebase, and deploying secure pipelines on AWS."
    }
  ];

  const highlightTags = ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "MongoDB", "Firebase", "AWS"];

  return (
    <section id="about" className="relative py-28 px-4 bg-transparent overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-12">
            <div>
              <GlassCard className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider text-neutral-400 mb-6 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Meet Ankith
              </GlassCard>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
                Engineering products <br />
                <span className="text-neutral-400">that turn vision into reality.</span>
                <span className="inline-flex items-center gap-1.5 ml-3 -rotate-3 align-middle"><svg className="w-4 h-4 text-white/15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20 C 6 14, 10 9, 18 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 5 L 12 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 5 L 18 11" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="text-sm font-medium text-white/15 italic">The story so far...</span></span>
              </h2>
              <p className="font-mono text-sm text-neutral-400 leading-relaxed max-w-xl">
                I am a Computer Science student at Woxsen University, specializing in Full Stack Web Engineering & AI Solutions.
                I combine robust frontend architectures with serverless APIs to build clean, functional, and user-centric digital products.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[ Core Competencies ]</h4>
              <div className="flex flex-wrap gap-2.5">
                {highlightTags.map(tag => (
                  <GlassCard
                    key={tag}
                    onMouseEnter={playHover}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-neutral-400 hover:text-white hover:border-blue-500/40 hover:scale-105 transition-all duration-300 cursor-default"
                    data-hover
                  >
                    {tag}
                  </GlassCard>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[ Work Experience ]</h4>
              <div className="relative border-l border-neutral-800 pl-6 ml-2 space-y-10">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative group" onMouseEnter={playHover}>
                    <div
                      className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border border-black flex items-center justify-center transition-all duration-300 group-hover:scale-125"
                      style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
                    />
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h5 className="text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                          {exp.role} <span className="text-neutral-500 font-normal">@</span> {exp.company}
                        </h5>
                        <GlassCard className="px-2.5 py-1 rounded text-[10px] font-mono text-neutral-400">
                          {exp.period}
                        </GlassCard>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                        <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                      </div>
                      <p className="font-mono text-xs text-neutral-400 leading-relaxed pt-1 max-w-xl">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <GlassCard className="relative group max-w-md mx-auto rounded-2xl p-3 shadow-2xl glass-hover-glow hover:scale-[1.01]" data-hover>
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10 rounded-br-xl" />
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden grayscale contrast-[1.1] brightness-90 hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-700 bg-neutral-950">
                <img
                  src={AKS}
                  alt="Ankith Kumar Sara"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="space-y-1">
                    <p className="font-display font-extrabold text-lg text-white">Ankith Kumar Sara</p>
                    <p className="font-mono text-xs text-blue-400">Software Engineer & AI Builder</p>
                  </div>
                  <GlassCard className="px-2.5 py-1 rounded-full text-[9px] font-mono text-neutral-400 tracking-wider">
                    HYDERABAD, IN
                  </GlassCard>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// PROCESS SECTION
const Process = () => {
  const { playHover } = useSound();
  const steps = [
    { num: "01", title: "Scoping & Architectural Design", desc: "Defining functional requirements, creating database schemas, picking the optimal tech stack, and mapping system interfaces.", icon: <Compass className="w-5 h-5 text-blue-400" /> },
    { num: "02", title: "Agile Development & Testing", desc: "Building performant frontend layouts, creating secure API backends, integrating third-party tools, and verifying with tests.", icon: <Cpu className="w-5 h-5 text-purple-400" /> },
    { num: "03", title: "Ship, Deploy & Scale", desc: "Deploying to production cloud hosts (AWS/Vercel/Convex), setting up database scaling, caching, and tuning loading speeds.", icon: <Rocket className="w-5 h-5 text-emerald-400" /> }
  ];

  return (
    <section id="process" className="relative py-28 px-4 bg-transparent overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12
            }
          }
        }}
      >
        <motion.div 
          className="text-center mb-20"
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <GlassCard className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider text-neutral-400 mb-6 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            Execution Workflow
          </GlassCard>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight">
            My Engineering Process
            <span className="inline-flex items-center gap-1.5 ml-3 -rotate-3 align-middle"><svg className="w-4 h-4 text-white/15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20 C 6 14, 10 9, 18 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 5 L 12 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 5 L 18 11" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="text-sm font-medium text-white/15 italic">How the magic happens</span></span>
          </h2>
          <p className="font-mono text-xs text-neutral-500 mt-4 max-w-md mx-auto">A structured roadmap designed to take software from concept to stable production deployment.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -6 }} 
              transition={{ duration: 0.3 }}
            >
              <GlassCard 
                onMouseEnter={playHover}
                className="rounded-2xl p-8 h-full flex flex-col justify-between group cursor-default glass-hover-glow shimmer-card"
                data-hover
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <GlassCard className="p-3.5 rounded-xl">
                      {step.icon}
                    </GlassCard>
                    <span className="text-3xl md:text-4xl font-display font-black text-neutral-800 group-hover:text-neutral-700 transition-colors duration-300">{step.num}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{step.title}</h3>
                    <p className="font-mono text-xs text-neutral-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                <div className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-neutral-800 to-transparent group-hover:from-blue-500 group-hover:to-blue-500/0 transition-all duration-500" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// SERVICES SECTION
const Services = () => {
  const { playHover } = useSound();
  const serviceCards = [
    { title: "Frontend Engineering", desc: "Creating pixel-perfect, highly responsive user interfaces using React, Next.js, and TailwindCSS. Enriched with interactive components and smooth micro-animations.", icon: <Monitor className="w-5 h-5 text-blue-400" /> },
    { title: "Backend Development", desc: "Designing secure, high-throughput REST APIs and web servers using Node.js, Express, and Python. Seamlessly handling asynchronous background jobs and data pipelines.", icon: <Server className="w-5 h-5 text-purple-400" /> },
    { title: "Database & Cloud", desc: "Architecting reliable schemas with PostgreSQL and MongoDB. Containerizing apps with Docker, deploying robust structures, and configuring host pipelines on AWS.", icon: <Database className="w-5 h-5 text-emerald-400" /> },
    { title: "AI Integration", desc: "Adding generative AI features directly into software. Leveraging LLM models (Gemini AI, OpenAI) and vector indexing for personalized search or custom agents.", icon: <Brain className="w-5 h-5 text-rose-400" /> }
  ];

  const toolsList = ["REST APIs", "Docker", "Git", "GitHub Actions", "Vercel", "Convex", "Supabase", "Firebase", "Inngest", "Tailwind CSS", "TypeScript"];

  return (
    <section id="services" className="relative py-28 bg-transparent overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.div 
          className="text-center mb-20"
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <GlassCard className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider text-neutral-400 mb-6 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Core Capabilities
          </GlassCard>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight">
            How I Can Help You
            <span className="inline-flex items-center gap-1.5 ml-3 -rotate-3 align-middle"><svg className="w-4 h-4 text-white/15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20 C 6 14, 10 9, 18 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 5 L 12 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 5 L 18 11" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="text-sm font-medium text-white/15 italic">What I bring to the table</span></span>
          </h2>
          <p className="font-mono text-xs text-neutral-500 mt-4 max-w-md mx-auto">From frontend interfaces to background rendering engines — delivering end-to-end full stack development.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {serviceCards.map((svc, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -5 }} 
              transition={{ duration: 0.3 }}
            >
              <GlassCard 
                onMouseEnter={playHover}
                className="rounded-2xl p-8 md:p-10 h-full group cursor-default glass-hover-glow shimmer-card"
                data-hover
              >
                <div className="space-y-5">
                  <GlassCard className="p-3.5 w-fit rounded-xl">
                    {svc.icon}
                  </GlassCard>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-extrabold text-white group-hover:text-blue-400 transition-colors duration-300">{svc.title}</h3>
                    <p className="font-mono text-xs text-neutral-400 leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
                <div className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-neutral-800 to-transparent group-hover:from-blue-500 group-hover:to-blue-500/0 transition-all duration-500" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-8 max-w-4xl mx-auto px-4 text-center">
        <h4 className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase mb-8">[ Technologies & Tools I Use ]</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {toolsList.map((tool) => (
            <GlassCard 
              key={tool} 
              onMouseEnter={playHover}
              className="px-4 py-2 rounded-xl text-xs font-mono text-neutral-400 hover:text-white hover:border-blue-500/40 hover:scale-105 transition-all duration-300 cursor-default"
              data-hover
            >
              {tool}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// PROJECTS SECTION 
const Projects = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { playHover, playClick } = useSound();

  const tagStyles = {
    live: { bg: 'rgba(74,222,128,0.1)', color: '#4ade80', border: 'rgba(74,222,128,0.2)' },
    beta: { bg: 'rgba(96,165,250,0.1)', color: '#60a5fa', border: 'rgba(96,165,250,0.2)' },
    research: { bg: 'rgba(192,132,252,0.1)', color: '#c084fc', border: 'rgba(192,132,252,0.2)' },
  };

  const projects = [
    {
      id: 1,
      num: "01",
      title: "Authentiq",
      tag: "Live",
      tagType: "live",
      description: "Real-time AI content & plagiarism detection. Combines semantic cosine similarity (SentenceTransformers + FAISS) with a multi-LLM perplexity ensemble (GPT-2 + DeBERTa-v3) into a single originality score. 85%+ detection accuracy, 40% latency reduction.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
      githubUrl: "https://github.com/Ankith-sara",
      stack: ["React + TypeScript", "FastAPI", "SentenceTransformers", "FAISS", "DeBERTa-v3", "pgvector"],
      heightClass: "h-[240px] sm:h-[300px] md:h-[380px]"
    },
    {
      id: 2,
      num: "02",
      title: "Aharyas Platform",
      tag: "Live · Production",
      tagType: "live",
      description: "Full-stack luxury e-commerce platform connecting 300+ rural Indian artisans with global consumers. Razorpay payments, admin panel with drag-and-drop image management, luxury editorial design system. 100+ MAU, sub-5-min CI/CD.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80",
      githubUrl: "https://github.com/Ankith-sara",
      stack: ["React", "Node.js", "MongoDB", "Razorpay", "ImageKit", "GitHub Actions"],
      heightClass: "h-[280px] sm:h-[360px] md:h-[460px]"
    },
    {
      id: 3,
      num: "03",
      title: "AI Short Video Generator",
      tag: "Beta",
      tagType: "beta",
      description: "Type a prompt → get a rendered 1080p short video automatically. Serverless async pipeline: Gemini AI generates scene structure → Inngest manages background renders → Remotion renders frame-by-frame. Videos rendered in under 60 seconds.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
      githubUrl: "https://github.com/Ankith-sara/ai-video-gen",
      stack: ["Next.js", "Remotion", "Convex", "Inngest", "Gemini AI", "Firebase"],
      heightClass: "h-[280px] sm:h-[360px] md:h-[440px]"
    },
    {
      id: 4,
      num: "04",
      title: "Demand Forecasting System",
      tag: "Research",
      tagType: "research",
      description: "Hybrid ML forecasting combining SARIMA (statistical seasonality) with LSTM (non-linear demand patterns) for Indian SME retailers. Trained on 20k+ real retail records. ~82% accuracy, 12% MAE reduction vs baseline.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      githubUrl: "https://github.com/Ankith-sara",
      stack: ["Python", "SARIMA", "LSTM / Keras", "TensorFlow", "Pandas", "Matplotlib"],
      heightClass: "h-[240px] sm:h-[300px] md:h-[380px]"
    },
    {
      id: 5,
      num: "05",
      title: "AI Tour Planner",
      tag: "Live",
      tagType: "live",
      description: "Cross-platform React Native app powered by Gemini AI. Select a destination, set dates, get a fully personalized day-by-day itinerary — flights, activities, maps, and all. 60% reduction in itinerary generation time.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
      githubUrl: "https://github.com/Ankith-sara/ai-tour-planner",
      stack: ["React Native", "Gemini AI", "Firebase", "Google Maps API", "Pixabay API"],
      heightClass: "h-[260px] sm:h-[340px] md:h-[420px]"
    },
    {
      id: 6,
      num: "06",
      title: "AI Website Builder",
      tag: "Beta",
      tagType: "beta",
      description: "Type a prompt → get a fully responsive, production-ready website layout generated automatically. AI generation layer → structured layout definition → mapped React components → rendered site. Convex real-time backend.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
      githubUrl: "https://github.com/Ankith-sara/AI-website-Builder",
      stack: ["Next.js App Router", "Tailwind CSS", "Convex", "Firebase", "Vercel"],
      heightClass: "h-[260px] sm:h-[340px] md:h-[400px]"
    }
  ];

  const col1 = [projects[0], projects[2], projects[4]];
  const col2 = [projects[1], projects[3], projects[5]];

  const ProjectCard = ({ project }) => {
    const tag = tagStyles[project.tagType];
    return (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={playHover}
        onClick={playClick}
        className="group block w-full"
        data-hover
      >
        <GlassCard className={`relative overflow-hidden rounded-2xl ${project.heightClass} glass-hover-glow shimmer-card`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <GlassCard className="px-2 py-1 rounded-md font-mono text-[9px] text-neutral-400 tracking-wider">
              {project.num}
            </GlassCard>
          </div>
          <div className="absolute top-4 right-4">
            <div
              className="px-2.5 py-1 rounded-full font-mono text-[9px] tracking-wider"
              style={{ background: tag.bg, color: tag.color, border: `1px solid ${tag.border}`, backdropFilter: 'blur(8px)' }}
            >
              {project.tag}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ background: 'rgba(0,0,0,0.15)', backdropFilter: 'blur(2px)' }}>
            <GlassCard className="flex items-center gap-2 px-6 py-3 rounded-full font-display text-xs font-bold text-white transform scale-95 group-hover:scale-100 transition-transform duration-300">
              <span>View on GitHub</span>
              <ExternalLink size={12} />
            </GlassCard>
          </div>
        </GlassCard>

        <div className="mt-4 space-y-2 px-1">
          <h3 className="text-white font-display font-extrabold text-lg group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
          <p className="text-neutral-400 font-mono text-[11px] leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.slice(0, 3).map(s => (
              <GlassCard key={s} className="px-2 py-0.5 rounded text-[9px] font-mono text-neutral-500">
                {s}
              </GlassCard>
            ))}
            {project.stack.length > 3 && (
              <span className="text-[9px] font-mono text-neutral-600 self-center">+{project.stack.length - 3} more</span>
            )}
          </div>
        </div>
      </a>
    );
  };

  return (
    <section id="projects" className="relative z-10 px-4 py-28 text-white bg-transparent select-none overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        <motion.div 
          className="relative z-20 mb-20 text-center"
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <GlassCard className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider text-neutral-400 mb-6 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Selected Works
          </GlassCard>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight">
            Featured Projects
            <span className="inline-flex items-center gap-1.5 ml-3 -rotate-3 align-middle"><svg className="w-4 h-4 text-white/15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20 C 6 14, 10 9, 18 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 5 L 12 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 5 L 18 11" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="text-sm font-medium text-white/15 italic">Shipped & production-ready</span></span>
          </h2>
          <p className="font-mono text-xs text-neutral-500 mt-4">6 projects · shipped & production-ready</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-12">
            {col1.map((p, idx) => (
              <motion.div 
                key={p.id}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
          <div className="space-y-12 md:mt-24">
            {col2.map((p, idx) => (
              <motion.div 
                key={p.id}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-24">
          <button
            onMouseEnter={playHover}
            onClick={() => { playClick(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="text-xs font-mono text-neutral-500 hover:text-white uppercase tracking-widest transition-colors duration-300 cursor-pointer"
            data-hover
          >
            Back to Top
          </button>
          <button
            onMouseEnter={playHover}
            onClick={() => { playClick(); setIsDrawerOpen(true); }}
            className="group rounded-xl px-8 py-3.5 flex items-center gap-2 font-display text-xs font-bold text-black transition-colors duration-300 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,255,0.9) 100%)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.2) inset, 0 4px 20px rgba(255,255,255,0.08)',
            }}
            data-hover
          >
            Book a Free Call
            <Zap size={13} className="text-blue-600" />
          </button>
        </div>
      </motion.div>
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </section>
  );
};

// CTA SECTION — with Atlantic-style "Let's Talk" blur-in reveal
// + radiating lines that zoom OUT from center (start tiny/scaled-in, grow outward) on scroll into view
const CTA = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { playHover, playClick } = useSound();
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);

  // Smooth scroll-driven spring zoom for CTA lines coming out from the center
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Map progress [0, 0.45] so the lines completely open up when CTA is 40%-50% visible in the viewport
  const ctaScale = useTransform(scrollYProgress, [0, 0.45], [0.12, 1.0]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.45], [0.0, 0.65]);

  const smoothScale = useSpring(ctaScale, { damping: 28, stiffness: 100 });
  const smoothOpacity = useSpring(ctaOpacity, { damping: 28, stiffness: 100 });

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setPosition({ x, y });
  };

  return (
    <div ref={sectionRef} className="relative overflow-hidden py-32 px-4 bg-transparent">
      {/* Sticky radial burst — lines zoom OUT from center on scroll into view */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.svg
            viewBox="0 0 1440 900"
            className="w-[120%] h-[120%] max-w-none"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            style={{
              scale: smoothScale,
              opacity: smoothOpacity,
              transformOrigin: '50% 50%'
            }}
          >
            <g>
              <g style={{ transformBox: 'view-box', transformOrigin: '50% 50%', transform: 'rotate(360deg)' }}>
                <path
                  d="M-162 774.783L725.114 421.023M725.114 421.023L2118.81 -14.0555M725.114 421.023L1004.79 -169M725.114 421.023L-162 215.625M725.114 421.023L281.557 1421.21M725.114 421.023L981.167 1495.55M725.114 421.023L1484.71 1379.15M725.114 421.023L2334.08 1222.6"
                  stroke="rgba(255, 255, 255, 0.22)"
                  strokeWidth="12"
                />
              </g>
              <circle cx="719.5" cy="450" r="450" fill="url(#paint0_radial)" />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(719.5 376.286) rotate(90) scale(388.214)"
              >
                <stop offset="0.58" stopColor="#040404" />
                <stop offset="1" stopColor="#040404" stopOpacity="0" />
              </radialGradient>
            </defs>
          </motion.svg>
        </div>
      </div>

      {/* "Let's Talk" style blur-in reveal: opacity 0 + blur(20px) -> opacity 1 + blur(0) */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, filter: 'blur(20px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      >
        <p className="font-mono text-xs tracking-widest mb-6 text-neutral-500 uppercase">[ Ready to Collaborate ]</p>
        <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
          From Concept <br />
          <span className="text-neutral-400">to Creation.</span>
          <span className="inline-flex items-center gap-1.5 ml-3 -rotate-3 align-middle"><svg className="w-4 h-4 text-white/15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20 C 6 14, 10 9, 18 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 5 L 12 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 5 L 18 11" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="text-sm font-medium text-white/15 italic">Let's build together</span></span>
        </h2>
        <h3 className="text-xl md:text-2xl font-mono text-neutral-400 mb-12">Let's make it happen.</h3>

        <div className="mb-16">
          <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setPosition({ x: 0, y: 0 })}
            onMouseEnter={playHover}
            onClick={() => { playClick(); setIsDrawerOpen(true); }}
            className="group rounded-xl px-10 py-4 flex items-center gap-3 font-display text-sm font-bold text-black transition-colors duration-300 cursor-pointer"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,255,0.9) 100%)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.15) inset',
              transition: 'transform 0.15s ease-out, box-shadow 0.3s',
            }}
            data-hover
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <GlassCard className="rounded-2xl p-6 max-w-md w-full glass-hover-glow hover:scale-[1.01]" data-hover>
          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping opacity-60" />
            </div>
            <p className="font-mono text-xs text-neutral-400 leading-relaxed text-left">
              Available for <span className="text-emerald-400">full-time roles</span> & freelance projects. Open to building <span className="text-blue-400">AI pipelines</span> and <span className="text-purple-400">custom APIs</span>.
            </p>
          </div>
        </GlassCard>
      </motion.div>
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

// MAIN APP
function App() {
  return (
    <SoundProvider>
      <div className="min-h-screen relative" style={{ background: '#040404', cursor: 'none' }}>
        <BackgroundCanvas />
        <LiquidCursor />
        <Navbar />
        <div className="relative z-10">
          <Hero />
          <MeetAnkith />
          <Process />
          <Services />
          <Projects />
          <CTA />
          <Footer />
        </div>
      </div>
    </SoundProvider>
  );
}
 
export default App;