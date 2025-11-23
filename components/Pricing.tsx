import React from 'react';
import { Check, X } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Pricing: React.FC = () => {
    const plans = [
        {
            name: 'OMNIA STARTER',
            medal: '🥉',
            subtitle: 'Para dejar el papel y boli',
            price: '69',
            features: [
                { text: 'Agenda Online 24/7 (Reservas auto)', included: true },
                { text: 'App Móvil de Gestión (iOS/Android)', included: true },
                { text: 'Base de Datos (CRM Automático)', included: true },
                { text: 'Pagos Integrados (Señales/Bonos)', included: true },
                { text: 'Bandeja Unificada (WhatsApp/IG/FB)', included: true },
                { text: 'Sin Recordatorios Automáticos', included: false },
                { text: 'Sin Gestión de Reseñas', included: false },
            ],
            popular: false
        },
        {
            name: 'OMNIA CRECIMIENTO',
            medal: '🥈',
            subtitle: 'La máquina de facturar. Elimina plantones',
            price: '97',
            badge: '🔥 MÁS POPULAR',
            features: [
                { text: 'Todo lo del Plan Starter incluido', included: true },
                { text: 'Anti-Plantones: Recordatorios WhatsApp', included: true, highlight: true },
                { text: 'Reputación Google: Reseñas automáticas', included: true, highlight: true },
                { text: 'Reactivación: Recupera clientes antiguos', included: true, highlight: true },
                { text: 'Gamificación: Ruleta de Premios', included: true, highlight: true },
                { text: 'Chat Widget: Burbuja para tu web', included: true, highlight: true },
            ],
            popular: true
        },
        {
            name: 'OMNIA TOTAL IA',
            medal: '🥇',
            subtitle: 'Tu recepcionista digital con Inteligencia Artificial',
            price: '197',
            features: [
                { text: 'Todo lo del Plan Crecimiento incluido', included: true },
                { text: 'Agente IA WhatsApp: Responde y agenda 24/7', included: true, highlight: true },
                { text: 'Fidelización Wallet: Tarjetas en el móvil', included: true, highlight: true },
                { text: 'Redes Sociales: Programador de contenido', included: true, highlight: true },
                { text: 'Integraciones: Conexiones avanzadas', included: true, highlight: true },
                { text: 'Reportes VIP: Métricas detalladas', included: true, highlight: true },
            ],
            popular: false
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
                        {/* Popular Badge */}
                        {plan.badge && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-500 text-slate-950 text-xs font-bold rounded-full flex items-center gap-2 shadow-lg">
                                {plan.badge}
                            </div>
                        )}

                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="text-4xl mb-3">{plan.medal}</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-sm text-slate-400 italic">{plan.subtitle}</p>
                        </div>

                        {/* Price */}
                        <div className="text-center mb-8">
                            <div className="flex items-baseline justify-center">
                                <span className="text-5xl font-bold text-accent-400">{plan.price}€</span>
                                <span className="text-slate-400 ml-2">/ mes</span>
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
                                    {feature.included ? (
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

            {/* Note about VIP Pack */}
            <div className="mt-12 text-center max-w-3xl mx-auto">
                <p className="text-sm text-slate-400 italic">
                    <strong>Nota:</strong> Para asegurar que tu sistema funciona al 100% desde el primer día y tener tu web lista, recomendamos activar el 'Pack de Puesta en Marcha VIP' durante el proceso de compra.
                </p>
            </div>
        </Section>
    );
};
