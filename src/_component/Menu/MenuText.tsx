import React from "react"

interface MenuTextProps {
  text: string
}

export default function MenuText({ text }: MenuTextProps) {
  return (
    <span className="font-montserrat text-sm">
      {text}
    </span>
  )
}