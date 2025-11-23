import React from 'react';
import { Section } from './ui/Section';

export const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Conocernos",
      desc: "Llamada corta para entender tu negocio: servicios, horarios, equipo y situación actual."
    },
    {
      num: "02",
      title: "Diseño Sistema Base",
      desc: "Configuramos tu calendario, mensajes automáticos y lógica de reactivación en OMNIA PRO 3.0."
    },
    {
      num: "03",
      title: "Puesta en Marcha",
      desc: "Probamos el sistema contigo. Hacemos reservas de prueba y ajustamos detalles."
    },
    {
      num: "04",
      title: "Entrega y Formación",
      desc: "Te enseñamos en minutos a ver citas y gestionar lo básico. Es muy intuitivo."
    },
    {
      num: "05",
      title: "Ajustes y Crecimiento",
      desc: "Con el sistema rodando, revisamos y sumamos módulos extra si lo necesitas."
    }
  ];

  return (
    <Section id="process" className="relative">
       {/* Background element */}
       <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-400 mb-4 tracking-wide drop-shadow-lg uppercase">
          Cómo trabajamos
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Cómo ponemos OMNIA PRO 3.0 a funcionar en tu negocio. Sin complicaciones.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line - Cyan Circuit */}
        <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-primary-900/30 overflow-hidden">
           {/* Static Glow */}
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent animate-pulse"></div>
           {/* Moving Data Packets */}
           <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-80 animate-data-stream"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              
              {/* Circle Number */}
              <div className="relative w-20 h-20 mb-8 transition-transform duration-500 group-hover:scale-110 shrink-0">
                 {/* Outer Ring */}
                 <div className="absolute inset-0 rounded-full border border-accent-500/30 group-hover:border-accent-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all bg-slate-950"></div>
                 {/* Inner text */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-400 font-mono">{step.num}</span>
                 </div>
                 {/* Connectivity dots */}
                 {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-[calc(50%+2rem)] w-full h-[2px] bg-transparent"></div>
                 )}
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-300 transition-colors leading-tight h-12 flex items-center justify-center">
                  {step.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};