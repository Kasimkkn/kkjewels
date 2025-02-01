import Lenis from 'lenis'
import React, { useEffect } from 'react'
import CategorySection from './components/CategorySection'
import DiamondShopSection from './components/DiamondShopSection'
import Header from './components/Header'
import JewelryFeatureSection from './components/JewelryFeatureSection'
import NewCollection from './components/NewCollection'
import OurWorksSection from './components/OurWorksSection'
import SliderSection from './components/SliderSection'
import Testimonials from './components/Testimonials'

const App = () => {
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
    <>
      <Header />
      <main className="flex flex-col pt-[3rem] w-screen overflow-x-hidden">
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
