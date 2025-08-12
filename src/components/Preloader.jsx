import React from 'react'

function Preloader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-transparent border-t-blue-400 border-r-blue-400 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-purple-400 border-l-purple-400 rounded-full animate-spin animate-reverse"></div>
            </div>
            <div className="ml-4 text-white text-xl font-light">Loading...</div>
        </div>
    );
}

export default Preloader