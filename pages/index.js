import Link from 'next/link'
import { useState } from 'react'
import videos from '../data/videos.json'
import ImageWithFallback from '../components/ImageWithFallback'

export default function Home() {
  const [search, setSearch] = useState("")

  // agrupar por categoria
  const grouped = videos.reduce((acc, v) => {
    if (!acc[v.genre]) acc[v.genre] = []
    acc[v.genre].push(v)
    return acc
  }, {})

  // filtro simples por título/descrição
  const filterFn = (arr) =>
    arr.filter(v =>
      v.title.toLowerCase().includes(search.toLowerCase()) ||
      v.description.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">🎬 Cineva</h1>
        <Link href="/genres" className="text-blue-400 hover:underline">Explorar categorias</Link>
      </div>

      <input
        type="text"
        placeholder="Pesquisar filmes ou séries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-8 rounded-lg bg-gray-800 text-white outline-none"
      />

      {Object.keys(grouped).map((cat) => {
        const items = filterFn(grouped[cat])
        if (!items.length) return null
        return (
          <section key={cat} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">{cat}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {items.map((v) => (
                <Link key={v.id} href={`/video/${v.id}`} className="group">
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <ImageWithFallback
                      src={v.thumbnail}
                      alt={v.title}
                      className="w-full h-60 object-cover group-hover:opacity-80 transition"
                    />
                  </div>
                  <p className="mt-2 text-sm">{v.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </main>
  )
}
