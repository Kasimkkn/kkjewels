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

const SliderSection = () => {
    const videos = [video1, video2, video3]; // Array of video sources

    return (
        <section className="flex flex-col space-y-1 mt-4">
            <div
                className={`h-[50vh] group relative`}
            >
                <div className='absolute top-0 left-0 w-full h-full'>
                    <video src="/img/slider.mp4"
                        loop
                        muted
                        autoPlay
                        controls={false}
                        className="w-full h-full object-cover"
                    ></video>
                </div>
                <div className="h-full relative items-center flex flex-col justify-center max-md:gap-1">
                    <div className="my-2 flex gap-2">
                        <button className="border rounded-full px-6 py-2 font-serif text-sm bg-white text-black">Order Now</button>
                        <button className="border-l-[1px] border-r-[1px] border-gray-300 rounded-full px-6 py-2 font-serif text-sm text-gray-300 bg-black">Customize</button>
                    </div>
                </div>
            </div>

            {/* Video Carousel */}
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
                                <video src={video} className="w-full h-full object-cover rounded-lg" autoPlay loop muted></video>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white border-none hover:bg-gray-800" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white border-none hover:bg-gray-800" />
            </Carousel>
        </section>
    );
};

export default SliderSection;