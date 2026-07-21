"use client";

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  Heart,
  Eye,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function PortfolioGrid() {

  const { theme } = useTheme();

  const [posts, setPosts] =
    useState([]);

  useEffect(() => {

    const fetchPosts = async () => {

      try {

        const storedUser =
          JSON.parse(
            localStorage.getItem("user")
          );

        const res = await axios.get(
          "https://artverse-backend-k1e8.onrender.com/api/posts"
        );

        // FILTER USER POSTS
        const userPosts =
          res.data.filter(
            (post) =>
              post.user ===
              storedUser._id
          );

        setPosts(userPosts);

      } catch (error) {

        console.log(error);
      }
    };

    fetchPosts();

  }, []);

  return (
    <div>

      <div className="flex items-center justify-between mb-10">

        <div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-3">
            My Portfolio
          </h2>

          <p className="text-gray-500">
            Your uploaded masterpieces 🎨
          </p>

        </div>

      </div>

      {/* EMPTY STATE */}
      {posts.length === 0 ? (

        <div
          className={`rounded-3xl p-16 text-center
          ${
            theme === "dark"
              ? "bg-zinc-900 border border-zinc-800"
              : "bg-gray-100"
          }`}
        >

          <h2 className="text-3xl font-bold mb-4">
            No artworks uploaded yet
          </h2>

          <p className="text-gray-500">
            Start uploading your creativity 🚀
          </p>

        </div>

      ) : (

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {posts.map((post) => (

            <div
              key={post._id}
              className={`rounded-3xl overflow-hidden shadow-2xl transition hover:scale-[1.02]
              ${
                theme === "dark"
                  ? "bg-zinc-900 border border-zinc-800"
                  : "bg-white border border-gray-200"
              }`}
            >

              {/* IMAGE */}
              <div className="h-[350px] overflow-hidden">

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h2 className="text-2xl font-bold mb-2">
                  {post.title}
                </h2>

                <p className="text-gray-500 mb-4">
                  by {post.artist}
                </p>

                <p className="line-clamp-2 mb-5">
                  {post.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {post.tags
                    ?.split(",")
                    .map((tag, index) => (

                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm"
                      >
                        #{tag.trim()}
                      </span>

                    ))}

                </div>

                {/* STATS */}
                <div className="flex items-center gap-6 text-gray-500">

                  <div className="flex items-center gap-2">

                    <Heart size={18} />

                    {post.likes}

                  </div>

                  <div className="flex items-center gap-2">

                    <Eye size={18} />

                    {post.views}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}