import React from 'react'

function Preloader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ background: '#000000' }}>
            {/* Star background on preloader */}
            <div className="stars-layer" />
            <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Orbit rings */}
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full border orbit" style={{ borderColor: 'rgba(0,212,255,0.4)', borderWidth: 1 }} />
                    <div className="absolute inset-2 rounded-full border orbit-reverse" style={{ borderColor: 'rgba(26,108,240,0.3)', borderWidth: 1 }} />
                    <div className="absolute inset-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.2)' }}>
                        <span className="font-display font-bold text-sm" style={{ color: 'rgba(0,212,255,0.9)' }}>AKS</span>
                    </div>
                </div>
                <div className="font-mono text-xs tracking-widest" style={{ color: 'rgba(0,212,255,0.4)' }}>
                    INITIALIZING...
                </div>
                {/* Progress line */}
                <div className="w-32 h-px" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div className="h-full" style={{ background: 'rgba(0,212,255,0.6)', animation: 'preload 1.5s ease-out forwards' }} />
                </div>
            </div>
            <style>{`
                @keyframes preload {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `}</style>
        </div>
    );
}

export default Preloader;