import { useState } from "react";
import { useRouter } from "next/router";

const InvitationCode = () => {
  const [code, setCode] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // check if the code is valid, hardcoded to WELCOME2023 for now, will come from Firebase Remote Config in production
    if (code === "WELCOME2023") router.push("/audioList");
  };

  return (
    <div className="px-5 py-5  mb-10 bg-black flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex col-1 items-center justify-center align-self-start">
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-64 text-black leading-tight appearance-none"
          type="text"
          placeholder="enter your invitation code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          className="w-48 mt-4 mb-4 bg-purple-500 hover:bg-purple-700 text-white font-bold rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InvitationCode;
