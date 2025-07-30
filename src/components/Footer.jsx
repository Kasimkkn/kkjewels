import React from 'react';
import AnimatedText from './AnimatedText';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12 px-4 md:px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Info */}
                <div className="flex flex-col items-start">
                    <AnimatedText className="text-2xl font-bold font-serif text-white mb-4">KkJewels</AnimatedText>
                    <AnimatedText className="text-sm leading-relaxed">
                        Crafting timeless elegance with modern design. Discover exquisite pieces that reflect your unique style.
                    </AnimatedText>
                </div>

                {/* Quick Links */}
                <div>
                    <AnimatedText className="text-lg font-semibold text-white mb-4">Quick Links</AnimatedText>
                    <ul className="space-y-2">
                        <li><a href="/" className="text-sm hover:text-white transition-colors">Home</a></li>
                        <li><a href="/products" className="text-sm hover:text-white transition-colors">Products</a></li>
                        <li><a href="/contact" className="text-sm hover:text-white transition-colors">Contact</a></li>
                        <li><a href="/gifting" className="text-sm hover:text-white transition-colors">Gifting</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <AnimatedText className="text-lg font-semibold text-white mb-4">Services</AnimatedText>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm hover:text-white transition-colors">Custom Design</a></li>
                        <li><a href="#" className="text-sm hover:text-white transition-colors">Repairs</a></li>
                        <li><a href="#" className="text-sm hover:text-white transition-colors">Consultation</a></li>
                        <li><a href="#" className="text-sm hover:text-white transition-colors">Certifications</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <AnimatedText className="text-lg font-semibold text-white mb-4">Contact Us</AnimatedText>
                    <ul className="space-y-2">
                        <li className="text-sm">123 Jewel Lane, Gem City, World</li>
                        <li className="text-sm">info@kkjewels.com</li>
                        <li className="text-sm">+1 (234) 567-8900</li>
                    </ul>
                    <div className="flex space-x-4 mt-4">
                        {/* Placeholder for social media icons */}
                        <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-12 pt-8 border-t border-gray-800">
                <AnimatedText className="text-sm">&copy; {new Date().getFullYear()} KkJewels. All rights reserved.</AnimatedText>
            </div>
        </footer>
    );
};

export default Footer;