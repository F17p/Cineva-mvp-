import Link from "next/link"
import videos from "../../data/videos.json"

export default function Genres() {
  // Gerar lista de gêneros únicos
  const genres = [...new Set(videos.map(v => v.genre || "Outros"))]

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">🎭 Categorias</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {genres.map(genre => (
          <Link key={genre} href={`/genres/${genre.toLowerCase()}`} className="block">
            <div className="bg-gray-900 rounded-lg p-6 text-center hover:scale-105 transition">
              <h2 className="text-xl font-semibold">{genre}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
