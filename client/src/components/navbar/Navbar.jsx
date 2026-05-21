"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import ThemeToggle from "../ui/ThemeToggle";

import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {

  const { theme } = useTheme();

  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.reload();
  };

  return (
    <nav
      className={`w-full h-16 border-b flex items-center justify-between px-6 transition
      ${
        theme === "dark"
          ? "bg-black text-white border-gray-800"
          : "bg-white text-black border-gray-300"
      }`}
    >

      {/* LOGO */}
      <h1 className="text-2xl font-bold text-purple-500">
        ArtVerse
      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        <ThemeToggle />

        {user ? (

          <>
            {/* USERNAME */}
            <p className="font-semibold">
              {user.username}
            </p>

            {/* PROFILE */}
            <Link href="/profile">

              <button
                className={`px-5 py-2 rounded-xl transition font-medium
                ${
                  theme === "dark"
                    ? "bg-zinc-900 hover:bg-zinc-800"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Profile
              </button>

            </Link>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
            >
              Logout
            </button>

          </>

        ) : (

          <>
            {/* LOGIN */}
            <Link href="/auth/login">

              <button
                className={`px-5 py-2 rounded-xl transition font-medium
                ${
                  theme === "dark"
                    ? "bg-zinc-900 hover:bg-zinc-800"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Login
              </button>

            </Link>

            {/* REGISTER */}
            <Link href="/auth/register">

              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-xl hover:scale-[1.03] transition">
                Register
              </button>

            </Link>

          </>

        )}

      </div>

    </nav>
  );
}