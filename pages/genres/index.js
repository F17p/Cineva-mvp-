import Link from "next/link";
import videos from "../../data/videos.json";

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/\s+/g, "-");

export default function GenresPage() {
  const genres = [...new Set(videos.map(v => v.genre))];

  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Categorias</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {genres.map((genre) => (
          <Link
            key={genre}
            href={`/genres/${encodeURIComponent(slugify(genre))}`}
            className="block"
          >
            <div className="bg-gray-900 rounded-lg p-6 text-center hover:scale-105 transition">
              <h2 className="text-xl font-semibold">{genre}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
