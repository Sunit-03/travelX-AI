import { Button } from '@/components/ui/button'
import React from 'react'
import { FaShareAlt } from "react-icons/fa";

function InfoSection({trip}) {
  return (
    <div>
        <img src="/placeholder.jpeg" className='justify-center h-[350px] w-[300px]' />

        <div className='flex items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                <div className='flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-300 rounded-full text-gray-700 text-xs md:text-lg'>📅{trip?.userSelection?.noOfDays} Days</h2>
                    <h2 className='p-1 px-3 bg-gray-300 rounded-full text-gray-700 text-xs md:text-lg'>💸{trip?.userSelection?.budget} budget</h2>
                    <h2 className='p-1 px-3 bg-gray-300 rounded-full text-gray-700 text-xs md:text-lg'>🍻No. of travellers: {trip?.userSelection?.travellers}</h2>
                </div>
            </div>
            <Button className='mx-5 my-5'><FaShareAlt/></Button>
        </div>
    </div>
  )
}

export default InfoSection