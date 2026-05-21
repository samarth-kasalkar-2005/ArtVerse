"use client";

import Link from "next/link";

import AppLayout from "../components/layout/AppLayout";

import ExploreGrid from "../components/explore/ExploreGrid";

export default function HomePage() {

  return (
    <AppLayout>

      {/* HERO */}
      <section className="mb-16">

        <div className="rounded-[40px] bg-gradient-to-r from-purple-900 via-black to-pink-900 p-10 lg:p-16 overflow-hidden">

          <div className="max-w-3xl">

            <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">

              Discover Amazing Digital Art 🎨

            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">

              Upload, explore, and connect with artists around the world.

            </p>

            <Link
              href="/explore"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-[1.03] transition"
            >

              Explore Now

            </Link>

          </div>

        </div>

      </section>

      {/* LATEST ARTWORKS */}
      <section>

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-4xl font-bold mb-2">

              Latest Artworks

            </h2>

            <p className="text-gray-400">

              Real uploads from creators worldwide ✨

            </p>

          </div>

        </div>

        <ExploreGrid />

      </section>

    </AppLayout>
  );
}