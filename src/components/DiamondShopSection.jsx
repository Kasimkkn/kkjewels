import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import ovalImage from '../assets/img/oval.png';
import cushionImage from '../assets/img/cushion.png';
import roundImage from '../assets/img/round.png';
import squareImage from '../assets/img/square.png';
import dropImage from '../assets/img/drop.png';

const DiamondShopSection = () => {
    return (
        <section className="section flex flex-col md:py-6 pb-6 mt-4">
            <div className="w-full flex items-end justify-between max-sm:flex-col max-md:px-2">
                <h1 className="mainHeading font-Bropella text-reveal">Shop Diamond</h1>
                <div className="flex items-center">
                    <button className="border font-mango rounded-full md:w-20 md:h-20 sm:w-16 sm:h-16 w-12 h-12 flex items-center justify-center text-3xl font-thin bg-white text-black">
                        <BsArrowRight className='text-xl' />
                    </button>
                    <button className="border font-mango rounded-full md:w-40 md:h-16 sm:w-24 w-28 h-12 text-xs">Try it now</button>
                </div>
            </div>
            <div className="w-full flex md:items-center justify-between max-sm:flex-col-reverse max-md:px-2">
                <p className="italic  md:text-2xl text-center text-lg text-gray-300 uppercase w-full md:w-[50%]">
                    explore the possibilities of tailored craftsmanship and unlimited capabilities
                </p>
                <h1 className="mainHeading font-Bropella">by shape</h1>
            </div>
            <div className="md:my-6 relative flex items-center justify-center overflow-x-auto">
                <div className="hidden md:block">
                    <div className="absolute w-[90%] mx-auto h-[1px] bg-gray-400 left-1/2 top-1/2 transform -translate-x-1/2 -z-10"></div>
                    <span className="absolute bg-gray-400 top-1/2 left-[70px] transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"></span>
                    <span className="absolute bg-gray-400 top-1/2 right-[70px] transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"></span>
                </div>
                <div className="flex items-center justify-between md:w-3/4 w-full space-x-8 relative top-0 max-md:py-8 max-md:px-2">
                    {/* Diamond Shapes */}
                    {[
                        { shape: 'Oval', image: ovalImage, extraClasses: '' },
                        { shape: 'Cushion', image: cushionImage, extraClasses: '' },
                        { shape: 'Round', image: roundImage, extraClasses: 'shadow-[0_0_40px_10px_rgba(255,255,255,0.1)]' },
                        { shape: 'Princess', image: squareImage, extraClasses: '' },
                        { shape: 'Pear', image: dropImage, extraClasses: '' }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className={`relative ${item.shape === 'Round' ? 'w-36 h-36' : 'w-32 h-32'} flex items-center justify-center ${item.extraClasses} overflow-hidden bg-[#1b1511] rounded-full border border-gray-400`}>
                                <img src={item.image} alt={item.shape} className={`${item.shape === 'Round' ? 'w-28 h-28' : 'w-20 h-20'} object-contain`} />
                                <div className="absolute inset-0 bg-black group-hover:opacity-20 opacity-50 rounded-lg transition-opacity duration-300 ease-in-out"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiamondShopSection;
