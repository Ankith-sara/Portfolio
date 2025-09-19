import React, { useState } from 'react';
import { X, Mail, User, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactDrawer = ({ isOpen, onClose }) => {
    const [contactTab, setContactTab] = useState('connect');

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-lg"
                    >
                        <div className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-2xl border-t border-white/20 rounded-t-3xl shadow-2xl p-6">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-light-text dark:text-dark-text hover:text-light-text dark:hover:text-dark-text transition-all duration-300"
                            >
                                <X size={16} />
                            </button>

                            <div className="mx-auto w-12 h-1.5 bg-black/20 dark:bg-white/20 rounded-full mb-6"></div>

                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-2">Let's Connect</h2>
                                <p className="text-light-text dark:text-dark-text/70">Choose your preferred way to reach out</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex bg-black/5 dark:bg-white/5 rounded-2xl p-1 border border-white/10">
                                    <button
                                        onClick={() => setContactTab('connect')}
                                        className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${contactTab === 'connect' ? 'bg-light-card dark:bg-dark-card shadow-lg text-light-text dark:text-dark-text' : 'text-light-text dark:text-dark-text/70 hover:text-light-text dark:hover:text-dark-text'}`}
                                    >
                                        Quick Connect
                                    </button>
                                    <button
                                        onClick={() => setContactTab('form')}
                                        className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${contactTab === 'form' ? 'bg-light-card dark:bg-dark-card shadow-lg text-light-text dark:text-dark-text' : 'text-light-text dark:text-dark-text/70 hover:text-light-text dark:hover:text-dark-text'}`}
                                    >
                                        Fill Form
                                    </button>
                                </div>
                            </div>

                            {contactTab === 'connect' ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <a
                                        href="mailto:ankithkumarsara@gmail.com"
                                        className="group block rounded-2xl border border-white/10 p-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:border-accent-blue/50 transition-all duration-300 shadow-lg"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shadow-lg">
                                                <Mail size={16} className="text-white" />
                                            </div>
                                            <h3 className="font-semibold text-light-text dark:text-dark-text">Email</h3>
                                        </div>
                                        <p className="text-sm text-light-text dark:text-dark-text/70 mb-2">Send me an email directly</p>
                                        <p className="text-sm text-light-text dark:text-dark-text group-hover:text-accent-blue transition-colors break-all">
                                            ankithkumarsara@gmail.com
                                        </p>
                                    </a>

                                    <button
                                        className="group block rounded-2xl border border-white/10 p-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:border-accent-purple/50 transition-all duration-300 shadow-lg text-left"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center shadow-lg">
                                                <User size={16} className="text-white" />
                                            </div>
                                            <h3 className="font-semibold text-light-text dark:text-dark-text">Book a Call</h3>
                                        </div>
                                        <p className="text-sm text-light-text dark:text-dark-text/70">Schedule a time slot</p>
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-black/10 dark:bg-white/10 flex items-center justify-center shadow-lg">
                                        <Menu size={24} className="text-light-text dark:text-dark-text" />
                                    </div>
                                    <p className="text-light-text dark:text-dark-text/70">Contact form coming soon...</p>
                                </div>
                            )}

                            <div className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-green-500/10 border border-green-400/30">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                                </div>
                                <p className="text-sm text-green-300 font-medium">Available for new opportunities</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactDrawer;