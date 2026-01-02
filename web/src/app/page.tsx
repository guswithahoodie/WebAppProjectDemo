import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero simple */}
      <header className="mb-12 text-center">
        <p className="mt-10 text-lg text-gray-500">
          Minimalist designs for everyday carry.
        </p>
      </header>

      <AboutUs />
      <Testimonials />
      <Newsletter />
      <InstagramFeed />
    </main>
  );
}