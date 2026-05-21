"use client";

import { useTheme } from "../../context/ThemeContext";

export default function HeroSection() {

  const { theme } = useTheme();

  return (
    <section className="p-8">

      <div className="rounded-3xl bg-gradient-to-r from-purple-900 via-black to-pink-900 p-10 min-h-[300px] flex flex-col justify-center">

        <h1
          className={`text-4xl md:text-6xl font-bold mb-4
          ${theme === "dark" ? "text-white" : "text-white"}`}
        >
          Discover Amazing Art
        </h1>

        <p
          className={`text-lg max-w-2xl
          ${theme === "dark" ? "text-gray-300" : "text-gray-200"}`}
        >
          Upload, explore, and connect with artists around the world.
        </p>

        <button className="mt-6 w-fit bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition text-white">
          Explore Now
        </button>

      </div>

    </section>
  );
}