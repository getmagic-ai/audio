import { getBlogs } from "./api";
import qs from "qs";
import { useRouter } from "next/router";
import SingleBlog from "@/components/SingleBlog";

export default function Post({ posts }) {
  const router = useRouter();
  const { slug } = router.query; //using this to extract the query params
  const selectedBlog = posts.find((blog) => blog.attributes.slug === slug);

  return (
    <>
      {selectedBlog && (
        <>
          <SingleBlog blog={selectedBlog} />
        </>
      )}
    </>
  );
}

export const getStaticPaths = async () => {
  const result = await getBlogs();
  // //console.log("title is...." + result.data.data[1].attributes.Title); //for debugging only
  // //console.log(result.data.data[2].id)
  return {
    paths: result.data.data.map((item) => ({
      params: { slug: item.attributes.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const options = {
    populate: "*",
    sort: "publishedAt:desc",
  };
  const queryString = qs.stringify(options);

  const blogs = await getBlogs(queryString);
  // //console.log("this is ", data)
  return {
    props: {
      posts: blogs.data.data,
    },
  };
};
