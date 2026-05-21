"use client";

import { useEffect, useState } from "react";

import API, { IMAGE_URL } from "../../lib/api";

import { Heart, Eye } from "lucide-react";

import { MessageCircle } from "lucide-react";

export default function RealFeed() {

  const [artworks, setArtworks] = useState([]);

  useEffect(() => {

    fetchArtworks();

  }, []);

  const [commentText, setCommentText] =
  useState("");

  const fetchArtworks = async () => {

    try {

      const res = await API.get("/artworks");

      setArtworks(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const handleLike = async (id) => {

    try {

        await API.put(`/artworks/like/${id}`);

        fetchArtworks();

    } catch (error) {

        console.log(error);
    }
    };

    const handleComment = async (id) => {

        if (!commentText) return;

        try {

            const user = JSON.parse(
            localStorage.getItem("user")
            );

            await API.post(
            `/artworks/comment/${id}`,
            {
                username: user.username,
                text: commentText,
            }
            );

            setCommentText("");

            fetchArtworks();

        } catch (error) {

            console.log(error);
        }
    };
  return (
    <section className="mt-14">

      <div className="flex items-center justify-between mb-10">

        <h1 className="text-3xl sm:text-5xl font-bold">
          Latest Artworks
        </h1>

        <p className="text-zinc-400 text-lg">
          Real uploads from creators
        </p>

      </div>

      {artworks.length === 0 ? (

        <div className="text-center py-32 border border-dashed border-zinc-700 rounded-3xl">

          <h2 className="text-4xl font-bold mb-4">
            No Artworks Yet
          </h2>

          <p className="text-zinc-400 text-xl">
            Upload your first masterpiece 🚀
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {artworks.map((art) => (

            <div
              key={art._id}
              className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:scale-[1.02] transition-all duration-300 shadow-xl"
            >

              <img
                src={`${IMAGE_URL}${art.image}`}
                alt={art.title}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h2 className="text-3xl font-bold text-white mb-2">
                  {art.title}
                </h2>

                <p className="text-zinc-400 mb-6">
                  by {art.artist}
                </p>

                <p className="text-zinc-300 mb-8 line-clamp-3">
                  {art.description}
                </p>

                <div className="flex items-center justify-between text-zinc-400">

                    <div className="mt-6">

                        <div className="flex gap-3">

                            <input
                            type="text"
                            placeholder="Add comment..."
                            value={commentText}
                            onChange={(e) =>
                                setCommentText(e.target.value)
                            }
                            className="flex-1 p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white"
                            />

                            <button
                            onClick={() =>
                                handleComment(art._id)
                            }
                            className="bg-purple-600 hover:bg-purple-700 transition px-5 rounded-xl"
                            >
                            <MessageCircle size={20} />
                            </button>

                        </div>

                        {/* COMMENTS */}
                        <div className="mt-5 flex flex-col gap-3">

                            {art.comments?.map(
                            (comment, index) => (

                                <div
                                key={index}
                                className="bg-zinc-800 rounded-xl p-3"
                                >

                                <p className="font-semibold text-white">
                                    {comment.username}
                                </p>

                                <p className="text-zinc-300">
                                    {comment.text}
                                </p>

                                </div>
                            )
                            )}

                        </div>

                    </div>

                  <div className="flex items-center gap-2">

                    <button
                        onClick={() => handleLike(art._id)}
                        className="hover:text-red-500 transition"
                        >
                        <Heart size={20} />
                    </button>

                    <span>{art.likes}</span>

                  </div>

                  <div className="flex items-center gap-2">

                    <Eye size={20} />

                    <span>{art.views}</span>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      )}

    </section>
  );
}