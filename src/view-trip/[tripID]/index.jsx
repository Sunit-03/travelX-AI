import { db } from '@/service/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import InfoSection from '../components/InfoSection'
import Hotels from '../components/Hotels'
import PlacesToVisit from '../components/PlacesToVisit'

function ViewTrip() {
  const {tripID}=useParams()
  const [trip,setTrip] = useState([])
  useEffect(()=>{
    tripID&&getTripData();
  },[tripID])
  const getTripData=async()=>{
    const docRef=doc(db,'AI-trip',tripID)
    const docSnap=await getDoc(docRef)

    if(docSnap.exists()){
        console.log('document:', docSnap.data())
        setTrip(docSnap.data())
    }else{
        console.log('No Such Document')
        toast('No Trip Found')
    }
  }
    return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
        {/* Information Section */}
            <InfoSection trip={trip}/>
        {/* Hotel Section */}
            <Hotels trip={trip}/>
        {/* Itinerary */}
            <PlacesToVisit trip={trip}/>
    </div>
  )
}

export default ViewTrip