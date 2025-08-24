import Link from "next/link"
import { useState } from "react"
import videos from "../data/videos.json"

export default function Home() {
  const [search, setSearch] = useState("")

  // Filtrar vídeos pelo título ou descrição
  const filteredVideos = videos.filter(v =>
    v.title.toLowerCase().includes(search.toLowerCase()) ||
    v.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">🎬 Catálogo Cineva</h1>

      {/* Campo de Busca */}
      <input
        type="text"
        placeholder="Pesquisar filmes ou séries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 rounded-lg bg-gray-800 text-white outline-none"
      />

      {/* Lista de Vídeos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredVideos.map(video => (
          <Link key={video.id} href={`/video/${video.id}`} className="block">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition">
              <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{video.title}</h2>
                <p className="text-gray-400 text-sm">{video.description}</p>
              </div>
            </div>
          </Link>
        ))}

        {filteredVideos.length === 0 && (
          <p className="text-gray-400">Nenhum resultado encontrado.</p>
        )}
      </div>
    </main>
  )
}
