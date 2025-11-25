import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Pricing: React.FC = () => {
    const plans = [
        {
            name: 'STARTER',
            subtitle: 'Motor Manual',
            tagline: 'Digitalización esencial.',
            price: '69',
            price2025: '117',
            features: [
                { text: 'Central de Reservas y App', included: true },
                { text: 'Gestión vía Email (Recordatorios y Reseñas)', included: true },
                { text: 'Base de Datos CRM', included: true },
                { text: 'WhatsApp disponible (Envío Manual)', included: true, warning: true },
                { text: 'Sin Automatización de WhatsApp', included: false },
            ],
            popular: false,
            medal: '🥉'
        },
        {
            name: 'GROWTH',
            subtitle: 'Propulsión Automática',
            tagline: '🔥 MÁXIMO RENDIMIENTO',
            price: '97',
            price2025: '165',
            features: [
                { text: 'Automatización WhatsApp Activada (Cero Plantones)', included: true, highlight: true },
                { text: 'Solicitud de Reseñas por SMS/WhatsApp (Alta conversión)', included: true, highlight: true },
                { text: 'Sistema de Reactivación Móvil', included: true, highlight: true },
                { text: 'Widget Web Integrado', included: true, highlight: true },
            ],
            popular: true,
            medal: '🥈'
        },
        {
            name: 'TOTAL AI',
            subtitle: 'Inteligencia Central',
            tagline: 'Autonomía Total con IA',
            price: '197',
            price2025: '335',
            features: [
                { text: 'Agente IA 24/7 (Responde y Agenda en WhatsApp)', included: true, highlight: true },
                { text: 'Wallet Pass (Tarjeta digital en móvil)', included: true, highlight: true },
                { text: 'Piloto Automático en Redes Sociales', included: true, highlight: true },
            ],
            popular: false,
            medal: '🥇'
        }
    ];

    return (
        <Section id="pricing" className="relative py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-accent-400 mb-4 tracking-wide uppercase">
                    Elige tu Plan
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Sin permanencia. Cancela cuando quieras con un solo clic.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`relative bg-slate-950/80 border rounded-2xl p-8 backdrop-blur-md transition-all duration-500 hover:scale-105 group ${plan.popular
                                ? 'border-accent-500/60 shadow-[0_0_40px_rgba(245,158,11,0.2)] scale-105'
                                : 'border-slate-700/30 hover:border-accent-500/40'
                            }`}
                    >
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="text-4xl mb-3">{plan.medal}</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-sm text-slate-400 mb-2">({plan.subtitle})</p>
                            <p className="text-xs text-accent-300 italic">{plan.tagline}</p>
                        </div>

                        {/* Price */}
                        <div className="text-center mb-8">
                            <div className="text-sm text-slate-500 line-through mb-2">
                                Precio 2025: {plan.price2025}€
                            </div>
                            <div className="flex items-baseline justify-center">
                                <span className="text-5xl font-bold text-accent-400">{plan.price}€</span>
                                <span className="text-slate-400 ml-2">/ mes</span>
                            </div>
                            <div className="text-sm text-primary-300 mt-2 font-medium">
                                Ahora {plan.price}€
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-8">
                            {plan.features.map((feature, i) => (
                                <div
                                    key={i}
                                    className={`flex items-start gap-3 ${feature.highlight ? 'text-white' : 'text-slate-300'
                                        }`}
                                >
                                    {feature.warning ? (
                                        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-yellow-400" />
                                    ) : feature.included ? (
                                        <Check className={`w-5 h-5 shrink-0 mt-0.5 ${feature.highlight ? 'text-accent-400' : 'text-primary-400'}`} />
                                    ) : (
                                        <X className="w-5 h-5 shrink-0 mt-0.5 text-slate-600" />
                                    )}
                                    <span className={`text-sm ${!feature.included && 'text-slate-600 line-through'}`}>
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Button
                            variant={plan.popular ? 'accent' : 'outline'}
                            href="#"
                            fullWidth
                            className={`${plan.popular
                                    ? 'shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]'
                                    : 'border-slate-700/40 text-slate-300 hover:border-accent-500/50'
                                }`}
                        >
                            Empezar prueba de 7 días
                        </Button>
                    </div>
                ))}
            </div>

            {/* Lifetime Price Lock */}
            <div className="mt-8 text-center">
                <p className="text-lg text-accent-300 font-semibold">
                    Bloquea este precio de por vida contratando hoy.
                </p>
            </div>

            {/* Note about VIP Pack */}
            <div className="mt-8 text-center max-w-3xl mx-auto">
                <p className="text-sm text-slate-400 italic">
                    <strong>Nota:</strong> Para asegurar que tu sistema funciona al 100% desde el primer día y tener tu web lista, recomendamos activar el 'Pack de Puesta en Marcha VIP' durante el proceso de compra.
                </p>
            </div>
        </Section>
    );
};
