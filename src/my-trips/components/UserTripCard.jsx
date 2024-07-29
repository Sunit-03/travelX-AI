import { getPlaceDetails, PHOTO_URL } from '@/service/GlobalAPI'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UserTripCard({trip}) {
    const [photoUrl,setPhotoUrl]=useState()
    useEffect(()=>{
        trip&&getPlacePhoto()
    },[trip])
    const getPlacePhoto=async()=>{
        const data={
            textQuery:trip?.userSelection?.location?.label
        }
        const result = await getPlaceDetails(data).then(resp=>{
            console.log(resp.data.places[0].photos[2].name)

            const photoUrl=PHOTO_URL.replace('{NAME}',resp.data.places[0].photos[2].name)
            setPhotoUrl(photoUrl)
        })
    }
  return (
    <Link to={'/view-trip/'+trip?.id}>
        <div className='border p-2 m-2 my-10 cursor-pointer hover:scale-110 transition-all hover:shadow-xl'>
            <img src={photoUrl?photoUrl:"/placeholder.jpeg"} alt="" className='object-cover'/>
            <div>
                <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
                <h2 className='text-sm text-gray-500'>💸{trip?.userSelection?.budget}</h2>
                <h2 className='text-sm text-gray-500'>📅{trip?.userSelection?.noOfDays} Days</h2>
            </div>
        </div>
    </Link>
  )
}

export default UserTripCard