import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const AboutFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-primary-900/30 relative overflow-hidden">
      {/* Circuit decor */}
      <div className="absolute top-0 left-10 w-[1px] h-32 bg-gradient-to-b from-primary-500/50 to-transparent"></div>
      <div className="absolute top-0 right-10 w-[1px] h-32 bg-gradient-to-b from-accent-500/50 to-transparent"></div>

      <Section className="py-20">
        
        {/* ABOUT SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
           {/* Left: Branding */}
           <div className="flex flex-col items-start">
              <div className="relative w-16 h-16 mb-6">
                 <div className="absolute inset-0 border border-accent-500 rounded-full opacity-50 animate-spin-slow"></div>
                 <div className="absolute inset-4 border border-primary-500 rounded-full opacity-50"></div>
              </div>
              <h3 className="text-2xl font-bold text-accent-400 tracking-widest mb-2">OMNIA</h3>
              <p className="text-xs uppercase text-primary-400 tracking-[0.3em] mb-6">Growth Systems</p>
              <div className="flex flex-wrap gap-2">
                 {["Automatización", "IA", "Negocios Locales", "Resultados"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full border border-primary-500/30 text-xs text-primary-300 bg-primary-900/10">
                       {tag}
                    </span>
                 ))}
              </div>
           </div>

           {/* Right: Copy */}
           <div>
              <h4 className="text-xl font-bold text-white mb-4">Quién está detrás de OMNIA PRO 3.0</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                 OMNIA GROWTH SYSTEMS nace con una idea clara: que los negocios locales puedan usar automatización e inteligencia artificial de forma sencilla, sin tener que convertirse en “expertos en software”.
              </p>
              <p className="text-slate-300 leading-relaxed">
                 Trabajamos combinando herramientas potentes (CRM, chatbots, fidelización) con un enfoque práctico: ¿qué te ahorra tiempo?, ¿qué te trae más clientes?, ¿qué hace que vuelvan? No vendemos promesas vacías, montamos sistemas reales.
              </p>
           </div>
        </div>

        {/* FINAL CTA SECTION */}
        <div className="border-t border-white/10 pt-16 text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
               El siguiente paso: <br/> <span className="text-primary-400">dejar que el sistema trabaje contigo</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10">
               Puedes seguir gestionando las citas como hasta ahora, o puedes dejar que OMNIA PRO 3.0 se ocupe de la parte pesada. Tú sigues haciendo tu trabajo de siempre, nosotros nos ocupamos de que tu agenda esté llena.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="accent" href="#promo" className="px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-accent-500/40">
                   Solicitar acceso a OMNIA PRO 3.0
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg rounded-full" onClick={() => window.open('https://wa.me/', '_blank')}>
                   Hablar primero y resolver dudas
                </Button>
            </div>
        </div>

        {/* LEGAL FOOTER */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
           <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Omnia Growth Systems. Todos los derechos reservados.
           </div>
           <div className="flex gap-6">
              <a href="#" className="hover:text-primary-400 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Términos</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Contacto</a>
           </div>
        </div>
      </Section>
    </footer>
  );
};