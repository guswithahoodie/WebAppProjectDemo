import React from 'react';

const faqs = [
  {
    question: "¿Cuáles son los tiempos de entrega?",
    answer: "Nuestros bolsos son artesanales. El envío suele tardar entre 2 y 5 días hábiles dependiendo de tu ubicación."
  },
  {
    question: "¿Realizan envíos a todo el país?",
    answer: "¡Sí! Coordinamos los envíos por medio de Correos o mensajería privada al finalizar tu compra por WhatsApp."
  },
  {
    question: "¿Aceptan cambios o devoluciones?",
    answer: "Al ser productos hechos a mano, revisamos cada uno antes del envío. Si tienes algún problema, escríbenos para ayudarte."
  }
];

export default function FAQ() {
  return (
    <section className="py-6 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Preguntas Frecuentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}