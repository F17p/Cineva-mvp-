import Link from 'next/link'
import videos from '../../data/videos.json'

const slugify = (s = '') =>
  s.toString()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // tira acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')                      // troca por hífen
    .replace(/(^-|-$)/g, '')

export default function Genres() {
  const genres = [...new Set(videos.map(v => v.genre || 'Outros'))]
  const items = genres.map(name => ({ name, slug: slugify(name) }))

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">🎭 Categorias</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map(({ name, slug }) => (
          <Link key={slug} href={`/genres/${slug}`} className="block">
            <div className="bg-gray-900 rounded-lg p-6 text-center hover:scale-105 transition">
              <h2 className="text-lg font-semibold">{name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
