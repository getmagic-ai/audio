import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { getBlogs } from "./api"
import { BlogCard } from "./BlogCard"
import qs from "qs"




//Core export
export default function Index({ posts }) {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="text-white items-center align-middle text-xl mb-3">
        Get the latest of Media and Technology updates !
      </div>
      <div className=" w-full   lg:flex  md:flex md:flex-wrap lg:flex-wrap lg:justify-evenly  md:justify-evenly">
        {
          posts.map((blog) => {
            return (
              <BlogCard key={blog.id} blog={blog} />

            )

          })
        }
      </div>

      <div> Coming back soon with a news letter subscription</div>
      <br />
      {currentUser ? <LoggedInEmailForm currentUser={currentUser} /> : <LoggedOutEmailForm /> /*Check for current user and if valid, show logged in user text*/}

    </>
  );
}


export async function getStaticProps() {
  const options = {
    populate: '*',

  }
  const queryString = qs.stringify(options);

  const blogs = await getBlogs(queryString)
  // console.log("this is ", data)
  return {
    props: {
      posts: blogs.data.data,
    }
  }
}

export function LoggedInEmailForm({ email, onSubmit, currentUser }) {
  const [newEmail, setNewEmail] = useState(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newEmail);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block sm:inline " htmlFor="email"> Hey there logged in user! <br /> Email address:</label>
      <input
        className=" rounded px-2  w-72 md:px-5 sm:ml-2"
        type="email"
        id="email"
        value={currentUser.email}
        onChange={(event) => setNewEmail(event.target.value)}
        required
      />
      <br />
      <button className="p-2 rounded-lg text-black mt-2 bg-gray-400" type="submit">Save</button>
    </form>
  );
}

export function LoggedOutEmailForm({ onSubmit }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block sm:inline " htmlFor="email">Hey there Logged out User! <br /> Email address:</label>
      <input
        className=" rounded px-2  w-72 md:px-5 sm:ml-2"
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <button className="p-2 rounded-lg text-black mt-2 bg-gray-400" type="submit">Subscribe</button>
    </form>
  );
}
