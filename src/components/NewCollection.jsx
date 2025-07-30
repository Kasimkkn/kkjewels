import React from 'react'
import necklace from '../assets/img/necklace1.jpg';
import mock1 from '../assets/img/mock1.jpg';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import AnimatedText from './AnimatedText';

const NewCollection = () => {
    return (
        <section className="flex flex-col md:pt-12 pt-32 relative">
            <div className="flex md:px-10 px-2 md:gap-8 gap-4 md:items-center justify-between max-md:flex-col">
                <AnimatedText className="mutligrateintAnimatedText font-decorative lg:text-7xl text-5xl ">New</AnimatedText>
                <AnimatedText className="md:w-[40%] font-serif max-md:mb-6 md:text-xl text-[1.7rem] md:text-center" delay={0.2}>
                    Zale's Combination of Statement and simplistic style helps create a look that's as unique as you are
                </AnimatedText>
                <div className="flex md:justify-end justify-center">
                    <AnimatedText className="mutligrateintAnimatedText font-decorative lg:text-7xl text-5xl " delay={0.4}>Collection</AnimatedText>
                </div>
            </div>
            <div className="flex max-md:flex-col mt-10 relative">
                <div className="z-10 md:w-[65%] w-full md:h-[70vh] relative">
                    <img src={necklace} alt="Necklace" className="w-full h-full object-cover" />
                    <div className="absolute max-md:hidden inset-0 bg-black bg-opacity-40"></div>
                </div>
                <div
                    className={`z-20 md:absolute right-0 md:w-[45%] h-full flex flex-col justify-between bg-no-repeat bg-cover bg-[url(${mock1.jpg})] md:p-8 p-4 rounded-tl-2xl rounded-bl-2xl overflow-hidden`}>
                    <div className="absolute max-md:hidden inset-0 bg-black bg-opacity-30 backdrop-blur-md"></div>
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-2">
                            <AnimatedText className="text-gray-400 font-serif">From: <span className="text-white">Classic Set</span></AnimatedText>
                            <AnimatedText className="text-white text-3xl font-decorative" delay={0.1}>Introducing The Zales Lesedi La Rona</AnimatedText>
                            <AnimatedText className="uppercase text-[#5b3e3e] font-serif" delay={0.2}>A record-breaking jewel</AnimatedText>
                            <AnimatedText className="text-gray-200/65 font-thin text-lg font-serif" delay={0.3}>
                                The 302.37 Carat Zales Lesedi La Rona is the Bestes Highest Colour, Highest Clarity
                                Diamond Ever Certified By The GIA, And The World's Largest Square Emerald Cut Diamond, Expertly
                                Cut And Polished By Graff's World Leading Team Of Gemmologists And Master Polishers. This Rare
                                Marvel Required Over 18 Months Of Meticulous Craftsmanship, And...
                            </AnimatedText>
                        </div>
                        <div className="flex flex-col gap-1 mt-4">
                            <AnimatedText className="text-gray-300 font-serif" delay={0.4}>Expert Analysis</AnimatedText>
                            <AnimatedText className="text-gray-300 font-serif" delay={0.5}>A Sensational Result</AnimatedText>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute md:bottom-0 -bottom-24 z-40 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                        className="border-l-[1px] border-r-[1px] border-gray-300 flex justify-center items-center w-16 h-16 rounded-full md:bg-black bg-opacity-30 backdrop-blur-md z-50 bg-black text-white">
                        <BsArrowLeft color='white' className='text-2xl' />
                    </button>
                    <button
                        className="w-16 h-16 rounded-full md:bg-black bg-white flex justify-center items-center bg-opacity-30 backdrop-blur-md z-50 text-white">
                        <BsArrowRight color='white' className='text-2xl' />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NewCollection