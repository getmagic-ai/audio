// import { useRouter } from "next/router";
import { Fragment, useContext, useEffect, useState } from "react";
// import { Container } from "./Container";
// import Avatar from "react-avatar";

import {
  UserIcon,
  Cog8ToothIcon,
  LinkIcon,
  KeyIcon,
  HeartIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
// import { signOutAUser } from "@/utils/auth";
// import { AuthContext } from "@/context/AuthContext";

// NEW NAVBAR CODE
import React from "react";
import Link from "next/link";

const userNavigation = [
  {
    name: "Your Profile",
    callback: () => router.push("/app/user/profile"),
    icon: UserIcon,
  },
  {
    name: "Liked Songs",
    callback: () => router.push("/app/user/my-likes"),
    icon: HeartIcon,
  },
  {
    name: "Invite a Friend",
    callback: () => router.push("/app/user/invite-a-friend"),
    icon: LinkIcon,
  },
  {
    name: "Settings",
    callback: () => router.push("/app/user/settings"),
    icon: Cog8ToothIcon,
  },
  {
    name: "Sign out",
    callback: () => signOutAUser(),
    icon: KeyIcon,
  },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleDropdown = () => {
    console.log("toggle dropdown" + openDropdown);
    setOpenDropdown(!openDropdown);
  };
  return (
    <nav class='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
      <div class='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='https://flowbite.com/' class='flex items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            class='h-6 mr-3 sm:h-9'
            alt='Flowbite Logo'
          />
          <span class='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            WaveForms.io
          </span>
        </a>
        <div class='flex items-center md:order-2 relative'>
          <button
            type='button'
            class='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
            id='user-menu-button'
            aria-expanded='false'
            data-dropdown-toggle='user-dropdown'
            data-dropdown-placement='bottom'
            onClick={handleToggleDropdown}
          >
            <span class='sr-only'>Open user menu</span>
            <img
              class='w-8 h-8 rounded-full'
              src='/docs/images/people/profile-picture-3.jpg'
              alt='user photo'
            />
          </button>
          {/* Dropdown menu  */}
          {openDropdown && (
            <div
              class='z-50 absolute top-10 right-10 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
              id='user-dropdown'
            >
              <div class='px-4 py-3'>
                <span class='block text-sm text-gray-900 dark:text-white'>
                  Bonnie Green
                </span>
                <span class='block text-sm font-medium text-gray-500 truncate dark:text-gray-400'>
                  name@flowbite.com
                </span>
              </div>
              <ul class='py-2' aria-labelledby='user-menu-button'>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
          <button
            data-collapse-toggle='mobile-menu-2'
            type='button'
            class='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mobile-menu-2'
            aria-expanded='false'
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span class='sr-only'>Open main menu</span>
            <svg
              class='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        {openMenu && (
          <div
            class='items-center justify-between w-full md:flex md:w-auto md:order-1'
            id='mobile-menu-2'
          >
            <ul class='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <a
                  href='#'
                  class='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
        {/* DESKTOP */}
        <div
          class='items-center hidden justify-between w-full md:flex md:w-auto md:order-1'
          id='mobile-menu-2'
        >
          <ul class='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <Link
                href='/app/trending-songs'
                class='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href='#'
                class='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Pricing
              </a>
            </li>
            <li>
              <Link
                href='/blog'
                class='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Blogs
              </Link>
            </li>
            <li>
              <a
                href='#'
                class='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
