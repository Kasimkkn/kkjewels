import React from 'react';
import AnimatedText from '../components/AnimatedText';
import CustomButton from '../components/CustomButton';
import { Link } from 'react-router-dom';

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto pt-20">
        <AnimatedText className="text-5xl md:text-7xl font-decorative text-center mb-6">Certifications & Authenticity</AnimatedText>
        <AnimatedText className="text-lg md:text-xl font-serif text-gray-300 text-center max-w-2xl mx-auto mb-12" delay={0.2}>
          At KkJewels, we are committed to providing you with only the highest quality and ethically sourced gemstones and precious metals. Your trust is our most valuable asset.
        </AnimatedText>

        <div className="bg-[#1e1c1c] rounded-lg shadow-lg p-8 md:p-12 border border-gray-800">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Commitment to Quality:</h2>
          <div className="space-y-8 text-gray-300">
            <div>
              <AnimatedText className="text-xl font-semibold text-white mb-2">Certified Gemstones</AnimatedText>
              <AnimatedText className="text-base" delay={0.1}>
                Many of our diamonds and colored gemstones come with independent certifications from world-renowned gemological laboratories such as GIA (Gemological Institute of America) and IGI (International Gemological Institute). These certifications guarantee the quality and characteristics of your stone.
              </AnimatedText>
            </div>
            <div>
              <AnimatedText className="text-xl font-semibold text-white mb-2">Ethical Sourcing</AnimatedText>
              <AnimatedText className="text-base" delay={0.2}>
                We adhere to strict ethical sourcing practices, ensuring that all our materials are obtained responsibly and contribute to sustainable communities.
              </AnimatedText>
            </div>
            <div>
              <AnimatedText className="text-xl font-semibold text-white mb-2">Authenticity Guarantee</AnimatedText>
              <AnimatedText className="text-base" delay={0.3}>
                Every piece of KkJewels jewelry comes with a guarantee of authenticity, assuring you of its material composition and craftsmanship.
              </AnimatedText>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact">
              <CustomButton className="py-3 px-8">Learn More About Our Standards</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;