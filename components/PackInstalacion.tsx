import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const PackInstalacion: React.FC = () => {
    const features = [
        {
            emoji: '🚀',
            title: 'Infraestructura Web:',
            text: '¿No tienes web? Te creamos una Página de Reservas profesional. ¿Ya tienes? La integramos y optimizamos para convertir visitas en citas.'
        },
        {
            emoji: '📅',
            title: 'Configuración Técnica Total:',
            text: 'Definimos tus horarios, servicios, precios y empleados en la agenda.'
        },
        {
            emoji: '🎰',
            title: 'Diseño de Gamificación:',
            text: 'Creamos tu Ruleta de Premios o Tarjeta de Sellos personalizada con tu logo.'
        },
        {
            emoji: '📂',
            title: 'Migración de Datos:',
            text: 'Importamos tu lista de clientes actual (Excel o Agenda) al sistema.'
        },
        {
            emoji: '📱',
            title: 'Automatización de Redes Sociales:',
            text: 'Conectamos tus perfiles al Piloto Automático para programar y publicar contenido en tus redes sin esfuerzo manual.'
        },
        {
            emoji: '🎓',
            title: 'Formación Personalizada:',
            text: 'Sesión 1 a 1 por Zoom para enseñar a tu equipo a usar OMNIA.'
        }
    ];

    return (
        <Section id="pack-instalacion" className="relative py-24 bg-slate-900/30">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Main content box */}
                <div className="bg-slate-950/80 border border-accent-500/30 rounded-2xl p-10 md:p-16 backdrop-blur-md shadow-[0_0_60px_rgba(245,158,11,0.15)]">

                    {/* Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight flex items-center justify-center gap-3">
                            <span className="text-4xl">⚠️</span>
                            <span>OFERTA DE LANZAMIENTO: ACCESO FUNDADOR</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            Esta condición es una anomalía única de lanzamiento. El coste real de esta infraestructura es de 1.497€. Una vez cerremos el cupo de fundadores, este precio no volverá a repetirse jamás.
                        </p>
                    </div>

                    {/* Price highlight */}
                    <div className="text-center mb-12">
                        <div className="inline-block bg-accent-500/10 border-2 border-accent-500/50 rounded-2xl px-8 py-6">
                            <div className="mb-3">
                                <p className="text-sm text-slate-400 uppercase font-semibold tracking-wide line-through">
                                    VALOR REAL DE LA INFRAESTRUCTURA: 1.497€
                                </p>
                            </div>
                            <div className="mb-3">
                                <span className="text-6xl md:text-7xl font-bold text-white">297€</span>
                            </div>
                            <div>
                                <p className="text-accent-300 font-semibold">
                                    (Pago único de acceso. Ahorras 1.200€)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-6 mb-12">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-4 bg-slate-900/50 border border-slate-700/30 rounded-xl p-5 hover:border-accent-500/40 transition-all"
                            >
                                <span className="text-3xl shrink-0">{feature.emoji}</span>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">
                                        {feature.title}
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed">
                                        {feature.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <Button
                            variant="accent"
                            href="#"
                            className="text-xl px-12 py-5 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_50px_rgba(245,158,11,0.8)] hover:scale-105 transition-all duration-300"
                        >
                            Quiero mi Sistema Llave en Mano
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
