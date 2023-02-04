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
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
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
