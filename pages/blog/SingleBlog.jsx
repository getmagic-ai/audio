import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { HiArrowNarrowLeft } from "react-icons/hi";


export const SingleBlog = ({ blog }) => {
    const src = `https://kollboratecms.herokuapp.com${blog.attributes.Image.data[0].attributes.url}`

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    function formatMyDate(value, locale = 'en-GB') {
        return new Date(value).toLocaleDateString(locale, dateOptions);
    } //to format the date fetched from strapi

    return (
        <div>
            <div className='mb-3 text-blue-600 ' ><Link href={"/blog"} ><HiArrowNarrowLeft className='inline' /> Back</Link></div>
            <h1 className='text-xl font-semibold text-gray-100 font-blog-title mb-4 lg:text-3xl
                '>{blog.attributes.Title}
            </h1>

            <div className='bg-gray-500 inline px-2 py-1 rounded-full text-black text-sm'>
                {blog.attributes.Categories}
            </div>


            <div className=' flex flex-wrap justify-evenly w-full my-4'>

                <p className='text-xs text-center  font-blog-title text-gray-500 sm:dispay-none lg:inline lg:text-base my-auto  w-5/12' >
                    {formatMyDate(blog.attributes.createdAt)}
                </p>
                <span className='divide border-r-2 border-gray-500'></span>
                <p className='text-xs text-center font-blog-title text-gray-500 sm:block lg:inline w-5/12  my-1 lg:text-base'>By {blog.attributes.writer.data.attributes.Name}
                </p>

            </div>

            <Image className='w-full rounded-lg mt-3 mb-5' loader={() => src} src={src} width={500} height={500} alt="blog img" />


            <p className='font-blog-body mt-4 mb-10 lg:text-lg text-justify'>{blog.attributes.blog_body}</p>



        </div>
    )
}
