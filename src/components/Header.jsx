import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { Menu, X } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { Link } from 'react-router-dom'; // Import Link

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[1000] p-4 flex items-center justify-between bg-black/30 backdrop-blur-md">
            {/* Logo */}
            <AnimatedText className="text-xl font-bold font-serif pl-2 text-white">KkJewels</AnimatedText>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
                <Link to="/" className="text-base text-gray-200 tracking-widest hover:text-white transition-colors">Home</Link>
                <Link to="/products" className="text-base text-gray-200 tracking-widest hover:text-white transition-colors">Products</Link>
                <Link to="/contact" className="text-base text-gray-200 tracking-widest hover:text-white transition-colors">Contact</Link>
                <Link to="/gifting" className="text-base text-gray-200 tracking-widest hover:text-white transition-colors">Gifting</Link>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
                <CustomButton>
                    shop
                </CustomButton>
                <CustomButton isBorder={true}>
                    login
                </CustomButton>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className="md:hidden text-white text-3xl focus:outline-none"
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[1001] bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out opacity-100">
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
                        aria-label="Close menu"
                    >
                        <X />
                    </button>
                    <nav className="flex flex-col space-y-8 text-center">
                        <Link to="/" className="text-2xl text-gray-200 tracking-widest hover:text-white transition-colors" onClick={toggleMenu}>Home</Link>
                        <Link to="/products" className="text-2xl text-gray-200 tracking-widest hover:text-white transition-colors" onClick={toggleMenu}>Products</Link>
                        <Link to="/contact" className="text-2xl text-gray-200 tracking-widest hover:text-white transition-colors" onClick={toggleMenu}>Contact</Link>
                        <Link to="/gifting" className="text-2xl text-gray-200 tracking-widest hover:text-white transition-colors" onClick={toggleMenu}>Gifting</Link>
                    </nav>
                    <div className="flex flex-col gap-4 mt-8">
                        <CustomButton className="w-40" onClick={toggleMenu}>
                            shop
                        </CustomButton>
                        <CustomButton isBorder={true} className="w-40" onClick={toggleMenu}>
                            login
                        </CustomButton>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;