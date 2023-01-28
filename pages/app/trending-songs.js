import React from "react";
import { useQuery } from "react-query";
import {
  HeartIcon,
  ArrowTrendingUpIcon,
  ArrowUpOnSquareIcon,
} from "@heroicons/react/24/outline";
import { fetchAudioData } from "@/pages/_app";

const TrendingSongs = () => {
  const { data, isLoading, error } = useQuery(
    ["data"],
    fetchAudioData
  ); /*, {staleTime: 10}*/ //stale time isn't really needed, the defaults work well. Keeping it here for reference, can delete it
  // console.log("Hey, just entered the data fethcing part..."); //debugging only
  if (isLoading) return "loading...";
  if (error) return "An error occured in fetching the data from nocodb";
  console.log(data.list[0]); //debugging only

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
      <ul role='list' className='divide-y divide-gray-200'>
        {data.list.map((item) => (
          <a
            href={item.audio_datasource_url}
            target={"_blank"}
            rel='noreferrer noopener'
          >
            <li className='py-3 sm:py-4'>
              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>
                  <img
                    className='w-8 h-8'
                    src={item.datasource_metadata.coverThumb}
                    alt={item.title}
                  />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium truncate text-white'>
                    {item.title}
                  </p>
                  <p className='text-xs font-medium truncate text-gray-200'>
                    {item.artist_name}
                  </p>
                </div>
                <div className='inline-flex items-center space-x-2'>
                  <ArrowTrendingUpIcon height={20} />
                  <ArrowUpOnSquareIcon height={20} />
                  <HeartIcon height={20} />
                </div>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default TrendingSongs;
