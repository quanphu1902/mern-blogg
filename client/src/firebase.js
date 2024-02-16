// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blogs-162a2.firebaseapp.com",
  projectId: "mern-blogs-162a2",
  storageBucket: "mern-blogs-162a2.appspot.com",
  messagingSenderId: "341913172947",
  appId: "1:341913172947:web:92dc843b0ee6bd4ecc8d26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);