import React from 'react';
import Image from 'next/image';

const instaPosts = [
  { id: 1, image: "/tote-1.JPG", link: "https://www.instagram.com/p/DSgpjvrjGg0/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
  { id: 3, image: "/tote-3.JPG", link: "https://www.instagram.com/p/DQr0k41Dyqt/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
  { id: 4, image: "/tote-4.JPG", link: "https://www.instagram.com/p/DQrqH9gDifs/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
];

export default function InstagramFeed() {
  return (
    <section className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-xl font-bold tracking-widest uppercase text-gray-900">
          Síguenos en Instagram
        </h2>
        <a 
          href="https://instagram.com/dualiteshop" 
          target="_blank" 
          className="mt-2 block text-sm text-gray-500 hover:text-black transition italic"
        >
          @dualiteshop
        </a>

        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4">
          {instaPosts.map((post) => (
            <a 
              key={post.id} 
              href={post.link} 
              target="_blank" 
              className="group relative aspect-square overflow-hidden bg-gray-100 block"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                className="object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90"
              />
              {/* Overlay de Icono */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <span className="text-white text-2xl">📸</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}