import React, { useEffect, useState } from 'react';

export const TouchSpotlight: React.FC = () => {
    const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                setPosition({ x: touch.clientX, y: touch.clientY });
                setIsActive(true);
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                setPosition({ x: touch.clientX, y: touch.clientY });
            }
        };

        const handleTouchEnd = () => {
            setIsActive(false);
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    if (!isActive || !position) return null;

    return (
        <div
            className="pointer-events-none fixed z-[9998]"
            style={{
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -50%)',
            }}
        >
            {/* Outer glow */}
            <div
                className="absolute w-32 h-32 rounded-full bg-primary-500/10 blur-2xl"
                style={{
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%',
                }}
            />
            {/* Inner glow */}
            <div
                className="absolute w-20 h-20 rounded-full bg-accent-500/20 blur-xl"
                style={{
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%',
                }}
            />
            {/* Core bright spot */}
            <div
                className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-primary-400/30 to-accent-500/30 blur-md"
                style={{
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%',
                }}
            />
        </div>
    );
};
