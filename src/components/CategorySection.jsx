import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import starImage from '../assets/img/star.png';
import p1 from '../assets/img/p1.jpg';
import p2 from '../assets/img/p2.jpg';
import p3 from '../assets/img/p3.jpg';
import p4 from '../assets/img/p4.jpg';
import p5 from '../assets/img/p5.jpg';

const imageArray = [p4, p2, p1, p3, p5];

const CategorySection = () => {
    return (
        <section className="overflow-hidden bg-[#1e1c1c] relative flex flex-col items-center pt-6 md:pt-12">
            <h1 className="max-md:w-full mainHeading font-Bropella flex md:items-center max-md:flex-col max-md:px-4">
                <span className="text-reveal mainHeading font-Bropella">Category</span>
                <div className="flex relative justify-center max-md:my-4">
                    <div className="relative max-md:-right-4 bg-[#513826] z-10 w-10 flex items-center justify-center h-10 rounded-full">
                        <img src={starImage} alt="Star Icon" className="w-5 h-5" />
                    </div>
                    <div className="relative md:right-4 right-0 bg-white w-10 p-2 h-10 rounded-full"></div>
                </div>
                <span className="max-md:text-end mainHeading font-Bropella">View</span>
            </h1>
            <div className="relative mt-6 md:mt-48 flex w-full max-md:flex-col">
                <button
                    className="px-6 py-2 rounded-full z-50 bg-black text-white absolute md:top-0 -top-8 md:left-1/4 left-12 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <BsArrowLeft color='white' className='text-xl' />
                </button>
                <button
                    className="px-6 py-2 w-max rounded-full z-50 bg-black text-white absolute md:top-12 -top-8 md:left-1/4 right-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <BsArrowRight color='white' className='text-xl' />
                </button>
                <div className="md:relative max-md:whitespace-nowrap max-md:overflow-x-auto top-1/2 left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 flex justify-center items-center">
                    {imageArray.map((image, index) => {
                        let rotationClass = '';
                        let positionClass = '';
                        let zIndex = '';

                        // Apply rotation and positioning based on the index
                        switch (index) {
                            case 0:
                                rotationClass = '-left-20 md:rotate-left';
                                zIndex = 'z-10';
                                break;
                            case 1:
                                rotationClass = '-left-10 md:rotate-left';
                                zIndex = 'z-20';
                                break;
                            case 2:
                                rotationClass = 'md:relative -top-4';
                                zIndex = 'z-30';
                                break;
                            case 3:
                                rotationClass = '-right-10 md:rotate-right';
                                zIndex = 'z-20';
                                break;
                            case 4:
                                rotationClass = '-right-20 md:rotate-right';
                                zIndex = 'z-10';
                                break;
                            default:
                                break;
                        }

                        return (
                            <div
                                key={index}
                                className={`md:absolute overflow-hidden md:w-96 w-full h-80 shadow-lg ${rotationClass} ${zIndex}`}>
                                <img
                                    src={image}
                                    alt={`Category Image ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="bg-black w-full z-40 h-40 flex justify-center items-center gap-20 whitespace-nowrap overflow-x-scroll md:absolute bottom-0">
                <h3 className="italic  md:text-base text-sm text-gray-400 uppercase">RINGS</h3>
                <h3 className="italic  md:text-base text-sm text-gray-400 uppercase">EARINGS</h3>
                <div className="flex flex-col gap-5 justify-center items-center">
                    <h2 className="text-3xl font-Bropella leading-[30px]">NECKLACE</h2>
                    <span className="italic  md:text-base text-sm leading text-gray-400 uppercase">210 items</span>
                </div>
                <h3 className="italic  md:text-base text-sm text-gray-400 uppercase">WEDDINg</h3>
                <h3 className="italic  md:text-base text-sm text-gray-400 uppercase">Bracelet</h3>
            </div>
        </section>
    );
};

export default CategorySection;
