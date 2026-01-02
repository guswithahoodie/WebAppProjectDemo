"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/products' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* LADO IZQUIERDO: Menú más grande */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-3 text-gray-700 hover:text-black transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* CENTRO: Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight text-black absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            TOTE BAG SHOP
          </Link>

          {/* LADO DERECHO: ÍCONO DE TOTE BAG GRANDE */}
          <div className="flex items-center">
            <button onClick={openCart} className="relative p-3 text-gray-700 hover:text-black transition">
              <span className="sr-only">Open cart</span>
              
              {/* Nuevo SVG: Forma de Tote Bag */}
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-9 h-9" // Aumentado de w-6 a w-9
                stroke="currentColor" 
                strokeWidth="1.2"
              >
                {/* Las asas de la Tote Bag */}
                <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7" strokeLinecap="round" />
                {/* El cuerpo cuadrado de la Tote Bag */}
                <path d="M4 7H20V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7Z" />
              </svg>

              {/* Badge de notificación ajustado para el nuevo tamaño */}
              {cartCount > 0 && (
                <span className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MENÚ LATERAL (DRAWER) - Sin cambios, funciona igual */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="relative w-80 bg-white h-full p-8 shadow-2xl flex flex-col">
            <button onClick={() => setIsMenuOpen(false)} className="self-end p-2 text-gray-500 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="mt-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold tracking-tight text-gray-900 hover:italic transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}