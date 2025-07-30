import Lenis from 'lenis'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategorySection from './components/CategorySection'
import DiamondShopSection from './components/DiamondShopSection'
import Header from './components/Header'
import JewelryFeatureSection from './components/JewelryFeatureSection'
import NewCollection from './components/NewCollection'
import OurWorksSection from './components/OurWorksSection'
import SliderSection from './components/SliderSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'; // Import the new Footer
import ProductsPage from './pages/ProductsPage'; // Import new pages
import ContactPage from './pages/ContactPage';
import GiftingPage from './pages/GiftingPage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeContent = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="flex flex-col w-screen overflow-x-hidden">
      <SliderSection />
      <DiamondShopSection />
      <CategorySection />
      <OurWorksSection />
      <NewCollection />
      <JewelryFeatureSection />
      <Testimonials />
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gifting" element={<GiftingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App