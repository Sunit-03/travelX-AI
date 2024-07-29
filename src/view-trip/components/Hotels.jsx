import React from 'react'
import { Link } from 'react-router-dom'
import HotelCard from './HotelCard'

function Hotels({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5 mb-5'>Hotel Recommendations</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {trip?.tripData?.hotel_options?.map((hotel_options,index)=>(
                <HotelCard hotel_options={hotel_options}/>
            ))}
        </div>
    </div>
  )
}

export default Hotels