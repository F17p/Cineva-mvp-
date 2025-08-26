import { useRouter } from 'next/router'
import Link from 'next/link'
import videos from '../../data/videos.json'

const slugify = (s = '') =>
  s.toString()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const onImgError = (e) => {
  e.currentTarget.src = 'https://placehold.co/800x450?text=Cineva'
}

export default function GenrePage() {
  const { query } = useRouter()
  const { slug } = query

  const list = videos.filter(v => slugify(v.genre || 'Outros') === slug)

  if (!slug) return null

  if (!list.length) {
    return (
      <main className="min-h-screen bg-black text-white p-8">
        <h1 className="text-2xl font-bold mb-4">Categoria vazia</h1>
        <p className="text-gray-400">Não há itens nesta categoria.</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">
        {list[0].genre} — {list.length} título(s)
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {list.map(v => (
          <Link key={v.id} href={`/video/${v.id}`} className="block group">
            <div className="rounded-xl overflow-hidden border border-gray-800 group-hover:border-blue-500 transition">
              <img
                src={v.thumbnail}
                alt={v.title}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform"
                onError={onImgError}
              />
            </div>
            <h3 className="mt-2 text-sm text-center group-hover:text-blue-400">{v.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  )
}
