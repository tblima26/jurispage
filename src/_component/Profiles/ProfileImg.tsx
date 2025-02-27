import React, { ElementType } from 'react'

interface ProfileImgProps {
  src: string,
  alt?: string,
  isFirst?: boolean,

}

export default function ProfileImg({ src, alt = 'Photo', isFirst = false }: ProfileImgProps) {
  return (
    <div className='hover:bg-gray-300 transition-all ease-in-out duration-700 delay-600'>
      <img src={src} alt={alt} className={`${isFirst ? "h-[545px]" : "h-[525px]"}`} />
    </div>
  )
}
