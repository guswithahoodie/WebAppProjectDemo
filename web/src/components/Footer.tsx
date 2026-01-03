import Link from 'next/link';

export default function Footer() {
  const shopEmail = "contact.dualiteshop@gmail.com";
  const shopPhone = "50671081671";

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">

          {/* Logo y Descripción */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight text-black uppercase">TOTE BAG SHOP</h2>
            <p className="mt-4 text-sm text-gray-500 max-w-xs leading-relaxed">
              Diseños minimalistas y funcionales hechos con amor para tu día a día.
              Confección artesanal desde Costa Rica.
            </p>
          </div>

          {/* NUEVO: Enlaces de Navegación (Crucial para multi-página) */}
          <div className="text-center md:text-left">
            <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">Explorar</span>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="/products" className="hover:text-black transition">Nuestras Totes</Link></li>
              <li><Link href="/faq" className="hover:text-black transition">Preguntas Frecuentes</Link></li>
              <li><Link href="/contact" className="hover:text-black transition">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto Directo Simplificado */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">Hablemos</span>
            <div className="flex flex-wrap justify-center gap-3">

              {/* Botones redondos más modernos y compactos */}
              <a
                href={`https://wa.me/${shopPhone}`}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-green-50 transition"
                title="WhatsApp"
              >
                <span>💬</span>
              </a>

              <a
                href={`mailto:${shopEmail}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-blue-50 transition"
                title="Correo"
              >
                <span>✉️</span>
              </a>

              <a
                href="https://www.instagram.com/dualiteshop/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-pink-50 transition"
                title="Instagram"
              >
                <span>📸</span>
              </a>
            </div>
          </div>
        </div>

        {/* Línea final */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Tote Bag Shop. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-gray-300 tracking-widest">HANDMADE IN COSTA RICA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}