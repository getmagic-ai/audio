import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import SocialSignIn from "../../components/SocialSignIn";
import { auth, db } from "../../config/firebase-config";
import { CreateNewUser } from "../../utils/auth";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  //create the Auth object
  const auth = getAuth();

  const handleSignup = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      console.log({...userCredentials.user.uid})
    } catch (err) {
      setError(err.message);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user && typeof window !== "undefined") {
      router.push("/dashboard");
      return <></>;
    }
  });

  return (
    <div className='min-h-full flex'>
      <div className='mx-auto flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-lg lg:w-96'>
          {/* <Image height={80} width={80} src={Logo} alt='Logo' /> */}
          <div>
            <h2 className='mt-6 text-3xl font-extrabold text-gray-200'>
              Create an account
            </h2>
            <p className='mt-2 text-sm text-gray-300'>
              Already have an account?{" "}
              <Link
                className='font-medium text-indigo-600 hover:text-indigo-500'
                href='/auth/signin'
              >
                Login here
              </Link>
            </p>
          </div>

          <div className='mt-8'>
            <SocialSignIn />
            <div className='mt-6'>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-200'>
                      First Name
                    </label>
                    <div className='mt-1'>
                      <input
                        id='firstName'
                        name='firstName'
                        type='firstName'
                        autoComplete='firstName'
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='bg-gray-700 appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-200'>
                      Last Name
                    </label>
                    <div className='mt-1'>
                      <input
                        id='lastName'
                        name='lastName'
                        type='lastName'
                        autoComplete='lastName'
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='bg-gray-700 appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-200'>
                    Email address
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='bg-gray-700 appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='space-y-1'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-200'
                  >
                    Password
                  </label>
                  <div className='mt-1'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='bg-gray-700 appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      id='remember-me'
                      name='remember-me'
                      type='checkbox'
                      className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded'
                    />
                    <label
                      htmlFor='remember-me'
                      className='ml-2 block text-sm text-gray-300'
                    >
                      Remember me
                    </label>
                  </div>

                  <div className='text-sm'>
                    <a
                      href='#'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    onClick={handleCreateNewAccount}
                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
