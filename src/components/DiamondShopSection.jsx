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
            <div className="w-full flex items-start justify-between max-sm:flex-col max-md:px-2">
                <h1 className="mainHeading font-Bropella text-reveal">Shop Diamond</h1>
                <div className="flex items-center max-md:justify-end max-md:w-full max-md:mb-3">
                    <button className="border rounded-full hover:w-24 
                    trnasition-all duration-500 ease-in-out
                    md:w-20 md:h-20 sm:w-16 sm:h-16 w-12 h-12 flex items-center justify-center text-3xl font-thin bg-white text-black">
                        <BsArrowRight className='text-xl' />
                    </button>
                    <button className="border-l-[1px] border-r-[1px] border-gray-300 font-serif uppercase rounded-full md:w-56 md:h-20 sm:w-24 w-28 h-12 text-xs">Try it now</button>
                </div>
            </div>
            <div className="w-full flex md:items-center justify-between max-sm:flex-col-reverse max-md:px-2">
                <p className="font-serif md:mb-6 mb-2 font-bold md:text-3xl text-xl md:pl-16 md:w-[50%] md:text-end">
                    explore the possibilities of tailored craftsmanship and unlimited capabilities
                </p>
                <h1 className="mainHeading font-Bropella">by shape</h1>
            </div>
            <div className="md:my-6 relative flex items-center justify-center overflow-x-auto">
                <div className="hidden md:block">
                    <div className="absolute w-[90%] mx-auto h-[1px] bg-gray-200 left-1/2 top-1/2 transform -translate-x-1/2 -z-10"></div>
                    <span className="absolute bg-white top-1/2 left-[70px] transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"></span>
                    <span className="absolute bg-white top-1/2 right-[70px] transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"></span>
                </div>
                <div className="flex items-center justify-center md:justify-between md:w-3/4 w-full space-x-8 relative top-0 max-md:py-8 max-md:px-2">
                    {/* Diamond Shapes */}
                    {[
                        { shape: 'Oval', image: ovalImage, extraClasses: '' },
                        { shape: 'Cushion', image: cushionImage, extraClasses: '' },
                        { shape: 'Round', image: roundImage, extraClasses: 'shadow-[0_0_40px_10px_rgba(255,255,255,0.1)]' },
                        { shape: 'Princess', image: squareImage, extraClasses: '' },
                        { shape: 'Pear', image: dropImage, extraClasses: '' }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className={`relative ${item.shape === 'Round' ? 'w-36 h-36' : 'w-32 h-32'} flex items-center justify-center ${item.extraClasses} overflow-hidden bg-[#1E1E1E] rounded-full border border-gray-200`}>
                                <img src={item.image} alt={item.shape} className={`${item.shape === 'Round' ? 'w-28 h-28' : 'w-20 h-20'} object-contain`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiamondShopSection;
