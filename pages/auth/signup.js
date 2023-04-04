import {
  app,
  auth,
  db,
  googleAuthProvider,
} from "../../config/firebase-config";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { createFirestoreDoc } from "../../firebasefunctions/createFirestoreDoc";
import SocialSignIn from "@/components/SocialSignIn";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  //create the Auth object

  const handleSignup = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //console.log({ ...userCredentials.user.uid });
      const user = userCredentials.user;
      //create Firestore user
      createFirestoreDoc("customers", {
        uid: user.uid,
        name: user.displayName,
        authProvider: "Email",
        email: user.email,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  async function handleGoogleSignup() {
    try {
      const userCredentials = await signInWithPopup(auth, googleAuthProvider);
      //console.log({ ...userCredentials.user.uid });
      const user = userCredentials.user;
      //create Firestore user
      createFirestoreDoc("customers", {
        uid: user.uid,
        name: user.displayName,
        authProvider: "Email",
        email: user.email,
      });
    } catch (err) {
      //console.log(err);
      setError(err.message);
    }
  }

  return (
    // <>
    //   <div>
    //     <input
    //       type='email'
    //       placeholder='Email'
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type='password'
    //       placeholder='Password'
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <input
    //       type='text'
    //       placeholder='Username'
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     {error && <p>{error}</p>}
    //     <button onClick={handleSignup}>Sign Up</button>
    //   </div>
    //   <div>
    //     <button
    //       className='py-4 rounded-md bg-blue-800 text-white'
    //       onClick={handleGoogleSignup}
    //     >
    //       Sign up with Google
    //     </button>
    //   </div>
    // </>
    <div className='min-h-full flex'>
      <div className='mx-auto flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          {/* <Image height={80} width={80} src={Logo} alt='Logo' /> */}

          <div>
            <h2 className='mt-6 text-3xl font-bold text-gray-200'>
              Create a new Account
            </h2>
            <p className='mt-2 text-sm text-gray-300'>
              Already have an Account?{" "}
              <Link
                className='font-medium text-indigo-600 hover:text-indigo-500'
                href='/auth/signin'
              >
                Login
              </Link>
            </p>
          </div>

          <div className='mt-8'>
            <SocialSignIn />
            <div className='mt-6'>
              <form action='#' method='POST' className='space-y-6'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-200'
                  >
                    Email address
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      type='email'
                      autoComplete='email'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='bg-gray-700 appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                      type='password'
                      autoComplete='current-password'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='bg-gray-700 appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      id='remember-me'
                      name='remember-me'
                      type='checkbox'
                      className='bg-gray-700 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-700 rounded'
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
                    onClick={handleSignup}
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
