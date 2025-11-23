import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Sparkles } from 'lucide-react';

export const Promo: React.FC = () => {
  return (
    <Section id="upsell" className="relative py-24">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-900/20 via-transparent to-transparent blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-slate-950/80 border border-accent-500/30 p-10 md:p-12 rounded-2xl backdrop-blur-md shadow-[0_0_50px_rgba(245,158,11,0.1)] relative overflow-hidden">

          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Icon */}
          <div className="relative z-10 flex justify-center mb-6">
            <div className="p-4 rounded-full bg-accent-500/10 border border-accent-500/30">
              <Sparkles className="w-10 h-10 text-accent-400" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Prefieres que te lo montemos nosotros?
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              OMNIA es fácil, pero si no tienes tiempo, nuestro equipo lo hace por ti. Contrata el <strong className="text-accent-400">PACK PUESTA A PUNTO VIP</strong> (Pago único 297€).
            </p>

            <div className="bg-slate-900/50 border border-accent-500/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-accent-300 mb-4">Incluye:</h3>
              <ul className="text-slate-300 space-y-2 text-left max-w-xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 shrink-0">✓</span>
                  <span>Diseño de tu Ruleta personalizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 shrink-0">✓</span>
                  <span>Configuración completa de Agenda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 shrink-0">✓</span>
                  <span>Importación de clientes existentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 shrink-0">✓</span>
                  <span>Formación 1 a 1 personalizada</span>
                </li>
              </ul>
            </div>

            <Button
              variant="accent"
              href="#"
              className="text-lg px-12 py-4 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300"
            >
              Solicitar Puesta a Punto
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};