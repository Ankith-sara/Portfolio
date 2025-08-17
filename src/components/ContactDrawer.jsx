import React, { useState } from 'react';
import { X, Mail, User, Menu } from 'lucide-react';
import { useSound } from '../context/SoundContext'; // adjust path if needed

const ContactDrawer = ({ isOpen, onClose }) => {
    const [contactTab, setContactTab] = useState('connect');
    const { playClick, playHover, playTransition } = useSound();

    if (!isOpen) {
        return null;
    }

    return (
        <>
            {/* Backdrop with sound */}
            <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300" 
                onClick={() => {
                    playTransition();
                    onClose();
                }} 
            />
            <div className={`fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-lg transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="bg-neutral-950/90 backdrop-blur-2xl border-t border-neutral-600/50 rounded-t-3xl shadow-2xl p-6">
                    
                    {/* Close button */}
                    <button 
                        onClick={() => {
                            playTransition();
                            onClose();
                        }} 
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 text-neutral-400 hover:text-white transition-all duration-300 backdrop-blur-xl"
                    >
                        <X size={16} />
                    </button>

                    <div className="mx-auto w-12 h-1.5 bg-neutral-600 rounded-full mb-6"></div>
                    
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-white mb-2">Let's Connect</h2>
                        <p className="text-neutral-400">Choose your preferred way to reach out</p>
                    </div>
                    
                    {/* Tabs with sound */}
                    <div className="mb-6">
                        <div className="flex bg-neutral-800/50 rounded-2xl p-1 backdrop-blur-xl border border-neutral-600/30">
                            <button 
                                onClick={() => {
                                    playTransition();
                                    setContactTab('connect');
                                }} 
                                className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${contactTab === 'connect' ? 'bg-neutral-700/70 text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                            >
                                Quick Connect
                            </button>
                            <button 
                                onClick={() => {
                                    playTransition();
                                    setContactTab('form');
                                }} 
                                className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${contactTab === 'form' ? 'bg-neutral-700/70 text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                            >
                                Fill Form
                            </button>
                        </div>
                    </div>
                    
                    {/* Content */}
                    {contactTab === 'connect' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <a 
                                href="mailto:ankithkumarsara@gmail.com" 
                                onClick={playClick}
                                className="group block rounded-2xl border border-neutral-600/50 p-4 bg-neutral-800/50 backdrop-blur-xl hover:bg-neutral-700/50 hover:border-blue-400/50 transition-all duration-300 shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                                        <Mail size={16} className="text-white" />
                                    </div>
                                    <h3 className="font-semibold text-white">Email</h3>
                                </div>
                                <p className="text-sm text-neutral-400 mb-2">Send me an email directly</p>
                                <p className="text-sm text-white group-hover:text-blue-300 transition-colors break-all">
                                    ankithkumarsara@gmail.com
                                </p>
                            </a>

                            <button 
                                onClick={playClick}
                                className="group block rounded-2xl border border-neutral-600/50 p-4 bg-neutral-800/50 backdrop-blur-xl hover:bg-neutral-700/50 hover:border-purple-400/50 transition-all duration-300 shadow-lg text-left"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                                        <User size={16} className="text-white" />
                                    </div>
                                    <h3 className="font-semibold text-white">Book a Call</h3>
                                </div>
                                <p className="text-sm text-neutral-400">Schedule a time slot</p>
                            </button>
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center shadow-lg">
                                <Menu size={24} className="text-white" />
                            </div>
                            <p className="text-neutral-400">Contact form coming soon...</p>
                        </div>
                    )}

                    {/* Availability banner */}
                    <div className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-green-500/10 border border-green-400/30 backdrop-blur-xl">
                        <div className="relative">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                        <p className="text-sm text-green-300 font-medium">Available for new opportunities</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactDrawer;