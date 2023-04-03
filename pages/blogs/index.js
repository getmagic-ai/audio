import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import qs from "qs";
import SearchBox from "@/components/SearchBox";
import Categories from "@/components/Categories";
import NewsletterForm from "@/components/NewsletterForm";
import { fetchblogs, fetchBlogsByPage, fetchCategories } from "../api/blogs";
import { BlogsList } from "@/components/BlogsList";
import Head from "next/head";
import { debounce } from "@/utils/blogPageUtils";
import { useRouter } from "next/router";

<<<<<<< HEAD
export default function Index({ posts }) {
=======


export default function Index({ categories, blogs }) {
>>>>>>> c36de26eca5e8bafbc36e0b7d5a79ea0bc101881
  const { currentUser } = useContext(AuthContext);


  const router = useRouter();

  const handleSearch = (query) => {
    // query.preventDefault();
    console.log("this is query", query);
    router.push(`/blogs/?search=${query}`);
  };
  return (
    <>
<<<<<<< HEAD
      <div className='text-white items-center align-middle text-xl mb-3 -my-10 '>
=======
      <Head>
        <title>Waveforms.io | Blogs</title>
        <meta name="Technology news" content="Tech News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-white items-center align-middle text-xl mb-3 -my-10 ">
>>>>>>> c36de26eca5e8bafbc36e0b7d5a79ea0bc101881
        Get the latest of Media and Technology updates !
      </div>

      <SearchBox handleOnSearch={debounce(handleSearch, 500)} />

      <Categories suppressHydrationWarning categories={categories} />

<<<<<<< HEAD
      <div className=' w-full   lg:flex  md:flex md:flex-wrap lg:flex-wrap lg:justify-evenly  md:justify-evenly'>
        {posts.map((blog) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
=======
      {blogs !== undefined &&
        <BlogsList suppressHydrationWarning blogs={blogs.items} />}
>>>>>>> c36de26eca5e8bafbc36e0b7d5a79ea0bc101881
      <br />
      {
        currentUser ? (
          <NewsletterForm currentUser={currentUser} />
        ) : (
          <NewsletterForm />
        )
        /*Check for current user and if valid, show logged in user text*/
      }
    </>
  );
}

<<<<<<< HEAD
export async function getStaticProps() {
  const options = {
    populate: "*",
    sort: "publishedAt:desc",
  };
  const queryString = qs.stringify(options);

  const blogs = await getBlogs(queryString);
  // //console.log("this is ", data)
=======
export async function getServerSideProps({ query }) {
  const options = {
    populate: ['writer.Picture'],
    sort: ['id:desc'],
  };

  if (query.search !== "") {
    options.filters = {

      $or: [
        { Title: { $containsi: query.search } },
        { blog_body: { $containsi: query.search } },
        { Categories: { $containsi: query.search } }
      ]



    };
  }

  const queryString = qs.stringify(options);

  const blogs = await fetchblogs(queryString);
  const categories = await fetchCategories();


>>>>>>> c36de26eca5e8bafbc36e0b7d5a79ea0bc101881
  return {
    props: {
      categories: categories.data,
      blogs: {
        items: blogs.data,
        pagination: blogs.data.meta.pagination,
      },
    },
  };
}
<<<<<<< HEAD
=======



// export const getServerSideProps = async ({ query }) => {
//   // Blogs
//   const options = {
//     populate: ['writer.Picture'],
//     sort: ['id:desc'],
//     // pagination: {
//     //     page: query.page ? +query.page : 1,
//     //     // pageSize: 1,
//     // },
//   };

//   if (query.search) {
//     options.filters = {
//       Title: {
//         $containsi: query.search,
//       },
//     };
//   }

//   const queryString = qs.stringify(options);

//   const blogs = await fetchblogs(queryString);
//   // console.log("this is ", blogs.data)
//   // categories
//   const categories = await fetchCategories();
//   // console.log("this is ", categories.data)

//   return {
//     props: {
//       categories: categories.data,
//       blogs: {
//         items: blogs.data,
//         pagination: blogs.data.meta.pagination,
//       },
//     },
//   };
// };



>>>>>>> c36de26eca5e8bafbc36e0b7d5a79ea0bc101881
