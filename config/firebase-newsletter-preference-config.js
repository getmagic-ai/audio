import { getApps, initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  browserSessionPersistence,
  browserPopupRedirectResolver,
  setPersistence,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
let firebaseApp;
//https://github.com/firebase/firebase-js-sdk/issues/4950 change made on nov 21
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig, {
    browserSessionPersistence,
    browserPopupRedirectResolver,
  });
}

export const testapp = firebaseApp;
export const userPrefDb = getFirestore(testapp);

