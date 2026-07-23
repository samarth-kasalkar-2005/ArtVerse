"use client";

import {
  useState,
  useEffect,
} from "react";

import axios from "axios";

import {
  ImagePlus,
  Sparkles,
  FileText,
  Tags,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function UploadForm() {

  const { theme } = useTheme();

  const [loading, setLoading] =
    useState(false);

  const [preview, setPreview] =
    useState(null);

  const [formData, setFormData] =
    useState({

      title: "",

      description: "",

      tags: "",

      image: null,
    });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  // HANDLE IMAGE CHANGE
  const handleImageChange = (e) => {

    const file =
      e.target.files[0];

    if (!file) return;

    setFormData({

      ...formData,

      image: file,
    });

    setPreview(
      URL.createObjectURL(file)
    );
  };

  // HANDLE SUBMIT
  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const storedUser =
        JSON.parse(
          localStorage.getItem(
            "user"
          )
        );

      const data =
        new FormData();

      data.append(
        "title",
        formData.title
      );

      data.append(
        "description",
        formData.description
      );

      data.append(
        "tags",
        formData.tags
      );

      data.append(
        "image",
        formData.image
      );

      data.append(
        "artist",
        storedUser.username
      );

      data.append(
        "userId",
        storedUser._id
      );

      data.append(
        "premium",
        false
      );

      data.append(
        "price",
        0
      );

      await axios.post(
        "https://artverse-backend-cg83.onrender.com/api/posts",
        data
      );

      setLoading(false);

      alert(
        "Upload successful 🚀"
      );

      // RESET FORM
      setFormData({

        title: "",

        description: "",

        tags: "",

        image: null,
      });

      setPreview(null);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Upload failed ❌");
    }
  };

  return (
    <div
      className={`grid lg:grid-cols-2 gap-10
      ${
        theme === "dark"
          ? "text-white"
          : "text-black"
      }`}
    >

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className={`rounded-[32px] p-8 border
        ${
          theme === "dark"
            ? "bg-zinc-900 border-zinc-800"
            : "bg-white border-gray-200"
        }`}
      >

        <div className="mb-10">

          <h1 className="text-5xl font-bold mb-3">

            Upload Your Art

          </h1>

          <p className="text-gray-400 text-lg">

            Share your creativity
            with the world ✨

          </p>

        </div>

        {/* IMAGE */}
        <div className="mb-8">

          <label className="flex items-center gap-3 text-xl font-semibold mb-4">

            <ImagePlus size={24} />

            Artwork Image

          </label>

          <input
            type="file"
            accept="image/*"
            onChange={
              handleImageChange
            }
            required
            className={`w-full rounded-2xl px-5 py-4 border
            ${
              theme === "dark"
                ? "bg-zinc-800 border-zinc-700"
                : "bg-gray-100 border-gray-300"
            }`}
          />

        </div>

        {/* TITLE */}
        <div className="mb-8">

          <label className="flex items-center gap-3 text-xl font-semibold mb-4">

            <Sparkles size={24} />

            Artwork Title

          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter artwork title"
            required
            className={`w-full rounded-2xl px-5 py-4 border outline-none
            ${
              theme === "dark"
                ? "bg-zinc-800 border-zinc-700"
                : "bg-gray-100 border-gray-300"
            }`}
          />

        </div>

        {/* DESCRIPTION */}
        <div className="mb-8">

          <label className="flex items-center gap-3 text-xl font-semibold mb-4">

            <FileText size={24} />

            Description

          </label>

          <textarea
            name="description"
            value={
              formData.description
            }
            onChange={handleChange}
            placeholder="Describe your artwork..."
            rows={6}
            required
            className={`w-full rounded-2xl px-5 py-4 border outline-none resize-none
            ${
              theme === "dark"
                ? "bg-zinc-800 border-zinc-700"
                : "bg-gray-100 border-gray-300"
            }`}
          />

        </div>

        {/* TAGS */}
        <div className="mb-10">

          <label className="flex items-center gap-3 text-xl font-semibold mb-4">

            <Tags size={24} />

            Tags

          </label>

          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="anime, fantasy, cyberpunk..."
            className={`w-full rounded-2xl px-5 py-4 border outline-none
            ${
              theme === "dark"
                ? "bg-zinc-800 border-zinc-700"
                : "bg-gray-100 border-gray-300"
            }`}
          />

        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-2xl text-lg font-semibold transition
          ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-[1.02]"
          }`}
        >

          {loading
            ? "Uploading..."
            : "Upload Artwork"}

        </button>

      </form>

      {/* PREVIEW */}
      <div
        className={`rounded-[32px] overflow-hidden border flex items-center justify-center
        ${
          theme === "dark"
            ? "bg-zinc-900 border-zinc-800"
            : "bg-white border-gray-200"
        }`}
      >

        {preview ? (

          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
          />

        ) : (

          <div className="text-center p-10">

            <div className="w-28 h-28 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-8">

              <ImagePlus size={50} />

            </div>

            <h2 className="text-5xl font-bold mb-6">

              Live Preview

            </h2>

            <p className="text-gray-400 text-lg max-w-md">

              Your artwork preview
              will appear here
              beautifully once
              uploaded.

            </p>

          </div>

        )}

      </div>

    </div>
  );
}