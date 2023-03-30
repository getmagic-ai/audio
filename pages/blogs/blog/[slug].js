import qs from 'qs'
import { useRouter } from "next/router";
import SingleBlog from "@/components/SingleBlog";
import { fetchArticleBySlug, fetchblogs } from '@/pages/api/blogs';



export default function Post({ blog }) {
    const router = useRouter();
    console.log("this is blog ", blog)
    return (
        <>
            {selectedBlog && (
                <>
                    <SingleBlog blog={blog} />
                </>
            )}
        </>
    );
}

export const getStaticPaths = async () => {
    const result = await fetchblogs();

    return {
        paths: result.data.data.map((item) => (
            { params: { slug: item.attributes.slug } }
        )),
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const options = {
        populate: "*",
        sort: "publishedAt:desc",

    };
    const queryString = qs.stringify(options);
    console.log("this is ------------------------qs ", queryString)

    const blogs = await fetchblogs(queryString);
    console.log("this is blogs", blogs.data)
    return {
        props: {
            blog: blogs.data.data[0],
        },
    };
};

// export const getServerSideProps = async ({ query }) => {
//     const queryString = qs.stringify({
//         populate: ['Image', 'author.avatar'],
//         filters: {
//             Slug: {
//                 $eq: query.slug,
//             },
//         },
//     });
//     console.log("this is ------------------------qs ", queryString)
//     const { blogs } =
//         await fetchArticleBySlug(queryString);
//     console.log("this is blogs", blogs.data)
//     if (blogs.data.length === 0) {
//         return {
//             notFound: true,
//         };
//     }
//     return {
//         props: {
//             blog: await serializeMarkdown(blogs.data[0]),
//         },
//     };
// };
