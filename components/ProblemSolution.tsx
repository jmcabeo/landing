import React from 'react';
import { X, Check } from 'lucide-react';
import { Section } from './ui/Section';

export const ProblemSolution: React.FC = () => {
  return (
    <Section id="problem">
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Tu agenda está llena… <br/><span className="text-slate-400">pero tú no puedes estar en todo</span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
             Si tienes una peluquería, centro de estética, clínica o cualquier negocio por cita, seguramente tu día a día se parece a esto: WhatsApps a todas horas, llamadas, mensajes en Instagram, citas apuntadas en una libreta… y la sensación constante de que algo se puede escapar.
          </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        {/* Problem */}
        <div className="p-8 rounded-2xl bg-red-900/5 border border-red-500/10 backdrop-blur-sm hover:border-red-500/30 transition-colors">
          <h3 className="text-red-400 font-bold mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Los problemas de siempre
          </h3>
          <ul className="space-y-6">
             {[
               "Citas que llegan por distintos canales (WhatsApp, Insta, tlf) y es fácil que alguna se pierda.",
               "Clientes que no se presentan y te dejan un hueco vacío (plantones).",
               "Mensajes sin responder porque estás atendiendo en el local.",
               "Nada centralizado: cada cosa en una app distinta y todo en tu cabeza."
             ].map((item, i) => (
               <li key={i} className="flex items-start text-slate-400">
                  <X className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" /> 
                  <span>{item}</span>
               </li>
             ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="p-8 rounded-2xl bg-primary-900/5 border border-primary-500/10 backdrop-blur-sm hover:border-primary-500/30 transition-colors relative">
          <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary-500/10 rounded-full blur-xl animate-pulse"></div>
          <h3 className="text-primary-400 font-bold mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(6,182,212,1)]"></span>
             Con OMNIA PRO 3.0
          </h3>
           <p className="text-white mb-6 text-sm italic opacity-80">
             Ponemos orden en tus citas, cuidamos a tus clientes y dejamos que un sistema trabaje en segundo plano mientras tú haces lo que mejor sabes hacer: atender bien.
           </p>
           <ul className="space-y-6">
             {[
               "Agenda centralizada y reservas automáticas.",
               "Recordatorios infalibles para reducir huecos.",
               "Respuestas automáticas cuando no puedes coger el móvil.",
               "Organización total en un solo sistema."
             ].map((item, i) => (
               <li key={i} className="flex items-start text-white">
                  <Check className="w-5 h-5 text-primary-500 mr-3 mt-1 shrink-0" /> 
                  <span className="font-medium">{item}</span>
               </li>
             ))}
          </ul>
        </div>

      </div>
    </Section>
  );
};