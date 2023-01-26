import React from "react";
import { UserIcon, HeartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className='fixed z-10 navbar bg-gray-800 w-full'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52'
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <a className='btn btn-ghost normal-case text-xl'>Audio</a>
      </div>
      <div className='navbar-end'>
        <button className='btn btn-ghost btn-circle'>
          <div className='indicator'>
            <UserIcon height={25} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
