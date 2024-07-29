import { getPlaceDetails, PHOTO_URL } from '@/service/GlobalAPI'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PlaceCardItem({place}) {
    const [photoUrl,setPhotoUrl]=useState()
    useEffect(()=>{
        place&&getPlacePhoto()
    },[place])
    const getPlacePhoto=async()=>{
        const data={
            textQuery:place.name
        }
        const result = await getPlaceDetails(data).then(resp=>{
            console.log(resp.data.places[0].photos[3].name)

            const photoUrl=PHOTO_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
            setPhotoUrl(photoUrl)
        })
    }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.name} target='_blank'>
        <div className='hover:shadow-lg border p-3 mt-3 flex gap-5 hover:scale-110 cursor-pointer transition-all'>
            <img src={photoUrl?photoUrl:"/placeholder.jpeg"} className='w-[150px] h-[150px] object-cover'/>
            <div>
                <h5 className='font-bold text-lg'>{place.name}</h5>
                <div className='ml-4'>
                    <p>🗒️{place.details}</p>
                    <p>📌{place.address}</p>
                    <p>💸{place.ticket_pricing}</p>
                    <p>Rating:{place.rating}⭐</p>
                    <p>⏱️{place.time_to_spend}</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default PlaceCardItem