import { Button } from '@/components/ui/button'
import { getPlaceDetails } from '@/service/GlobalAPI';
import React, { useEffect, useState } from 'react'
import { FaShareAlt } from "react-icons/fa";

const PHOTO_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&&maxWidthPx=800&key='+import.meta.env.VITE_GOOGLE_PLACE_API_KEY
function InfoSection({trip}) {

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
    <div>
        <img src={photoUrl?photoUrl:'/placeholder.jpeg'} className='justify-center object-cover' />

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