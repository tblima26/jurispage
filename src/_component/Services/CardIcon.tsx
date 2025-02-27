import React, { ElementType } from 'react'

interface CardIconProps {
    icon: ElementType
}

export default function CardIcon({ icon: Icon }: CardIconProps) {
    return (
        <div className="flex justify-center items-center h-20 w-20 m-auto">
            <Icon className="h-14 w-14 text-red-800" />
        </div>
    )
}
