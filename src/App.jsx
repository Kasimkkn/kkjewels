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
import Footer from './components/Footer';
import ShopPage from './pages/ShopPage'; // Updated import
import ContactPage from './pages/ContactPage';
import GiftingPage from './pages/GiftingPage';
import CustomDesignPage from './pages/CustomDesignPage'; // New import
import RepairsPage from './pages/RepairsPage'; // New import
import ConsultationPage from './pages/ConsultationPage'; // New import
import CertificationsPage from './pages/CertificationsPage'; // New import
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
        <Route path="/shop" element={<ShopPage />} /> {/* Updated route */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gifting" element={<GiftingPage />} />
        <Route path="/custom-design" element={<CustomDesignPage />} /> {/* New route */}
        <Route path="/repairs" element={<RepairsPage />} /> {/* New route */}
        <Route path="/consultation" element={<ConsultationPage />} /> {/* New route */}
        <Route path="/certifications" element={<CertificationsPage />} /> {/* New route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App