import React from "react";

const Settings = () => {
  const paymentMethods = [
    { id: "credit-card", title: "Credit card" },
    { id: "paypal", title: "PayPal" },
    { id: "etransfer", title: "eTransfer" },
  ];
  return (
    <div className='space-y-8 divide-y divide-gray-200'>
      <div className='space-y-8 divide-y divide-gray-200'>
        <div>
          <div>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Settings
            </h3>
          </div>
        </div>

        <div className='pt-8'>
          <h1 className='font-medium text-xl'>Add Payment Information</h1>
          <div className='mt-6'>
            <fieldset className='my-4'>
              <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10'>
                {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                  <div key={paymentMethod.id} className='flex items-center'>
                    {paymentMethodIdx === 0 ? (
                      <input
                        id={paymentMethod.id}
                        name='payment-type'
                        type='radio'
                        defaultChecked
                        className='focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300'
                      />
                    ) : (
                      <input
                        id={paymentMethod.id}
                        name='payment-type'
                        type='radio'
                        className='focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300'
                      />
                    )}

                    <label
                      htmlFor={paymentMethod.id}
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      {paymentMethod.title}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>

            <div className='mt-6 grid grid-cols-8 gap-y-6 gap-x-4'>
              <div className='col-span-4'>
                <label
                  htmlFor='card-number'
                  className='block text-sm font-medium text-gray-700'
                >
                  Card number
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    id='card-number'
                    name='card-number'
                    autoComplete='cc-number'
                    className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='col-span-4'>
                <label
                  htmlFor='name-on-card'
                  className='block text-sm font-medium text-gray-700'
                >
                  Name on card
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    id='name-on-card'
                    name='name-on-card'
                    autoComplete='cc-name'
                    className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='col-span-3'>
                <label
                  htmlFor='expiration-date'
                  className='block text-sm font-medium text-gray-700'
                >
                  Expiration date (MM/YY)
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='expiration-date'
                    id='expiration-date'
                    autoComplete='cc-exp'
                    className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='cvc'
                  className='block text-sm font-medium text-gray-700'
                >
                  CVC
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='cvc'
                    id='cvc'
                    autoComplete='csc'
                    className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-8'>
          <div>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Notifications
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              We&apos;ll always let you know about important changes, but you
              pick what else you want to hear about.
            </p>
          </div>
          <div className='mt-6'>
            <fieldset>
              <legend className='text-base font-medium text-gray-900'>
                By Email
              </legend>
              <div className='mt-4 space-y-4'>
                <div className='relative flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='comments'
                      name='comments'
                      type='checkbox'
                      className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='comments'
                      className='font-medium text-gray-700'
                    >
                      Comments
                    </label>
                    <p className='text-gray-500'>
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div className='relative flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='candidates'
                      name='candidates'
                      type='checkbox'
                      className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='candidates'
                      className='font-medium text-gray-700'
                    >
                      Candidates
                    </label>
                    <p className='text-gray-500'>
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
                <div className='relative flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='offers'
                      name='offers'
                      type='checkbox'
                      className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='offers'
                      className='font-medium text-gray-700'
                    >
                      Offers
                    </label>
                    <p className='text-gray-500'>
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className='mt-6'>
              <div>
                <legend className='text-base font-medium text-gray-900'>
                  Push Notifications
                </legend>
                <p className='text-sm text-gray-500'>
                  These are delivered via SMS to your mobile phone.
                </p>
              </div>
              <div className='mt-4 space-y-4'>
                <div className='flex items-center'>
                  <input
                    id='push-everything'
                    name='push-notifications'
                    type='radio'
                    className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                  />
                  <label
                    htmlFor='push-everything'
                    className='ml-3 block text-sm font-medium text-gray-700'
                  >
                    Everything
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    id='push-email'
                    name='push-notifications'
                    type='radio'
                    className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                  />
                  <label
                    htmlFor='push-email'
                    className='ml-3 block text-sm font-medium text-gray-700'
                  >
                    Same as email
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    id='push-nothing'
                    name='push-notifications'
                    type='radio'
                    className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                  />
                  <label
                    htmlFor='push-nothing'
                    className='ml-3 block text-sm font-medium text-gray-700'
                  >
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className='pt-5'>
        <div className='flex justify-end'>
          <button
            type='button'
            className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
