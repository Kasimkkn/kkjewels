import React from 'react'
import necklace from '../assets/img/necklace1.jpg';
import mock1 from '../assets/img/mock1.jpg';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
const NewCollection = () => {
    return (
        <section className="flex flex-col md:pt-12 pt-14 relative">
            <div className="flex md:px-10 px-2 md:gap-8 max-md:items-center max-md:flex-col">
                <h1 className="mainHeading font-Bropella">New</h1>
                <p className="md:w-[40%] italic  md:text-2xl text-lg text-gray-300 capitalize">
                    Zale's Combination of Statement and simplistic style helps create a look that's as unique as you are
                </p>
            </div>
            <div className="flex md:justify-end justify-center">
                <h1 className="mainHeading font-Bropella text-reveal">Collection</h1>
            </div>
            <div className="flex max-md:flex-col mt-10 relative">
                <div className="z-10 md:w-[65%] w-full md:h-[70vh] relative">
                    <img src={necklace} alt="Necklace" className="w-full h-full object-cover" />
                    <div className="absolute max-md:hidden inset-0 bg-black bg-opacity-40"></div>
                </div>
                <div
                    className={`z-20 md:absolute right-0 md:w-[45%] h-full flex flex-col justify-between bg-no-repeat bg-cover bg-[url(${mock1.jpg})] p-8 rounded-tl-2xl rounded-bl-2xl overflow-hidden`}>
                    <div className="absolute max-md:hidden inset-0 bg-black bg-opacity-30 backdrop-blur-md"></div>
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-1">
                            <p className="text-gray-400">From: <span className="text-white">Classic Set</span></p>
                            <p className="text-white text-3xl font-Bropella">Introducing The Zales Lesedi La Rona</p>
                            <p className="uppercase text-[#5b3e3e]">A record-breaking jewel</p>
                            <p className="text-gray-400 font-thin">
                                The 302.37 Carat Zales Lesedi La Rona is the Bestes Highest Colour, Highest Clarity
                                Diamond Ever Certified By The GIA, And The World's Largest Square Emerald Cut Diamond, Expertly
                                Cut And Polished By Graff's World Leading Team Of Gemmologists And Master Polishers. This Rare
                                Marvel Required Over 18 Months Of Meticulous Craftsmanship, And...
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 mt-4">
                            <span className="text-white font-semibold">Expert Analysis</span>
                            <span className="text-white">A Sensational Result</span>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute md:bottom-0 -bottom-24 z-40 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                        className="w-16 h-16 rounded-full md:bg-black bg-opacity-30 backdrop-blur-md z-50 bg-black text-white">
                        <BsArrowLeft color='white' className='text-xl' />
                    </button>
                    <button
                        className="w-16 h-16 rounded-full md:bg-black bg-white bg-opacity-30 backdrop-blur-md z-50 text-white">
                        <BsArrowRight color='white' className='text-xl' />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NewCollection