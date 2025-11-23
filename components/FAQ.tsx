import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from './ui/Section';

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: '¿Hay permanencia?',
            answer: 'No. OMNIA es un servicio mensual. Puedes cancelar cuando quieras con un solo clic desde tu panel.'
        },
        {
            question: '¿Es difícil de configurar?',
            answer: 'Es muy intuitivo. Además, tienes acceso a nuestra academia con vídeos paso a paso. Y recuerda: con el Pack de Puesta en Marcha, nosotros te lo dejamos todo configurado el primer día para que no tengas que pelearte con la tecnología.'
        },
        {
            question: '¿Qué pasa si me paso del saldo de mensajes?',
            answer: 'El sistema tiene una recarga automática de seguridad (ej. 10€) para que tus clientes nunca se queden sin respuesta. Tú estableces los límites en tu panel de control para tener siempre el gasto controlado.'
        }
    ];

    return (
        <Section id="faq" className="py-24">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-accent-400 mb-12 text-center uppercase">
                    Preguntas Frecuentes
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-950/80 border border-slate-700/30 rounded-xl overflow-hidden backdrop-blur-md hover:border-accent-500/40 transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg font-semibold text-white group-hover:text-accent-300 transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-accent-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-60' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
