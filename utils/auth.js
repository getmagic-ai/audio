import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { auth, db } from "../config/firebase-config";
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Create a password-based account
export const CreateNewUser = (email, password, firstName, lastName, router) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log("Signed in", user);
      updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
      })
        .then(async () => {
          const data = {
            email,
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
          };
          await setDoc(doc(db, "users", auth.currentUser.uid), data);
          const userRef = doc(db, "userData", auth.currentUser.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            console.log("Document data:", userSnap.data());
            router.push("/dashboard/home");
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            router.push("/onboarding");
          }
        })
        .catch((error) => {
          console.log("An error occurred");
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });

// Sign in a user with an email address and password
export const SignInUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Signed in", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });

// Google Signin
export const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log(user, accessToken);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("An Error has Occurred", errorMessage);
    });

// Facebook Sigin
export const signInWithFacebook = () =>
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log(user, accessToken);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log("An Error has Occurred", errorMessage);
    });

// Sign Out
export const signOutAUser = () =>
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      console.log("An error happened.", error.message);
    });

// Send a user a verification email
export const sendUserAVerificationEmail = () =>
  sendEmailVerification(auth.currentUser).then(() => {
    console.log("Email verification sent!");
  });

// Send a password reset email
export const sendUserAPasswordResetEmail = (email) =>
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Password reset email sent!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
