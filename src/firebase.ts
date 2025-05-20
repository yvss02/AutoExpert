// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk5n8bXSGLsFqhiTCsP84EKCcwnRynI9Y",
  authDomain: "autoexpert-project.firebaseapp.com",
  projectId: "autoexpert-project",
  storageBucket: "autoexpert-project.firebasestorage.app",
  messagingSenderId: "401507226509",
  appId: "1:401507226509:web:b0d338afb4001efe5863c4",
};

// Initialize Firebase
export const firestore = getFirestore(initializeApp(firebaseConfig));

export const auth = getAuth(initializeApp(firebaseConfig));
