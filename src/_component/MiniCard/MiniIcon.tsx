import React, { ElementType } from 'react'

interface MiniIconProps {
    icon: ElementType,
}

export default function MiniIcon({ icon: Icon }: MiniIconProps) {
    return (
        <div className='text-red-900 group-hover:text-red-400'>
            <Icon />
        </div>
    )
}
