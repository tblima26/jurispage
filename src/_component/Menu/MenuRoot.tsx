import React, { ReactNode } from "react";

interface MenuRootProps {
  children: ReactNode;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void; // Função para rolar até a seção
  sectionRef: React.RefObject<HTMLDivElement | null>; // Referência da seção
}

export function MenuRoot({
  children,
  scrollToSection,
  sectionRef,
}: MenuRootProps) {
  return (
    <button
      className="flex  gap-1 text-slate-200 items-center h-16 
      hover:bg-slate-200 hover:text-slate-900 transition-all p-2"
      onClick={() => scrollToSection(sectionRef)} // Chama a função de scroll com o ref da seção
    >
      {children}
    </button>
  );
}


{/**

<button onClick={() => {
  const element = document.getElementById('games')
  element?.scrollIntoView({
    behavior:"smooth"})
}} >
  Jump to games
</button>

*/}