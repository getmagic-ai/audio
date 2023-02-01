import { useState } from "react"

export default function WaitlistComponent({ handleWaitlistData }) {
const [waitilist_name, setWaitlist_name] = useState(null)
const [waitilist_email, setWaitlist_email] = useState(null)
const [waitilist_phone, setWaitlist_phone] = useState(null)

const handleNameChange = (e) => setWaitlist_name(e.target.value)
const handleEmailChange = (e) => setWaitlist_email(e.target.value)
const handlePhoneChange = (e) => setWaitlist_phone(e.target.value)



const handleSubmit = (e) => {e.preventDefault()
  handleWaitlistData({waitilist_name, waitilist_email, waitilist_phone})
}


  return (
    <>
      <div className="text-2xl align-middle items-center">
        Please join our waitlist to be notified when we go live!
      </div>

      <div className="text-sm align-middle items-center">
        We will use your contact information only to send you the invitation
        code!
      </div>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="waitlist-name"
          className="block text-sm font-medium text-gray-200"
        >
          Name
        </label>
        <div className="mt-1">
          <input
            type="waitlist-name"
            name="waitlist-name"
            value={waitilist_name}
            onChange={handleNameChange}
            id="waitlist-name"
            className="bg-gray-700 text-white shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3"
          />
        </div>

        <label
          htmlFor="waitlist-email"
          className="block text-sm font-medium text-gray-200"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            type="waitlist-email"
            name="waitlist-email"
            value={waitilist_email}
            onChange={handleEmailChange}
            id="waitlist-email"
            className="bg-gray-700 text-white shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3"
          />
        </div>
        <label
          htmlFor="waitlist-phone"
          className="block text-sm font-medium text-gray-200"
        >
          Phone Number
        </label>
        <div className="mt-1">
          <input
            type="waitlist-phone"
            name="waitlist-phone"
            value={waitilist_phone}
            onChange={handlePhoneChange}
            id="waitlist-phone"
            className="bg-gray-700 text-white shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3"
          />
        </div>
        <button tpye="submit"> Submit </button>
      </form>
    </>
  );
}
