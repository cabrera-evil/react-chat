import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// env variables
// const firebase_key = import.meta.env.REACT_APP_FIREBASE_KEY;

const firebaseConfig = {
    apiKey: "AIzaSyANkXoHqqgMUEwpeST2j7kcLQtJmv4SEso",
    authDomain: "react-chat-b89f5.firebaseapp.com",
    projectId: "react-chat-b89f5",
    storageBucket: "react-chat-b89f5.appspot.com",
    messagingSenderId: "111968003042",
    appId: "1:111968003042:web:b8c77410a926f136b78fbb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()