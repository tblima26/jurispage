import React, { Children, ReactNode } from 'react'

interface CardRootProps {
    children: ReactNode,
}

export function CardRoot({ children }: CardRootProps) {
    return (
        <div className='flex flex-col justify-between h-96 w-72 bg-slate-900 border-2 
        border-slate-300 p-2 rounded-2xl shadow-xl hover:scale-150 
        transition-all duration-300 '>
            <div>
                {children}
            </div>
            <div className='flex justify-center'>
                <button className='text-white rounded-xl py-1.5 px-4 bg-red-900 mb-3'> Contact us </button>
            </div>
        </div>
    )
}
