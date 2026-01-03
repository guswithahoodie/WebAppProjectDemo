"use client";
import { useCart } from "@/context/CartContext";
import Link from 'next/link';
import Image from 'next/image'; // Importamos Image para las miniaturas

export default function CartSidebar() {
  const { items, cartTotal, isCartOpen, closeCart, removeFromCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={closeCart} />

      <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-bold">Tu Carrito</h2>
          <button onClick={closeCart} className="text-2xl hover:text-gray-500 transition">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 italic">El carrito está vacío</p>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={index} className="flex gap-4 items-center py-4 border-b">
                {/* Miniatura del producto */}
                <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-sm">{item.name}</p>
                  <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 text-xs hover:underline"
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-xl font-bold py-4">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <Link
            href="/checkout"
            onClick={closeCart}
            className={`w-full py-4 rounded-lg font-bold transition flex items-center justify-center gap-2 ${items.length === 0
                ? 'bg-gray-300 pointer-events-none'
                : 'bg-black text-white hover:bg-gray-800'
              }`}
          >
            Finalizar Compra
          </Link>

          <p className="text-[10px] text-center text-gray-400 mt-3 uppercase tracking-widest">
            Revisarás detalles de SINPE en el siguiente paso
          </p>
        </div>
      </div>
    </div>
  );
}