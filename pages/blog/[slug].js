import { getBlogs } from "./api";

import { useRouter } from "next/router";


export const getStaticPaths = async () => {
  const result = await getBlogs();
  console.log("title is...." + result.data.data[1].attributes.Title);
  console.log(result.data.data[2].id)
  return {
    paths: result.data.data.map((item) => (
      {params: {slug: item.attributes.slug}}
    )),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const result = await getBlogs();
  console.log(result.data.data[1].attributes)
  try {
    console.log("Here are the blogs .." + result.data.data[1].attributes.blog_body);
  } catch (error) {
    console.log("error is... in the blog page " + error);
  }
  
  return {
    props: {
      data: result.data.data,
      // data: result.data.data.attributes.blog_body,
    },
  };
};



export default function Post({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedBlog = data.find((blog) => blog.attributes.slug === slug);

  return (
    <>
      {selectedBlog && (
        <div className="text-white">{selectedBlog.attributes.blog_body}</div>
      )}
    </>
  );
}

// export default function Post({ data }) {
//   console.log(data)
  
//       data.map((item) => 
//       {
//         return (
//         <div className="text-white">{item.attributes.blog_body}</div>
//         );
//       }
// }

// define get static paths -- in this one , iterate through teh returned value from strapi and map over it to create the arrya with the fallback option
// define get staticprops  -- in this one, get the data back and return it as props
// define export default function for teh Component -- in this one, accept the above props to render the text on screen

// export default function i(){

//     return (<>
//     Hey, in blog</>)
// }
