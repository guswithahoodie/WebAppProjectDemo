"use client";
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  details?: string;
  care?: string;
}

export default function ProductModal({ product, onClose, onAddToCart }: { 
  product: Product, 
  onClose: () => void,
  onAddToCart: (p: any) => void 
}) {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Fondo oscuro */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Contenido del Modal */}
      <div className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl flex flex-col md:flex-row">
        <button onClick={onClose} className="absolute right-4 top-4 z-10 text-2xl">✕</button>
        
        {/* Imagen Izquierda */}
        <div className="relative w-full md:w-1/2 h-80 md:h-auto bg-gray-50">
          <Image src={product.image} alt={product.name} fill className="object-contain p-8" />
        </div>

        {/* Info Derecha */}
        <div className="p-8 md:w-1/2 flex flex-col">
          <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-xl text-gray-600 mt-2">${product.price.toFixed(2)}</p>
          
          <div className="mt-6 space-y-4 text-gray-700">
            <p>{product.description}</p>
            <div className="pt-4 border-t">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Detalles</p>
              <p className="mt-1 text-sm">{product.details}</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Cuidado</p>
              <p className="mt-1 text-sm">{product.care}</p>
            </div>
          </div>

          <button 
            onClick={() => { onAddToCart(product); onClose(); }}
            className="mt-4 bg-black text-white w-full py-4 rounded-lg font-bold hover:bg-gray-800 transition shadow-lg"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}