import React from 'react';
import { Section } from './ui/Section';

export const Transparency: React.FC = () => {
    return (
        <Section className="py-16 bg-slate-900/30">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-white mb-6">
                    ¿Cómo funcionan los mensajes y la IA?
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                    Creemos en pagar solo por lo que usas. Tu licencia mensual cubre el software y el mantenimiento completo.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                    Las comunicaciones (WhatsApp, SMS e IA) funcionan mediante un <strong className="text-accent-400">Monedero Virtual</strong> de recarga automática (como la gasolina del coche). Solo pagas céntimos cuando el sistema trabaja por ti.
                </p>
                <div className="inline-block px-6 py-3 bg-accent-500/10 border border-accent-500/30 rounded-lg">
                    <p className="text-accent-300 font-semibold">
                        🎁 Incluimos 5€ de saldo gratis cada mes en los planes Crecimiento y Total para que arranques sin costes.
                    </p>
                </div>
            </div>
        </Section>
    );
};
