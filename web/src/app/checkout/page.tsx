"use client";
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image'; // Importante para las fotos

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [orderId] = useState(() => Math.floor(1000 + Math.random() * 9000));

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío</h1>
        <Link href="/products" className="bg-black text-white px-6 py-3 rounded-lg">Ver productos</Link>
      </div>
    );
  }

  const handleWhatsAppRedirect = () => {
    const phone = "50671081671";
    const rawMessage = `¡Hola! Acabo de realizar un SINPE para el pedido #TB-${orderId}.\n\n` +
      `*Detalles:*\n${items.map(item => `- ${item.name}`).join('\n')}\n\n` +
      `*Total:* $${cartTotal.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(rawMessage);

    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
    clearCart();
    window.location.href = '/thanks';
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Finalizar Pedido #TB-{orderId}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Resumen del Pedido con Imágenes */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold mb-4 border-b pb-2">Tu Carrito</h2>
            <div className="space-y-4 mb-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <div className="relative w-12 h-12 rounded border overflow-hidden flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total a pagar:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Instrucciones de SINPE (Se mantiene igual) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-black">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white p-1 rounded text-[10px] italic font-black px-2">SINPE</span>
              Instrucciones de Pago
            </h2>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-900 text-xs uppercase tracking-wider">Número SINPE Móvil:</p>
                <p className="text-2xl font-mono text-blue-700 font-bold">7108-1671</p>
                <p className="mt-1 font-medium text-blue-800 italic">A nombre de: Dualité Shop</p>
              </div>

              <div className="space-y-2 leading-relaxed">
                <p><strong>1.</strong> Realiza la transferencia por el monto total.</p>
                <p><strong>2.</strong> En la descripción/nota pon: <span className="font-bold bg-yellow-100 px-1">#TB-{orderId}</span></p>
                <p><strong>3.</strong> Haz clic abajo para enviarnos el comprobante por WhatsApp.</p>
              </div>

              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md"
              >
                📱 Enviar Comprobante
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}