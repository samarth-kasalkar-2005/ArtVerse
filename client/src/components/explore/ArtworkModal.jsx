"use client";

import {
  X,
  Heart,
  Eye,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function ArtworkModal({
  post,
  onClose,
}) {

  const { theme } = useTheme();

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">

      <div
        className={`w-full max-w-7xl max-h-[95vh] overflow-y-auto rounded-3xl shadow-2xl relative
        ${
          theme === "dark"
            ? "bg-zinc-950 text-white"
            : "bg-white text-black"
        }`}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
        >

          <X size={22} />

        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="h-[280px] sm:h-[400px] lg:h-[90vh]">

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="p-10 flex flex-col justify-between">

            <div>

              <h1 className="ttext-3xl sm:text-3xl sm:text-5xl font-bold mb-4">
                {post.title}
              </h1>

              <p className="text-gray-500 text-xl mb-8">
                by {post.artist}
              </p>

              <p className="text-lg leading-relaxed mb-8">
                {post.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mb-10">

                {post.tags
                  ?.split(",")
                  .map((tag, index) => (

                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-400"
                    >
                      #{tag.trim()}
                    </span>

                  ))}

              </div>

              {/* STATS */}
              <div className="flex items-center gap-8 text-lg mb-10">

                <div className="flex items-center gap-2">

                  <Heart size={22} />

                  {post.likes}

                </div>

                <div className="flex items-center gap-2">

                  <Eye size={22} />

                  {post.views}

                </div>

              </div>

              {/* COMMENTS */}
              <div>

                <h2 className="text-2xl font-bold mb-5">
                  Comments
                </h2>

                <div className="space-y-4">

                  {post.comments?.length > 0 ? (

                    post.comments.map(
                      (comment, index) => (

                        <div
                          key={index}
                          className={`p-4 rounded-2xl
                          ${
                            theme === "dark"
                              ? "bg-zinc-900"
                              : "bg-gray-100"
                          }`}
                        >

                          <p className="font-semibold mb-1">
                            {comment.username}
                          </p>

                          <p className="text-gray-500">
                            {comment.text}
                          </p>

                        </div>

                      )
                    )

                  ) : (

                    <p className="text-gray-500">
                      No comments yet.
                    </p>

                  )}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}