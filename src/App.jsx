import React, { useEffect } from 'react'
import Header from './components/Header'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Testimonials from './components/Testimonials'
import NewCollection from './components/NewCollection'
import JewelryFeatureSection from './components/JewelryFeatureSection'
import OurWorksSection from './components/OurWorksSection'
import CategorySection from './components/CategorySection'
import DiamondShopSection from './components/DiamondShopSection'
import SliderSection from './components/SliderSection'
import Lenis from 'lenis'

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness
      smooth: true // Enable smooth scrolling
    });

    // Request animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <Header />
      <main className="flex flex-col pt-[3.1rem] w-screen overflow-x-hidden">
        <SliderSection />
        <DiamondShopSection />
        <CategorySection />
        <OurWorksSection />
        <NewCollection />
        <JewelryFeatureSection />
        <Testimonials />
      </main>
    </>
  )
}

export default App
