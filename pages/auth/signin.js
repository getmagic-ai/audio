import { db, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { app, db, auth, googleAuthProvider, githubAuthProvider } from "../../firebase-config";
import { useRouter } from "next/router";


export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  //create the Auth object

  const auth = getAuth(app);
  const router = useRouter();

  const handleSignin = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log({ ...userCredentials.user });
      router.push("/upgrade");
    } catch {
      console.log("error");
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button onClick={handleSignin}>Sign In</button>
    </div>
  );
}
