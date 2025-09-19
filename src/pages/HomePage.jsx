import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const HomePage = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <Hero />
            <About />
            <Skills />
            <Projects />
        </div>
    );
};

export default HomePage;
