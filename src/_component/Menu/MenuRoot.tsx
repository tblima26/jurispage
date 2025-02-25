import React, { ReactNode } from "react";

interface MenuRootProps {
  children: ReactNode,
  href: string,
}

export function MenuRoot({ children, href }: MenuRootProps) {
  return (
    <a href={href} className="flex gap-1 text-slate-200 items-center h-16 hover:bg-slate-200 hover:text-slate-900 transition-all p-2">
      {children}
    </a>

  )
}
