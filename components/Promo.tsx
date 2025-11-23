import React from 'react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { Sparkles } from 'lucide-react';

export const Promo: React.FC = () => {
  return (
    <Section id="promo" className="relative py-32">
      
      {/* Gold Halo Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 blur-[100px] rounded-full animate-pulse-glow pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-slate-950 border-2 border-accent-500/50 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(245,158,11,0.15)] relative overflow-hidden group hover:shadow-[0_0_70px_rgba(245,158,11,0.25)] transition-shadow duration-500">
          
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-500/5 to-transparent pointer-events-none"></div>

          {/* "Chip" Seal */}
          <div className="absolute top-0 right-0 p-4">
             <div className="bg-accent-500 text-black text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-bl-lg shadow-lg animate-float">
                Promoción Especial
             </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-accent-500/10 rounded-full mb-6 border border-accent-500/30">
               <Sparkles className="text-accent-400 w-6 h-6" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
              Implantar tu sistema ahora <br/> <span className="text-accent-400">cuesta mucho menos</span>
            </h2>
            
            <div className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed space-y-4 text-left md:text-center">
              <p>
                En este momento estamos ofreciendo una <strong>promoción especial de bajo coste</strong> para negocios que quieran ser de los primeros en trabajar con OMNIA PRO 3.0.
              </p>
              <p>
                Nuestro objetivo es sencillo: ayudarte a poner orden en tus citas y clientes sin que la inversión inicial sea una barrera. A cambio, buscamos negocios abiertos a darnos feedback real.
              </p>
              <p className="text-sm text-accent-200 italic">
                 Es una oportunidad para tener un sistema que normalmente implicaría mucho más tiempo y coste, con condiciones ventajosas por tiempo limitado.
              </p>
            </div>

            <Button variant="accent" className="text-xl px-12 py-5 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 hover:shadow-[0_0_50px_rgba(245,158,11,0.7)] transition-transform duration-300 bg-gradient-to-r from-accent-500 to-accent-600 border border-white/20">
              Quiero aprovechar la promoción
            </Button>
            
            <p className="mt-6 text-xs text-slate-500 uppercase tracking-widest">
              Plazas limitadas · Feedback Requerido
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};