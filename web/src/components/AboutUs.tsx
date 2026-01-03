import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">

          {/* Imagen de la Creadora/Proceso */}
          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/tote-3.JPG" // <--- Aquí puedes poner una foto de ella o del taller
              alt="Nuestra Historia"
              fill
              className="object-contain"
            />
          </div>

          {/* Texto de la Historia */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hecho a mano, pensado para ti
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              Tote Bag Shop nació de la búsqueda de la bolsa perfecta: simple, resistente y con estilo.
              Cada pieza es diseñada y confeccionada artesanalmente, cuidando cada detalle
              desde la selección de la lona hasta la última costura.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-8">
              No solo vendemos bolsas; compartimos una visión de consumo consciente y diseño
              minimalista que te acompaña en tus aventuras diarias, desde el mercado hasta la oficina.
            </p>

            {/* Un pequeño detalle de firma o frase */}
            <div className="mt-10">
              <p className="font-serif italic text-xl text-gray-900">
                — Con amor, la creadora.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}