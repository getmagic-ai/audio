//this code is used to read the users liked posts from firebase and display them on the page. The function is called when the page is loaded
//currentUser is used to get the user's id
//likedPosts is an array used to store the posts that the user has liked
//setLikedPosts is a function used to change the likedPosts array
//onSnapshot is a function used to listen for changes in the users liked posts

//write a function that reads the users liked songs from the firebase database and displays them here

import React, { useState, useEffect } from "react";
import { db, app, auth } from "@/config/firebase-config";
import Link from "next/link";

export default function MyLikes() {
  const { currentUser } = auth().currentUser;
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    db.collection("likes")
      .where("userId", "==", currentUser.uid)
      .onSnapshot((snapshot) => {
        setLikedPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, [currentUser.uid]);

  return (
    <div>
      <h1>My Likes</h1>
      {likedPosts.map(({ id, data: { title } }) => (
        <p key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
        </p>
      ))}
    </div>
  );
}
