"use client";
import Link from 'next/link';

export default function ThanksPage() {
  return (
    // Cambiamos 'justify-center' por 'pt-20' (o la cantidad que prefieras)
    <main className="min-h-screen flex flex-col items-center pt-20 p-6 text-center bg-white">
      <div className="max-w-md">
        <span className="text-6xl">✨</span>
        <h1 className="text-4xl font-bold mt-6 mb-4 italic">¡Muchas Gracias!</h1>
        <p className="text-gray-600 mb-8">
          Hemos recibido tu notificación. En cuanto confirmemos el SINPE,
          empezaremos a preparar tu pedido con todo el amor de Dualité Shop.
        </p>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-widest font-bold text-gray-400">¿Qué sigue?</p>
          <p className="text-sm mt-2 text-gray-700">Te contactaremos por WhatsApp si necesitamos algún detalle adicional para la entrega.</p>
        </div>

        <Link
          href="/products"
          className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition shadow-lg"
        >
          Seguir Explorando
        </Link>
      </div>
    </main>
  );
}