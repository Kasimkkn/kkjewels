import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'; // Make sure to install 'react-icons'
import video1 from '../assets/video/showcase.mp4';
import video2 from '../assets/video/showcase2.mp4';
import img1 from '../assets/img/slider1.jpg';
const SliderSection = () => {
    return (
        <section className="flex flex-col space-y-1">
            {/* Main Slider */}
            <div
                className={`h-[50vh] group relative md:px-8 px-2 rounded-lg bg-[url('/img/slider1.jpg')] bg-no-repeat bg-cover overflow-hidden transition-opacity duration-300 ease-in-out`}>
                <div
                    className="absolute inset-0 bg-black group-hover:opacity-20 opacity-30 rounded-lg transition-opacity duration-300 ease-in-out">
                </div>

                <div className="h-full relative flex flex-col justify-end max-md:gap-1">
                    <p className="font-serif mb-4 font-bold md:text-xl text-base md:w-[50%]">
                        Our Young & Expert Designers
                        design the most
                        exquisite
                        jewelry for
                        you to shine in a special way in the world
                    </p>
                    <h1 className="text-reveal font-Bropella md:w-[50%] mb-2 lg:text-6xl text-4xl text-gray-200">
                        You deserve the most unique jewelry
                    </h1>
                    <div className="my-2">
                        <button className="border rounded-full px-6 py-2 font-serif text-sm uppercase bg-white text-black">Order Now</button>
                        <button className="border-l-[1px] border-r-[1px] border-gray-300 rounded-full px-6 py-2 font-serif text-sm uppercase text-gray-300 bg-black">Customize</button>
                    </div>
                </div>

                <div className="absolute md:top-1/2 top-1/4 right-2 flex flex-col items-center transform -translate-y-1/2">
                    <span className="font-serif">01</span>
                    <span className="h-20 bg-white w-[1px] inline-block"></span>
                    <span className="font-serif">04</span>
                </div>
                <div className="absolute bottom-2 right-2 flex">
                    <button className="border border-gray-400 rounded-full w-10 h-10 text-xs flex justify-center items-center">
                        <BsArrowLeft color='white' className='text-xl' />
                    </button>
                    <button className="border border-gray-400 rounded-full w-10 h-10 text-xs flex justify-center items-center hover:w-14 transition-all hover:border-white">
                        <BsArrowRight color='white' className='text-xl' />
                    </button>
                </div>
            </div>

            {/* Video Grid */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-1">
                <div className="flex flex-col items-center relative group">
                    {/* <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 rounded-lg transition-opacity duration-300 ease-in-out"></div> */}
                    <video src={video1} className="w-full h-full object-cover rounded-lg" autoPlay loop muted></video>
                </div>
                <div className="col-span-2 flex items-center relative group">
                    {/* <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 rounded-lg transition-opacity duration-300 ease-in-out"></div> */}
                    <video src={video2} className="w-full h-full object-cover rounded-lg" autoPlay loop muted></video>
                </div>
            </div>
        </section>
    );
};

export default SliderSection;
