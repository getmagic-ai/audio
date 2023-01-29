import React from "react";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const InviteAFriend = () => {
  return (
    <div className='container max-w-sm mx-auto my-auto sm:px-6 lg:px-8 flex flex-col justify-center h-96'>
      <div>
        <label
          htmlFor='invitation-code'
          className='block text-sm font-medium text-gray-200'
        >
          Enter email to send invite
        </label>
        <div className='mt-1'>
          <input
            type='invitation-code'
            name='invitation-code'
            id='invitation-code'
            placeholder='your-friend@example.com'
            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3'
          />
        </div>
      </div>
      <Link
        href='/dashboard'
        className='max-w-xs mt-2 inline-flex justify-between items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Send an Invite
        <ArrowRightCircleIcon
          className='ml-2 -mr-1 h-5 w-5'
          aria-hidden='true'
        />
      </Link>
    </div>
  );
};

export default InviteAFriend;
