export default function InvitationCodeInput() {
  return (
    <div>
      <label
        htmlFor='invitation-code'
        className='block text-sm font-medium text-gray-200'
      >
        Enter Invitation Code
      </label>
      <div className='mt-1'>
        <input
          type='invitation-code'
          name='invitation-code'
          id='invitation-code'
          className='bg-gray-700 text-white shadow-sm block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3'
        />
      </div>
    </div>
  );
}
