import { useRouter } from "next/router";
import { Popover, Transition, Menu } from "@headlessui/react";
import { Fragment, useContext, useEffect, useRef } from "react";
import { Container } from "./Container";
import Avatar from "react-avatar";

import {
  UserIcon,
  Cog8ToothIcon,
  LinkIcon,
  KeyIcon,
  HeartIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { signOutAUser } from "@/utils/auth";
import { AuthContext } from "@/context/AuthContext";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function clamp(number, a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

export function Navbar() {
  let isHomePage = useRouter().pathname === "/app";
  const router = useRouter();
  const { currentUser, userData, loading } = useContext(AuthContext);

  let headerRef = useRef();
  let avatarRef = useRef();
  let isInitial = useRef(true);

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0;
    let upDelay = 64;

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value);
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current.getBoundingClientRect();
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      );

      if (isInitial.current) {
        setProperty("--header-position", "sticky");
      }

      setProperty("--content-offset", `${downDelay}px`);

      if (isInitial.current || scrollY < downDelay) {
        setProperty("--header-height", `${downDelay + height}px`);
        setProperty("--header-mb", `${-downDelay}px`);
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay);
        setProperty("--header-height", `${offset}px`);
        setProperty("--header-mb", `${height - offset}px`);
      } else if (top === 0) {
        setProperty("--header-height", `${scrollY + height}px`);
        setProperty("--header-mb", `${-scrollY}px`);
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return;
      }

      let fromScale = 1;
      let toScale = 36 / 64;
      let fromX = 0;
      let toX = 2 / 16;

      let scrollY = downDelay - window.scrollY;

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
      scale = clamp(scale, fromScale, toScale);

      let x = (scrollY * (fromX - toX)) / downDelay + toX;
      x = clamp(x, fromX, toX);

      setProperty(
        "--avatar-image-transform",
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      );

      let borderScale = 1 / (toScale / scale);
      let borderX = (-toX + x) * borderScale;
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

      setProperty("--avatar-border-transform", borderTransform);
      setProperty("--avatar-border-opacity", scale === toScale ? 1 : 0);
    }

    function updateStyles() {
      updateHeaderStyles();
      updateAvatarStyles();
      isInitial.current = false;
    }

    updateStyles();
    window.addEventListener("scroll", updateStyles, { passive: true });
    window.addEventListener("resize", updateStyles);

    return () => {
      window.removeEventListener("scroll", updateStyles, { passive: true });
      window.removeEventListener("resize", updateStyles);
    };
  }, [isHomePage]);

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

  return (
    <header
      className='pointer-events-none relative z-50 flex flex-col px-4 sm:px-6 md:px-8 bg-black pb-4'
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <div
        ref={headerRef}
        className='top-0 z-10 pt-4 pb-2'
        style={{ position: 'fixed' }}
      >
        <div className='relative flex gap-4'>
          <div className='flex flex-1'>
            <Avatar size='36' round={true} name={"LOGO"} />
          </div>
          <div className='flex justify-end md:justify-center'>
            <MobileNavigation className='pointer-events-auto md:hidden' />
            <DesktopNavigation className='pointer-events-auto hidden md:block' />
          </div>
          <div className='flex justify-end md:flex-1'>
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
