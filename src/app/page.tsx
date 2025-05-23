import Header from '../../components/Header';
import Hero from '../../components/sections/Hero';
import Booking from '../../components/sections/Booking';
import Shop from '../../components/sections/Shop';
import Testimonials from '../../components/sections/Testimonials';
import Footer from '../../components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Booking />
      <Shop />
      <Testimonials />
      <Footer />
    </main>
  );
}
