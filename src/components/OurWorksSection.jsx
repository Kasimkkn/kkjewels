import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import p1 from '../assets/img/p1.jpg';
import p2 from '../assets/img/p2.jpg';
import p3 from '../assets/img/p3.jpg';
import p4 from '../assets/img/p4.jpg';
import p5 from '../assets/img/p5.jpg';

const imageArray = [p1, p2, p3, p4, p5];

const OurWorksSection = () => {
    return (
        <section className="flex flex-col md:pt-12 py-6 relative items-center">
            <div className="flex md:items-start items-center justify-between md:px-6 px-2 max-md:flex-col">
                <p className="md:w-[35%] max-md:text-center italic  md:text-2xl text-lg text-gray-300 capitalize">
                    Zales Combination Of Statement and simplistic styles helps create a look that's as unique as you are
                </p>
                <h1 className="mainHeading font-Bropella text-reveal">Our Works</h1>
            </div>
            <div className="relative md:mt-14 mt-7 flex w-full md:h-[80%]">
                <button
                    className="px-6 w-max md:hidden py-2 rounded-full z-50 border border-white text-white absolute md:bottom-0 -bottom-24 md:left-1/2 left-10
          flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                    <BsArrowLeft color="white" className="text-xl" />
                </button>
                <div className="dContainer relative flex justify-center items-center w-full">
                    <div className="dContainer relative flex justify-center items-center w-full">
                        <div className="absolute overflow-hidden w-72 h-96 shadow-lg left-[5%] z-10 hover:z-50 hover:scale-105 hover:rotate-2 transition-transform duration-300 ease-in-out prespective-left">
                            <img src={p4} alt="" className="w-full h-full object-cover rounded-lg " />
                        </div>
                        <div className="absolute overflow-hidden w-72 h-96 shadow-lg left-[25%] z-20 hover:z-50 hover:scale-105 hover:rotate-2 transition-transform duration-300 ease-in-out prespective-left-2">
                            <img src={p2} alt="" className="w-full h-full object-cover rounded-lg " />
                        </div>
                        <div className="relative w-72 h-96 z-30 hover:z-50 hover:scale-105 hover:rotate-2 transition-transform duration-300 ease-in-out shadow-xl">
                            <img src={p1} alt="" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="absolute overflow-hidden w-72 h-96 shadow-lg right-[25%] z-20 hover:z-50 hover:scale-105 hover:rotate-2 transition-transform duration-300 ease-in-out prespective-right-2">
                            <img src={p3} alt="" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="absolute overflow-hidden w-72 h-96 shadow-lg right-[4%] z-10 hover:z-50 hover:scale-105 hover:rotate-2 transition-transform duration-300 ease-in-out prespective-right">
                            <img src={p5} alt="" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
                <button
                    className="px-6 w-max md:hidden py-2 rounded-full border border-gray-400 text-white absolute md:bottom-0 -bottom-24 md:left-1/2 -right-4 transform flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                    <BsArrowRight color="white" className="text-xl" />
                </button>
            </div>
        </section>
    );
};

export default OurWorksSection;
