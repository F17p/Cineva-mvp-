import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import videos from '../../data/videos.json'
import trailers from '../../data/trailers.json'

const HlsPlayer = dynamic(() => import('../../components/HlsPlayer'), { ssr: false })

const isYouTube = (url = '') => /youtube\.com|youtu\.be/.test(url)
const isVimeo = (url = '') => /vimeo\.com/.test(url)
const isArchive = (url = '') => /archive\.org/.test(url)
const isFile = (url = '') => /\.(m3u8|mp4)(\?|$)/i.test(url) || url.includes('.m3u8')

export default function VideoPage() {
  const router = useRouter()
  const { id } = router.query
  const video = videos.find(v => v.id === id)

  if (!video) {
    return <main className="min-h-screen bg-black text-white p-8">❌ Vídeo não encontrado.</main>
  }

  // 1) preferir trailer por id → 2) trailer no próprio item → 3) src original
  const playUrl = trailers[id] || video.trailer || video.src

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-4">{video.title}</h1>

        <div className="rounded-xl overflow-hidden border border-white/10 aspect-video bg-black">
          {isYouTube(playUrl) || isVimeo(playUrl) || isArchive(playUrl) ? (
            <iframe
              className="w-full h-full"
              src={playUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : isFile(playUrl) ? (
            <HlsPlayer src={playUrl} poster={video.thumbnail} />
          ) : (
            <div className="w-full h-full grid place-items-center text-gray-400">
              Fonte do vídeo inválida.
            </div>
          )}
        </div>

        <p className="mt-4 text-gray-300">{video.description}</p>
      </div>
    </main>
  )
}
