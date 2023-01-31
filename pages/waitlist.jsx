import WaitlistComponent from "../components/WaitlistComponent";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Waitlist() {
  const handleWaitlistFormSubmit = () => {
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
      <WaitlistComponent />
      <Link
        href="/app"
        className="max-w-xs mt-2 inline-flex justify-between items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleWaitlistFormSubmit}
      >
        Submit
        <ArrowRightCircleIcon
          className="ml-2 -mr-1 h-5 w-5"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
