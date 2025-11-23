import React from 'react';

export const AiRobot: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <div className={`relative w-32 h-32 ${className}`}>
            {/* Floating Animation Wrapper */}
            <div className="w-full h-full animate-float relative">

                {/* --- ROBOT HEAD --- */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-slate-900 rounded-2xl border border-primary-400 shadow-[0_0_30px_rgba(6,182,212,0.4)] z-20 flex items-center justify-center overflow-hidden">
                    {/* Screen Scanline */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/10 to-transparent animate-scan opacity-50"></div>

                    {/* Eyes */}
                    <div className="flex gap-2 z-10">
                        <div className="w-3 h-1 bg-primary-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
                        <div className="w-3 h-1 bg-primary-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee] delay-75"></div>
                    </div>

                    {/* Mouth/Voice Line */}
                    <div className="absolute bottom-3 w-8 h-[2px] flex justify-center items-end gap-[2px]">
                        <div className="w-[2px] h-1 bg-primary-500 animate-[bounce_1s_infinite]"></div>
                        <div className="w-[2px] h-2 bg-primary-500 animate-[bounce_1.2s_infinite]"></div>
                        <div className="w-[2px] h-3 bg-primary-500 animate-[bounce_0.8s_infinite]"></div>
                        <div className="w-[2px] h-2 bg-primary-500 animate-[bounce_1.1s_infinite]"></div>
                        <div className="w-[2px] h-1 bg-primary-500 animate-[bounce_0.9s_infinite]"></div>
                    </div>
                </div>

                {/* --- ORBITING RINGS --- */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-primary-500/30 rounded-full animate-spin-slow">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-accent-500/20 rounded-full animate-[spin_8s_linear_reverse_infinite]">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent-400 rounded-full"></div>
                </div>

                {/* --- ANTENNA --- */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-primary-500/50">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
                </div>

                {/* --- HOVER THRUSTERS --- */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-4">
                    <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[10px] border-l-transparent border-r-transparent border-t-primary-400 blur-[2px] animate-pulse"></div>
                    <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[10px] border-l-transparent border-r-transparent border-t-primary-400 blur-[2px] animate-pulse delay-100"></div>
                </div>

            </div>
        </div>
    );
};
