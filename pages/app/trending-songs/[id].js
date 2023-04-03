import SuggestedForYou from "@/components/SuggestedForYou";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "@/context/AuthContext";
import { ClipLoader } from "react-spinners";
import Avatar from "react-avatar";

const SongDetail = () => {
  const router = useRouter();
  const { currentUser, userData, loading } = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Client-side-only code
    let audioObject = window.localStorage.getItem("audio");
    //console.log(JSON.parse(audioObject));
    setData(JSON.parse(audioObject));
  }, [data]);

  const handleLike = async (userId, audioId) => {
    // Add a new document in collection "likes"
    await setDoc(doc(db, "likes", `${userId}_${audioId}`), {
      audioId,
      userId,
      documentID: `${userId}_${audioId}`,
    });
  };

  const deleteLike = async (userId, audioId) => {
    await deleteDoc(doc(db, "likes", `${userId}_${audioId}`));
  };

  const getHasUserLiked = async (userId, audioId) => {
    const docRef = doc(db, "likes", `${userId}_${audioId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      //console.log(docSnap.data());
      return true;
    } else {
      // doc.data() will be undefined in this case
      return false;
    }
  };
  if (!data)
    return (
      <div className='flex items-center justify-center h-screen w-full'>
        <ClipLoader
          color={"#661AE6"}
          loading={true}
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

  return (
    <div className='min-h-screen'>
      {data && (
        <div className='flex justify-center items-center lg:flex-row flex-col gap-8'>
          <div className=' w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4'>
            <div className='w-full bg-gray-100 flex justify-center items-center'>
              <Avatar
                size='96'
                round={false}
                name={data.artist_name ? data.artist_name : data.title}
                src={data.datasource_metadata?.coverThumb}
                maxInitials={1}
              />
            </div>
          </div>
          <div className='  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center'>
            <p className=' focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-100'>
              {data.title}
            </p>
            <h2 className='font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-300 mt-4'>
              {data.artist_name}
            </h2>
            <button
              onClick={() => {
                currentUser == null
                  ? router.push("/auth/signin")
                  : handleLike(currentUser.uid, data.Id);
              }}
              className='focus:outline-none focus:ring-2 hover:bg-gray-600 focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6'
            >
              Add to favorites
            </button>
            <button className='focus:outline-none focus:ring-2 hover:bg-gray-600 focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 mt-6'>
              <a href={data.direct_audio_link} target={"_blank"}>
                View
              </a>
            </button>
          </div>
        </div>
      )}
      <SuggestedForYou />
    </div>
  );
};

export default SongDetail;
