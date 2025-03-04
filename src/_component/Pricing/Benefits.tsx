import { Check } from 'lucide-react'
import React from 'react'

interface BenefitsProps {
    text: string
}

export function Benefits({ text }: BenefitsProps) {
    return (
        <div className='flex gap-2 ml-4'>
            <Check className='text-slate-300' />
            < div className='text-slate-300' > {text}</div >
        </div >
    )
}
