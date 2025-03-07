import React from 'react'

import Banner from './_component/Banner';
import Logo from './_component/Logo';
import Menu from './_component/Menu';
import About from './_component/About';
import Container from './_component/Container/Container';
import Profiles from './_component/Profiles';
import Services from './_component/Services/Services';
import { useRef } from "react";
import './App.css';
import Pricing from './_component/Pricing';
import Contact from './_component/Contact/Contact';
import Carousel from './_component/Carousel/Carousel';
import Footer from './_component/Footer';

function App() {
  // Definindo os refs para cada seção
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const storyRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Função para rolar até a seção
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: 'center',
      inline: 'center'
    })
  }

  return (
    <>
      <div className="w-full flex flex-col">
        {/* Header */}
        <div className="fixed z-50 w-full h-16 flex justify-center bg-slate-900">
          <div className="max-w-7xl w-full flex justify-between items-center px-6">
            <Logo />
            <Menu
              scrollToSection={scrollToSection} // Passando a função de rolar
              homeRef={homeRef}
              aboutRef={aboutRef}
              storyRef={storyRef}
              pricingRef={pricingRef}
              contactRef={contactRef}
            />
          </div>
        </div>

        {/* Banner */}
        <div ref={homeRef}>
          <Banner />
        </div>
      </div>
      <div className="w-full flex bg-gray-200">
        {/* Cards e About */}
        <div className="max-w-7xl w-full mx-auto px-6 py-12 flex flex-col items-center">
          <Container />
          <div ref={aboutRef}><About /></div>
          <div ref={storyRef}><Services /></div>
          <div ref={pricingRef}><Pricing /></div>
        </div>
      </div>
      <div className="w-full flex flex-col bg-slate-900 justify-center items-center">
        <div><Carousel /></div>
        <div ref={contactRef}><Contact /></div>
      </div>
      <div className="w-full flex flex-col bg-neutral-900 justify-center items-center h-90">
        <div><Footer /></div>
      </div>
    </>
  );
}

export default App;
