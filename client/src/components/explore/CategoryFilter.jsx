export default function CategoryFilter() {

  const categories = [
    "Digital Art",
    "Anime",
    "Fantasy",
    "Cyberpunk",
    "Photography",
    "3D Art",
    "Pixel Art",
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-10">

      {categories.map((category) => (
        <button
          key={category}
          className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full transition"
        >
          {category}
        </button>
      ))}

    </div>
  );
}