export default function WaitlistComponent(props) {
  return (
    <>
      <div className="text-2xl align-middle items-center">
        
        Please join our waitlist to be notified when we go live!
      </div>

      <div className="text-sm align-middle items-center">
        
        We will use your contact information only to send you the invitation
        code!
      </div>
      <label
        htmlFor='waitlist-name'
        className='block text-sm font-medium text-gray-200'
      >
        Name
      </label>
      <div className='mt-1'>
        <input
          type='waitlist-name'
          name='waitlist-name'
          id='waitlist-name'
          className='bg-gray-700 text-white shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3'
        />
      </div>

      <label
        htmlFor='waitlist-email'
        className='block text-sm font-medium text-gray-200'
      >
        Email
      </label>
      <div className='mt-1'>
        <input
          type='waitlist-email'
          name='waitlist-email'
          id='waitlist-email'
          className='bg-gray-700 text-white shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3'
        />
      </div>
      <label
        htmlFor='waitlist-phone'
        className='block text-sm font-medium text-gray-200'
      >
        Phone Number
      </label>
      <div className='mt-1'>
        <input
          type='waitlist-phone'
          name='waitlisst-phone'
          id='waitlist-phone'
          className='bg-gray-700 text-white shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3'
        />
      </div>
    </>
  );
}
