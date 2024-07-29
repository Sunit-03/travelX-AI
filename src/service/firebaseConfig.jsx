// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHLU7UaNz8f8pkvboHZ9NXHmRPCpDpKoo",
  authDomain: "ai-travel-planner-travelx.firebaseapp.com",
  projectId: "ai-travel-planner-travelx",
  storageBucket: "ai-travel-planner-travelx.appspot.com",
  messagingSenderId: "426410772042",
  appId: "1:426410772042:web:3dce987369ef15820648b3",
  measurementId: "G-0LKBKY8TBF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);