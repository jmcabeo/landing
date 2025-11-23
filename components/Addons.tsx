import React from 'react';
import { CalendarCheck, Bot, MessageCircle, Award, Share2, ShoppingCart, BarChart2 } from 'lucide-react';
import { Section } from './ui/Section';

export const Addons: React.FC = () => {
  const modules = [
    {
      icon: <CalendarCheck />,
      title: "Bookings",
      subtitle: "El corazón de tus citas",
      desc: "Calendarios multi-profesional, gestión de horarios y reservas omnicanal."
    },
    {
      icon: <Bot />,
      title: "Automation",
      subtitle: "Trabajo pesado automático",
      desc: "Confirmaciones, recordatorios, reactivación de clientes y petición de reseñas."
    },
    {
      icon: <MessageCircle />,
      title: "Agents IA",
      subtitle: "Asistentes inteligentes 24/7",
      desc: "Live chat y soporte para dudas frecuentes, conectado con WhatsApp."
    },
    {
      icon: <Award />,
      title: "Loyalty",
      subtitle: "Fidelización avanzada",
      desc: "Sellos digitales, puntos, tarjetas regalo, cupones y rascas."
    },
    {
      icon: <Share2 />,
      title: "Social",
      subtitle: "Redes conectadas",
      desc: "Planificación de contenidos y conversión de mensajes privados en citas."
    },
    {
      icon: <ShoppingCart />,
      title: "Commerce",
      subtitle: "Venta online",
      desc: "Venta de bonos, packs, productos y pagos anticipados."
    },
    {
      icon: <BarChart2 />,
      title: "Insights",
      subtitle: "Visión real del negocio",
      desc: "Métricas de citas, servicios más demandados y rendimiento de campañas."
    },
  ];

  return (
    <Section id="addons" className="relative overflow-hidden py-24">

      {/* Mandala Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-5 pointer-events-none animate-mandala-spin">
        <div className="absolute inset-0 border-[2px] border-accent-500/30 rounded-full border-dashed"></div>
        <div className="absolute inset-[100px] border border-accent-500/20 rounded-full"></div>
        <div className="absolute inset-[200px] border border-accent-500/20 rounded-full rotate-45 border-dashed"></div>
        <div className="absolute inset-[300px] border-[40px] border-accent-500/5 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-400 mb-4 tracking-wide uppercase">
            Módulos OMNIA PRO 3.0
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Todo lo que montamos vive dentro de OMNIA PRO 3.0, nuestro sistema operativo que centraliza todo. Lo estructuramos en módulos para que puedas crecer paso a paso.
          </p>
        </div>

        {/* MODULES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {modules.map((item, idx) => (
            <div key={idx} className="bg-slate-950/80 border border-accent-500/20 p-6 rounded-xl hover:border-accent-500/60 hover:shadow-[inset_0_0_20px_rgba(245,158,11,0.1)] active:border-accent-500/60 active:shadow-[inset_0_0_20px_rgba(245,158,11,0.1)] transition-all duration-300 group backdrop-blur-md flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded bg-accent-500/10 text-accent-400 mr-3 group-hover:bg-accent-500 group-active:bg-accent-500 group-hover:text-white group-active:text-white transition-colors shrink-0">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-none">{item.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider text-accent-500/70 font-semibold">Omnia PRO</span>
                </div>
              </div>
              <h4 className="text-sm font-medium text-primary-200 mb-2">{item.subtitle}</h4>
              <p className="text-sm text-slate-400 border-l border-accent-500/10 pl-3 group-hover:border-accent-500/50 group-active:border-accent-500/50 transition-colors flex-grow">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* SUPPLEMENTS / FUTURE GROWTH SECTION */}
        <div className="border-t border-white/10 pt-12 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Empieza por lo básico y añade módulos después</h3>
          <p className="text-slate-400 max-w-3xl mx-auto mb-8">
            No hace falta implantarlo todo desde el primer día. El sistema está pensado para crecer contigo. Cuando tengas lo básico rodando, podemos añadir:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Programas de puntos avanzados",
              "Campañas segmentadas",
              "Promociones 'Hora Feliz'",
              "Tienda Online Completa",
              "Secuencias de Bienvenida",
              "Integraciones a medida"
            ].map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-slate-900 border border-primary-500/20 text-sm text-primary-300 hover:bg-primary-900/20 hover:border-primary-500/50 transition-colors cursor-default">
                + {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};