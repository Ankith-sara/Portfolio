import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "AI Tour Planner",
        description: "A personalized travel planner app using AI and real-time APIs to generate intelligent itineraries.",
        tech: ["React Native", "Firebase", "Gemini AI"],
        image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.9208c264.jpg&w=1200&q=75",
        demoUrl: "#",
        githubUrl: "https://github.com/Ankith-sara/ai-tour-planner",
    },
    {
        id: 2,
        title: "Book Store",
        description: "An online platform for users to manage, explore, and gain exposure with regional books with a clean design.",
        tech: ["React.js", "Tailwind CSS", "Express.js", "MongoDB"],
        image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.9ff457d3.webp&w=1200&q=75",
        demoUrl: "#",
        githubUrl: "https://github.com/Ankith-sara/book-Store",
    },
    {
        id: 3,
        title: "AI Video Gen",
        description: "A next-gen platform to generate AI-driven videos with automation, rendering, and real-time sync.",
        tech: ["Next.js", "Convex", "Remotion", "Firebase"],
        image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.0372515c.png&w=1200&q=75",
        demoUrl: "#",
        githubUrl: "#",
    }
];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-4xl bg-light-card/80 dark:bg-dark-card/80 border border-white/20 shadow-lg backdrop-blur-xl overflow-hidden"
        >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">{project.title}</h3>
                <p className="text-light-text dark:text-dark-text/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs rounded-full bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text/80">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue text-white font-semibold hover:bg-accent-blue/90 transition-colors">
                        <ExternalLink size={16} />
                        Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-light-text dark:text-dark-text font-semibold hover:bg-white/10 transition-colors">
                        <Github size={16} />
                        Source
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-light-text dark:text-dark-text mb-12">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;