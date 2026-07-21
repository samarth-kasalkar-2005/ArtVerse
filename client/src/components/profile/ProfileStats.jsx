"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import {
  Image,
  Heart,
  Eye,
} from "lucide-react";

export default function ProfileStats() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {

      try {

        const res = await axios.get(
          "https://artverse-backend-cg83.onrender.com//api/posts"
        );

        setPosts(res.data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchPosts();

  }, []);

  // TOTALS
  const totalLikes = posts.reduce(
    (acc, post) => acc + post.likes,
    0
  );

  const totalViews = posts.reduce(
    (acc, post) => acc + post.views,
    0
  );

  const stats = [
    {
      icon: <Image size={28} />,
      label: "Artworks",
      value: posts.length,
    },

    {
      icon: <Heart size={28} />,
      label: "Likes",
      value: totalLikes,
    },

    {
      icon: <Eye size={28} />,
      label: "Views",
      value: totalViews,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 mb-14">

      {stats.map((stat, index) => (

        <div
          key={index}
          className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl"
        >

          <div className="mb-5">
            {stat.icon}
          </div>

          <h2 className="text-4xl font-bold mb-2">
            {stat.value}
          </h2>

          <p className="text-white/80">
            {stat.label}
          </p>

        </div>

      ))}

    </div>
  );
}