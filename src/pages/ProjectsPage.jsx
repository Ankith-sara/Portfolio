import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="pt-28 pb-12 md:pt-36 md:pb-20">
                <Projects />
            </div>
        </div>
    );
};

export default ProjectsPage;
