import React, { ReactNode } from 'react'

interface CardRootProps {
    children: ReactNode,
}


export default function CardRoot({ children }: CardRootProps) {
    return (
        <div className="flex flex-col w-60 h-60 items-center justify-between 
        bg-slate-100 rounded-lg gap-3 shadow-lg pb-4 border-2 border-slate-200
           transition-all duration-500 ease-in-out group overflow-hidden 
           hover:bg-slate-800 hover:border-slate-800">
            {children}
        </div>
    )
}
