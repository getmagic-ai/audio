import { AuthContext } from "@/context/AuthContext";
import { fetchAudioData } from "@/pages/_app";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Avatar from "react-avatar";
import { ClipLoader } from "react-spinners";

const SuggestedForYou = () => {
  const { data, isInitialLoading, error } = useQuery(
    /*data is loaded inthe data object*/
    ["data"],
    fetchAudioData
  );
  const { currentUser, userData, loading } = useContext(AuthContext);

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
  return (
    <div className='mt-12'>
      <h2 className='font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-200 mt-4'>
        Suggested For You
      </h2>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-8 mt-6'>
        {data &&
          data.list
            .filter((item, idx) => idx < 8)
            .map((item) => {
              //console.log(item);
              return (
                <div className='relative '>
                  <div className='relative group'>
                    <div className='flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full'></div>
                    <Avatar
                      size='96'
                      round={false}
                      name={item.artist_name ? item.artist_name : item.title}
                      src={item.datasource_metadata?.coverThumb}
                      maxInitials={1}
                      onClick={() => {
                        currentUser == null
                          ? router.push("/auth/signin")
                          : setLocalStorageItem(item);
                        router.push(`/app/trending-songs/${item.Id}`);
                      }}
                    />
                  </div>

                  <p className=' font-normal text-xl leading-5 text-gray-100 md:mt-6 mt-4'>
                    {item.title}
                  </p>
                  <p className=' font-semibold text-xl leading-5 text-gray-200 mt-4'>
                    {item.artist_name}
                  </p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default SuggestedForYou;
