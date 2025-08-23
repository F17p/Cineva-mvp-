import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default function HlsPlayer({ src, poster }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!videoRef.current) return
    const type = src.endsWith('.m3u8') ? 'application/x-mpegURL' : 'video/mp4'
    const player = videojs(videoRef.current, {
      controls: true,
      preload: 'auto',
      fluid: true,
      sources: [{ src, type }],
      poster,
    })
    return () => { player.dispose() }
  }, [src, poster])

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  )
}
