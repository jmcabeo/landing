import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  id: number;
  life: number;
}

export const CursorTrail: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const requestRef = useRef<number>(0);
  const counterRef = useRef<number>(0);

  useEffect(() => {
    const addPoint = (x: number, y: number) => {
      counterRef.current += 1;
      // Only add a point every few frames to improve performance and style
      if (counterRef.current % 2 === 0) {
        const newPoint = {
          x,
          y,
          id: Date.now() + Math.random(),
          life: 1.0
        };
        setPoints(prev => [...prev.slice(-20), newPoint]);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      addPoint(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Don't prevent default - allow native scrolling
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        addPoint(touch.clientX, touch.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        addPoint(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    const animate = () => {
      setPoints(prev =>
        prev
          .map(p => ({ ...p, life: p.life - 0.03 }))
          .filter(p => p.life > 0)
      );
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {points.map(point => (
        <div
          key={point.id}
          className="absolute rounded-full bg-cyan-400 blur-[1px]"
          style={{
            left: point.x,
            top: point.y,
            width: '4px',
            height: '4px',
            opacity: point.life,
            transform: `scale(${point.life})`,
            boxShadow: '0 0 4px 1px rgba(6, 182, 212, 0.5)'
          }}
        />
      ))}
    </div>
  );
};