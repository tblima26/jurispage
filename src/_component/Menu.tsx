import React from "react";
import { HouseIcon, BookOpen, FolderOpen, HandCoins, UserRoundPen } from "lucide-react";
import { MenuIcon } from "./Menu/MenuIcon";
import { MenuRoot } from "./Menu/MenuRoot";
import { MenuText } from "./Menu/MenuText";

interface MenuProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  homeRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  storyRef: React.RefObject<HTMLDivElement | null>;
  pricingRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function Menu({
  scrollToSection,
  homeRef,
  aboutRef,
  storyRef,
  pricingRef,
  contactRef,
}: MenuProps) {
  return (
    <div className="flex justify-center items-center space-x-4 p-2">
      <MenuRoot scrollToSection={scrollToSection} sectionRef={homeRef}>
        <MenuIcon icon={HouseIcon} />
        <MenuText text="Home" />
      </MenuRoot>
      <MenuRoot scrollToSection={scrollToSection} sectionRef={aboutRef}>
        <MenuIcon icon={BookOpen} />
        <MenuText text="About" />
      </MenuRoot>
      <MenuRoot scrollToSection={scrollToSection} sectionRef={storyRef}>
        <MenuIcon icon={FolderOpen} />
        <MenuText text="Story" />
      </MenuRoot>
      <MenuRoot scrollToSection={scrollToSection} sectionRef={pricingRef}>
        <MenuIcon icon={HandCoins} />
        <MenuText text="Pricing" />
      </MenuRoot>
      <MenuRoot scrollToSection={scrollToSection} sectionRef={contactRef}>
        <MenuIcon icon={UserRoundPen} />
        <MenuText text="Contact" />
      </MenuRoot>
    </div>
  );
}
