import {
  app,
  auth,
  db,
  googleAuthProvider,
} from "../../config/firebase-config";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { createFirestoreDoc } from "@/firebasefunctions/createFirestoreDoc";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  //create the Auth object

  const handleSignup = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log({ ...userCredentials.user.uid });
      const user = userCredentials.user;
      //create Firestore user
      createFirestoreDoc("customers", {
        uid: user.uid,
        name: user.displayName,
        authProvider: "Email",
        email: user.email,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  async function handleGoogleSignup() {
    try {
      const userCredentials = await signInWithPopup(auth, googleAuthProvider);
      console.log({ ...userCredentials.user.uid });
      const user = userCredentials.user;
      //create Firestore user
      createFirestoreDoc("customers", {
        uid: user.uid,
        name: user.displayName,
        authProvider: "Email",
        email: user.email,
      });
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  return (
    <>
      <div>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button onClick={handleSignup}>Sign Up</button>
      </div>
      <div>
        <button
          className='py-4 rounded-md bg-blue-800 text-white'
          onClick={handleGoogleSignup}
        >
          Sign up with Google
        </button>
      </div>
    </>
  );
}
