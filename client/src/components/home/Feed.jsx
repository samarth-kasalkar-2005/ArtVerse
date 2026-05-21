import ArtCard from "./ArtCard";

export default function Feed() {

  const artworks = [
    {
      id: 1,
      title: "Cyber Samurai",
      artist: "Samarth",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      likes: 120,
      views: 2400,
    },

    {
      id: 2,
      title: "Neon City",
      artist: "Alex",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      likes: 98,
      views: 1800,
    },

    {
      id: 3,
      title: "Dark Fantasy",
      artist: "Ryu",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      likes: 450,
      views: 5300,
    },
  ];

  return (
    <section className="p-8">

      <h2 className="text-3xl font-bold mb-8">
        Trending Artworks
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {artworks.map((art) => (
          <ArtCard key={art.id} art={art} />
        ))}

      </div>

    </section>
  );
}