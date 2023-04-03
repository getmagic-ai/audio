import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase-config";

const SocialSignIn = () => {
  const router = useRouter();
  const handleGoogleSignIn = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    // additional scopes can be added as per requirement

    try {
      await signInWithPopup(auth, provider);
      router.push("/app");
    } catch (error) {
      //console.log("error");
      alert(error);
    }
  }, [router]);
  const signInWithFacebook = useCallback(async () => {
    const provider = new FacebookAuthProvider();
    provider.addScope("public_profile");
    // additional scopes can be added as per requirement
    try {
      const result = await signInWithPopup(auth, provider);
      //console.log(result);
      router.push("/app");
    } catch (error) {
      //console.log("error");
      alert(error);
    }
  }, [router]);
  return (
    <div>
      <div>
        <p className='text-sm font-medium text-gray-200'>Sign in with</p>
        <div className='mt-1 grid grid-cols-1 gap-3'>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className='w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-gray-200 hover:bg-gray-70'
            >
              <span className='sr-only'>Sign in with Google</span>
              <Image
                width={20}
                height={20}
                alt='Google Logo'
                src='https://img.icons8.com/color/48/FA5252/google-logo.png'
              />
            </button>
          </div>
        </div>
      </div>

      <div className='mt-6 relative'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-gray-700 text-gray-200'>
            Or continue with
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialSignIn;
