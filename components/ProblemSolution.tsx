import React from 'react';
import { Phone, Users, MessagesSquare, Database } from 'lucide-react';
import { Section } from './ui/Section';

export const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: <Phone className="w-6 h-6" />,
      text: 'El teléfono no para: Interrupciones constantes mientras atiendes.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: 'Plantones (No-Shows): Gente que reserva y no aparece. Dinero perdido.'
    },
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      text: 'Caos de mensajes: WhatsApps, Instagram y llamadas... todo disperso.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      text: 'Clientes perdidos: No tienes una base de datos real para hacer que vuelvan.'
    }
  ];

  return (
    <Section id="problem" className="relative py-24 bg-slate-900/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-400 mb-6 leading-tight">
            ¿Te suena esta historia? Tu servicio es de 10, pero la gestión te quita vida.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="group bg-slate-950/80 border border-red-500/20 p-6 rounded-xl backdrop-blur-md hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)] transition-all duration-300 active:border-red-500/50 active:shadow-[0_0_20px_rgba(239,68,68,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10 text-red-400 group-hover:bg-red-500/20 group-active:bg-red-500/20 transition-colors shrink-0">
                  {problem.icon}
                </div>
                <p className="text-slate-300 leading-relaxed pt-2">
                  ❌ {problem.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};