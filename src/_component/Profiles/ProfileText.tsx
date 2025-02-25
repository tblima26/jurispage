import React from 'react'

interface ProfileTextProps {
    name: string,
    occupation: string,
}

export default function ProfileText({ name, occupation }: ProfileTextProps) {
    return (
        <div className='flex flex-col'>
            <span className="font-montserrat text-3xl">
                {name}
            </span>
            <span className="font-montserrat text-xl">
                {occupation}
            </span>
        </div>
    )
}
