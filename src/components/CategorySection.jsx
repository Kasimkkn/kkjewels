import React from 'react';
import starImage from '../assets/img/star.png';
import p1 from '../assets/img/p1.jpg';
import p2 from '../assets/img/p2.jpg';
import p3 from '../assets/img/p3.jpg';
import p4 from '../assets/img/p4.jpg';
import p5 from '../assets/img/p5.jpg';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "./ui/carousel";
import AnimatedText from './AnimatedText';

const imageArray = [p4, p2, p1, p3, p5];

const CategorySection = () => {
    return (
        <section className="overflow-hidden bg-[#1e1c1c] relative flex flex-col items-center pt-6 md:pt-12">
            <h1 className="max-md:w-full flex md:items-center max-md:flex-col max-md:px-4">
                <AnimatedText className="mutligrateintAnimatedText font-playfair lg:text-7xl text-5xl ">Category</AnimatedText>
                <div className="flex relative md:justify-center max-md:my-4">
                    <div className="relative max-md:-right-4 bg-[#513826] z-10 w-10 flex items-center justify-center h-10 rounded-full">
                        <img src={starImage} alt="Star Icon" className="w-5 h-5" />
                    </div>
                    <div className="relative md:right-4 right-0 bg-white w-10 p-2 h-10 rounded-full"></div>
                </div>
                <AnimatedText className="mutligrateintAnimatedText font-playfair lg:text-7xl text-5xl">View</AnimatedText>
            </h1>
            <div className="relative mt-20 md:mt-48 flex w-full max-md:flex-col">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full relative"
                >
                    <CarouselContent className="-ml-1">
                        {imageArray.map((image, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
                                <div className="p-1">
                                    <div className="overflow-hidden w-full h-80 shadow-lg">
                                        <img
                                            src={image}
                                            alt={`Category Image ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white border-none hover:bg-gray-800" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white border-none hover:bg-gray-800" />
                </Carousel>
            </div>
            <div className="bg-black w-full z-40 h-40 flex justify-center items-center gap-20 whitespace-nowrap overflow-x-scroll md:absolute bottom-0">
                <AnimatedText className="italic  md:text-base text-sm text-gray-400 uppercase font-lora">RINGS</AnimatedText>
                <AnimatedText className="italic  md:text-base text-sm text-gray-400 uppercase font-lora" delay={0.1}>EARINGS</AnimatedText>
                <div className="flex flex-col gap-5 justify-center items-center">
                    <AnimatedText className="text-3xl font-playfair leading-[30px]" delay={0.2}>NECKLACE</AnimatedText>
                    <AnimatedText className="italic  md:text-base text-sm leading text-gray-400 uppercase font-lora" delay={0.3}>210 items</AnimatedText>
                </div>
                <AnimatedText className="italic  md:text-base text-sm text-gray-400 uppercase font-lora" delay={0.4}>WEDDINg</AnimatedText>
                <AnimatedText className="italic  md:text-base text-sm text-gray-400 uppercase font-lora" delay={0.5}>Bracelet</AnimatedText>
            </div>
        </section>
    );
};

export default CategorySection;