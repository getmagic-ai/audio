import qs from 'qs'
import SingleBlog from "@/components/SingleBlog";
import { fetchblogs } from '@/pages/api/blogs';

export default function Post({ blog }) {
    if (blog !== undefined) {
        return (
            <div>
                <SingleBlog blog={blog} />
            </div>
        );
    }
    return null;

}

export async function getStaticPaths() {
    const res = await fetchblogs({
        populate: "*",
        sort: ['id:desc']
    });
    // console.log(res.data.data);
    const blogs = await res.data.data;


    const paths = blogs.map((blog) => ({
        params: { slug: blog.attributes.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const queryString = qs.stringify({
        populate: "*",
        filters: {
            slug: {
                $eq: params.slug,
            },
        },
    });

    const res = await fetchblogs(queryString);
    const blog = await res.data.data;
    // console.log("blogs------------------", blog);
    // if (blog.data.data.length === 0) {
    //     return {
    //         notFound: true,
    //     };
    // }

    return {
        props: {
            blog: blog[0],
        },
    };
};
