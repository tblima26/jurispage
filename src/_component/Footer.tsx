import React from 'react'
import MiniIcon from './MiniCard/MiniIcon'
import MiniCard from './MiniCard/MiniCard'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <div className='text-white'>
            <div className='flex flex-col items-center justify-center gap-10'>
                <div className='flex space-x-10'>
                    <MiniCard url='https://www.facebook.com/t.b.lima.1'>
                        <MiniIcon icon={Facebook} />
                    </MiniCard>
                    <MiniCard url='https://www.instagram.com/tblima1' >
                        <MiniIcon icon={Instagram} />
                    </MiniCard>
                    <MiniCard url='https://x.com/lordvarapal' >
                        <MiniIcon icon={Twitter} />
                    </MiniCard>

                </div>
                <span className='font-lato text-base'>© 2025 Tribunal. All rights reserved. | Developed by Thiago Borges</span>

            </div>
        </div>
    )
}