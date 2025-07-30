import React from 'react';
import AnimatedText from '../components/AnimatedText';
import CustomButton from '../components/CustomButton';

const GiftingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto pt-20">
        <AnimatedText className="text-5xl md:text-7xl font-decorative text-center mb-6">Thoughtful Gifting Options</AnimatedText>
        <AnimatedText className="text-lg md:text-xl font-serif text-gray-300 text-center max-w-3xl mx-auto mb-12" delay={0.2}>
          Make every occasion special with a gift from KkJewels. Discover our range of personalized and luxurious gifting solutions.
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Gift Cards Section */}
          <div className="bg-[#1e1c1c] rounded-lg shadow-lg p-8 border border-gray-800">
            <AnimatedText className="text-3xl font-semibold text-white mb-4">Gift Cards</AnimatedText>
            <AnimatedText className="text-gray-300 mb-6" delay={0.1}>
              Unsure what to choose? A KkJewels gift card is the perfect present, allowing your loved ones to select their dream piece from our exquisite collection. Available in various denominations.
            </AnimatedText>
            <CustomButton>Purchase Gift Card</CustomButton>
          </div>

          {/* Personalized Engraving Section */}
          <div className="bg-[#1e1c1c] rounded-lg shadow-lg p-8 border border-gray-800">
            <AnimatedText className="text-3xl font-semibold text-white mb-4">Personalized Engraving</AnimatedText>
            <AnimatedText className="text-gray-300 mb-6" delay={0.1}>
              Add a unique touch to your gift with our bespoke engraving service. Personalize rings, pendants, and bracelets with initials, dates, or a special message.
            </AnimatedText>
            <CustomButton>Learn More</CustomButton>
          </div>

          {/* Corporate Gifting Section */}
          <div className="bg-[#1e1c1c] rounded-lg shadow-lg p-8 border border-gray-800 md:col-span-2">
            <AnimatedText className="text-3xl font-semibold text-white mb-4">Corporate Gifting</AnimatedText>
            <AnimatedText className="text-gray-300 mb-6" delay={0.1}>
              Show appreciation to your clients and employees with luxurious corporate gifts from KkJewels. We offer tailored solutions for bulk orders and special events.
            </AnimatedText>
            <CustomButton>Inquire About Corporate Gifting</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftingPage;