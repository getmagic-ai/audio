import qs from 'qs'
import SingleBlog from "@/components/SingleBlog";
import { fetchblogs } from '@/pages/api/blogs';

export default function Post({ blog }) {
    return (
        <>
            <SingleBlog blog={blog} />
        </>
    );
}

export async function getStaticPaths() {
    const blogs = await fetchblogs({
        populate: "*",
        sort: ['id:desc']
    });

    const paths = blogs.data.data.map((blog) => ({
        params: { slug: blog.attributes.slug },
    }));

    return {
        paths,
        fallback: true,
    };
}

export const getStaticProps = async ({ params }) => {
    const queryString = qs.stringify({
        populate: "*",
        filters: {
            slug: {
                $eq: params.slug,
            },
        },
    });

    const blogs = await fetchblogs(queryString);

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
