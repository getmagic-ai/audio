import React from "react";
function Footer() {
  return (
    <div className='py-12'>
      <div className='mx-auto container flex flex-col items-center justify-center'>
        <div className='text-white flex flex-col md:items-center f-f-l pt-3'>
          <h1 className='text-2xl font-bold'>
            Trending Audio for your Next Big Project
          </h1>
          <div className='my-6 text-base text-gray-100 f-f-l'>
            <ul className='md:flex items-center'>
              <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0'>Home</li>
              <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0'>Features</li>
              <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0'>Pricing</li>
              <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0'>Blogs</li>
              <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0'>Upgrade</li>
              <li className='cursor-pointer pt-4 lg:py-0'>Privacy Policy</li>
            </ul>
          </div>
          <div className='text-sm text-gray-100 mb-10 f-f-l'>
            <p> © 2023 Waveforms.io All rights reserved</p>
          </div>
        </div>
        <div className='w-9/12  h-0.5 bg-gray-100 rounded-full' />
      </div>
    </div>
  );
}

export default Footer;
