import Newsletter from "@/components/Newsletter";
import React from "react";

const Home = () => {
  return (
    <div className='space-y-6'>
      <section className='bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
          <div className='max-w-screen-md'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
              Let's find more that brings us together.
            </h2>
            <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
              Flowbite helps you connect with friends, family and communities of
              people who share your interests. Connecting with your friends and
              family as well as discovering new ones is easy with features like
              Groups, Watch and Marketplace.
            </p>
            <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <a
                href='#'
                className='inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
              >
                Upgrade To Pro
              </a>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default Home;
