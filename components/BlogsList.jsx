import React from 'react'
import BlogCard from './BlogCard';

export const BlogsList = ({ blogs }) => {

    return (
        <div className=" w-full   lg:flex  md:flex md:flex-wrap lg:flex-wrap lg:justify-evenly  md:justify-evenly">
            {blogs.data.map((blog) => {
                return <BlogCard key={blog.id} blog={blog} />;
            })}
        </div>
    )
}
