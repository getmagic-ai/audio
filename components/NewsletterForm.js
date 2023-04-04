import { useEffect, useState } from "react";
import { toast } from "react-toastify";

//The above sendEmail
function NewsletterForm({ currentUser }) {
  const [recipient, setRecipient] = useState("");
  const [isSending, setIsSending] = useState(false);
  useEffect(() => {
    if (currentUser) {
      setRecipient(currentUser.email);
    }
  }, [currentUser]);

  async function subscribe(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    //console.log(email)
    setIsSending(true);

    fetch("api/sendgrid", {
      method: "post",
      body: email,
    }).then((res) => {
      if (res.status == 200) {
        alert("Subscribed Successfully !");
        toast.success(res.statusText);
        setIsSending(false);
      } else {
        toast.error("Nope");
      }
    });
  }

  if (currentUser) {
    return (
      <div className='bg-gray-800 mx-auto max-w-7xl py-24 px-6 lg:flex lg:items-center lg:py-32 lg:px-8'>
        <div className='lg:w-0 lg:flex-1'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'>
            Sign up for our newsletter
          </h2>
          <p className='mt-3 max-w-3xl text-lg text-gray-200'>
            Want to be the first to know when we post the latest blog? <br />{" "}
            Sign up for the newsletter!
          </p>
        </div>
        <div className='mt-8 lg:mt-0 lg:ml-8'>
          <form onSubmit={subscribe} className='sm:flex'>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              value={recipient}
              onChange={(e) => {
                setRecipient(e.target.value);
              }}
              className='w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:max-w-xs'
              placeholder='Enter your email'
            />
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
              <button
                type='submit'
                className={`btn ml-3 ${isSending
                    ? "btn-disabled loading"
                    : "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-5 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  }`}
              >
                Notify me
              </button>
            </div>
          </form>
          <p className='mt-3 text-sm text-gray-200'>
            We care about the protection of your data. Read our{" "}
            <a href='#' className='font-medium underline'>
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='bg-gray-800 mx-auto max-w-7xl py-24 px-6 lg:flex lg:items-center lg:py-32 lg:px-8'>
        <div className='lg:w-0 lg:flex-1'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'>
            Sign up for our newsletter
          </h2>
          <p className='mt-3 max-w-3xl text-lg text-gray-200'>
            Want to be the first to know when we post the latest blog? <br />{" "}
            Sign up for the newsletter!
          </p>
        </div>
        <div className='mt-8 lg:mt-0 lg:ml-8'>
          <form onSubmit={subscribe} className='sm:flex'>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              value={recipient}
              onChange={(e) => {
                setRecipient(e.target.value);
              }}
              className='w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:max-w-xs'
              placeholder='Enter your email'
            />
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
              <button
                type='submit'
                className={`btn ml-3 ${isSending
                    ? "btn-disabled loading"
                    : "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-5 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  }`}
              >
                Notify me
              </button>
            </div>
          </form>
          <p className='mt-3 text-sm text-gray-200'>
            We care about the protection of your data. Read our{" "}
            <a href='#' className='font-medium underline'>
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default NewsletterForm;
