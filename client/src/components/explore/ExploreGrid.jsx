"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import { Heart, Eye } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

import ArtworkModal from "./ArtworkModal";

export default function ExploreGrid({
  searchQuery,
}) {

  const { theme } = useTheme();

  const [posts, setPosts] = useState([]);

  const [commentText, setCommentText] =
    useState("");

  const [selectedPost, setSelectedPost] =
    useState(null);

  // FETCH POSTS
  useEffect(() => {

    const fetchPosts = async () => {

      try {

        const res = await axios.get(
          "https://artverse-backend-cg83.onrender.com//api/posts"
        );

        setPosts(res.data);

        // AUTO VIEW COUNT
        res.data.forEach(async (post) => {

          try {

            await axios.put(
              `https://artverse-backend-cg83.onrender.com//api/posts/${post._id}/view`
            );

          } catch (error) {

            console.log(error);
          }
        });

      } catch (error) {

        console.log(error);
      }
    };

    fetchPosts();

  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 mt-10">

        {posts
          .filter((post) => {

            if (!searchQuery) return true;

            return (

              post.title
                .toLowerCase()
                .includes(
                  searchQuery.toLowerCase()
                ) ||

              post.tags
                ?.toLowerCase()
                .includes(
                  searchQuery.toLowerCase()
                )
            );
          })
          .map((post) => (

            <div
              key={post._id}
              onClick={() =>
                setSelectedPost(post)
              }
              className={`rounded-3xl overflow-hidden transition hover:scale-[1.02] shadow-xl cursor-pointer
              ${
                theme === "dark"
                  ? "bg-zinc-900 border border-zinc-800"
                  : "bg-white border border-gray-200"
              }`}
            >

              {/* IMAGE */}
              <div className="h-[260px] sm:h-[320px] lg:h-[350px] overflow-hidden">

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

                {/* PREMIUM BADGE */}
                {post.premium && (

                  <div className="mb-3 inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">

                    💎 Premium Artwork

                  </div>

                )}

                <p className="text-gray-500 mb-4">
                  by {post.artist}
                </p>

                <p className="mb-5 line-clamp-2">
                  {post.description}
                </p>

                {/* BUY BUTTON */}
                {post.premium && (

                  <button
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                    className="mb-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 sm:px-5 py-3 rounded-2xl font-bold hover:scale-[1.03] transition"
                  >

                    Buy Artwork • ₹{post.price}

                  </button>

                )}

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
                <div className="flex items-center gap-6 text-gray-500 mb-6">

                  {/* LIKE */}
                  <button
                    onClick={async (e) => {

                      e.stopPropagation();

                      try {

                        await axios.put(
                          `https://artverse-backend-cg83.onrender.com//api/posts/${post._id}/like`
                        );

                        const res =
                          await axios.get(
                            "https://artverse-backend-cg83.onrender.com//api/posts"
                          );

                        setPosts(res.data);

                      } catch (error) {

                        console.log(error);
                      }
                    }}
                    className="flex items-center gap-2 hover:text-pink-500 transition"
                  >

                    <Heart size={18} />

                    {post.likes}

                  </button>

                  {/* VIEWS */}
                  <div className="flex items-center gap-2">

                    <Eye size={18} />

                    {post.views}

                  </div>

                </div>

                {/* COMMENTS */}
                <div>

                  <h3 className="font-semibold mb-3">
                    Comments
                  </h3>

                  {/* COMMENT LIST */}
                  <div className="space-y-3 mb-4 max-h-[150px] overflow-y-auto">

                    {post.comments?.map(
                      (comment, index) => (

                        <div
                          key={index}
                          className={`p-3 rounded-2xl text-sm
                          ${
                            theme === "dark"
                              ? "bg-zinc-800"
                              : "bg-gray-100"
                          }`}
                        >

                          <span className="font-semibold">
                            {comment.username}
                          </span>

                          <p className="text-gray-500">
                            {comment.text}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                  {/* ADD COMMENT */}
                  <div className="flex gap-3">

                    <input
                      type="text"
                      placeholder="Add comment..."
                      value={commentText}
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                      onChange={(e) =>
                        setCommentText(
                          e.target.value
                        )
                      }
                      className={`flex-1 px-4 py-3 rounded-2xl outline-none
                      ${
                        theme === "dark"
                          ? "bg-zinc-800"
                          : "bg-gray-100"
                      }`}
                    />

                    <button
                      onClick={async (e) => {

                        e.stopPropagation();

                        try {

                          await axios.post(
                            `https://artverse-backend-cg83.onrender.com//api/posts/${post._id}/comment`,
                            {
                              username:
                                "Samarth",
                              text: commentText,
                            }
                          );

                          const res =
                            await axios.get(
                              "https://artverse-backend-cg83.onrender.com//api/posts"
                            );

                          setPosts(res.data);

                          setCommentText("");

                        } catch (error) {

                          console.log(error);
                        }
                      }}
                      className="bg-purple-600 px-5 rounded-2xl text-white"
                    >
                      Post
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

      </div>

      {/* MODAL */}
      {selectedPost && (

        <ArtworkModal
          post={selectedPost}
          onClose={() =>
            setSelectedPost(null)
          }
        />

      )}
    </>
  );
}