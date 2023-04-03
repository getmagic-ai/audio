import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function BlogCard({ blog }) {
<<<<<<< HEAD
  // const imgsrc = `https://kollboratecms.herokuapp.com${blog.attributes.Image.data[0].attributes.url}`

  //commenting it out for now cause strapi images are not available

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  function formatMyDate(value, locale = "en-GB") {
    return new Date(value).toLocaleDateString(locale, dateOptions);
  } //to format the date fetched from strapi

  const screenSize = useWindowSize();
  //console.log(screenSize.width)

  return (
    <div className='my-10 md:mx-1 pt-2 lg:mx-2 lg:px-10  rounded-lg ease-out duration-200 inline-block blog-card align-middle  '>
      <Link href={"/blogs/" + blog.attributes.slug}>
        <Image
          className='lg:w-10/12   rounded-lg mb-1  aspect-video sm:w-10/12 mx-auto '
          src='/assets/images/dummy2.jpg'
          width={500}
          height={500}
          alt='dummy img'
        />

        {
          //using dummy image for the time being
        }
        <div className=''>
          <h1
            className='text-xl font-semibold text-gray-100 font-blog-title my-3 md:text-xl lg:text-2xl 
                '
          >
            {blog.attributes.Title}
          </h1>

          <div className='flex'>
            <div className='bg-gray-500 box-border my-auto rounded-full inline px-2 py-2  text-black text-sm font-bold '>
              {blog.attributes.Categories}
            </div>
            <p className='text-sm  font-blog-title text-gray-500 sm:dispay-none lg:inline lg:text-base my-3  lg:mx-3 ml-2'>
              {formatMyDate(blog.attributes.createdAt)}
            </p>
          </div>
          {screenSize.width > 800 && (
            <div className='font-blog-body mt-3 lg:text-lg text-justify'>
              <ReactMarkdown>{blog.attributes.Excerpt}</ReactMarkdown>...
              <span className='text-blue-600'>Read more</span>
            </div>
          )}
=======

    // const imgsrc = `https://kollboratecms.herokuapp.com${blog.attributes.Image.data[0].attributes.url}`

    //commenting it out for now cause strapi images are not available

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    function formatMyDate(value, locale = 'en-GB') {
        return new Date(value).toLocaleDateString(locale, dateOptions);
    } //to format the date fetched from strapi
    function capitaliseFirstLetter(title) {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }

    return (

        <div className='my-5 md:mx-1 pt-2 lg:mx-2 lg:px-10  rounded-lg ease-out duration-200 inline-block blog-card align-middle  '>

            <Link href={"/blogs/blog/" + blog.attributes.slug}>
                <Image className='lg:w-10/12   rounded-lg mb-1  aspect-video sm:w-10/12 mx-auto ' src="/assets/images/dummy2.jpg" width={500} height={500} alt="dummy img" />

                {
                    //using dummy image for the time being
                }
                <div className=''>
                    <h1 className='text-xl font-semibold text-gray-100 font-blog-title my-3 md:text-xl lg:text-2xl 
                '>{blog.attributes.Title}
                    </h1>

                    <div className="flex">
                        <div className='bg-gray-500 box-border my-auto rounded-full inline px-2 py-2  text-black text-sm font-bold '>
                            {capitaliseFirstLetter(blog.attributes.Categories)}
                        </div>
                        <p className='text-sm  font-blog-title text-gray-500 sm:dispay-none lg:inline lg:text-base my-3  lg:mx-3 ml-2' >
                            {formatMyDate(blog.attributes.createdAt)}
                        </p>
                    </div>


                    <div className='font-blog-body mt-3 lg:text-lg text-justify'>
                        <ReactMarkdown>{blog.attributes.Excerpt}</ReactMarkdown>...
                        <span className='text-blue-600'>Read more</span>
                    </div>



                </div>
            </Link>

>>>>>>> c36de26eca5e8bafbc36e0b7d5a79ea0bc101881
        </div>
      </Link>
    </div>
  );
}
<<<<<<< HEAD

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
=======
>>>>>>> c36de26eca5e8bafbc36e0b7d5a79ea0bc101881
