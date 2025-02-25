import { Armchair, Minus } from 'lucide-react'
import React from 'react'

export default function About() {
  return (
    <div className=' h-40 w-full flex flex-col justify-center items-center text-center p-4 text-gray-600 gap-3 mt-10' >
      <p className='font-cinzel text-4xl font-bold'>
        About Us
      </p>
      <div className='flex justify-center items-center '>
        <Minus className='h-8 w-8' />
        <Armchair className='h-8 w-8' />
        <Minus className='h-8 w-8' />
      </div>
      <p className='font-cinzel text-3xl font-bold'>
        Welcome to Advocay
      </p>
      <p className='font-montserrat text-base1'>
        At Advocacy, we are dedicated to providing exceptional legal services with a proven track record of success. With over 10 years of experience, our team of expert lawyers is committed to ensuring the best outcomes for our clients. We are proud of our high success rate and the trust our clients place in us to handle their legal matters efficiently.
      </p>
    </div>
  )
}
