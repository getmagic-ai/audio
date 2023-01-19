import InvitationCodeInput from "@/components/InvitationCodeInput";
import React from "react";
import Link from "next/link";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const InvitationCode = () => {
  return (
    <div className='container max-w-xs mx-auto sm:px-6 lg:px-8 flex flex-col justify-center h-screen'>
      <InvitationCodeInput />
      <Link
        href='/dashboard'
        className='max-w-xs mt-2 inline-flex justify-between items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Proceed
        <ArrowRightCircleIcon
          className='ml-2 -mr-1 h-5 w-5'
          aria-hidden='true'
        />
      </Link>
    </div>
  );
};

export default InvitationCode;
