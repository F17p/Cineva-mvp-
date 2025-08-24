import Link from "next/link";
import videos from "../../data/videos.json";

export default function GenresPage() {
  // pegar todos os géneros únicos
  const genres = [...new Set(videos.map(v => v.genre))];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Categorias</h1>
      <ul className="space-y-4">
        {genres.map((genre) => (
          <li key={genre}>
            <Link
              href={`/genres/${genre.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-xl text-blue-400 hover:underline"
            >
              {genre}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
