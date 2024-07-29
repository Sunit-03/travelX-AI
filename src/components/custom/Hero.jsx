import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-100 gap-5'>
        <h2 className='font-extrabold text-[50px] text-center mt-15'>
            Use AI to discover and plan your upcoming adventures <br />and <br /><span className='text-[#1b4da4]'> plan itineraries with TravelX</span>
        </h2>
        <p className='text-2xl text-gray-500 mt-15'>Your personal AI based travel planner</p>
        <Link to={'/create-trip'}>
            <Button>Let's Get Started</Button>
        </Link>

        <div className='grid grid-cols-2 my-10 px-5 object-cover'>
            <img src="/Landing.jpg" className='mb-10'/>
            <img src="/Trip.jpg" className='' />
        </div>
    </div>
  )
}

export default Hero