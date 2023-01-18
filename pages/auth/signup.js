import { app } from "../../firebase-config";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  //create the Auth object
  const auth = getAuth();

  const handleSignup = async () => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setError(err.message);
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
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
