import NewsletterForm from "@/components/NewsletterForm";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='space-y-6'>
      <section className='bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
          <div className='max-w-screen-md'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
              Let's find more that brings us together.
            </h2>
            <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
              Waveforms helps you to find trending audio for your next big
              project so Never Search for Trending Audio Again. It's time to
              start using trending audio. But what are trending sounds, where do
              you find them, and how do you know which ones are taking off?
              We've got you.
            </p>
            <div className='flex flex-col space-y-4'>
              <Link
                href='/app/trending-songs'
                className='inline-flex items-center justify-start py-2.5 text-base font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800'
              >
                View All Trending Audio
              </Link>
              <Link
                href='/app/upgrade'
                className='inline-flex items-center justify-start py-2.5 text-base font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800'
              >
                Upgrade To Pro
              </Link>
            </div>
          </div>
        </div>
      </section>
      <NewsletterForm currentUser={currentUser} />
    </div>
  );
};

export default Home;
