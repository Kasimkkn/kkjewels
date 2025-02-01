import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import ovalImage from '../assets/img/oval.png';
import cushionImage from '../assets/img/cushion.png';
import roundImage from '../assets/img/round.png';
import squareImage from '../assets/img/square.png';
import dropImage from '../assets/img/drop.png';
import Button from './Button';

const DiamondShopSection = () => {
    return (
        <section className="section flex flex-col md:py-6 pb-6 mt-4 max-md:px-2">
            <div className="w-full flex items-start gap-1 justify-between max-sm:flex-col">
                <h1 className="mutligrateintAnimatedText font-decorative lg:text-7xl text-5xl ">Shop Diamond By Shape</h1>
                <div className="flex items-center max-md:w-full max-md:hidden">
                    <Button
                        isBorder={true}
                        className={`hover:w-24 transform transition-all duration-500 ease-in-out md:w-20 md:h-20 sm:w-16 sm:h-16 w-12 h-12 flex items-center justify-center`}
                    >

                        hello
                    </Button>
                    <Button
                        className={'md:w-56 md:h-20 sm:w-24 w-28 h-12 text-lg'}
                    >
                        Try it now
                    </Button>
                </div>
            </div>
            <div className="w-full md:w-2/4 my-3 max-md:mt-6 max-md:mb-3">
                <p className="font-serif md:mb-6 mb-2 text-[1.7rem]">
                    explore the possibilities of tailored craftsmanship and unlimited capabilities
                </p>
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
