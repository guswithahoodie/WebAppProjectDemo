const reviews = [
  {
    id: 1,
    content: "La calidad de la lona es increíble. La uso todos los días para la oficina y aguanta de todo. ¡Súper recomendada!",
    author: "María F.",
    role: "Cliente verificada"
  },
  {
    id: 2,
    content: "Buscaba algo minimalista y este producto es perfecta. El detalle de las costuras se nota que es hecho a mano con mucho cuidado.",
    author: "Lucía M.",
    role: "Cliente verificada"
  },
  {
    id: 3,
    content: "El envío fue súper rápido y la atención por WhatsApp de lo mejor. Definitivamente voy a comprar otro color.",
    author: "Camila R.",
    role: "Cliente verificada"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8 shadow-sm border border-gray-100"
            >
              <div>
                <div className="flex gap-1 text-black mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-lg italic text-gray-700 leading-relaxed">
                  "{review.content}"
                </p>
              </div>

              <div className="mt-8">
                <p className="font-bold text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}