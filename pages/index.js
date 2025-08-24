import Link from 'next/link'
import videos from '../data/videos.json'

export default function Home() {
  // Organizar por categoria
  const categorias = videos.reduce((acc, video) => {
    if (!acc[video.category]) acc[video.category] = []
    acc[video.category].push(video)
    return acc
  }, {})

  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">🎬 Cineva</h1>

      {Object.keys(categorias).map((categoria) => (
        <section key={categoria} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{categoria}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categorias[categoria].map((video) => (
              <Link key={video.id} href={`/video/${video.id}`}>
                <div className="cursor-pointer group">
                  <div className="relative rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:opacity-80 transition"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium group-hover:text-gray-300">
                    {video.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
