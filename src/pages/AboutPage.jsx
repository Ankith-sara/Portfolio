import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import About from '../components/About';

const experiences = [
    {
        company: "Aharyas",
        position: "Full Stack Engineer",
        duration: "Nov 2024 - Present",
        location: "Hyderabad, Telangana",
        workType: "Remote work",
    },
    {
        company: "INVEZORO",
        position: "Lead Web Developer",
        duration: "May 2025 – Present",
        location: "Hyderabad, Telangana",
        workType: "Remote work",
    }
];

const ExperienceCard = ({ experience, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="p-6 rounded-4xl bg-light-card/80 dark:bg-dark-card/80 border border-white/20 shadow-lg backdrop-blur-xl"
    >
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{experience.company}</h3>
        <p className="text-light-text/80 dark:text-dark-text/80">{experience.position}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-light-text/60 dark:text-dark-text/60">
            <Briefcase size={16} />
            <span>{experience.duration}</span>
        </div>
        <div className="flex items-center gap-2 mt-1 text-sm text-light-text/60 dark:text-dark-text/60">
            <MapPin size={16} />
            <span>{experience.location} ({experience.workType})</span>
        </div>
    </motion.div>
);

const AboutPage = () => {
    return (
        <div className="min-h-screen relative overflow-hidden py-28 px-4">
            <div className="max-w-4xl mx-auto">
                <About />
                <h2 className="text-4xl font-bold text-center text-light-text dark:text-dark-text my-12">
                    Work Experience
                </h2>
                <div className="relative flex flex-col gap-8">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-white/20" />
                    {experiences.map((exp, idx) => (
                        <ExperienceCard key={idx} experience={exp} index={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPage
