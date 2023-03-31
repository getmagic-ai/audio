import qs from 'qs'
import { useRouter } from "next/router";
import SingleBlog from "@/components/SingleBlog";
import { fetchArticleBySlug, fetchblogs } from '@/pages/api/blogs';



export default function Post({ blog, notFound = false }) {
    const router = useRouter();
    return (
        <>
            <SingleBlog blog={blog} />
        </>

    );
}

export const getServerSideProps = async ({ query }) => {
    const queryString = qs.stringify({
        populate: "*",
        sort: ['id:desc'],
        filters: {
            slug: {
                $eq: query.slug,
            },
        },
    });

    const blogs = await fetchArticleBySlug(queryString);

    if (blogs.data.data.length === 0) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            blog: blogs.data.data[0],
        },
    };
};




