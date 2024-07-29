export const SelectTravelList=[
    {
        id: 1,
        title: "For Self",
        desc: "For Solo Travellers",
        icons:"✈️",
        people:'1 person'
    },
    {
        id: 2,
        title: "Couples",
        desc: "Partners in Exploration",
        icons:"🥂",
        people:'2 people'
    },
    {
        id: 3,
        title: "Family",
        desc: "For your loved ones",
        icons:"🏘️",
        people:'3 to 5 people'
    },
    {
        id: 4,
        title: "Friends, colleagues and extended families",
        desc: "For the love of thrill and adventure",
        icons:"🚞",
        people:'5+ people'
    },
]

export const SelectBudgetOptions=[
    {
        id: 1,
        title: "Cheap",
        desc: "Budget-friendly options",
        icons:"🪙",
    },
    {
        id: 2, 
        title: "Moderate",
        desc: "Mid-range options",
        icons:"💵",
    },
    {
        id: 3,
        title: "Luxury",
        desc: "High-end options",
        icons:"💰",
    },
]

export const AI_PROMPT = 'generate travel plan for location: {location}, for {totalDays} days, for {travellers} with {budget} budget, give me hotel options list with hotel name, hotel address, price, hotel image url, geo coordinates, rating, description and suggest itinerary with place name, place address, place details, place image url, geo coordinates, ticket pricing, rating, time travel for each of location for {totalDays} days with each day plan with best time to visit in json format'