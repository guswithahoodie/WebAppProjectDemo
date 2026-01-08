"use client";
import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí luego podrías conectar con un servicio real, por ahora simulamos el éxito
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          ¿Quieres ser el primero en saber?
        </h2>
        <p className="mt-4 text-gray-400">
          Suscríbete para recibir alertas de nuevos lanzamientos y stock disponible.
        </p>

        {status === 'idle' ? (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-none bg-white/10 px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-white transition"
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-black hover:bg-gray-200 transition active:scale-95"
            >
              Unirme
            </button>
          </form>
        ) : (
          <div className="mt-8 p-4 bg-white/10 rounded-lg max-w-md mx-auto">
            <p className="text-sm font-medium">✨ ¡Te has unido a la lista! Te avisaremos pronto.</p>
          </div>
        )}
      </div>
    </section>
  );
}