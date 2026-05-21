"use client";

import { Bell, Heart, MessageCircle, UserPlus } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "like",
    text: "Alex liked your artwork.",
  },

  {
    id: 2,
    type: "comment",
    text: "Ryu commented on your post.",
  },

  {
    id: 3,
    type: "follow",
    text: "Sophia started following you.",
  },
];

export default function NotificationDropdown() {

  return (
    <div className="relative group">

      {/* ICON */}
      <button className="relative">

        <Bell size={24} />

        {/* BADGE */}
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          3
        </span>

      </button>

      {/* DROPDOWN */}
      <div className="absolute right-0 mt-4 w-80 bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">

        <div className="p-5 border-b border-zinc-800">

          <h2 className="text-xl font-bold">
            Notifications
          </h2>

        </div>

        <div className="p-4 flex flex-col gap-4">

          {notifications.map((notification) => (

            <div
              key={notification.id}
              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-zinc-800 transition cursor-pointer"
            >

              {/* ICON */}
              <div className="bg-purple-600/20 p-3 rounded-full">

                {notification.type === "like" && (
                  <Heart className="text-red-500" size={18} />
                )}

                {notification.type === "comment" && (
                  <MessageCircle className="text-blue-500" size={18} />
                )}

                {notification.type === "follow" && (
                  <UserPlus className="text-green-500" size={18} />
                )}

              </div>

              {/* TEXT */}
              <p className="text-sm text-gray-300">
                {notification.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}