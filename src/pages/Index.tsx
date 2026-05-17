import Navbar from '@/components/site/Navbar';
import Hero from '@/components/site/Hero';
import Categories from '@/components/site/Categories';
import Products from '@/components/site/Products';
import Benefits from '@/components/site/Benefits';
import About from '@/components/site/About';
import Testimonials from '@/components/site/Testimonials';
import FAQ from '@/components/site/FAQ';
import CTASection from '@/components/site/CTASection';
import Footer from '@/components/site/Footer';
import FloatingWhatsApp from '@/components/site/FloatingWhatsApp';

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Benefits />
      <About />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
