import img1 from '../assets/img/g1.jpg'
import img2 from '../assets/img/g2.jpg'
import img3 from '../assets/img/g3.jpg'

const testimonials = [
    {
        imgSrc: img1,
        quote: "The Quality of the jewelry is excellent, I will surely buy it again",
        name: "Emillie Perry",
        textColor: "text-gray-400",
        borderColor: "border-gray-600"
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
        textColor: "text-gray-400",
        borderColor: "border-gray-600"
    },
    {
        imgSrc: img1,
        quote: "The Quality of the jewelry is excellent, I will surely buy it again",
        name: "Kim Khazana",
        textColor: "text-gray-100",
        borderColor: "border-gray-400"
    },
    {
        imgSrc: img2,
        quote: "The Quality of the jewelry is excellent, I will surely buy it again",
        name: "Sara Khan",
        textColor: "text-gray-400",
        borderColor: "border-gray-600"
    }
];

const Testimonials = () => {
    return (
        <section className="h-screen flex flex-col pt-12 md:gap-4">
            <div className="flex md:px-10 px-2">
                <h1 className="mainHeading font-Bropella text-reveal">Customers</h1>
            </div>
            <div className="flex justify-between md:px-10 px-2 max-md:flex-col">
                <p className="italic  text-gray-300 md:text-2xl max-md:text-center text-lg md:w-[30%]">
                    Our regular customers help us reach the best with their good and useful comments and suggestions.
                </p>
                <h1 className="mainHeading font-Bropella max-md:text-end">Experience</h1>
            </div>
            <div className="my-6 flex flex-col gap-2">
                <div className="customerExperience flex gap-2 items-center whitespace-nowrap">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`md:w-2/4 h-40 rounded-full border ${testimonial.borderColor} flex items-center gap-5 p-4`}
                        >
                            <img
                                src={testimonial.imgSrc}
                                className="rounded-full w-44 h-32 object-cover"
                                alt={testimonial.name}
                            />
                            <div className="w-[50%] flex flex-col gap-6 overflow-hidden">
                                <p className={`w-[80%] italic  ${testimonial.textColor} md:text-base text-sm leading-6`}>
                                    "{testimonial.quote}"
                                </p>
                                <p className={`italic  ${testimonial.textColor} md:text-base text-sm leading-6`}>
                                    {testimonial.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="customerExperiencebottom flex gap-2 items-center whitespace-nowrap">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`md:w-2/4 h-40 rounded-full border ${testimonial.borderColor} flex items-center gap-5 p-4`}
                        >
                            <img
                                src={testimonial.imgSrc}
                                className="rounded-full w-44 h-32 object-cover"
                                alt={testimonial.name}
                            />
                            <div className="w-[50%] flex flex-col gap-6 overflow-hidden">
                                <p className={`w-[80%] italic  ${testimonial.textColor} md:text-base text-sm leading-6`}>
                                    "{testimonial.quote}"
                                </p>
                                <p className={`italic  ${testimonial.textColor} md:text-base text-sm leading-6`}>
                                    {testimonial.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials