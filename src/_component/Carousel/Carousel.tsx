import { Armchair, ArrowBigLeft, ArrowBigRight, Minus, Star } from "lucide-react";
import React, { useState } from "react";

// Importe as imagens diretamente
import client1 from "../../images/client1.jpg";
import client2 from "../../images/client2.jpg";
import client3 from "../../images/client3.jpg";

const reviews = [
    {
        src: client1,
        name: "Jessy Gamboa",
        rating: 5,
        comment: "Exceptional service! Highly recommend this company.",
    },
    {
        src: client2,
        name: "Anna Smith",
        rating: 5,
        comment: "Great experience, very professional and efficient.",
    },
    {
        src: client3,
        name: "Lucas Silva",
        rating: 5,
        comment: "The best legal team I have ever worked with!",
    },
];

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (

        <div className="flex flex-col items-center text-white">
            <div className="text-4xl font-cinzel p-10 items-center justify-center">Our Clients</div>
            <div className="relative w-96 h-96 overflow-hidden rounded-lg 
            border-4border-white p-4  text-white justify-center
            items-center mb-20">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {reviews.map((item, i) => (
                        <div key={i} className="min-w-full flex flex-col items-center 
                        text-center space-y-4 space-x-2.5">
                            <img
                                src={item.src}
                                alt={item.name}
                                className="h-48 w-48 object-cover rounded-full border-4 border-white mb-4"
                            />
                            <span className="mt-3 text-xl font-montserrat">{item.name}</span>
                            <div className="flex mt-1 text-yellow-400 space-x-1.5">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <Star key={i} className="text-yellow-400" size={24} />
                                ))}
                            </div>
                            <p className="mt-2 font-poppins italic text-gray-300">"{item.comment}"</p>
                        </div>
                    ))}
                </div>
                <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white px-2 py-1 rounded"
                    onClick={prevSlide}
                >
                    <ArrowBigLeft size={40} className="cursor-pointer" />
                </button>
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white px-2 py-1 rounded"
                    onClick={nextSlide}
                >
                    <ArrowBigRight size={40} className="cursor-pointer" />
                </button>
            </div>
        </div>
    );
}
