"use client";

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

export default function ProfileHeader() {

  const [user, setUser] =
    useState(null);

  const [followers, setFollowers] =
    useState(0);

  useEffect(() => {

    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {

      const parsedUser =
        JSON.parse(storedUser);

      setUser(parsedUser);

      // FOLLOWERS COUNT
      setFollowers(
        parsedUser.followers?.length || 0
      );
    }

  }, []);

  // FOLLOW DEMO
  const handleFollow =
    async () => {

      try {

        await axios.put(
          "https://artverse-backend-cg83.onrender.com//api/users/follow",
          {
            currentUserId:
              user._id,

            targetUserId:
              user._id,
          }
        );

        setFollowers(
          (prev) => prev + 1
        );

      } catch (error) {

        console.log(error);
      }
    };

  return (
    <div className="relative">

      {/* COVER */}
      <div className="h-[220px] sm:h-[320px] bg-gradient-to-r from-purple-700 via-pink-600 to-black"></div>

      {/* PROFILE INFO */}
      <div className="absolute bottom-[-70px] left-6 md:left-10 flex flex-col md:flex-row items-start md:items-end gap-6">

        {/* AVATAR */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-black border-4 border-white overflow-hidden shadow-2xl">

          <img
            src="https://i.pravatar.cc/300"
            alt="Profile"
            className="w-full h-full object-cover"
          />

        </div>

        {/* INFO */}
        <div className="pb-3">

          <h1 className="texttext-3xl sm:text-3xl sm:text-5xl-5xl font-bold text-white mb-2">

            {user?.username || "Artist"}

          </h1>

          <p className="text-white/80 text-lg mb-4">

            @{user?.email?.split("@")[0]}

          </p>

          {/* FOLLOWERS */}
          <div className="flex items-center gap-6">

            <p className="text-white font-semibold text-lg">

              {followers} Followers

            </p>

            {/* FOLLOW BUTTON */}
            <button
              onClick={handleFollow}
              className="bg-white text-black px-6 py-2 rounded-2xl font-semibold hover:scale-[1.03] transition"
            >
              Follow
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}