import React from 'react';
import AnimatedText from '../components/AnimatedText';
import CustomButton from '../components/CustomButton';
import p1 from '../assets/img/p1.jpg';
import p2 from '../assets/img/p2.jpg';
import p3 from '../assets/img/p3.jpg';
import p4 from '../assets/img/p4.jpg';

const products = [
  { id: 1, name: 'Elegant Diamond Ring', price: '$2,500', image: p1, description: 'A timeless piece crafted with precision.' },
  { id: 2, name: 'Sapphire Necklace', price: '$3,200', image: p2, description: 'Stunning sapphire set in white gold.' },
  { id: 3, name: 'Classic Gold Bracelet', price: '$1,800', image: p3, description: 'Simple yet sophisticated, perfect for daily wear.' },
  { id: 4, name: 'Emerald Drop Earrings', price: '$2,900', image: p4, description: 'Exquisite emeralds for a touch of glamour.' },
  { id: 5, name: 'Pearl Pendant', price: '$1,100', image: p1, description: 'Lustrous pearl with a delicate chain.' },
  { id: 6, name: 'Ruby Engagement Ring', price: '$4,500', image: p2, description: 'A symbol of love, passion, and commitment.' },
];

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto pt-20">
        <AnimatedText className="text-5xl md:text-7xl font-decorative text-center mb-6">Our Shop Collection</AnimatedText>
        <AnimatedText className="text-lg md:text-xl font-serif text-gray-300 text-center max-w-3xl mx-auto mb-12" delay={0.2}>
          Explore our curated selection of fine jewelry, where every piece tells a unique story of craftsmanship and elegance.
        </AnimatedText>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="bg-[#1e1c1c] rounded-lg overflow-hidden shadow-lg border border-gray-800">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <AnimatedText className="text-xl font-semibold text-white mb-2" delay={0.1 * index}>
                  {product.name}
                </AnimatedText>
                <AnimatedText className="text-gray-400 text-sm mb-4" delay={0.1 * index + 0.05}>
                  {product.description}
                </AnimatedText>
                <AnimatedText className="text-2xl font-bold text-gold-400 mb-4" delay={0.1 * index + 0.1}>
                  {product.price}
                </AnimatedText>
                <CustomButton className="w-full">View Details</CustomButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;