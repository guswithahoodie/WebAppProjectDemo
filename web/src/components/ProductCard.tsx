"use client";

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  badge?: string;
}

export default function ProductCard({ id, name, price, image, badge }: ProductProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative block overflow-hidden border border-gray-200 rounded-xl shadow-sm bg-white">

      {/* Contenedor de la Imagen */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50 p-6 sm:p-8">

        {/* ETIQUETA (BADGE) */}
        {badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
            {badge}
          </span>
        )}

        <Image
          src={image}
          alt={name}
          fill
          className="object-contain transition duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={id <= 4} // Optimización SRE: Carga prioritaria para los primeros productos
        />
      </div>

      {/* Información del Producto */}
      <div className="relative bg-white p-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900 leading-tight">{name}</h3>
        <p className="mt-2 text-gray-700 font-bold text-xl">${price.toFixed(2)}</p>

        {/* BOTÓN "FAT FINGER" OPTIMIZADO */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart({ id, name, price, image }); // Añadimos image para que el carrito la muestre
          }}
          className="mt-5 block w-full rounded-lg bg-black text-white py-4 px-6 text-sm font-bold uppercase tracking-widest transition duration-300 active:scale-95 md:hover:bg-gray-800"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}