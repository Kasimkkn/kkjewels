import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import watch from '../assets/img/watch.jpg';
const JewelryFeatureSection = () => {
    return (
        <section className="flex flex-col md:gap-10 gap-4 pt-24">
            <div className="flex items-center max-md:flex-col">
                <h1 className="mainHeading font-Bropella text-reveal">Watch on</h1>
                <div className="flex">
                    <div className="flex relative ml-10 mr-8">
                        <button className="absolute -left-8 z-10 w-16 h-16 rounded-full border border-gray-400"></button>
                        <button className="relative z-20 w-16 h-16 text-2xl rounded-full bg-white text-black">
                            <BsArrowRight color="white" className="text-xl" />
                        </button>
                        <button className="absolute -right-8 z-10 w-16 h-16 rounded-full border border-gray-400"></button>
                    </div>
                    <button className="px-16 py-4 border border-gray-400 text-white rounded-full">
                        try it now
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center max-md:flex-col max-md:px-2">
                <p className="italic  text-gray-300 md:text-2xl text-lg max-md:text-center leading-6 mt-4 md:w-[30%]">
                    with the help of Ai, You can upload photo of your hand and see the ring on your hand before buying
                </p>
                <h1 className="mainHeading font-Bropella mt-2">Your Hands!</h1>
            </div>
            <div className="w-full h-full">
                <img src={watch} className="w-full h-full object-cover" alt="Watch" />
            </div>
            <div className="w-full flex flex-col items-center justify-center my-6 px-6">
                <p className="font-mango text-center md:text-4xl text-3xl">
                    Trends Come and Go 〽️ and Style evolves 💎 it's important to have 🎉pieces of jewelry that are timeless
                    and look chic despite ever changin 👑 fashion
                </p>
            </div>
        </section>
    );
};

export default JewelryFeatureSection;
