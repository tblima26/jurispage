import React from 'react'
import { ElementType } from 'react'

interface CardProps {
    icon: ElementType,
    number: string,
    text: string,
}

export default function Card({ icon: Icon, number, text }: CardProps) {
    return (
        <div className="w-64 h-80 bg-gray-100 rounded-xl shadow-2xl p-4 flex flex-col items-center justify-center gap-3 group
                        hover:bg-slate-800 transition-all duration-700 ease-in-out">

            <Icon className="text-red-800 h-16 w-16 mb-3" />
            <p className="text-2xl font-poppins font-bold text-gray-600 group-hover:text-white">{number}</p>
            <p className="text-xl font-poppins text-gray-400 group-hover:text-white">{text}</p>
        </div>


    )
}
