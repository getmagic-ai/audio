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
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
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

export const app = firebaseApp;
export const db = getFirestore(app);
export const auth = getAuth(app);
(async () => {
  await setPersistence(auth, browserLocalPersistence);
})();
export const googleAuthProvider = new GoogleAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();
