import InvitationCodeInput from "../components/InvitationCodeInput";
import React from "react";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
//Trying out remote config on 30 jan 2023 but it won't work as it needs a window object
//initialize remote config and get a reference to the service 30 Jan 2023
// import {app} from '../config/firebase-config'
// import { getRemoteConfig } from "firebase/remote-config";
// import { remoteConfig } from "@/config/firebase-config";
// import { getValue } from "firebase/remote-config";
// const remoteConfig = new getRemoteConfig(app);
// console.log('Hi...the inivite code is..' + getValue(remoteConfig, "invitation_code"));

const InvitationCode = () => {
  
  return (
    <div className="container max-w-xs mx-auto sm:px-6 lg:px-8 flex flex-col justify-center h-screen">
      <InvitationCodeInput />
        <Link
          href="/app"
          className="max-w-xs mt-2 inline-flex justify-between items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Proceed
          <ArrowRightCircleIcon
            className="ml-2 -mr-1 h-5 w-5"
            aria-hidden="true"
          />
        </Link>
    </div>
  );
};

export default InvitationCode;
