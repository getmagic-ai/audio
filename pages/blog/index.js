import Link from "next/link"
import { getBlogs } from "./api"
import { BlogCard } from "./BlogCard"
import qs from "qs"


export default function Index({ posts }) {

    return (
        <>
            <div className="text-white items-center align-middle text-xl mb-5">Hey, welcome the blogs page!</div>
            <div className=" w-full lg:flex lg:flex-wrap lg:justify-evenly">
                {
                    posts.map((blog) => {
                        return (
                            <BlogCard key={blog.id} blog={blog} />
                        )

                    })
                }
            </div>

        </>
    )
}

export async function getStaticProps() {
    const options = {
        populate: '*',

    }
    const queryString = qs.stringify(options);

    const blogs = await getBlogs(queryString)
    // console.log("this is ", data)
    return {
        props: {
            posts: blogs.data.data,
        }
    }
}