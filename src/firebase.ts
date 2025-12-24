// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"Firebase API KEY",
  authDomain: "autoexpert-project.firebaseapp.com",
  projectId: "autoexpert-project",
  storageBucket: "autoexpert-project.firebasestorage.app",
  messagingSenderId: "",
  appId: "1::web:",
};

// Initialize Firebase
export const firestore = getFirestore(initializeApp(firebaseConfig));

export const auth = getAuth(initializeApp(firebaseConfig));
