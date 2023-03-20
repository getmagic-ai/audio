import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { getBlogs } from "./api";
import BlogCard from "@/components/BlogCard";
import qs from "qs";
import SearchBox from "@/components/SearchBox";
import Categories from "@/components/Categories";
import NewsletterForm from "@/components/NewsletterForm";


export default function Index({ posts }) {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="text-white items-center align-middle text-xl mb-3 -my-10 ">
        Get the latest of Media and Technology updates !
      </div>

      <SearchBox />

      <Categories />

      <div className=" w-full   lg:flex  md:flex md:flex-wrap lg:flex-wrap lg:justify-evenly  md:justify-evenly">
        {posts.map((blog) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
      <br />
      {
        currentUser ? (
          <NewsletterForm currentUser={currentUser} />
        ) : (
          <NewsletterForm />
        ) /*Check for current user and if valid, show logged in user text*/
      }
    </>
  );
}



export async function getStaticProps() {
  const options = {
    populate: "*",
    sort: "publishedAt:desc",

  };
  const queryString = qs.stringify(options);

  const blogs = await getBlogs(queryString);
  // console.log("this is ", data)
  return {
    props: {
      posts: blogs.data.data,
    },
  };
}