import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import videos from '../../data/videos.json'

const HlsPlayer = dynamic(() => import('../../components/HlsPlayer'), { ssr: false })

export default function VideoPage() {
  const router = useRouter()
  const { id } = router.query
  const video = videos.find(v => v.id === id)

  if (!video) return <main className="min-h-screen bg-black text-white p-8">Vídeo não encontrado.</main>

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
        <div className="rounded-xl overflow-hidden border border-white/10">
          <HlsPlayer src={video.src} poster={video.thumbnail} />
        </div>
        <p className="mt-4 text-gray-300">{video.description}</p>
      </div>
    </main>
  )
}
