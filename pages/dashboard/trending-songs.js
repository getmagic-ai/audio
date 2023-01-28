import React from "react";
import { useQuery } from "react-query";
import {
  HeartIcon,
  ArrowTrendingUpIcon,
  ArrowUpOnSquareIcon,
} from "@heroicons/react/24/outline";
import { fetchAudioData } from "../_app";

const TrendingSongs = () => {
  const { data, isLoading, error } = useQuery(
    ["data"],
    fetchAudioData
  ); /*, {staleTime: 10}*/ //stale time isn't really needed, the defaults work well. Keeping it here for reference, can delete it
  // console.log("Hey, just entered the data fethcing part..."); //debugging only
  if (isLoading) return "loading...";
  if (error) return "An error occured in fetching the data from nocodb";
  // console.log(data.list[0]); //debugging only

  return (
    <div className='bg-black'>
      <h1 className='text-2xl font-semibold text-gray-200 mb-8'>
        Trending Playlist of the Day
      </h1>
      <div className='my-5'>
        <div className='tabs tabs-boxed'>
          <a className='tab tab-active'>Instagram</a>
          <a className='tab '>Tik Tok</a>
          <a className='tab'>Youtube</a>
        </div>
      </div>
      <ul role='list' class='divide-y divide-gray-200'>
        {data.list.map((item) => (
          <li class='py-3 sm:py-4'>
            <div class='flex items-center space-x-4'>
              <div class='flex-shrink-0'>
                <img
                  class='w-8 h-8'
                  src='https://flowbite.com/docs/images/people/profile-picture-1.jpg'
                  alt='Neil image'
                />
              </div>
              <div class='flex-1 min-w-0'>
                <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  {item.title}
                </p>
                {/* <p class='text-sm text-gray-500 truncate dark:text-gray-400'>
                  {item.audio_datasource_url}
                </p> */}
              </div>
              <div class='inline-flex items-center space-x-2'>
                <ArrowTrendingUpIcon height={20} />
                <ArrowUpOnSquareIcon height={20} />
                <HeartIcon height={20} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingSongs;
