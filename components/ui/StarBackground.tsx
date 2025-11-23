import React, { useEffect, useState } from 'react';

export const StarBackground: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#02040a]">
      {/* 1. Deep Space Base Layer - Fondo base azul muy oscuro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#020617] to-black opacity-90"></div>

      {/* 2. Vibrant Nebulas / Galaxies - AUMENTADO BRILLO Y OPACIDAD */}
      {/* Galaxia Superior Izquierda - Cian */}
      <div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] bg-primary-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow opacity-60"></div>
      
      {/* Galaxia Inferior Derecha - Dorado/Violeta */}
      <div className="absolute top-[30%] -right-[10%] w-[60vw] h-[60vw] bg-indigo-900/40 rounded-full blur-[150px] mix-blend-screen opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-accent-600/20 rounded-full blur-[100px] mix-blend-screen animate-pulse opacity-50"></div>

      {/* 3. Stars Layers for 3D Parallax Effect - TAMAÑOS REDUCIDOS UN 30% */}
      <div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: `translateY(${offsetY * -0.05}px)` }} 
      >
        {/* Estrellas lejanas (Fondo estático) */}
        {[...Array(200)].map((_, i) => (
          <div
            key={`far-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 1.4 + 0.7}px`, // Reducido de 2+1 a 1.4+0.7
              height: `${Math.random() * 1.4 + 0.7}px`,
              opacity: Math.random() * 0.6 + 0.3, 
            }}
          ></div>
        ))}
      </div>

      <div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: `translateY(${offsetY * -0.15}px)` }} 
      >
        {/* Estrellas medias (Brillantes y parpadeantes) */}
        {[...Array(80)].map((_, i) => (
          <div
            key={`mid-${i}`}
            className="absolute rounded-full bg-cyan-200 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2.1 + 1}px`, // Reducido de 3+1.5 a 2.1+1
              height: `${Math.random() * 2.1 + 1}px`,
              opacity: Math.random() * 0.8 + 0.5,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: `0 0 ${Math.random() * 2.8 + 1.5}px rgba(6, 182, 212, 0.8)` // Glow reducido
            }}
          ></div>
        ))}
      </div>

      <div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: `translateY(${offsetY * -0.3}px)` }} 
      >
        {/* Polvo estelar cercano (Efecto profundidad) */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`close-${i}`}
            className="absolute rounded-full bg-accent-200/30 blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3.5 + 1.5}px`, // Reducido de 5+2 a 3.5+1.5
              height: `${Math.random() * 3.5 + 1.5}px`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          ></div>
        ))}
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};