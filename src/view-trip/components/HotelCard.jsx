import { getPlaceDetails, PHOTO_URL } from "@/service/GlobalAPI";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelCard({ hotel_options }) {
    const [photoUrl,setPhotoUrl]=useState()
    useEffect(()=>{
        hotel_options&&getPlacePhoto()
    },[hotel_options])
    const getPlacePhoto=async()=>{
        const data={
            textQuery:hotel_options?.name
        }
        const result = await getPlaceDetails(data).then(resp=>{
            console.log(resp.data.places[0].photos[3].name)

            const photoUrl=PHOTO_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
            setPhotoUrl(photoUrl)
        })
    }
  return (
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          hotel_options?.name +
          "," +
          hotel_options?.address
        }
        target="_blank"
      >
        <div className="border p-2 hover:scale-110 transition-all cursor-pointer mb-7">
          <img src={photoUrl?photoUrl:'/placeholder.jpeg'} className="h-[150px] w-full object-cover" />
          <div className="my-2 flex flex-col gap-2">
            <h2 className="font-medium">{hotel_options?.name}</h2>
            <h2 className="text-sm text-gray-400">
              📌{hotel_options?.address}
            </h2>
            <h2 className="text-sm font-bold">💸{hotel_options?.price}</h2>
            <h2>{hotel_options?.rating}⭐</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HotelCard;
