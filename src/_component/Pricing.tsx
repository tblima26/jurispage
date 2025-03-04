import React from 'react'
import { CardRoot } from './Pricing/CardRoot'
import { Value } from './Pricing/Value'
import { Benefits } from './Pricing/Benefits'

export default function Pricing() {
    const benefitsStandard = [
        "Free Initial Consultation",
        "Basic Support",
        "Access to Standard Features"
    ];

    const benefitsPremium = [
        "Free Initial Consultation",
        "Priority Support",
        "Access to Premium Features",
        "Customizable Options"
    ];

    const benefitsElite = [
        "Free Consultation",
        "24/7 Dedicated Support",
        "Access to Elite Features",
        "Customizable Options",
        "Exclusive Insights",
        "Personalized Assistance"
    ];

    return (
        <div className='flex gap-28'>
            <CardRoot >
                <Value text='49,90' type='Standard' />
                <hr className="my-4 border-t border-gray-300" />
                <div className='space-y-1.5'>
                    {benefitsStandard.map((text, index) => (
                        <Benefits key={index} text={text} />
                    ))}
                </div>
            </CardRoot>
            <CardRoot >
                <div className="relative">
                    <span className="absolute -top-6 -right-7 p-2">
                        <span className="absolute inline-flex h-6 w-6 animate-ping rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex h-6 w-6 rounded-full bg-sky-400"></span>
                    </span>
                </div>
                <Value text='179,90' type='Elite' />
                <hr className="my-4 border-t border-gray-300" />
                <div className='space-y-1.5'>
                    {benefitsElite.map((text, index) => (
                        <Benefits key={index} text={text} />
                    ))}
                </div>
            </CardRoot>
            <CardRoot >
                <Value text='99,90' type='Premium' />
                <hr className="my-4 border-t border-gray-300" />
                <div className='space-y-1.5'>
                    {benefitsPremium.map((text, index) => (
                        <Benefits key={index} text={text} />
                    ))}
                </div>
            </CardRoot>
        </div>
    )
}
