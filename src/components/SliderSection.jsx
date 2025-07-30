import React from 'react';
import video1 from '../assets/video/v2.mp4';
import video2 from '../assets/video/v4.mp4';
import video3 from '../assets/video/v5.mp4';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "./ui/carousel";
import CustomButton from './CustomButton';
import AnimatedText from './AnimatedText';

const SliderSection = () => {
    const videos = [video1, video2, video3]; // Array of video sources

    return (
        <section className="flex flex-col space-y-1">
            {/* Main Hero Section */}
            <div className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden">
                <video
                    src="/img/slider.mp4" // Main hero video
                    loop
                    muted
                    autoPlay
                    playsInline // Added for better mobile autoplay
                    controls={false}
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                ></video>
                {/* Overlay for text readability and luxury feel */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

                <div className="relative z-20 flex flex-col items-center justify-center p-4 md:p-8">
                    <AnimatedText className="font-decorative text-white text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 drop-shadow-lg">
                        Crafted for Eternity
                    </AnimatedText>
                    <AnimatedText className="font-serif text-gray-200 text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 drop-shadow-md" delay={0.2}>
                        Discover exquisite pieces that blend timeless elegance with modern design,
                        perfectly reflecting your unique style.
                    </AnimatedText>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <CustomButton className="px-8 py-3 text-lg md:text-xl">
                            Explore Collections
                        </CustomButton>
                        <CustomButton isBorder={true} className="px-8 py-3 text-lg md:text-xl">
                            Book a Consultation
                        </CustomButton>
                    </div>
                </div>
            </div>

            {/* Video Carousel - kept as a separate section below the hero */}
            <div className="bg-black py-8">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full relative"
                >
                    <CarouselContent className="-ml-1">
                        {videos.map((video, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/3">
                                <div className="p-1">
                                    <video src={video} className="w-full h-full object-cover rounded-lg" autoPlay loop muted playsInline></video>
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

export default SliderSection;