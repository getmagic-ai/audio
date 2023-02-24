import { getBlogs } from "./api"
import { BlogCard } from "./BlogCard"
import qs from "qs"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function Index({ posts }) {

    return (

        <>
            <div className="text-white items-center align-middle text-xl mb-3">
                Get the latest of Media and Technology updates !
            </div>
            <div className=" w-full   lg:flex  md:flex md:flex-wrap lg:flex-wrap lg:justify-evenly  md:justify-evenly">
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