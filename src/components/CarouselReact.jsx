import { useEffect, useRef, useState } from "react";

export function CarouselReact() {
    const slides = [
        {
            src: "https://offsel.net/media-en/wp-content/uploads/2023/12/AdobeStock_608534283-1-scaled.jpeg",
            alt: "Carbon Credit Image",
            title: "What Are Carbon Credits?",
            text: "Carbon credits are tradable certificates that represent the reduction or removal of one metric ton of carbon dioxide (CO₂) or its equivalent greenhouse gases from the atmosphere. They are a vital tool in the fight against climate change, allowing organizations and individuals to offset their carbon footprint by supporting projects that reduce emissions, such as renewable energy, reforestation, or sustainable farming.",
        },
        {
            src: "https://i0.wp.com/studentwork.prattsi.org/infovis/wp-content/uploads/sites/3/2022/07/1-co2-1.png?resize=1024%2C723&ssl=1",
            alt: "Carbon Emissions",
            title: "CO2 Emissions",
            text: "Global warming is a vital problem in today’s world which is attributed in large proportion to the emissions of greenhouse gasses. In this lab I have attempted to create map visualizations that account for various quantities related to greenhouse gasses produced by the countries of the world.",
        },
        {
            src: "https://ec.europa.eu/eurostat/documents/4187653/15727800/martin33_AdobeStock_66652891_RV.jpg",
            alt: "Effects of CO2",
            title: "How does CO2 harm?",
            text: "Carbon dioxide (CO2) is an important heat-trapping gas, also known as a greenhouse gas, that comes from the extraction and burning of fossil fuels (such as coal, oil, and natural gas), from wildfires, and natural processes like volcanic eruptions. The CO2 levels during Earth’s last three glacial cycles, as captured by air bubbles trapped in ice sheets and glaciers.",
        },
    ];

    const [current, setCurrent] = useState(0);
    const timer = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const resetTimer = () => {
        if (timer.current) clearInterval(timer.current);
    }

    const startTimer = () => {
        resetTimer();
        timer.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000)
    }

    useEffect(() => {
        if (!isHovered) { startTimer() }
        return () => resetTimer();
    }, [isHovered, slides.length]);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        startTimer();
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
        startTimer();
    };

    const goToSlide = (index) => {
        setCurrent(index)
        startTimer();
    }

    return (
        <div className=" relative w-full max-w-x8l h-[95vh] mx-auto rounded-lg shadow overflow-hidden ">

            <div className="relative h-[700px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {slides.map((slide, index) => (
                    <div key={index}
                     className={`absolute inset-0  w-full h-196 object-cover transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                                }`}>
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                           
                        />
                        <div className ={`absolute inset-0 bg-gray-600/60  flex flex-col items-center justify-center text-center px-6 transition-all duration-700 ease-in-out 
                            ${index==current? "opacity-100 transition-y-0" : "opacity-0 transition-y-10"}`}>
                            <h2 className=" text-2xl font-semibold mb-4 md:text-4xl ">{slide.title}</h2>
                            <p className="max-w-3xl text-base md:text-lg ">{slide.text}</p>
                        </div>
                    </div>

                ))}
            </div>


            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2  bg-gray-300/70 text-black p-3 rounded-full hover:bg-gray-300/40 transition"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2  bg-gray-300/70 text-black p-3 rounded-full hover:bg-gray-300/40 transition"
            >
                ❯
            </button>


            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
