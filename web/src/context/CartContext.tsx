"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string; // <--- Agrega esta línea
};

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void; // <--- Agregado a la interfaz
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

  // 1. CARGAR DATOS
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

  // 2. GUARDAR DATOS
  useEffect(() => {
    localStorage.setItem('tote-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  // 3. FUNCIÓN PARA LIMPIAR TODO
  const clearCart = () => {
    setItems([]);
    localStorage.removeItem('tote-cart'); // Limpieza profunda del storage
  };

  const cartTotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      clearCart, // <--- Expuesta en el provider
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