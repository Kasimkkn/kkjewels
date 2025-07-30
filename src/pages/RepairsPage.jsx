import React from 'react';
import AnimatedText from '../components/AnimatedText';
import CustomButton from '../components/CustomButton';
import { Link } from 'react-router-dom';

const RepairsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto pt-20">
        <AnimatedText className="text-5xl md:text-7xl font-decorative text-center mb-6">Expert Jewelry Repairs</AnimatedText>
        <AnimatedText className="text-lg md:text-xl font-serif text-gray-300 text-center max-w-2xl mx-auto mb-12" delay={0.2}>
          Restore the beauty and integrity of your cherished jewelry with KkJewels' professional repair services. Our skilled artisans handle each piece with the utmost care and precision.
        </AnimatedText>

        <div className="bg-[#1e1c1c] rounded-lg shadow-lg p-8 md:p-12 border border-gray-800">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Repair Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg md:text-xl pl-4">
            <li><AnimatedText delay={0.1}>Ring Sizing & Reshaping</AnimatedText></li>
            <li><AnimatedText delay={0.2}>Chain & Bracelet Repair</AnimatedText></li>
            <li><AnimatedText delay={0.3}>Stone Setting & Replacement</AnimatedText></li>
            <li><AnimatedText delay={0.4}>Clasp Repair & Replacement</AnimatedText></li>
            <li><AnimatedText delay={0.5}>Polishing & Cleaning</AnimatedText></li>
            <li><AnimatedText delay={0.6}>Prong Re-tipping & Rebuilding</AnimatedText></li>
            <li><AnimatedText delay={0.7}>Pearl Restringing</AnimatedText></li>
          </ul>
          <AnimatedText className="text-gray-300 mt-8 text-center text-base md:text-lg" delay={0.8}>
            All repairs are performed by experienced jewelers using state-of-the-art equipment and techniques to ensure the highest quality results.
          </AnimatedText>
          <div className="mt-12 text-center">
            <Link to="/contact">
              <CustomButton className="py-3 px-8">Get a Repair Quote</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairsPage;