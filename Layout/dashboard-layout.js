import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  KeyIcon,
  HomeIcon,
  UserIcon,
  HeartIcon,
  Bars3Icon,
  XMarkIcon,
  ShareIcon,
  Cog8ToothIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import BottomNavigation from "./BottomNavigation";

const navigation = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Trending",
    href: "/dashboard/trending-songs",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Likes",
    href: "/dashboard/my-likes",
    icon: HeartIcon,
  },
  {
    name: "Invite a Friend",
    href: "/dashboard/invite-a-friend",
    icon: ShareIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const userNavigation = [
    {
      name: "Your Profile",
      callback: () => router.push("/dashboard/user/my-profile"),
      icon: UserIcon,
    },
    {
      name: "Settings",
      callback: () => router.push("/dashboard/user/settings"),
      icon: Cog8ToothIcon,
    },
    {
      name: "Sign out",
      callback: () => {
        //   signOutAUser();
      },
      icon: KeyIcon,
    },
  ];

  return (
    <div className='max-w-md mx-auto bg-black'>
      <Navbar />
      <main className='flex-1'>
        <div className='py-6 pb-24 px-4 sm:px-6 md:px-8'>{children}</div>
      </main>
      <BottomNavigation />
    </div>
  );
}
