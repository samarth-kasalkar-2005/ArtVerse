"use client";

import { useState } from "react";

import AppLayout from "../../components/layout/AppLayout";

import SearchBar from "../../components/explore/SearchBar";

import CategoryFilter from "../../components/explore/CategoryFilter";

import ExploreGrid from "../../components/explore/ExploreGrid";

export default function ExplorePage() {

  const [searchQuery, setSearchQuery] =
    useState("");

  return (
    <AppLayout>

      <div className="p-8">

        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Explore Art
        </h1>

        <p className="text-gray-500 mb-10 text-lg">
          Discover amazing creations from artists around the world 🎨
        </p>

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <CategoryFilter />

        <ExploreGrid
          searchQuery={searchQuery}
        />

      </div>

    </AppLayout>
  );
}