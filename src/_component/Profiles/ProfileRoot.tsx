import React, { ReactNode } from 'react'

interface ProfileRootProps {
    children: ReactNode,
}

export default function ProfileRoot({ children }: ProfileRootProps) {
    return (
        <div className="flex flex-col items-center bg-slate-100 rounded-xl gap-5 shadow-2xl pb-6 border-4 border-slate-200
           transition-all duration-700 ease-in-out group overflow-hidden hover:bg-slate-800 hover:border-4 hover:border-slate-800">
            {children}
        </div>
    )
}
