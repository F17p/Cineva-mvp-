import { useRouter } from 'next/router'
import movies from '../../data/movies.json'

export default function MoviePage() {
  const router = useRouter()
  const { id } = router.query

  const movie = movies.find(m => m.id.toString() === id)

  if (!movie) {
    return <div className="p-8">❌ Filme não encontrado...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <div className="aspect-video mb-4">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src={movie.videoUrl}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-gray-700">{movie.description}</p>
    </div>
  )
}
