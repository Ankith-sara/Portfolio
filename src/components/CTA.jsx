import React, { useState, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';

function CTA() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
        setPosition({ x, y });
    };

    const resetPosition = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div className="min-h-screen relative overflow-hidden text-slate-100">
            {/* Layered Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute w-[120%] h-[120%] animate-pulse-slow"></div>
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `float ${10 + Math.random() * 10}s linear infinite`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Neon Badge */}
            <div className="absolute top-1/3 right-1/6 animate-flicker">
                <div className="relative">
                    <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full p-1 shadow-lg shadow-blue-500/50">
                        <div className="w-full h-full rounded-full bg-slate-900/90 backdrop-blur-md flex items-center justify-center border border-blue-400/50">
                            <Star className="w-6 h-6 text-blue-300 fill-blue-300" />
                        </div>
                    </div>
                    <svg className="absolute inset-0 w-28 h-28 animate-spin-slow" viewBox="0 0 100 100">
                        <path
                            id="circle"
                            d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                            fill="none"
                        />
                        <text className="text-xs fill-blue-200 font-light tracking-widest">
                            <textPath href="#circle">
                                OPEN TO WORK • LET'S BUILD MAGIC •
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                    FROM CONCEPT TO{' '}
                    <span className="bg-blue-500 bg-clip-text text-transparent">
                        CREATION
                    </span>
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold mb-12 animate-fade-in delay-200">
                    LET'S MAKE IT{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                        HAPPEN!
                    </span>
                </h2>

                {/* Magnetic Button */}
                <div className="mb-16">
                    <button
                        ref={buttonRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={resetPosition}
                        className="group relative rounded-2xl p-2 border border-blue-400/40 bg-slate-900/30 backdrop-blur-lg transition-all duration-300"
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px)`,
                            transition: 'transform 0.15s ease-out',
                        }}
                    >
                        <div className="flex items-center gap-4 px-8 py-4 relative z-10">
                            <span className="text-xl font-semibold transition-colors duration-300">
                                Get In Touch
                            </span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        <span className="absolute inset-0 rounded-2xl bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </div>

                {/* Availability Card */}
                <div className="bg-slate-900/50 backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 shadow-lg max-w-lg">
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-lg">
                            I'm available for <span className="text-green-400 font-semibold">full-time roles</span> & freelance projects.  
                            I love crafting <span className="text-blue-400 font-semibold">dynamic web apps</span> with{' '}
                            <span className="text-purple-400 font-semibold">seamless UX</span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style>{`
                @keyframes float {
                    0% { transform: translateY(100vh); opacity: 0; }
                    10%, 90% { opacity: 1; }
                    100% { transform: translateY(-100vh); opacity: 0; }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.7; }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes flicker {
                    0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 1; }
                    20%, 24%, 55% { opacity: 0.4; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 6s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                .animate-fade-in {
                    animation: fadeIn 0.8s ease forwards;
                    opacity: 0;
                }
                .delay-200 {
                    animation-delay: 0.2s;
                }
                .animate-flicker {
                    animation: flicker 3s infinite;
                }
                @keyframes fadeIn {
                    to { opacity: 1; transform: translateY(0); }
                    from { opacity: 0; transform: translateY(20px); }
                }
            `}</style>
        </div>
    );
}

export default CTA;