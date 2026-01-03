export default function ContactoPage() {
  const shopEmail = "contact.dualiteshop@gmail.com";
  const shopPhone = "50671081671"; // Formato: código país + número

  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
          Estamos para ayudarte
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          ¿Tienes alguna duda sobre tu pedido o quieres un diseño personalizado?
          Escríbenos por cualquiera de nuestros canales oficiales.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Tarjeta WhatsApp */}
          <a
            href={`https://wa.me/${shopPhone}`}
            target="_blank"
            className="flex flex-col items-center p-8 rounded-2xl bg-green-50 border border-green-100 hover:shadow-md transition"
          >
            <span className="text-4xl mb-4">💬</span>
            <h2 className="text-xl font-bold text-green-900">WhatsApp</h2>
            <p className="text-green-700 text-sm mt-2">Respuesta rápida y directa</p>
          </a>

          {/* Tarjeta Email */}
          <a
            href={`mailto:${shopEmail}`}
            className="flex flex-col items-center p-8 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-md transition"
          >
            <span className="text-4xl mb-4">✉️</span>
            <h2 className="text-xl font-bold text-blue-900">Correo Electrónico</h2>
            <p className="text-blue-700 text-sm mt-2">{shopEmail}</p>
          </a>
        </div>

        <div className="mt-12 p-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4 font-bold">Horario de atención</p>
          <p className="text-gray-700">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-700 font-medium mt-1">Sábados: 10:00 AM - 2:00 PM</p>
        </div>
      </div>
    </main>
  );
}