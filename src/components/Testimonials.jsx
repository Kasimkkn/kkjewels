import img1 from '../assets/img/g1.jpg'
import img2 from '../assets/img/g2.jpg'
import img3 from '../assets/img/g3.jpg'
import AnimatedText from './AnimatedText';

const testimonials = [
    {
        imgSrc: img1,
        quote: "The Quality of the jewelry is excellent, I will surely buy it again",
        name: "Emillie Perry",
        textColor: "text-gray-200",
        borderColor: "border-gray-300"
    },
    {
        imgSrc: img2,
        quote: "The Quality of the jewelry is excellent, I will surely buy it again",
        name: "Kim Khazana",
        textColor: "text-gray-100",
        borderColor: "border-gray-400"
    },
    {
        imgSrc: img3,
        quote: "The Quality of the jewelry is excellent, I will surely buy it again",
        name: "Sara Khan",
        textColor: "text-white",
        borderColor: "border-gray-500"
    },
    {
        imgSrc: img1,
        quote: "The Quality of the jewelry is excellent, I will surely buy it again",
        name: "Kim Khazana",
        textColor: "text-gray-300",
        borderColor: "border-gray-400"
    },
    {
        imgSrc: img2,
        quote: "The Quality of the jewelry is excellent, I will surely buy it again",
        name: "Sara Khan",
        textColor: "text-gray-400",
        borderColor: "border-gray-300"
    }
];

const Testimonials = () => {
    return (
        <section className="h-screen flex flex-col md:pt-12 pt-6 md:gap-4">
            <div className="flex md:px-5 px-2 max-md:gap-4 items-center justify-between max-md:flex-col">
                <AnimatedText className="mutligrateintAnimatedText font-playfair lg:text-7xl text-5xl ">Customers</AnimatedText>
                <AnimatedText className="font-lora md:text-xl text-[1.7rem] " delay={0.2}>
                    Our regular customers help us reach the best with their good and useful comments and suggestions.
                </AnimatedText>
                <AnimatedText className="mutligrateintAnimatedText font-playfair lg:text-7xl text-5xl " delay={0.4}>Experience</AnimatedText>
            </div>
            <div className="my-6 flex flex-col gap-2">
                <div className="customerExperience flex gap-2 items-center whitespace-nowrap">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`md:w-2/4 md:h-40 h-28 rounded-full border ${testimonial.borderColor} flex items-center gap-5 p-2 md:p-4`}
                        >
                            <img
                                src={testimonial.imgSrc}
                                className="rounded-full md:w-44 md:h-32 w-28 h-24 object-cover"
                                alt={testimonial.name}
                            />
                            <div className="md:w-[50%] flex flex-col gap-3 overflow-hidden">
                                <AnimatedText className={`${testimonial.textColor} md:text-base text-base font-lora`} delay={index * 0.1}>
                                    "{testimonial.quote}"
                                </AnimatedText>
                                <AnimatedText className={`italic  ${testimonial.textColor} md:text-base text-xl font-lora`} delay={index * 0.1 + 0.05}>
                                    {testimonial.name}
                                </AnimatedText>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="customerExperiencebottom flex gap-2 items-center whitespace-nowrap">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`md:w-2/4 md:h-40 h-28 rounded-full border ${testimonial.borderColor} flex items-center gap-5 p-2 md:p-4`}
                        >
                            <img
                                src={testimonial.imgSrc}
                                className="rounded-full md:w-44 md:h-32 w-28 h-24 object-cover"
                                alt={testimonial.name}
                            />
                            <div className="w-[50%] flex flex-col gap-3 overflow-hidden">
                                <AnimatedText className={` ${testimonial.textColor} md:text-base text-sm font-lora`} delay={index * 0.1}>
                                    "{testimonial.quote}"
                                </AnimatedText>
                                <AnimatedText className={`italic  ${testimonial.textColor} md:text-base text-sm font-lora`} delay={index * 0.1 + 0.05}>
                                    {testimonial.name}
                                </AnimatedText>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials