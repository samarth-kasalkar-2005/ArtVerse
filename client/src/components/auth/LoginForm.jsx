"use client";

import Link from "next/link";

import { useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

export default function LoginForm() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "https://artverse-backend-cg83.onrender.com//api/auth/login",
        formData
      );

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        res.data.token
      );

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      setMessage(res.data.message);

      // REDIRECT
      setTimeout(() => {
        router.push("/");
      }, 1000);

    } catch (error) {

      setMessage(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="flex items-center justify-center p-8">

      <div className="w-full max-w-md">

        <h1 className="text-3xl sm:text-5xl font-bold mb-3">
          Login
        </h1>

        <p className="text-gray-500 mb-10">
          Welcome back to ArtVerse ✨
        </p>

        <form onSubmit={handleSubmit}>

          {/* EMAIL */}
          <div className="mb-6">

            <label className="block mb-3 font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-100 text-black border border-gray-300 p-4 rounded-2xl outline-none focus:border-purple-500 transition"
            />

          </div>

          {/* PASSWORD */}
          <div className="mb-8">

            <label className="block mb-3 font-semibold">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-100 text-black border border-gray-300 p-4 rounded-2xl outline-none focus:border-purple-500 transition"
            />

          </div>

          {/* BUTTON */}
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300 shadow-lg">
            Login
          </button>

        </form>

        {/* MESSAGE */}
        {message && (
          <p className="mt-6 text-center text-purple-500">
            {message}
          </p>
        )}

        <p className="mt-8 text-gray-500 text-center">
          Don&apos;t have an account?{" "}

          <Link
            href="/auth/register"
            className="text-purple-500 font-semibold"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}