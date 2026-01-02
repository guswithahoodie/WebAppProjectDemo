"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type CartItem = { id: number; name: string; price: number; };

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 1. CARGAR DATOS: Se ejecuta una sola vez al montar el componente
  useEffect(() => {
    const savedCart = localStorage.getItem('tote-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error recuperando el carrito del almacenamiento local", e);
      }
    }
  }, []);

  // 2. GUARDAR DATOS: Se ejecuta cada vez que 'items' cambia
  useEffect(() => {
    // Solo guardamos si hay cambios (evita borrar el carrito al inicio)
    if (items.length >= 0) {
      localStorage.setItem('tote-cart', JSON.stringify(items));
    }
  }, [items]);

  const addToCart = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const cartTotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      cartCount: items.length, 
      cartTotal, 
      isCartOpen, 
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false)
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}