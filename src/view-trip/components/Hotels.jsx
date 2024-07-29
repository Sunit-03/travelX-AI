import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5 mb-5'>Hotel Recommendations</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {trip?.tripData?.hotel_options?.map((hotel_options,index)=>(
                <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel_options?.name + "," + hotel_options?.address}target='_blank'>
                    <div className='hover:scale-110 transition-all cursor-pointer'>
                        <img src="/placeholder.jpeg" className='rounded-md'/>
                        <div className='my-2 flex flex-col gap-2'>
                            <h2 className='font-medium'>{hotel_options?.name}</h2>
                            <h2 className='text-sm text-gray-400'>📌{hotel_options?.address}</h2>
                            <h2 className='text-sm font-bold'>💸{hotel_options?.price}</h2>
                            <h2>{hotel_options?.rating}⭐</h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Hotels