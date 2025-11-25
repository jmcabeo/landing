import React from 'react';
import { TrendingDown, MessagesSquare, Clock } from 'lucide-react';
import { Section } from './ui/Section';

export const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      text: 'Fugas de Ingresos: Citas perdidas (No-Shows) por falta de confirmación.'
    },
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      text: 'Desconexión: Mensajes de WhatsApp e Instagram dispersos y sin control.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: 'Gestión Manual: Perder horas en tareas que un software debería hacer solo.'
    }
  ];

  return (
    <Section id="problem" className="relative py-24 bg-slate-900/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-400 mb-6 leading-tight">
            ¿Sientes que tu negocio pierde tracción?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="group bg-slate-950/80 border border-red-500/20 p-6 rounded-xl backdrop-blur-md hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)] transition-all duration-300 active:border-red-500/50 active:shadow-[0_0_20px_rgba(239,68,68,0.1)]"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-lg bg-red-500/10 text-red-400 group-hover:bg-red-500/20 group-active:bg-red-500/20 transition-colors">
                  {problem.icon}
                </div>
                <p className="text-slate-300 leading-relaxed">
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