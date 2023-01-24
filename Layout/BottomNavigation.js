import React from "react";
import {
  ArrowTrendingUpIcon,
  HeartIcon,
  QueueListIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const BottomNavigation = () => {
  return (
    <div className='btm-nav max-w-md mx-auto bg-gray-800'>
      <Link href='/dashboard'>
        <HomeIcon height={25} />
      </Link>
      <Link href='/dashboard/trending-songs' className='active'>
        <ArrowTrendingUpIcon height={25} />
      </Link>
      <Link href='/dashboard/songs'>
        <QueueListIcon height={25} />
      </Link>
      <Link href='/dashboard/my-likes'>
        <HeartIcon height={25} />
      </Link>
    </div>
  );
};

export default BottomNavigation;
