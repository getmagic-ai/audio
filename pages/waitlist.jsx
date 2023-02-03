import WaitlistComponent from "../components/WaitlistComponent";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { data } from "autoprefixer";

export default function Waitlist() {
  return (
    <div className="container max-w-xs mx-auto sm:px-6 lg:px-8 flex flex-col justify-center h-screen">
      <WaitlistComponent />
    </div>
  );
}
