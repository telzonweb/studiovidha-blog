import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
// import { axiosInstance } from "../axios";
import axios from "axios";
import { axiosInstance } from "../axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  // start the development server on render
  useEffect(() => {
    async function startServer() {
      const res = await fetch("http://localhost:8000/api/user/test");
      const data = await res.json();
      console.log(data);
    }
    startServer();
  }, []);

  useEffect(() => {
    // const fetchPosts = async () => {
    //   try {
    //     const response = await axiosInstance.get("/api/post/getPosts");
    //     setPosts(response.data.posts);
    //   } catch (error) {
    //     console.error("Error fetching posts:", error);
    //   }
    // };
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to my Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {/* {console.log(posts)} */}
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
