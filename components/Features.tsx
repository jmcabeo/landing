import React from 'react';
import { CalendarDays, BellRing, MessageSquareText, Database, HeartHandshake } from 'lucide-react';
import { Section } from './ui/Section';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <CalendarDays className="h-6 w-6" />,
      title: "Calendario y Reservas",
      desc: "Calendario adaptado a tus horarios. Página de reservas lista para compartir en Instagram, WhatsApp o QR. Tus clientes reservan solos."
    },
    {
      icon: <BellRing className="h-6 w-6" />,
      title: "Recordatorios Auto",
      desc: "Confirmaciones y avisos antes de la cita para reducir plantones. Mensajes post-visita para agradecer y pedir reseña."
    },
    {
      icon: <MessageSquareText className="h-6 w-6" />,
      title: "Agente IA Chat/WhatsApp",
      desc: "Chat en tu web que resuelve dudas básicas y ayuda a reservar sin que intervengas. Deriva a tu WhatsApp si es necesario."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Reactivación de Clientes",
      desc: "Importamos tu base de datos e identificamos quién no viene hace tiempo para enviarles un mensaje amable de vuelta."
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Fidelización Básica",
      desc: "Bases sentadas para que tus clientes repitan. Recordatorios de revisiones o servicios periódicos automáticos."
    }
  ];

  return (
    <Section id="features" className="relative">

      {/* --- AI DRONE DECORATION --- */}
      <div className="absolute -top-10 right-10 hidden xl:block animate-float">
        <div className="relative w-24 h-24">
          {/* Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)] z-10"></div>
          {/* Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-primary-400 rounded-full animate-spin-slow opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-t border-b border-accent-500 rounded-full animate-spin opacity-40"></div>
          {/* Scan Light */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[40px] border-l-transparent border-r-transparent border-t-primary-500/20 blur-sm animate-pulse"></div>
        </div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-400 mb-4 tracking-wide drop-shadow-lg uppercase">
          Qué incluye el sistema base
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Lo que montamos para ti desde el primer día. No necesitas una plataforma complicada, empezamos con lo esencial para que tu agenda esté bajo control.
        </p>
      </div>

      {/* Circuit Connection Line (Desktop) */}
      <div className="hidden lg:block absolute top-[55%] left-0 w-full h-[1px] bg-primary-900/50 -z-0 transform -translate-y-12"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            {/* Connecting Line vertical for mobile */}
            <div className="lg:hidden absolute top-0 bottom-0 left-1/2 w-[1px] bg-primary-900/50 -z-10"></div>

            {/* Card */}
            <div className="h-full bg-slate-950/80 border border-primary-500/20 p-6 rounded-2xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-primary-500/50 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.2)] active:scale-105 active:border-primary-500/50 active:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.2)] flex flex-col items-center text-center group-hover:-translate-y-2 group-active:-translate-y-2 relative overflow-hidden">

              {/* --- LASER SCAN EFFECT --- */}
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 group-hover:animate-scan group-active:animate-scan z-20"></div>

              {/* --- AUTOMATION INDICATOR (Top Right) --- */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-primary-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-primary-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1 h-1 bg-primary-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full border border-primary-500/40 bg-slate-900/50 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] group-active:shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:border-primary-400 group-active:border-primary-400 transition-all relative shrink-0">
                <div className="text-primary-400 group-hover:text-white group-active:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-300 group-active:text-primary-300 transition-colors leading-tight relative z-10">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 group-active:text-slate-300 relative z-10">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};