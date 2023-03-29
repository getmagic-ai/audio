import { useRouter } from "next/router";
import { Popover, Transition, Menu } from "@headlessui/react";
import { Fragment, useContext, useEffect, useRef } from "react";
// import { Container } from "./Container";
import Avatar from "react-avatar";

import {
  UserIcon,
  Cog8ToothIcon,
  LinkIcon,
  KeyIcon,
  HeartIcon,
  ArrowRightOnRectangleIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import { signOutAUser } from "@/utils/auth";
import { AuthContext } from "@/context/AuthContext";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  let isHomePage = useRouter().pathname === "/app";
  const router = useRouter();
  const { currentUser, userData, loading } = useContext(AuthContext);

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
      name: "Latest from Us",
      callback: () => router.push("/blogs"),
      icon: DocumentIcon,
    },
    {
      name: "Sign out",
      callback: () => signOutAUser(),
      icon: KeyIcon,
    },
  ];

  return (
    <header className='max-w-5xl mx-auto pointer-events-none relative z-50 flex flex-col px-4 sm:px-6 bg-black pb-4'>
      <div className='sticky z-10 pt-4 pb-2'>
        <div className='relative flex md:justify-between gap-4'>
          <div className='flex'>
            <Avatar size='36' round={true} name={"LOGO"} />
          </div>
          <div className='flex flex-1 justify-end'>
            <MobileNavigation className='pointer-events-auto md:hidden' />
            <DesktopNavigation className='pointer-events-auto hidden md:block' />
          </div>
          <div className='flex justify-end'>
            <div className='pointer-events-auto'>
              <Menu as='div' className='relative'>
                <div>
                  {currentUser ? (
                    <Menu.Button className='max-w-sm flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='sr-only'>Open user menu</span>
                      <Avatar
                        size='36'
                        round={true}
                        name={userData.userName}
                        src={userData.userPhotoLink}
                      />
                    </Menu.Button>
                  ) : (
                    <button
                      onClick={() => router.push("/auth/signin")}
                      className='px-4 py-2 text-sm font-medium rounded-full shadow-lg ring-1 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'
                    >
                      <ArrowRightOnRectangleIcon className='h-5 w-5 text-white' />
                    </button>
                  )}
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='origin-top-right absolute right-0 mt-4 w-60 rounded-md shadow-lg py-1 bg-zinc-900 text-zinc-400 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <button
                            onClick={item.callback}
                            className={classNames(
                              active ? "bg-gray-800" : "",
                              "flex items-center w-full text-left cursor-pointer px-4 py-2 text-sm text-gray-300"
                            )}
                          >
                            <item.icon
                              className={classNames(
                                router.pathname === item.href
                                  ? "text-blue-500"
                                  : "text-gray-300 group-hover:text-gray-200",
                                "mr-2 flex-shrink-0 h-4 w-4"
                              )}
                            />
                            {item.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
