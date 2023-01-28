import {
  HomeIcon,
  HeartIcon,
  ShareIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

import Navbar from "./Navbar";

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

export default function DashboardLayout({ children }) {
  return (
    <div className='max-w-md max-h-screen mx-auto bg-black'>
      <Navbar />
      <main className='flex-1'>
        <div className='py-6 pb-24 px-4 sm:px-6 md:px-8'>{children}</div>
      </main>
      {/* <BottomNavigation /> */}
    </div>
  );
}
