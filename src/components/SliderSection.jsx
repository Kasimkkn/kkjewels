import React from 'react';
import video1 from '../assets/video/v2.mp4';
import video2 from '../assets/video/v4.mp4';
import video3 from '../assets/video/v5.mp4';
const SliderSection = () => {
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
                    <div className="my-2">
                        <button className="border rounded-full px-6 py-2 font-serif text-sm  bg-white text-black">Order Now</button>
                        <button className="border-l-[1px] border-r-[1px] border-gray-300 rounded-full px-6 py-2 font-serif text-sm  text-gray-300 bg-black">Customize</button>
                    </div>
                </div>
            </div>

            {/* Video Grid */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-1">
                <div className="flex flex-col items-center relative group">
                    <video src={video1} className="w-full h-full object-cover rounded-lg" autoPlay loop muted></video>
                </div>
                <div className="col-span-1 flex items-center relative group">
                    <video src={video2} className="w-full h-full object-cover rounded-lg" autoPlay loop muted></video>
                </div>
                <div className="col-span-1 flex items-center relative group">
                    <video src={video3} className="w-full h-full object-cover rounded-lg" autoPlay loop muted></video>
                </div>
            </div>
        </section>
    );
};

export default SliderSection;
