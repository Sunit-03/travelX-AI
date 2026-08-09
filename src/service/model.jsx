// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-3.6-flash",
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
            text: "generate travel plan for location: berlin, for 3 days, for a couple with moderate budget, give me hotel options list with hotel name, hotel address, price, geo coordinates, rating, brief description and suggest itinerary with place name, place address, brief place details, geo coordinates, ticket pricing, rating, time travel for each of location for 3 days with each day plan with best time to visit in json format. Keep descriptions to one short sentence.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{\n  "hotel_options": [\n    {\n      "name": "The Circus Hotel",\n      "address": "Skalitzer Straße 84-86, 10997 Berlin, Germany",\n      "price": "€100 - €150 per night",\n      "geo_coordinates": "52.504345, 13.424604",\n      "rating": 4.5,\n      "description": "Stylish hotel in trendy Kreuzberg, known for nightlife and street art."\n    },\n    {\n      "name": "nhow Berlin",\n      "address": "Stralauer Allee 3, 10245 Berlin, Germany",\n      "price": "€120 - €180 per night",\n      "geo_coordinates": "52.514637, 13.477391",\n      "rating": 4.0,\n      "description": "Design-focused hotel near the East Side Gallery and Spree River."\n    },\n    {\n      "name": "Hotel Indigo Berlin - Alexanderplatz",\n      "address": "Alexanderstraße 7, 10178 Berlin, Germany",\n      "price": "€130 - €200 per night",\n      "geo_coordinates": "52.520376, 13.412085",\n      "rating": 4.2,\n      "description": "Trendy hotel near Alexanderplatz with easy transit access."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "name": "Historical Highlights",\n      "time": "9:00 AM - 6:00 PM",\n      "places": [\n        {\n          "name": "Brandenburg Gate",\n          "address": "Pariser Platz, 10117 Berlin, Germany",\n          "details": "Iconic landmark and symbol of German unity.",\n          "geo_coordinates": "52.516272, 13.377722",\n          "ticket_pricing": "Free",\n          "rating": 4.8,\n          "time_to_spend": "1-2 hours"\n        },\n        {\n          "name": "Reichstag Building",\n          "address": "Platz der Republik 1, 11011 Berlin, Germany",\n          "details": "Seat of the German Parliament with panoramic dome views.",\n          "geo_coordinates": "52.518087, 13.376513",\n          "ticket_pricing": "Free (registration required)",\n          "rating": 4.6,\n          "time_to_spend": "1-2 hours"\n        },\n        {\n          "name": "Memorial to the Murdered Jews of Europe",\n          "address": "Cora-Berliner-Straße 1, 10117 Berlin, Germany",\n          "details": "Moving memorial commemorating Holocaust victims.",\n          "geo_coordinates": "52.518248, 13.372481",\n          "ticket_pricing": "Free",\n          "rating": 4.7,\n          "time_to_spend": "1 hour"\n        }\n      ]\n    },\n    "day2": {\n      "name": "Art and Culture",\n      "time": "10:00 AM - 7:00 PM",\n      "places": [\n        {\n          "name": "East Side Gallery",\n          "address": "Mühlenstraße 79-81, 10243 Berlin, Germany",\n          "details": "Longest open-air gallery on a preserved Berlin Wall section.",\n          "geo_coordinates": "52.507088, 13.447413",\n          "ticket_pricing": "Free",\n          "rating": 4.6,\n          "time_to_spend": "1-2 hours"\n        },\n        {\n          "name": "Pergamon Museum",\n          "address": "Bodestraße 1-3, 10178 Berlin, Germany",\n          "details": "Ancient artifacts including the Pergamon Altar and Ishtar Gate.",\n          "geo_coordinates": "52.519444, 13.406389",\n          "ticket_pricing": "€18 (adults)",\n          "rating": 4.7,\n          "time_to_spend": "2-3 hours"\n        },\n        {\n          "name": "Museum Island",\n          "address": "Museum Island, 10178 Berlin, Germany",\n          "details": "UNESCO site home to five world-renowned museums.",\n          "geo_coordinates": "52.519656, 13.405549",\n          "ticket_pricing": "€18 (adults) for a combined ticket",\n          "rating": 4.8,\n          "time_to_spend": "Half-day"\n        }\n      ]\n    },\n    "day3": {\n      "name": "Relax and Explore",\n      "time": "9:00 AM - 8:00 PM",\n      "places": [\n        {\n          "name": "Tiergarten",\n          "address": "Tiergarten, 10555 Berlin, Germany",\n          "details": "Large urban park ideal for a relaxing stroll or picnic.",\n          "geo_coordinates": "52.511146, 13.377459",\n          "ticket_pricing": "Free",\n          "rating": 4.5,\n          "time_to_spend": "2-3 hours"\n        },\n        {\n          "name": "Charlottenburg Palace",\n          "address": "Spandauer Damm 20-24, 14059 Berlin, Germany",\n          "details": "Grand palace with gardens showcasing Prussian history.",\n          "geo_coordinates": "52.521088, 13.298443",\n          "ticket_pricing": "€19 (adults)",\n          "rating": 4.6,\n          "time_to_spend": "2-3 hours"\n        },\n        {\n          "name": "KaDeWe (Kaufhaus des Westens)",\n          "address": "Tauentzienstraße 21-24, 10789 Berlin, Germany",\n          "details": "Famous department store with luxury goods and dining.",\n          "geo_coordinates": "52.501866, 13.358762",\n          "ticket_pricing": "Free",\n          "rating": 4.4,\n          "time_to_spend": "1-2 hours"\n        }\n      ]\n    }\n  }\n}\n```',
          },
        ],
      },
    ],
  });
  