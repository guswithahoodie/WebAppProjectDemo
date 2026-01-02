"use client";
import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
  const { items, cartTotal, isCartOpen, closeCart, removeFromCart } = useCart();

  const handleCheckout = () => {
    const phoneNumber = "50671081671"; // <--- Reemplaza con el número de tu novia (ej: 50688888888)
    
    // 1. Agrupamos los productos para que el mensaje sea legible
    const itemsSummary = items.map(item => `- ${item.name} ($${item.price.toFixed(2)})`).join('\n');
    
    // 2. Creamos el mensaje
    const message = `¡Hola! Me gustaría hacer un pedido:\n\n${itemsSummary}\n\n*Total: $${cartTotal.toFixed(2)}*\n\n¿Cómo podemos coordinar el pago y la entrega?`;
    
    // 3. Codificamos el mensaje para que sea válido en una URL
    const encodedMessage = encodeURIComponent(message);
    
    // 4. Creamos el link de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // 5. Abrimos en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

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
              <div key={index} className="flex justify-between items-center py-4 border-b">
                <div>
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 text-sm hover:underline"
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
          
          <button 
            onClick={handleCheckout}
            disabled={items.length === 0}
            className={`w-full py-4 rounded-lg font-bold transition flex items-center justify-center gap-2 ${
              items.length === 0 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {/* Un pequeño icono de WhatsApp opcional */}
            Continuar a WhatsApp
          </button>
          
          <p className="text-[10px] text-center text-gray-400 mt-3 uppercase tracking-widest">
            Pago y envío se coordinan por chat
          </p>
        </div>
      </div>
    </div>
  );
}