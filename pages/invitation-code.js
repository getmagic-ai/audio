import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const InvitationCode = () => {
  const welcomeCode = "WELCOME2023";
  const router = useRouter();
  const [invitationCode, setInvitationCode] = useState("");
  const handleInvitationCodeChange = (e) => {
    setInvitationCode(e.target.value);
  };
  return (
    <div className='container max-w-sm mx-auto sm:px-6 lg:px-8 flex flex-col justify-center h-screen space-y-3'>
      <div>
        <label
          htmlFor='invitation-code'
          className='block text-md font-medium text-gray-200'
        >
          Enter Invitation Code
        </label>
        <div className='mt-5'>
          <input
            type='invitation-code'
            name='invitation-code'
            id='invitation-code'
            value={invitationCode}
            onChange={handleInvitationCodeChange}
            className='bg-gray-700 text-white shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3'
          />
        </div>
      </div>
      <button
        onClick={() => router.replace("/app/trending-songs")}
        disabled={invitationCode.length == 0 || invitationCode != welcomeCode}
        className='max-w-sm mt-2 inline-flex justify-between items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-600'
      >
        Proceed
        <ArrowRightCircleIcon
          className='ml-2 -mr-1 h-5 w-5'
          aria-hidden='true'
        />
      </button>
      <div className='text-center'>
        <p className='text-xs text-gray-400'>Don't have the invitation code?</p>
        <p className='text-xs text-gray-400'>
          {" "}
          Email us at{" "}
          <a
            className='text-blue-600 cursor-pointer'
            href='mailto:admin@waveforms.io'
          >
            admin@waveforms.io
          </a>
        </p>
      </div>
    </div>
  );
};

export default InvitationCode;
