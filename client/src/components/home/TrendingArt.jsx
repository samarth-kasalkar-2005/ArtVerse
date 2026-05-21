"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import { Heart, Eye } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function TrendingArt() {

  const { theme } = useTheme();

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {

      try {

        const res = await axios.get(
          "http://localhost:5000/api/posts"
        );

        // SHOW ONLY LATEST 6
        setPosts(res.data.slice(0, 6));

      } catch (error) {

        console.log(error);
      }
    };

    fetchPosts();

  }, []);

  return (
    <section className="mt-20">

      <div className="flex items-center justify-between mb-10">

        <div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-3">
            Trending Art
          </h2>

          <p className="text-gray-500">
            Discover the latest masterpieces 🎨
          </p>

        </div>

      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

        {posts.map((post) => (

          <div
            key={post._id}
            className={`rounded-3xl overflow-hidden transition hover:scale-[1.02] shadow-xl
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

              <p className="mb-5 line-clamp-2">
                {post.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-6">

                {post.tags?.split(",").map((tag, index) => (

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

    </section>
  );
}