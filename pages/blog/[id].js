import { getBlogs } from "./api";



const blogs = async () => {
  const result = await getBlogs();
  console.log(result.data);
  // return result.data;
}


export const getStaticPaths = async () => {
  const result = await getBlogs();
  // console.log(result.data.data)
  // console.log("result is...." + result.data.data[1].attributes.blog_body +' title...' + result.data.data[1].attributes.Title);
  console.log("title is...." + result.data.data[1].attributes.Title);
  console.log(result.data.data[2].id)
  return {
    paths: result.data.data.map((result) => ({
      
      params: { id: toString(result.attributes.id) },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  try {
    console.log("Here are the blogs .." + blogs.data);
  } catch (error) {
    console.log("error is... in the blog page " + error);
  }
  const result = blogs.result.json();
  return {
    props: {
      data: result.data.body,
    },
  };
};

export default function Post({ data }) {
  return (
    <>
      <div>{data}</div>
    </>
  );
}

// define get static paths -- in this one , iterate through teh returned value from strapi and map over it to create the arrya with the fallback option
// define get staticprops  -- in this one, get the data back and return it as props
// define export default function for teh Component -- in this one, accept the above props to render the text on screen

// export default function i(){

//     return (<>
//     Hey, in blog</>)
// }
