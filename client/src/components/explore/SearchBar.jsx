"use client";

import { Search } from "lucide-react";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
}) {

  return (
    <div className="relative mb-8">

      <Search
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />

      <input
        type="text"
        placeholder="Search artworks, tags..."
        value={searchQuery}
        onChange={(e) =>
          setSearchQuery(e.target.value)
        }
        className="w-full pl-14 pr-5 py-5 rounded-3xl bg-zinc-900 border border-zinc-800 outline-none text-lg"
      />

    </div>
  );
}