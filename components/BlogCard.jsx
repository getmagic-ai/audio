import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


export default function BlogCard({ blog }) {

    const src = `https://kollboratecms.herokuapp.com${blog.attributes.Image.data[0].attributes.url}`

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    function formatMyDate(value, locale = 'en-GB') {
        return new Date(value).toLocaleDateString(locale, dateOptions);
    } //to format the date fetched from strapi

    function imageExists() {

        fetch(src, { method: 'HEAD' })
            .then(res => {
                if (res.ok) {

                    console.log('Image exists.')
                    return true;

                } else {
                    console.log('Image does not exist.')
                    return false;

                }
            })
            .catch(err => console.log('Error:', err))

    }


    return (

        <div className='border-2 border-blue-cus   hover:shadow-md  hover:-translate-y-1 hover:shadow-white my-4 md:mx-1 lg:mx-2 px-5 lg:px-10 pt-5   rounded-lg ease-out duration-200 inline-block blog-card'>

            <Link href={"/blog/" + blog.attributes.slug}>
                <h1 className='text-lg font-semibold text-gray-100 font-blog-title mb-4 md:text-2xl lg:text-3xl
                '>{blog.attributes.Title}
                </h1>

                <div className='bg-gray-500 inline px-2 py-1 rounded-full text-black mb-4 text-sm'>
                    {blog.attributes.Categories}
                </div>
                <div className=' flex flex-wrap justify-evenly w-full my-4'>

                    <p className='text-xs  font-blog-title text-gray-500 sm:dispay-none lg:inline lg:text-base my-auto  w-5/12' >
                        {formatMyDate(blog.attributes.createdAt)}
                    </p>
                    <span className='divide border-r-2 border-gray-500'></span>
                    <p className='text-xs  font-blog-title text-gray-500 sm:block lg:inline w-5/12  my-1 lg:text-base'>By {blog.attributes.writer.data.attributes.Name}
                    </p>

                </div>

                {
                    imageExists() ? (


                        <Image className='lg:w-10/12   mx-auto rounded-lg my-4  aspect-video sm:w-10/12  ' loader={() => src} src={src} width={500} height={500} alt="blog img" />
                    )
                        :
                        <Image className='lg:w-10/12   mx-auto rounded-lg my-4  aspect-video sm:w-10/12  ' src="/dummy.png" width={500} height={500} alt="dummy img" />
                }


                <div className='font-blog-body mt-4 mb-5 lg:text-lg '>
                    <ReactMarkdown>{blog.attributes.Excerpt}</ReactMarkdown>...
                    <span className='text-blue-600'>Read more</span>
                </div>
            </Link>

        </div>
    )
}
