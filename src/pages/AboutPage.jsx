import React, { useState, useEffect } from 'react'
import { MapPin, Briefcase } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AKS from '../assets/images/AKS.png'
import { FaReact, FaAws } from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiFirebase, SiTypescript } from "react-icons/si"

function AboutPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images = [
        { src: AKS, alt: 'Ankith coding', label: '// I Code' },
        { src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80', alt: 'Travel', label: '// I Travel' },
        { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', alt: 'Training', label: '// I Train' }
    ]

    const experiences = [
        {
            company: "Aharyas",
            position: "Full Stack Engineer",
            duration: "Nov 2024 – Present",
            location: "Hyderabad, Telangana",
            workType: "Remote",
            color: "#00d4ff",
            achievements: [
                "Developed the Aharya website — responsive UI showcasing the startup's artisan e-commerce offerings.",
                "Built an e-commerce platform for artisans to display and sell handmade products.",
                "Collaborated with the founding team to align platform with brand identity.",
                "Implemented MongoDB for user data and product listings."
            ],
            technologies: [
                { name: "React JS", icon: <FaReact /> },
                { name: "TailwindCSS", icon: <SiTailwindcss /> },
                { name: "MongoDB", icon: <SiMongodb /> }
            ]
        },
        {
            company: "INVEZORO",
            position: "Lead Web Developer",
            duration: "May 2025 – Present",
            location: "Hyderabad, Telangana",
            workType: "Remote",
            color: "#1a6cf0",
            achievements: [
                "Led design and development of INVEZORO's official website.",
                "Built a fully responsive and scalable frontend architecture.",
                "Implemented Firebase Authentication and Firestore for user management.",
                "Deployed on AWS ensuring high availability and performance."
            ],
            technologies: [
                { name: "React JS", icon: <FaReact /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "TailwindCSS", icon: <SiTailwindcss /> },
                { name: "AWS", icon: <FaAws /> },
                { name: "Firebase", icon: <SiFirebase /> }
            ]
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }, 3500)
        return () => clearInterval(interval)
    }, [])

    const { scrollYProgress } = useScroll()
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <div className="min-h-screen relative overflow-hidden text-white">
            <div className="relative z-10 px-4 pt-28 pb-12 md:pt-36 md:pb-20 max-w-6xl mx-auto">

                {/* Hero section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-14 mb-24">
                    {/* Text */}
                    <motion.div
                        className="flex-1 max-w-2xl text-center lg:text-left"
                        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                    >
                        <p className="font-mono text-xs tracking-widest mb-4" style={{ color: 'rgba(0,212,255,0.6)' }}>[ ABOUT ME ]</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-8 leading-tight text-white">
                            I'm{" "}
                            <span className="grad-text">Ankith Kumar</span>
                            <span className="text-slate-400">, a passionate developer</span>
                        </h1>
                        <div className="space-y-5 text-slate-400 font-mono leading-8" style={{ fontSize: '0.88rem' }}>
                            <p>
                                CSE student at Woxsen University with a focus on <span className="text-white">web and app development</span>.
                                I combine cutting-edge technology with practical problem-solving to build impactful digital products.
                            </p>
                            <p>
                                I've shipped <span className="text-white">demand forecasting systems</span> using SARIMA + LSTM for Indian retailers,
                                <span className="text-white"> AI tour planners</span>, <span className="text-white">video generation platforms</span>, and more.
                                My stack spans React, Tailwind, Firebase, Python, Node.js, and whatever the project needs.
                            </p>
                            <p>
                                Beyond development, I thrive in innovation-driven environments. I aspire to lead impactful tech initiatives as both a builder and consultant. Always looking to collaborate on projects that challenge the norm.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image carousel */}
                    <div className="relative flex-shrink-0">
                        <motion.div
                            className="relative w-56 h-72 lg:w-64 lg:h-80"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-full h-full rounded-2xl overflow-hidden"
                                style={{ border: '1px solid rgba(0,212,255,0.15)', boxShadow: '0 0 40px rgba(26,108,240,0.15)' }}>
                                <img
                                    src={images[currentImageIndex].src}
                                    alt={images[currentImageIndex].alt}
                                    className="w-full h-full object-cover transition-opacity duration-500"
                                />
                            </div>
                            {/* Label */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full font-mono text-xs"
                                style={{ background: 'rgba(0,0,0,0.85)', border: '1px solid rgba(0,212,255,0.2)', color: 'rgba(0,212,255,0.8)', backdropFilter: 'blur(10px)' }}>
                                {images[currentImageIndex].label}
                            </div>
                        </motion.div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-4">
                            {images.map((_, i) => (
                                <button key={i} onClick={() => setCurrentImageIndex(i)}
                                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                                    style={{ background: i === currentImageIndex ? 'rgba(0,212,255,0.8)' : 'rgba(255,255,255,0.15)' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Experience section */}
                <section className="relative pt-8 pb-12">
                    <div className="text-center mb-16">
                        <p className="font-mono text-xs tracking-widest mb-4" style={{ color: 'rgba(0,212,255,0.6)' }}>[ EXPERIENCE ]</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
                            Experience That Brings{" "}
                            <span className="grad-text">Ideas to Life</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                            <motion.div className="absolute top-0 left-0 w-full rounded-full"
                                style={{ height: lineHeight, background: 'linear-gradient(to bottom, rgba(0,212,255,0.6), rgba(26,108,240,0.4))' }}
                            />
                        </div>

                        <div className="flex flex-col gap-10 pl-12">
                            {experiences.map((exp, idx) => (
                                <motion.article
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    viewport={{ once: true }}
                                    className="space-card rounded-2xl p-6 transition-all duration-300"
                                    onMouseEnter={e => e.currentTarget.style.borderColor = `${exp.color}25`}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.08)'}
                                >
                                    <div className="flex flex-col gap-1.5 mb-4">
                                        <time className="font-mono text-xs" style={{ color: exp.color }}>{exp.duration}</time>
                                        <h3 className="text-xl font-display font-bold text-white">{exp.company}</h3>
                                        <div className="flex flex-wrap items-center gap-4">
                                            <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500">
                                                <MapPin className="h-3 w-3" /> {exp.location}
                                            </div>
                                            <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500">
                                                <Briefcase className="h-3 w-3" /> {exp.workType}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="font-display font-semibold text-white mb-4">{exp.position}</p>

                                    <ul className="space-y-2 mb-5">
                                        {exp.achievements.map((a, i) => (
                                            <li key={i} className="flex items-start gap-2.5 font-mono text-slate-400" style={{ fontSize: '0.8rem' }}>
                                                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                                                {a}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg font-mono text-xs text-slate-400 transition-colors duration-200 hover:text-white"
                                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                                                {tech.icon}{tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutPage