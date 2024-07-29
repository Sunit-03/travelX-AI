import { db } from '@/service/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import UserTripCard from './components/UserTripCard'

function MyTrips() {
    const [userTrips,setUserTrips]=useState([])
    useEffect(()=>{
        getUserTrips()
    })
    const navigate=useNavigate()
    const getUserTrips=async()=>{
        const user=JSON.parse(localStorage.getItem('user'))
        if(!user){
            navigate('/')
            return
        }
        
        const q=query(collection(db,'AI-trip'),where('userEmail','==',user?.email))
        const querySnapshot = await getDocs(q);
        const trips =[]
        querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        trips.push(doc.data())
});
setUserTrips(trips)
    }
  return (
    <div className='p-10 md:px-32 lg:px-56'>
        <h2 className='font-bold underline text-4xl'>
            My Trips
        </h2>
        <div className='grid grid-col-4 gap-5 md:grid-cols-3'>
            {userTrips.map((trip,index)=>(
                <UserTripCard trip={trip}/>
            ))}
        </div>
    </div>
  )
}

export default MyTrips