// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZJnOpkwhuYv9rfMaXy6Lwcvq-Y25O_L4",
  authDomain: "segundo-landing.firebaseapp.com",
  projectId: "segundo-landing",
  storageBucket: "segundo-landing.firebasestorage.app",
  messagingSenderId: "1068590346037",
  appId: "1:1068590346037:web:f61b73edd3bef82313667c",
  measurementId: "G-KXCWQCZZ1W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
