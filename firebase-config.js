// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {GoogleAuthProvider, GithubAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCVi8wG0PVIVC9M0eQWyq0YAAPrdb_1vU",
  authDomain: "audio-a4d7c.firebaseapp.com",
  projectId: "audio-a4d7c",
  storageBucket: "audio-a4d7c.appspot.com",
  messagingSenderId: "742973000507",
  appId: "1:742973000507:web:db3bd52fc8b1a76ebec51e",
  measurementId: "G-R24CNV45PJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();