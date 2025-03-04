import React from 'react'
import { DollarSign } from 'lucide-react'

interface ValueProps {
    type: string
    text: string
}

export function Value({ text, type }: ValueProps) {
    return (
        <div className='flex flex-col h-20 w-full justify-center items-center gap-1 mt-3'>
            <div className='text-white font-bold font-cinzel text-2xl'>{type}</div>
            <div className=' flex items-center justify-center'>
                <DollarSign className='text-white h-5 w-auto' />
                <div className='text-white font-bold font-poppins text-3xl'>{text}</div>
            </div>
        </div >
    )
}
