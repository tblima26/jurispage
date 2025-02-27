import React from 'react'

interface ProfileTextProps {
    name: string,
    occupation: string,
}

export default function ProfileText({ name, occupation }: ProfileTextProps) {
    return (
        <div className='flex flex-col items-center gap-1'>
            <span className="font-montserrat text-2xl text-gray-600 font-bold group-hover:text-white">
                {name}
            </span>
            <span className="font-poppins text-xl text-gray-400 group-hover:text-gray-300">
                {occupation}
            </span>
        </div>
    )
}
