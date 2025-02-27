import React from "react";
import { HouseIcon, BookOpen, FolderOpen, HandCoins, UserRoundPen } from "lucide-react";
import { MenuIcon } from "./Menu/MenuIcon";
import { MenuRoot } from "./Menu/MenuRoot";
import { MenuText } from "./Menu/MenuText";

export default function Menu() {
  return (
    <div className="flex justify-center items-center space-x-4 p-2" >
      <MenuRoot href="/">
        <MenuIcon icon={HouseIcon} />
        <MenuText text="Home" />
      </MenuRoot>
      <MenuRoot href="/">
        <MenuIcon icon={BookOpen} />
        <MenuText text="About" />
      </MenuRoot>
      <MenuRoot href="/">
        <MenuIcon icon={FolderOpen} />
        <MenuText text="Story" />
      </MenuRoot>
      <MenuRoot href="/">
        <MenuIcon icon={HandCoins} />
        <MenuText text="Pricing" />
      </MenuRoot>
      <MenuRoot href="/">
        <MenuIcon icon={UserRoundPen} />
        <MenuText text="Contact" />
      </MenuRoot>
    </div>
  )
}
