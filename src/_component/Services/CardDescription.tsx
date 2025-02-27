import React from 'react'

interface CardDescriptionProps {
    title: string,
    description: string
}

export default function CardDescription({ title, description }: CardDescriptionProps) {
    return (
        <div className='flex flex-col items-center space-y-3.5 px-3 text-center group-hover:text-white'>
            <span className="font-montserrat text-base font-bold text-slate-800 group-hover:text-white">
                {title}
            </span>
            <span className="font-montserrat text-sm text-justify text-slate-500 group-hover:text-gray-300 p-1 leading-tight">
                {description}
            </span>
        </div>
    )
}
