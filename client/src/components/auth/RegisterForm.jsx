"use client";

import Link from "next/link";

import { useState } from "react";

import axios from "axios";

export default function RegisterForm() {

  const [formData, setFormData] = useState({
    username: "",
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
        "http://localhost:5000/api/auth/register",
        formData
      );

      setMessage(res.data.message);

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
          Create Account
        </h1>

        <p className="text-gray-500 mb-10">
          Start your artistic journey ✨
        </p>

        <form onSubmit={handleSubmit}>

          {/* USERNAME */}
          <div className="mb-6">

            <label className="block mb-3 font-semibold">
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="w-full bg-gray-100 text-black border border-gray-300 p-4 rounded-2xl outline-none focus:border-purple-500 transition"
            />

          </div>

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
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-100 text-black border border-gray-300 p-4 rounded-2xl outline-none focus:border-purple-500 transition"
            />

          </div>

          {/* BUTTON */}
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300 shadow-lg">
            Create Account
          </button>

        </form>

        {/* MESSAGE */}
        {message && (
          <p className="mt-6 text-center text-purple-500">
            {message}
          </p>
        )}

        <p className="mt-8 text-gray-500 text-center">
          Already have an account?{" "}

          <Link
            href="/auth/login"
            className="text-purple-500 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}