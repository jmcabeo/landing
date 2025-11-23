import React from 'react';
import { Scissors, Sparkles, Stethoscope } from 'lucide-react';
import { Section } from './ui/Section';

export const TargetAudience: React.FC = () => {
  const targets = [
    {
      icon: <Scissors className="h-8 w-8 text-white" />,
      title: "Peluquerías",
      gradient: "from-accent-500/20 to-transparent" 
    },
    {
      icon: <Sparkles className="h-8 w-8 text-white" />,
      title: "Centros Estética",
      gradient: "from-primary-500/20 to-transparent" 
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-white" />,
      title: "Clínicas",
      gradient: "from-accent-500/20 to-transparent" 
    }
  ];

  return (
    <Section id="target" className="py-12 border-y border-white/5 bg-black/20">
      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {targets.map((target, idx) => (
          <div key={idx} className="p-8 flex flex-col items-center text-center group hover:bg-white/5 transition-colors relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-b ${target.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="relative z-10 mb-4 p-4 bg-slate-900 rounded-full border border-white/10 group-hover:border-primary-500/50 transition-colors">
               {target.icon}
            </div>
            <h3 className="relative z-10 text-xl font-bold text-slate-300 group-hover:text-white">{target.title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};