import React from 'react';
import { BellOff, Users, Star } from 'lucide-react';
import { Section } from './ui/Section';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <BellOff className="h-8 w-8" />,
      title: 'Adiós a los Plantones',
      desc: 'Recordatorios automáticos por WhatsApp y SMS antes de cada cita. Reduce las ausencias drásticamente desde la primera semana.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Clientes que Vuelven',
      desc: 'El sistema detecta quién no viene hace tiempo y le envía un mensaje para reactivarlo. Incluye Gamificación (Ruletas) para captar sus datos.'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Reputación de 5 Estrellas',
      desc: 'Consigue más reseñas en Google automáticamente pidiéndolas justo cuando el cliente sale feliz de tu local.'
    }
  ];

  return (
    <Section id="features" className="relative py-24">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-400 mb-4 tracking-wide drop-shadow-lg uppercase">
          La Solución
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          OMNIA automatiza todo lo que te quita tiempo y dinero.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            {/* Card */}
            <div className="h-full bg-slate-950/80 border border-accent-500/20 p-8 rounded-2xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-accent-500/50 hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.3)] active:scale-105 active:border-accent-500/50 active:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.3)] flex flex-col items-center text-center group-hover:-translate-y-2 group-active:-translate-y-2 relative overflow-hidden">

              {/* --- LASER SCAN EFFECT --- */}
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 group-hover:animate-scan group-active:animate-scan z-20"></div>

              {/* Icon Container */}
              <div className="w-20 h-20 rounded-full border border-accent-500/40 bg-slate-900/50 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,158,11,0.15)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] group-active:shadow-[0_0_30px_rgba(245,158,11,0.4)] group-hover:border-accent-400 group-active:border-accent-400 transition-all relative shrink-0">
                <div className="text-accent-400 group-hover:text-white group-active:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-300 group-active:text-accent-300 transition-colors leading-tight relative z-10">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 group-active:text-slate-300 relative z-10">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};