import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTIBMOmmiB1dylms4Nn8dNcqNULZUF988",
    authDomain: "react-chat-60f38.firebaseapp.com",
    projectId: "react-chat-60f38",
    storageBucket: "react-chat-60f38.appspot.com",
    messagingSenderId: "336561827359",
    appId: "1:336561827359:web:6a913f8a9f8454991daf2a",
    measurementId: "G-W0SKBNEV37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()