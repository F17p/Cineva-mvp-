import Link from "next/link"
import { useRouter } from "next/router"
import videos from "../../data/videos.json"

export default function GenrePage() {
  const router = useRouter()
  const { genre } = router.query

  const filtered = videos.filter(v =>
    (v.genre || "Outros").toLowerCase() === (genre || "").toLowerCase()
  )

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Categoria: {genre}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(video => (
          <Link key={video.id} href={`/video/${video.id}`} className="block">
            <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition">
              <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{video.title}</h2>
                <p className="text-gray-400 text-sm">{video.description}</p>
              </div>
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-400">Nenhum filme encontrado nesta categoria.</p>
        )}
      </div>
    </main>
  )
}
