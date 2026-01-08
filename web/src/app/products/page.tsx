"use client";
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { useCart } from '@/context/CartContext';

export default function ProductosPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { addToCart } = useCart();

  const products = [
    /// { id: 1, name: "Sunset Tote", price: 25.00, image: "/tote-1.JPG", badge: "Best Seller", description: "...", details: "...", care: "..." },
    { id: 2, name: "Ocean Breeze", price: 28.50, image: "/tote-2.JPG", description: "...", details: "...", care: "..." },
    { id: 3, name: "Forest Walk", price: 22.00, image: "/tote-3.JPG", description: "...", details: "...", care: "..." },
    { id: 4, name: "Midnight Shopper", price: 30.00, image: "/tote-4.JPG", description: "...", details: "...", care: "..." },
  ];

  return (
    <main className="min-h-screen p-4 md:p-12 bg-white">
      <header className="mb-12">
        <h1 className="text-3xl font-bold border-b pb-4">Nuestra Colección</h1>
      </header>

      {/* Grid: 1 columna en móvil, 4 en desktop */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} onClick={() => setSelectedProduct(product)} className="cursor-pointer">
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}
    </main>
  );
}