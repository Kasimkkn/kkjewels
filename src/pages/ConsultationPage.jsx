import React from 'react';
import AnimatedText from '../components/AnimatedText';
import CustomButton from '../components/CustomButton';
import { Link } from 'react-router-dom';

const ConsultationPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto pt-20">
        <AnimatedText className="text-5xl md:text-7xl font-decorative text-center mb-6">Book Your Personalized Consultation</AnimatedText>
        <AnimatedText className="text-lg md:text-xl font-serif text-gray-300 text-center max-w-2xl mx-auto mb-12" delay={0.2}>
          Experience personalized guidance from our jewelry experts. Whether you're seeking a custom design, a special gift, or advice on a purchase, we're here to assist you.
        </AnimatedText>

        <div className="bg-[#1e1c1c] rounded-lg shadow-lg p-8 md:p-12 border border-gray-800">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">What to Expect:</h2>
          <div className="space-y-8 text-gray-300">
            <div>
              <AnimatedText className="text-xl font-semibold text-white mb-2">Tailored Advice</AnimatedText>
              <AnimatedText className="text-base" delay={0.1}>
                Our specialists will provide expert advice tailored to your needs, helping you make informed decisions about your jewelry.
              </AnimatedText>
            </div>
            <div>
              <AnimatedText className="text-xl font-semibold text-white mb-2">Explore Options</AnimatedText>
              <AnimatedText className="text-base" delay={0.2}>
                Discover our extensive collections, explore customization possibilities, or discuss repair solutions in a comfortable and private setting.
              </AnimatedText>
            </div>
            <div>
              <AnimatedText className="text-xl font-semibold text-white mb-2">No Obligation</AnimatedText>
              <AnimatedText className="text-base" delay={0.3}>
                Our consultations are complimentary and come with no obligation to purchase. Your satisfaction is our priority.
              </AnimatedText>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact">
              <CustomButton className="py-3 px-8">Schedule Your Consultation</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;