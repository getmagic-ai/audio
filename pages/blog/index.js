import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Index(props) {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="text-white items-center align-middle text-xl">
        Hey, welcome the blogs page!
      </div>
      <div> Coming back soon with a news letter subsctiption</div>
      {currentUser ? <LoggedInEmailForm /> : <LoggedOutEmailForm />}
    </>
  );
}

export function LoggedInEmailForm({ email, onSubmit }) {
  const [newEmail, setNewEmail] = useState(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newEmail);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"> Hey there logged in user! Email address:</label>
      <input
        type="email"
        id="email"
        value={newEmail}
        onChange={(event) => setNewEmail(event.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}

export function LoggedOutEmailForm({ onSubmit }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Hey there Logged out User! Email address:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}
