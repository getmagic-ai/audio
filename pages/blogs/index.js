import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import qs from "qs";
import SearchBox from "@/components/SearchBox";
import Categories from "@/components/Categories";
import NewsletterForm from "@/components/NewsletterForm";
import { fetchblogs, fetchCategories } from "../api/blogs";
import { BlogsList } from "@/components/BlogsList";
import Head from "next/head";
import { debounce } from "@/utils/blogPageUtils";
import { useRouter } from "next/router";



export default function Index({ categories, blogs }) {
  const { currentUser } = useContext(AuthContext);

  const router = useRouter();

  const handleSearch = (query) => {
    // query.preventDefault();
    console.log("this is query", query);
    router.push(`/blogs/?search=${query}`);
  };
  return (
    <>
      <Head>
        <title>Waveforms.io | Blogs</title>
        <meta name="Technology news" content="Tech News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-white items-center align-middle text-xl mb-3 -my-10 ">
        Get the latest of Media and Technology updates !
      </div>

      <SearchBox handleOnSearch={debounce(handleSearch, 500)} />

      <Categories suppressHydrationWarning categories={categories} />

      {blogs.items &&
        <BlogsList suppressHydrationWarning blogs={blogs.items} />}
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



export const getServerSideProps = async ({ query }) => {
  // Blogs
  const options = {
    populate: ['writer.Picture'],
    sort: ['id:desc'],
    // pagination: {
    //     page: query.page ? +query.page : 1,
    //     // pageSize: 1,
    // },
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
  // console.log("this is ", blogs.data)
  // categories
  const categories = await fetchCategories();
  // console.log("this is ", categories.data)

  return {
    props: {
      categories: categories.data,
      blogs: {
        items: blogs.data,
        pagination: blogs.data.meta.pagination,
      },
    },
  };
};




