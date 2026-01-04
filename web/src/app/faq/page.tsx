import FAQ from "@/components/FAQ";

export default function FaqPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h1>
        <p className="text-gray-500 mb-12">Todo lo que necesitas saber sobre nuestros productos y envíos.</p>
        <FAQ />
      </div>
    </main>
  );
}