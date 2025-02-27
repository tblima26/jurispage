import { Minus, Armchair } from 'lucide-react'
import React from 'react'

export default function Divider() {
    return (
        <div className='flex justify-center items-center '>
            <Minus className='h-6 w-6' />
            <Armchair className='h-8 w-8' />
            <Minus className='h-6 w-6' />
        </div>
    )
}
