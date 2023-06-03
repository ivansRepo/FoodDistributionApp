// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEIi33jHWr4vdB7IKgyd92gBkKBnqegXM",
  authDomain: "homelessfooddonation.firebaseapp.com",
  projectId: "homelessfooddonation",
  storageBucket: "homelessfooddonation.appspot.com",
  messagingSenderId: "186025162026",
  appId: "1:186025162026:web:c62d2a14acb6f39d6eda53",
  measurementId: "G-KX166XLF9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);