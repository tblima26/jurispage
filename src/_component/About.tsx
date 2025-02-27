import { Armchair, Minus } from 'lucide-react'
import React from 'react'
import Divider from './Divider'

export default function About() {
  return (
    <div className=' h-30 w-full flex flex-col justify-center items-center 
      text-center p-4 text-gray-600 gap-3 mt-28' >
      <p className='font-cinzel text-2xl font-bold'>
        About Us
      </p>
      <Divider />
      <p className='font-cinzel text-xl font-bold'>
        Welcome to Advocacy
      </p>
      <p className='font-montserrat text-base'>
        At Advocacy, we provide exceptional legal services backed by over 10 years
        of experience. Our expert team is committed to achieving the best outcomes
        for our clients with a high success rate and efficient handling of legal matters.      </p>
    </div>
  )
}
