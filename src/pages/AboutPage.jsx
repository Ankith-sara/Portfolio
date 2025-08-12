import React, { useState, useEffect } from 'react'
import { MapPin, Briefcase } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AKS from '../assets/images/AKS.png'

// Tech logos (example - replace with actual imports if you have)
import { FaReact, FaAws } from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiFirebase, SiTypescript } from "react-icons/si"

function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    { src: AKS, alt: 'Coding image', label: 'I Code' },
    { src: 'https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftravel.990e98e3.webp&w=1200&q=75', alt: 'Travel image', label: 'I Travel' },
    { src: 'https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgym.b81cf5fa.webp&w=1200&q=75', alt: 'Gym image', label: 'I Train' }
  ]

  const experiences = [
    {
      company: "Aharyas",
      position: "Full Stack Engineer",
      duration: "Nov 2024 - Present",
      location: "Hyderabad, Telangana",
      workType: "Remote work",
      achievements: [
        "Developed the Aharya website to showcase the startup’s offerings and enhance user engagement through a unique and responsive UI.",
        "Built an e-commerce platform for artisans to display and sell their handmade products.",
        "Collaborated closely with the founding team to align the platform with brand identity.",
        "Integrated a clean, accessible UI with optimized performance.",
        "Implemented MongoDB to manage user data and product listings efficiently."
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
      workType: "Remote work",
      achievements: [
        "Led the design and development of INVEZORO's official website.",
        "Built a fully responsive and scalable frontend architecture.",
        "Implemented Firebase Authentication and Firestore.",
        "Deployed the platform on AWS ensuring uptime and performance.",
        "Collaborated with stakeholders to improve accessibility."
      ],
      technologies: [
        { name: "React JS", icon: <FaReact /> },
        { name: "Typescript", icon: <SiTypescript /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Firebase", icon: <SiFirebase /> }
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Scroll animation for timeline
  const { scrollYProgress } = useScroll()
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      {/* Animated gradient blob background */}
      <div className="absolute inset-0 z-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 8}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-20 px-4 pt-28 pb-12 md:pt-36 md:pb-20 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          {/* Text Content */}
          <motion.div
            className="flex-1 max-w-2xl text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs md:text-sm font-normal tracking-widest text-slate-400 uppercase mb-3">
              More About Me
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Ankith Kumar
              </motion.span>
              , a passionate developer
            </h1>
            <div className="space-y-6 text-slate-300 text-base lg:text-lg font-light leading-relaxed">
              <p>
                Hi, I’m a Computer Science Engineering student at
                Woxsen University with a strong focus on <strong>web and app development</strong>.
                My journey so far has been about combining <strong>cutting-edge technology</strong> with
                practical problem-solving to build impactful digital experiences.
              </p>
              <p>
                I’ve worked on diverse projects, from <strong>demand forecasting systems</strong> for
                Indian retailers using <strong>SARIMA + LSTM models</strong>, to AI-driven tools like
                <strong>tour planning apps</strong> and <strong>video generation platforms</strong>.
                My technical toolkit includes <strong>React, Tailwind, Firebase, Flutter, Python, PHP, SQL</strong>,
                and I’m constantly exploring new frameworks and AI integrations.
              </p>
              <p>
                Beyond development, I thrive in high-pressure, innovation-driven environments and
                aspire to lead impactful tech initiatives as an <strong>entrepreneur</strong> and
                <strong>consultant</strong>. I’m always eager to collaborate on projects that challenge
                the norm and create meaningful change.
              </p>
            </div>
          </motion.div>

          {/* Image Carousel with 3D tilt */}
          <div className="relative flex-shrink-0 perspective-1000">
            <motion.div
              className="relative w-[250px] h-[350px] lg:w-[300px] lg:h-[400px]"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-full rounded-3xl shadow-2xl object-cover"
              />
            </motion.div>
            <div className="text-center mt-3 text-xl font-light">
              {images[currentImageIndex].label}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section id="experience" className="relative pt-16 pb-12 md:pt-20 md:pb-20">
          <div className="text-center mb-20">
            <p className="mb-3 text-xs font-normal tracking-widest text-slate-400 uppercase md:text-sm">
              The Experience
            </p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl mb-4 md:mb-0">
              Experience That Brings{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent font-bold">
                Ideas to Life
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-1.5 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-400"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="flex flex-col gap-14 pl-12">
              {experiences.map((exp, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-xl p-6 shadow-lg backdrop-blur-sm"
                >
                  <div className="flex flex-col gap-3 mb-4">
                    <time className="text-slate-400 text-xs font-medium tracking-wide uppercase">
                      {exp.duration}
                    </time>
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="h-4 w-4" /> {exp.location}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Briefcase className="h-4 w-4" /> {exp.workType}
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-3">{exp.position}</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    {exp.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>

                  {/* Tech stack with icons */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-sm bg-slate-900/60 border-slate-700 hover:bg-slate-700/60 transition"
                      >
                        {tech.icon}
                        {tech.name}
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
