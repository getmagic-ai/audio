import { useState } from "react";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useRouter } from "next/router";

export default function WaitlistComponent({ handleWaitlistData }) {
  const [waitlist_name, setWaitlist_name] = useState(null);
  const [waitlist_email, setWaitlist_email] = useState(null);
  const [waitlist_phone, setWaitlist_phone] = useState(null);
  //adding a state for submitted or not, so we can show the right message and push the user to trending songs
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => setWaitlist_name(e.target.value);
  const handleEmailChange = (e) => setWaitlist_email(e.target.value);
  const handlePhoneChange = (e) => setWaitlist_phone(e.target.value);

  const router = useRouter();
  const handleWaitlistFormSubmit = async (e) => {
    //console.log("about to hit....trending songs..");
    router.push("/app/trending-songs");
    try {
      e.preventDefault();
      try {
        //set submitted to true
        setSubmitted(true);

        const response = await axios.post(
          "https://kollaboratenocodb.herokuapp.com/api/v1/db/data/v1/audio/waitlist",
          {
            //Id: 0, leaving id out and letting Nocodb pick the id
            Email: waitlist_email,
            // CreatedAt: new Date().toISOString(), //same as id, letting nocodb take care of this
            // UpdatedAt: new Date().toISOString(),
            Phone: waitlist_phone,
            Name: waitlist_name,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "xc-token": process.env.NEXT_PUBLIC_NOCODB_AUTH,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      //console.log("error is..." + error);
    }
    //console.log("about to hit....trending songs..");
    router.push("/app/trending-songs");
  };

  return !submitted ? (
    <div className='text-gray-100 space-y-3'>
      <div className='text-2xl align-middle items-center'>
        Please join our waitlist to be notified when new audios start trending!
      </div>

      <div className='text-sm align-middle items-center'>
        We will use your contact information only to send you the invitation
        code!
      </div>
      <form>
        <label
          htmlFor='waitlist-name'
          className='block text-sm font-medium text-gray-200 mt-4'
        >
          Name
        </label>
        <div className='mt-1'>
          <input
            type='waitlist-name'
            name='waitlist-name'
            value={waitlist_name}
            onChange={handleNameChange}
            id='waitlist-name'
            className='bg-gray-700 text-white shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3'
          />
        </div>

        <label
          htmlFor='waitlist-email'
          className='block text-sm font-medium text-gray-200 mt-4'
        >
          Email
        </label>
        <div className='mt-1'>
          <input
            type='waitlist-email'
            name='waitlist-email'
            value={waitlist_email}
            onChange={handleEmailChange}
            id='waitlist-email'
            className='bg-gray-700 text-white shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3'
          />
        </div>
        <label
          htmlFor='waitlist-phone'
          className='block text-sm font-medium text-gray-200 mt-4'
        >
          Phone Number
        </label>
        <div className='mt-1'>
          <input
            type='waitlist-phone'
            name='waitlist-phone'
            value={waitlist_phone}
            onChange={handlePhoneChange}
            id='waitlist-phone'
            className='bg-gray-700 text-white shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3'
          />
        </div>

        <Link
          href='/app'
          type='submit'
          className='max-w-xs mt-2 inline-flex justify-between items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={handleWaitlistFormSubmit}
        >
          Submit & Proceed to our alpha version!
          <ArrowRightCircleIcon
            className='ml-2 -mr-1 h-5 w-5'
            aria-hidden='true'
          />
        </Link>
      </form>
    </div>
  ) : (
    <div className='text-white'>
      Thanks! You will now see the alpha version of our product! Thanks for your
      feedback
    </div>
  );
}
