"use client";

import { useState } from "react";

import {
  User,
  Mail,
  Bell,
  Shield,
  Moon,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function SettingsPanel() {

  const { theme } = useTheme();

  const [notifications, setNotifications] = useState(true);

  return (
    <div className="max-w-5xl mx-auto">

      {/* HEADER */}
      <div className="mb-12">

        <h1
          className={`text-3xl sm:text-5xl font-bold mb-3
          ${
            theme === "dark"
              ? "text-white"
              : "text-black"
          }`}
        >
          Settings
        </h1>

        <p
          className={
            theme === "dark"
              ? "text-gray-400"
              : "text-gray-600"
          }
        >
          Manage your ArtVerse account and preferences.
        </p>

      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* PROFILE */}
        <div
          className={`rounded-3xl p-8 shadow-xl
          ${
            theme === "dark"
              ? "bg-zinc-900 border border-zinc-800"
              : "bg-white border border-gray-200"
          }`}
        >

          <div className="flex items-center gap-3 mb-8">

            <User className="text-purple-500" />

            <h2 className="text-2xl font-bold">
              Profile
            </h2>

          </div>

          <div className="mb-6">

            <label className="block mb-3 font-semibold">
              Username
            </label>

            <input
              type="text"
              defaultValue="Samarth"
              className="w-full bg-gray-100 text-black border border-gray-300 p-4 rounded-2xl outline-none"
            />

          </div>

          <div>

            <label className="block mb-3 font-semibold">
              Bio
            </label>

            <textarea
              rows="4"
              defaultValue="Digital artist exploring cyberpunk and fantasy worlds."
              className="w-full bg-gray-100 text-black border border-gray-300 p-4 rounded-2xl outline-none"
            />

          </div>

        </div>

        {/* ACCOUNT */}
        <div
          className={`rounded-3xl p-8 shadow-xl
          ${
            theme === "dark"
              ? "bg-zinc-900 border border-zinc-800"
              : "bg-white border border-gray-200"
          }`}
        >

          <div className="flex items-center gap-3 mb-8">

            <Mail className="text-purple-500" />

            <h2 className="text-2xl font-bold">
              Account
            </h2>

          </div>

          <div className="mb-6">

            <label className="block mb-3 font-semibold">
              Email
            </label>

            <input
              type="email"
              defaultValue="samarth@example.com"
              className="w-full bg-gray-100 text-black border border-gray-300 p-4 rounded-2xl outline-none"
            />

          </div>

          <div>

            <label className="block mb-3 font-semibold">
              Password
            </label>

            <input
              type="password"
              value="password123"
              readOnly
              className="w-full bg-gray-100 text-black border border-gray-300 p-4 rounded-2xl outline-none"
            />

          </div>

        </div>

        {/* NOTIFICATIONS */}
        <div
          className={`rounded-3xl p-8 shadow-xl
          ${
            theme === "dark"
              ? "bg-zinc-900 border border-zinc-800"
              : "bg-white border border-gray-200"
          }`}
        >

          <div className="flex items-center gap-3 mb-8">

            <Bell className="text-purple-500" />

            <h2 className="text-2xl font-bold">
              Notifications
            </h2>

          </div>

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold">
                Push Notifications
              </h3>

              <p className="text-gray-500">
                Receive likes, comments, and follows.
              </p>

            </div>

            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-14 h-8 rounded-full transition flex items-center px-1
              ${
                notifications
                  ? "bg-purple-600 justify-end"
                  : "bg-gray-400 justify-start"
              }`}
            >

              <div className="w-6 h-6 bg-white rounded-full"></div>

            </button>

          </div>

        </div>

        {/* PRIVACY */}
        <div
          className={`rounded-3xl p-8 shadow-xl
          ${
            theme === "dark"
              ? "bg-zinc-900 border border-zinc-800"
              : "bg-white border border-gray-200"
          }`}
        >

          <div className="flex items-center gap-3 mb-8">

            <Shield className="text-purple-500" />

            <h2 className="text-2xl font-bold">
              Privacy
            </h2>

          </div>

          <div className="flex items-center justify-between mb-6">

            <div>

              <h3 className="font-semibold">
                Private Profile
              </h3>

              <p className="text-gray-500">
                Hide your artworks from public users.
              </p>

            </div>

            <Moon className="text-purple-500" />

          </div>

          <button className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-2xl">
            Delete Account
          </button>

        </div>

      </div>

    </div>
  );
}