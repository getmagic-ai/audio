import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { HiArrowNarrowLeft } from "react-icons/hi";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

export default function SingleBlog({ blog }) {
    // const src = `https://kollboratecms.herokuapp.com${blog.attributes.Image.data[0].attributes.url}`

    //commenting it out for now cause strapi images are not available


    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    function formatMyDate(value, locale = 'en-GB') {
        return new Date(value).toLocaleDateString(locale, dateOptions);
    } //to format the date fetched from strapi
    function imageExists() {

        fetch(src, { method: 'HEAD' })
            .then(res => {
                if (res.ok) {
                    {
                        console.log('Image exists.')
                        return true;
                    }
                } else {
                    console.log('Image does not exist.')

                }
            })
            .catch(err => console.log('Error:', err))

        return false;


    }
    return (
        <div className='-mt-12'>
            <div className='mb-3 text-blue-600 ' >
                <Link href={"/blog"} ><HiArrowNarrowLeft className='inline' /> Back</Link>
            </div>
            <div className='bg-gray-500 inline px-2 py-1 rounded-full text-black text-sm '>
                {blog.attributes.Categories}
            </div>
            <p className='text-sm  font-blog-title text-gray-500 sm:dispay-none lg:inline lg:text-base my-3  ' >
                {formatMyDate(blog.attributes.createdAt)}
            </p>
            <h1 className='text-xl font-semibold text-gray-100 font-blog-title mb-5  md:text-4xl lg:text-4xl
                '>{blog.attributes.Title}
            </h1>

            <Image className='lg:w-10/12   mx-auto rounded-lg my-4  aspect-video sm:w-10/12  ' src="/assets/images/dummy.png" width={500} height={500} alt="dummy img" />
            {
                //using dummy image for the time being
            }

            <div className='flex m-4 justify-center'>
                <img className='w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2' src='/assets/images/dummy-author-profile.webp' />
                <p className='text-sm  font-blog-title text-gray-500 sm:block lg:inline  my-auto lg:text-base'>By {blog.attributes.writer.data.attributes.Name}
                </p>
                <Link href={"#"} className="my-2">
                    <AiFillTwitterSquare className=' rounded-full w-7 h-7 text-blue-400 ml-4 mt-auto my-1' /></Link>


                <Link href={"#"} className="my-2">
                    <AiFillFacebook className='rounded-full w-7 h-7 text-blue-600 mt-auto' /></Link>
                <Link href={"#"} className="my-2">
                    <AiFillLinkedin className='rounded-full w-7 h-7 text-blue-400 mt-auto' /></Link>
            </div>
            <div className='font-blog-body text-sm  mb-10 sm:text-xl lg:text-2xl text-gray-100'><ReactMarkdown>{blog.attributes.blog_body}</ReactMarkdown></div>
        </div>
    )
}
