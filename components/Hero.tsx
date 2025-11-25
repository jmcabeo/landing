import React, { useState } from 'react';
import { Button } from './ui/Button';
import { ChevronDown, CheckCircle2, MessageSquare, Calendar } from 'lucide-react';
import { AiRobot } from './ui/AiRobot';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Localized Glow behind Logo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-500/20 blur-[90px] rounded-full pointer-events-none"></div>

      {/* --- AI ROBOT COMPANION --- */}
      <div className="absolute top-[15%] right-[10%] hidden xl:block">
        <AiRobot className="scale-125" />
        <div className="absolute top-0 -right-24 glass-panel px-3 py-1 rounded-lg text-[10px] text-primary-300 animate-pulse">
          System Online
        </div>
      </div>

      {/* --- AI SYSTEM NOTIFICATIONS (Floating) --- */}
      {/* Bubble 1: Left */}
      <div className="absolute top-[20%] left-[10%] md:left-[20%] z-10 hidden lg:flex animate-float">
        <div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-3 border border-primary-500/30">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50 text-green-400">
            <CheckCircle2 size={16} />
          </div>
          <div className="text-xs">
            <div className="text-slate-300">Cita confirmada</div>
            <div className="text-white font-mono">17:00h - Maria G.</div>
          </div>
        </div>
      </div>

      {/* Bubble 2: Right */}
      <div className="absolute bottom-[30%] right-[5%] md:right-[15%] z-10 hidden lg:flex animate-float-delayed">
        <div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-3 border border-accent-500/30">
          <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center border border-accent-500/50 text-accent-400">
            <MessageSquare size={16} />
          </div>
          <div className="text-xs">
            <div className="text-slate-300">Recordatorio enviado</div>
            <div className="text-white font-mono">WhatsApp Auto</div>
          </div>
        </div>
      </div>

      {/* 1. Logo Section */}
      <div className="relative z-20 mb-12 flex flex-col items-center animate-float">
        {/* Urgency Bar */}
        <div className="mb-6 px-6 py-3 bg-red-500/10 border-2 border-red-500/50 rounded-full backdrop-blur-md animate-pulse">
          <p className="text-sm md:text-base text-red-300 font-semibold text-center">
            ⚠️ CIERRE DE AÑO: Condiciones de Fundador (Setup Bonificado) disponibles solo hasta el 31 de Diciembre.
          </p>
        </div>

        {/* Logo Container */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 mb-8">
          <div className="w-full h-full relative flex items-center justify-center group">
            {/* Outer Glow pulsante */}
            <div className="absolute inset-0 bg-accent-500/20 blur-[50px] rounded-full animate-pulse-glow group-hover:bg-accent-500/30 transition-all duration-500"></div>

            {/* LOGIC: Try to load image, if fails, show CSS Logo */}
            {!imgError ? (
              <img
                src="/logo.png"
                alt="Omnia Growth Systems Logo"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(245,158,11,0.4)] relative z-10 transition-transform duration-500 group-hover:scale-105 rounded-full"
                onError={() => setImgError(true)}
              />
            ) : (
              /* CSS FALLBACK LOGO (Geometric Sun) */
              <div className="relative w-48 h-48 md:w-60 md:h-60 flex items-center justify-center z-10">
                <div className="absolute inset-0 border-[1px] border-accent-500/60 rounded-full opacity-80"></div>
                <div className="absolute inset-2 border-[1px] border-primary-500/40 rounded-full opacity-60 animate-spin-slow"></div>
                <div className="absolute inset-0 rounded-full border-t-2 border-accent-500 opacity-40 rotate-45"></div>
                <div className="relative w-full h-full flex items-center justify-center animate-pulse-glow">
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <div
                      key={deg}
                      className="absolute w-24 h-24 border border-accent-500/30 rounded-full"
                      style={{ transform: `rotate(${deg}deg) translate(20px)` }}
                    ></div>
                  ))}
                  <div className="absolute w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full blur-[2px] opacity-80"></div>
                  <div className="absolute w-16 h-16 bg-accent-100 rounded-full blur-[10px] opacity-60"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Typography "GROWTH SYSTEMS" */}
        <h2 className="text-xl md:text-2xl font-bold text-primary-400 tracking-[0.8em] uppercase drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] text-center ml-2">
          Growth Systems
        </h2>
      </div>

      {/* 2. Main Title Area */}
      <div className="relative z-20 text-center max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
          Tu Negocio, <span className="text-accent-400 drop-shadow-[0_0_35px_rgba(245,158,11,0.6)]">Operando</span><br />
          <span className="text-accent-400 drop-shadow-[0_0_35px_rgba(245,158,11,0.6)]">en Piloto Automático</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
          El Sistema Operativo Central que elimina el caos, centraliza tus comunicaciones y automatiza la facturación mientras tú das el mejor servicio.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-slate-300">
          <span className="flex items-center gap-2">
            <span className="text-primary-400">✓</span> Sin permanencia
          </span>
          <span className="flex items-center gap-2">
            <span className="text-primary-400">✓</span> Instalación inmediata
          </span>
          <span className="flex items-center gap-2">
            <span className="text-primary-400">✓</span> Soporte en Español
          </span>
        </div>

        {/* 3. Buttons */}
        <div className="flex justify-center items-center">
          <Button
            variant="accent"
            href="#promo"
            className="text-lg px-10 py-4 rounded-full shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] border border-accent-500/50 hover:scale-105 transition-transform duration-300"
          >
            VER OFERTA LIMITADA
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary-500/50">
        <ChevronDown className="w-6 h-6" />
      </div>

    </section>
  );
};