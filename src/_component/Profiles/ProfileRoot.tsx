import React, { ReactNode } from 'react'

interface ProfileRootProps {
    children: ReactNode,
}

export default function ProfileRoot({ children }: ProfileRootProps) {
    return (
        <div className="flex gap-1 items-center h-16 transition-all p-2">
            {children}
        </div>
    )
}
