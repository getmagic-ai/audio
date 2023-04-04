import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  HeartIcon,
  ArrowTrendingUpIcon,
  ArrowUpOnSquareIcon,
  ArrowTrendingDownIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { fetchAudioData } from "@/pages/_app";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Avatar from "react-avatar";
import Link from "next/link";

const TrendingSongs = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const router = useRouter();
  const { currentUser, userData, loading } = useContext(AuthContext);
  const { data, isInitialLoading, error } = useQuery(
    /*data is loaded inthe data object*/
    ["data"],
    fetchAudioData
  ); /*, {staleTime: 10}*/ //stale time isn't really needed, the defaults work well. Keeping it here for reference, can delete it
  // //console.log("Hey, just entered the data fethcing part..."); //debugging only
  // //console.log(data);
  if (isInitialLoading)
    return (
      <div className='flex items-center justify-center h-screen w-full'>
        <ClipLoader
          color={"#661AE6"}
          loading={isInitialLoading}
          cssOverride={{
            display: "block",
            // margin: "50px auto 0 auto",
          }}
          size={50}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    );
  if (error) return "An error occured in fetching the data from nocodb";
  // //console.log(data.list[4]); //debugging only
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long" /*, year: 'numeric'*/,
    month: "long",
    day: "numeric",
  });

  // const openSongDeeplink = (direct_audio_link) => {
  //   direct_audio_link ? router.push(direct_audio_link) : null;
  // };

  const setLocalStorageItem = (item) => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      window.localStorage.setItem("audio", JSON.stringify(item));
    }
  };

  return (
    <div className='bg-black relative min-h-screen'>
      <h1 className='text-xl font-semibold text-gray-200 mb-8'>
        Trending Audio for {formattedDate.toString()}!
      </h1>
      <div className='my-5'>
        <div className='tabs tabs-boxed bg-gray-800'>
          <button
            className={`tab text-gray-100 ${selectedTab == 1 && "tab-active"}`}
            onClick={() => setSelectedTab(1)}
          >
            TikTok
          </button>
          <button
            className={`tab text-gray-100 ${selectedTab == 2 && "tab-active"}`}
            onClick={() => setSelectedTab(2)}
          >
            Instagram
          </button>
          <button
            className={`tab text-gray-100 ${selectedTab == 3 && "tab-active"}`}
            onClick={() => setSelectedTab(3)}
          >
            YouTube
          </button>
          <button
            className={`tab text-gray-100 ${selectedTab == 4 && "tab-active"}`}
            onClick={() => setSelectedTab(4)}
          >
            Originals!
          </button>
        </div>
      </div>
      <ul role='list' className='divide-y divide-gray-200'>
        {data &&
          data.list
            .filter(
              (item) =>
                item.channel ===
                (selectedTab === 1
                  ? "tiktok"
                  : selectedTab === 2
                  ? "instagram"
                  : "youtube")
            )
            .map((item) => {
              return (
                <li className='py-3 sm:py-4' key={item.Id}>
                  <div className='flex items-center space-x-6'>
                    <div className='flex-shrink-0'>
                      <a
                        href={item.direct_audio_link}
                        target={"_blank"}
                        rel='noreferrer noopener'
                      >
                        <Avatar
                          size='48'
                          round={false}
                          name={
                            item.artist_name ? item.artist_name : item.title
                          }
                          src={item.datasource_metadata?.coverThumb}
                          maxInitials={1}
                        />
                      </a>
                    </div>
                    {/* <div
                      className='flex-1 min-w-0 cursor-pointer'
                      onClick={() => openSongDeeplink(item.direct_audio_link)}
                    >
                    </div> */}
                    {/* using Link component instead of onClick to allow user to see the link and open link in new tab, which is not possible through onClick */}
                    {item.direct_audio_link && (
                      <Link
                        // target={"_blank"}
                        className='flex-1 min-w-0 cursor-pointer'
                        href={`/app/trending-songs/${item.Id}`}
                        query={item}
                      >
                        <p className='text-md font-medium truncate text-white'>
                          {item.title}
                        </p>
                        <p className='text-sm font-medium truncate text-gray-200'>
                          {item.artist_name}
                        </p>
                      </Link>
                    )}
                    {/* using conditional rendering cause instagram data is not added as of now, so it has no direct_audio_link , and hence showing error */}

                    <div className='inline-flex items-center space-x-4'>
                      {parseInt(item.ranking_change) >= 0 ? (
                        <ArrowTrendingUpIcon height={28} color={"green"} />
                      ) : parseInt(item.ranking_change) == 0 ? (
                        <ArrowRightIcon height={28} color={"yellow"} />
                      ) : (
                        <ArrowTrendingDownIcon height={28} color={"red"} />
                      )}
                      <ArrowUpOnSquareIcon height={28} />
                      <HeartIcon
                        className='cursor-pointer'
                        height={28}
                        onClick={() => {
                          currentUser == null
                            ? router.push("/auth/signin")
                            : setLocalStorageItem(item);
                          router.push(`/app/trending-songs/${item.Id}`);
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default TrendingSongs;
