import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition, Menu } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import UserAvatar from "react-user-avatar";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  UserIcon,
  Cog8ToothIcon,
  LinkIcon,
  KeyIcon,
  HeartIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { signOutAUser } from "@/utils/auth";

function CloseIcon(props) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        d='m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox='0 0 8 6' aria-hidden='true' {...props}>
      <path
        d='M1.75 1.75 4 4.25l2.25-2.5'
        fill='none'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button
        as={Link}
        href={href}
        className='block py-2 font-light text-sm'
      >
        {children}
      </Popover.Button>
    </li>
  );
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'>
        Menu
        <ChevronDownIcon className='ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400' />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay className='fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='fixed inset-x-4 top-8 z-50 origin-top rounded-xl bg-white p-4 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'
          >
            <div className='flex flex-row-reverse items-center justify-between'>
              <Popover.Button aria-label='Close menu' className='-m-1 p-1'>
                <CloseIcon className='h-6 w-6 text-zinc-500 dark:text-zinc-400' />
              </Popover.Button>
              <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
                Navigation
              </h2>
            </div>
            <nav className='mt-6'>
              <ul className='-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
                <MobileNavItem href='/app'>Home</MobileNavItem>
                <MobileNavItem href='/app/trending-songs'>
                  Trending Songs
                </MobileNavItem>
                <MobileNavItem href='/app/upgrade'>
                  Upgrade to Pro / Premium
                </MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-indigo-500 dark:text-indigo-400"
            : "hover:text-indigo-500 dark:hover:text-indigo-400"
        )}
      >
        {children}
        {isActive && (
          <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 dark:from-indigo-400/0 dark:via-indigo-400/40 dark:to-indigo-400/0' />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
        <NavItem href='/app'>Home</NavItem>
        <NavItem href='/app/trending-songs'>Trending</NavItem>
        <NavItem href='/app/upgrade'>Upgrade</NavItem>
      </ul>
    </nav>
  );
}

function clamp(number, a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
      )}
      {...props}
    />
  );
}

function Avatar({ large = false, className, ...props }) {
  return (
    <Link
      href='/'
      aria-label='Home'
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      {/* <Image
        src={avatarImage}
        alt=''
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9"
        )}
        priority
      /> */}
    </Link>
  );
}

export function Navbar() {
  let isHomePage = useRouter().pathname === "/app";
  const [user, setUser] = useState(null);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUser(user);
    } else {
      // User is signed out
      setUser(null);
    }
  });

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
      callback: () => {
        signOutAUser();
      },
      icon: KeyIcon,
    },
  ];

  const router = useRouter();

  return (
    <header
      className='pointer-events-none relative z-50 flex flex-col'
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <div
        ref={headerRef}
        className='top-0 z-10 pt-6'
        style={{ position: "var(--header-position)" }}
      >
        <Container>
          <div className='relative flex gap-4'>
            {/* <div className='flex'>
              <AvatarContainer>
                <Avatar />
              </AvatarContainer>
            </div> */}
            <div className='flex flex-1 justify-end'>
              <MobileNavigation className='pointer-events-auto md:hidden' />
              <DesktopNavigation className='pointer-events-auto hidden md:block' />
            </div>
            <div className='flex justify-end'>
              <div className='pointer-events-auto'>
                <Menu as='div' className='relative'>
                  <div>
                    {user ? (
                      <Menu.Button className='max-w-sm flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        <span className='sr-only'>Open user menu</span>
                        {/* <AvatarContainer> */}
                        <UserAvatar
                          size='36'
                          name={user.displayName}
                          src={user.photoURL}
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
                    {/* </AvatarContainer> */}
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
        </Container>
      </div>
    </header>
  );
}
