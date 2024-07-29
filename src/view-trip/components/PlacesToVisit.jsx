import React from 'react'
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({trip}) {
    const itineraryData = trip?.tripData?.itinerary || {};

    const orderedDays = Object.keys(itineraryData).sort((a, b) => {
        const dayA = parseInt(a.replace('day', ''), 10);
        const dayB = parseInt(b.replace('day', ''), 10);
        return dayA - dayB;
    });

  return (
    <div>
        <h2 className='font-bold underline text-2xl'>Places to Visit</h2>
        <div>
        {orderedDays.map((dayKey) => {
          const dayData = itineraryData[dayKey];
          return (
            <div key={dayKey} className='my-4'>
              <h3 className='font-bold text-xl'>{dayKey.toUpperCase()}</h3>
              <h4>{dayData.name}</h4>
              <div className=''>
                {dayData.places.map((place, index) => (
                <div key={index} className='mt-2'>
                    <PlaceCardItem place={place}/>
                </div>
                ))}
              </div>
            </div>
          );
        })}
        </div>
    </div>
  )
}

export default PlacesToVisit