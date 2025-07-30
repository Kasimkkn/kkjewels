import React from 'react';
import AnimatedText from '../components/AnimatedText';
import CustomButton from '../components/CustomButton';
import { Link } from 'react-router-dom';

const CustomDesignPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto pt-20">
        <AnimatedText className="text-5xl md:text-7xl font-decorative text-center mb-6">Craft Your Dream Piece</AnimatedText>
        <AnimatedText className="text-lg md:text-xl font-serif text-gray-300 text-center max-w-2xl mx-auto mb-12" delay={0.2}>
          Bring your unique vision to life with KkJewels' bespoke custom design service. From concept to creation, we work closely with you to craft a piece that is truly yours.
        </AnimatedText>

        <div className="bg-[#1e1c1c] rounded-lg shadow-lg p-8 md:p-12 border border-gray-800">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Custom Design Process</h2>
          <div className="space-y-8 text-gray-300">
            <div>
              <AnimatedText className="text-xl font-semibold text-white mb-2">1. Consultation & Concept</AnimatedText>
              <AnimatedText className="text-base" delay={0.1}>
                Share your ideas, inspirations, and preferences with our expert designers. We'll discuss materials, gemstones, and design elements to capture your vision.
              </AnimatedText>
            </div>
            <div>
              <AnimatedText className="text-xl font-semibold text-white mb-2">2. Design & Approval</AnimatedText>
              <AnimatedText className="text-base" delay={0.2}>
                Our designers will create detailed sketches and 3D renderings of your custom piece. You'll have the opportunity to review and refine the design until it's perfect.
              </AnimatedText>
            </div>
            <div>
              <AnimatedText className="text-xl font-semibold text-white mb-2">3. Craftsmanship</AnimatedText>
              <AnimatedText className="text-base" delay={0.3}>
                Once approved, our master jewelers will meticulously handcraft your unique piece using the finest materials and techniques, ensuring exceptional quality and beauty.
              </AnimatedText>
            </div>
            <div>
              <AnimatedText className="text-xl font-semibold text-white mb-2">4. Delivery</AnimatedText>
              <AnimatedText className="text-base" delay={0.4}>
                Your custom-designed jewelry is carefully inspected and presented to you, ready to be cherished for a lifetime.
              </AnimatedText>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact">
              <CustomButton className="py-3 px-8">Start Your Custom Design</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDesignPage;