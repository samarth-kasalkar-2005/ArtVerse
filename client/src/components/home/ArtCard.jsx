"use client";

import { useState } from "react";

import {
  Heart,
  Eye,
  MessageCircle,
  Bookmark,
  Share2,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function ArtCard({ art }) {

  const { theme } = useTheme();

  const [liked, setLiked] = useState(false);

  const [likes, setLikes] = useState(art.likes);

  const handleLike = () => {

    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  return (
    <div
      className={`rounded-3xl overflow-hidden transition duration-300 hover:scale-[1.02] shadow-xl
      ${
        theme === "dark"
          ? "bg-zinc-900 text-white"
          : "bg-white text-black border border-gray-200"
      }`}
    >

      {/* IMAGE */}
      <div className="overflow-hidden">

        <img
          src={art.image}
          alt={art.title}
          className="w-full h-72 object-cover hover:scale-110 transition duration-500"
        />

      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h3 className="text-2xl font-bold mb-2">
          {art.title}
        </h3>

        <p
          className={`mb-5
          ${
            theme === "dark"
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          by {art.artist}
        </p>

        {/* ACTIONS */}
        <div className="flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-5">

            {/* LIKE */}
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 transition
              ${
                liked
                  ? "text-red-500"
                  : ""
              }`}
            >

              <Heart
                size={20}
                fill={liked ? "currentColor" : "none"}
              />

              {likes}

            </button>

            {/* COMMENTS */}
            <button className="flex items-center gap-2 hover:text-purple-500 transition">

              <MessageCircle size={20} />

              24

            </button>

            {/* VIEWS */}
            <div className="flex items-center gap-2">

              <Eye size={20} />

              {art.views}

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <button className="hover:text-yellow-500 transition">
              <Bookmark size={20} />
            </button>

            <button className="hover:text-blue-500 transition">
              <Share2 size={20} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}