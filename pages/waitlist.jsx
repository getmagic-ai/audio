import WaitlistComponent from "../components/WaitlistComponent";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { data } from "autoprefixer";

export default function Waitlist() {
  const [formData, setFormData] = useState({}); //initialize with a null object for each new render
  const postWaitlistData = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  };
  const handleWaitlistFormSubmit = () => {
    console.log('in the waitlist component....->' + formData)
    //curl -X 'POST' \
    //   'https://kollaboratenocodb.herokuapp.com/api/v1/db/data/v1/audio/waitlist' \
    //   -H 'accept: application/json' \
    //   -H 'Content-Type: application/json' \
    //   -d '{
    //   "Id": 0,
    //   "Email": "string",
    //   "CreatedAt": "string",
    //   "UpdatedAt": "string",
    //   "Phone": "string",
    //   "Name": "string"
    // }'
  };

  return (
    <div className="container max-w-xs mx-auto sm:px-6 lg:px-8 flex flex-col justify-center h-screen">
      <WaitlistComponent handleWaitlistData={postWaitlistData} />
      
    </div>
  );
}
