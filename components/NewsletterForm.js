import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase-config';
//test fetch
// import { useFetchData } from '../firebasefunctions/updateSubPref'

function NewsletterForm({ currentUser }) {
  const [recipient, setRecipient] = useState(""); //email address
  const [isSending, setIsSending] = useState(false);//loading state
  const [prefObj, setPrefObj] = useState({ blog: true, updates: true, promotions: true }); //checkboxes state


  //fills the email address field with the current user's email address
  useEffect(() => {
    if (currentUser) {
      setRecipient(currentUser.email);
      setPrefObj({ ...prefObj, email: currentUser.email });//add the current user's email to the prefObj object
    }
  }, [currentUser]);//write a function to validate the email address entered below
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
        //return a boolean here instead of the regex test
    }

  //handles the checkboxes state and updates the state of prefObj object
  const handleNewsletterChange = (event) => {
    setPrefObj({ ...prefObj, [event.target.name]: event.target.checked });

  };



  // takes the email address from the form and sends it to the API route
  async function subscribe(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;//this is the email 

    setRecipient(email)
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
        toast.error("Subscription Failed, Please try again later.");
      }
    });

    //------------fetch data from db------------
    // const getEmailSubs = async (db) => {
    //   const emailSubsCol = collection(db, 'users');
    //   const emailSubsSnapshot = await getDocs(emailSubsCol);
    //   const emailSubsList = emailSubsSnapshot.docs.map(doc => doc.data());
    //   console.log("emailSubsList: ", emailSubsList);
    // }
    // getEmailSubs(db);


    //---------------add data to db-------------------
    const addEmailSub = async (db) => {
      const emailSubsCol = collection(db, 'Newsletter_subscribers');
      await setDoc(doc(emailSubsCol, email), prefObj);
    }

    addEmailSub(db);
    console.log("prefObj: ", prefObj);



  }

  //conditional rendering of the form if the user is logged in
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
            <div className="flex flex-wrap">
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
                className='w-full h-fit  rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:max-w-xs'
                placeholder='Enter your email'
              />

              <div className=" w-full">
                <div className="m-1 mt-2">
                  <input type="checkbox" id="blog" name="blog" checked={prefObj.blog} onChange={handleNewsletterChange} />
                  <label className="ml-1" htmlFor="blog">Blog updates</label>
                </div>

                <div className="m-1">
                  <input type="checkbox" id="updates" name="updates" checked={prefObj.updates} onChange={handleNewsletterChange} />
                  <label className="ml-1" htmlFor="updates">Product updates</label>
                </div>

                <div className="m-1">
                  <input type="checkbox" id="promotions" name="promotions" checked={prefObj.promotions} onChange={handleNewsletterChange} />
                  <label className="ml-1" htmlFor="promotions">Promotions</label>
                </div>
              </div>
            </div>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
              <button
                type='submit'
                className={`btn ${isSending
                  ? "btn-disabled loading"
                  : "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-5 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  h-fit"
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

    //conditional rendering of the form if the user is not logged in
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
