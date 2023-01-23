import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5y5rg4EwMmR9z-TGtMF8nogsrEnu0IG4",
  authDomain: "whatsapp-clone-f9999.firebaseapp.com",
  projectId: "whatsapp-clone-f9999",
  storageBucket: "whatsapp-clone-f9999.appspot.com",
  messagingSenderId: "842024115055",
  appId: "1:842024115055:web:f1e0f0ab015615677a669a",
  measurementId: "G-2RE4D0NN8H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
