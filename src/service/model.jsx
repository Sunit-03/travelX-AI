// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "generate travel plan for location: berlin, for 3 days, for a couple with moderate budget, give me hotel options list with hotel name, hotel address, price, hotel image url, geo coordinates, rating, description and suggest itinerary with place name, place address, place details, place image url, geo coordinates, ticket pricing, rating, time travel for each of location for 3 days with each day plan with best time to visit in json format",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{\n  "hotel_options": [\n    {\n      "name": "The Circus Hotel",\n      "address": "Skalitzer Straße 84-86, 10997 Berlin, Germany",\n      "price": "€100 - €150 per night",\n      "image_url": "https://www.booking.com/hotel/de/circus-berlin.en-gb.html",\n      "geo_coordinates": "52.504345, 13.424604",\n      "rating": 4.5,\n      "description": "Stylish and modern hotel in the trendy district of Kreuzberg, known for its vibrant nightlife and street art."\n    },\n    {\n      "name": "nhow Berlin",\n      "address": "Stralauer Allee 3, 10245 Berlin, Germany",\n      "price": "€120 - €180 per night",\n      "image_url": "https://www.booking.com/hotel/de/nhow-berlin.en-gb.html",\n      "geo_coordinates": "52.514637, 13.477391",\n      "rating": 4.0,\n      "description": "Unique and design-focused hotel located near the East Side Gallery and Spree River, offering stunning views."\n    },\n    {\n      "name": "Hotel Indigo Berlin - Alexanderplatz",\n      "address": "Alexanderstraße 7, 10178 Berlin, Germany",\n      "price": "€130 - €200 per night",\n      "image_url": "https://www.booking.com/hotel/de/indigo-berlin-alexanderplatz.en-gb.html",\n      "geo_coordinates": "52.520376, 13.412085",\n      "rating": 4.2,\n      "description": "Trendy and vibrant hotel near Alexanderplatz, offering easy access to major attractions and public transportation."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "name": "Historical Highlights",\n      "time": "9:00 AM - 6:00 PM",\n      "places": [\n        {\n          "name": "Brandenburg Gate",\n          "address": "Pariser Platz, 10117 Berlin, Germany",\n          "details": "Iconic landmark and symbol of German unity, offering stunning views of the city.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Brandenburg_Gate_2017.jpg/1280px-Brandenburg_Gate_2017.jpg",\n          "geo_coordinates": "52.516272, 13.377722",\n          "ticket_pricing": "Free",\n          "rating": 4.8,\n          "time_to_spend": "1-2 hours"\n        },\n        {\n          "name": "Reichstag Building",\n          "address": "Platz der Republik 1, 11011 Berlin, Germany",\n          "details": "The seat of the German Parliament, offering panoramic views from its dome.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bundestag_Berlin_01.jpg/1280px-Bundestag_Berlin_01.jpg",\n          "geo_coordinates": "52.518087, 13.376513",\n          "ticket_pricing": "Free (registration required)",\n          "rating": 4.6,\n          "time_to_spend": "1-2 hours"\n        },\n        {\n          "name": "Memorial to the Murdered Jews of Europe",\n          "address": "Cora-Berliner-Straße 1, 10117 Berlin, Germany",\n          "details": "Powerful and moving memorial commemorating the victims of the Holocaust.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Holocaust_Memorial_Berlin_2010.jpg/1280px-Holocaust_Memorial_Berlin_2010.jpg",\n          "geo_coordinates": "52.518248, 13.372481",\n          "ticket_pricing": "Free",\n          "rating": 4.7,\n          "time_to_spend": "1 hour"\n        }\n      ]\n    },\n    "day2": {\n      "name": "Art and Culture",\n      "time": "10:00 AM - 7:00 PM",\n      "places": [\n        {\n          "name": "East Side Gallery",\n          "address": "Mühlenstraße 79-81, 10243 Berlin, Germany",\n          "details": "World\'s longest open-air gallery, featuring colorful murals on a preserved section of the Berlin Wall.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/East_Side_Gallery_20150605.jpg/1280px-East_Side_Gallery_20150605.jpg",\n          "geo_coordinates": "52.507088, 13.447413",\n          "ticket_pricing": "Free",\n          "rating": 4.6,\n          "time_to_spend": "1-2 hours"\n        },\n        {\n          "name": "Pergamon Museum",\n          "address": "Bodestraße 1-3, 10178 Berlin, Germany",\n          "details": "Home to ancient artifacts and architectural wonders, including the Pergamon Altar and the Ishtar Gate.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pergamon_Museum_Berlin_2007.jpg/1280px-Pergamon_Museum_Berlin_2007.jpg",\n          "geo_coordinates": "52.519444, 13.406389",\n          "ticket_pricing": "€18 (adults)",\n          "rating": 4.7,\n          "time_to_spend": "2-3 hours"\n        },\n        {\n          "name": "Museum Island",\n          "address": "Museum Island, 10178 Berlin, Germany",\n          "details": "A UNESCO World Heritage Site, home to five world-renowned museums, including the Neues Museum, Altes Museum, and the Bode Museum.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Berlin_Museumsinsel_night.jpg/1280px-Berlin_Museumsinsel_night.jpg",\n          "geo_coordinates": "52.519656, 13.405549",\n          "ticket_pricing": "€18 (adults) for a combined ticket",\n          "rating": 4.8,\n          "time_to_spend": "Half-day"\n        }\n      ]\n    },\n    "day3": {\n      "name": "Relax and Explore",\n      "time": "9:00 AM - 8:00 PM",\n      "places": [\n        {\n          "name": "Tiergarten",\n          "address": "Tiergarten, 10555 Berlin, Germany",\n          "details": "Large urban park with lakes, gardens, and monuments, perfect for a relaxing stroll or picnic.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Tiergarten_Berlin_2011.jpg/1280px-Tiergarten_Berlin_2011.jpg",\n          "geo_coordinates": "52.511146, 13.377459",\n          "ticket_pricing": "Free",\n          "rating": 4.5,\n          "time_to_spend": "2-3 hours"\n        },\n        {\n          "name": "Charlottenburg Palace",\n          "address": "Spandauer Damm 20-24, 14059 Berlin, Germany",\n          "details": "Grand palace with beautiful gardens, showcasing the history of the Prussian monarchy.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Charlottenburg_Palace_2015.jpg/1280px-Charlottenburg_Palace_2015.jpg",\n          "geo_coordinates": "52.521088, 13.298443",\n          "ticket_pricing": "€19 (adults)",\n          "rating": 4.6,\n          "time_to_spend": "2-3 hours"\n        },\n        {\n          "name": "KaDeWe (Kaufhaus des Westens)",\n          "address": "Tauentzienstraße 21-24, 10789 Berlin, Germany",\n          "details": "Famous department store offering a wide range of luxury goods, food, and dining experiences.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/KaDeWe_Berlin.jpg/1280px-KaDeWe_Berlin.jpg",\n          "geo_coordinates": "52.501866, 13.358762",\n          "ticket_pricing": "Free",\n          "rating": 4.4,\n          "time_to_spend": "1-2 hours"\n        }\n      ]\n    }\n  }\n}\n```',
          },
        ],
      },
    ],
  });
  