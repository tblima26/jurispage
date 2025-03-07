import React, { ReactNode } from 'react'

interface MiniCardProps {
    children: ReactNode
    url: string
}


export default function MiniCard({ children, url }: MiniCardProps) {
    return (
        <a href={url} className='flex h-14 w-14 border-2 group hover:border-red-400 
        border-red-900 rounded-md items-center justify-center hover:text-red-400'>
            {children}
        </a>

    )
}
