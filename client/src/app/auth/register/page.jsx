"use client";

import {
  useState,
} from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import axios from "axios";

export default function RegisterPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({

      username: "",

      email: "",

      password: "",
    });

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

        await axios.post(
          "https://artverse-backend-cg83.onrender.com/api/auth/register",
          formData
        );
      setLoading(false);

      alert(
        "Account created successfully 🚀"
      );

      router.push("/auth/login");

    }catch (error) {
      console.log("FULL ERROR:", error);
      console.log("Response:", error.response);
      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);

      setLoading(false);

      alert(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-[32px] p-10 shadow-2xl">

        <h1 className="text-5xl font-bold mb-4">

          Create Account 🚀

        </h1>

        <p className="text-gray-400 mb-10 text-lg">

          Join ArtVerse and share your creativity.

        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* USERNAME */}
          <div>

            <label className="block mb-3 text-lg font-semibold">

              Username

            </label>

            <input
              type="text"
              name="username"
              value={
                formData.username
              }
              onChange={handleChange}
              placeholder="Enter username"
              required
              className="w-full px-5 py-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
            />

          </div>

          {/* EMAIL */}
          <div>

            <label className="block mb-3 text-lg font-semibold">

              Email

            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="w-full px-5 py-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
            />

          </div>

          {/* PASSWORD */}
          <div>

            <label className="block mb-3 text-lg font-semibold">

              Password

            </label>

            <input
              type="password"
              name="password"
              value={
                formData.password
              }
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="w-full px-5 py-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
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
              ? "Creating account..."
              : "Register"}

          </button>

        </form>

        {/* LOGIN */}
        <p className="text-gray-400 mt-8 text-center">

          Already have an account?{" "}

          <Link
            href="/auth/login"
            className="text-purple-400 hover:underline"
          >

            Login

          </Link>

        </p>

      </div>

    </div>
  );
}