import React from 'react';
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

const imageArray = [p1, p2, p3, p4, p5];

const OurWorksSection = () => {
    return (
        <section className="flex flex-col md:pt-12 py-6 relative items-center">
            <div className="flex md:items-start justify-between md:px-6 px-4 max-md:flex-col">
                <AnimatedText className="md:w-[35%] font-serif md:mb-4 mb-4 text-[1.7rem]">
                    Zales Combination Of Statement and simplistic styles helps create a look that's as unique as you are
                </AnimatedText>
                <AnimatedText className="mutligrateintAnimatedText font-decorative lg:text-7xl text-[2.7rem]" delay={0.2}>Our Works</AnimatedText>
            </div>
            <div className="relative md:mt-14 mt-7 flex w-full md:h-[80%]">
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
                                    <div className="overflow-hidden w-full h-96 shadow-lg">
                                        <img
                                            src={image}
                                            alt={`Our Work ${index + 1}`}
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
        </section>
    );
};

export default OurWorksSection;