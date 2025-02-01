import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import watch from '../assets/img/watch.jpg';
import Button from './Button';
const JewelryFeatureSection = () => {
    return (
        <section className="flex flex-col md:gap-10 gap-4 pt-24">
            <div className="flex md:items-center justify-between max-md:flex-col px-4">
                <h1 className="mutligrateintAnimatedText font-decorative lg:text-7xl text-5xl max-md:mb-5 ">Watch on</h1>
                <div className="flex">
                    <div className="flex relative ml-10 mr-8">
                        <button className="absolute -left-8 z-10 md:w-24 md:h-24 h-16 w-16 rounded-full border border-gray-400"></button>
                        <button className="relative z-20 flex items-center justify-center md:w-24 md:h-24 h-16 w-16 text-2xl rounded-full bg-white text-black">
                            <BsArrowRight className="text-xl" />
                        </button>
                        <button className="absolute -right-8 z-10 md:w-24 md:h-24 h-16 w-16 rounded-full border border-gray-400"></button>
                    </div>
                    <Button
                        className={'md:px-24 md:py-8 px-16 text-lg'}
                    >
                        Try it now
                    </Button>
                </div>
                <h1 className="mutligrateintAnimatedText font-decorative lg:text-7xl text-[2.8rem] max-md:mt-5">Your Hands!</h1>
            </div>
            <div className="px-4 md:text-center">
                <p className="font-serif text-[1.7rem] max-md:my-3">
                    with the help of Ai, You can upload photo of your hand and see the ring on your hand before buying
                </p>

            </div>
            <div className="w-full h-full">
                <img src={watch} className="w-full h-[500px] object-cover" alt="Watch" />
            </div>
            <div className="w-full flex flex-col items-center justify-center my-6 px-4 md:px-6">
                <p className="font-serif md:text-center text-[1.7rem]">
                    Trends Come and Go 〽️ and Style evolves 💎 it's important to have 🎉pieces of jewelry that are timeless
                    and look chic despite ever changin 👑 fashion
                </p>
            </div>
        </section>
    );
};

export default JewelryFeatureSection;
