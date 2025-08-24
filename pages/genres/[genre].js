import { useRouter } from "next/router";
import Link from "next/link";
import videos from "../../data/videos.json";

export default function GenrePage() {
  const router = useRouter();
  const { genre } = router.query;

  const normalizedGenre = genre?.replace(/-/g, " ").toLowerCase();
  const filteredVideos = videos.filter(
    (v) => v.genre.toLowerCase() === normalizedGenre
  );

  if (!filteredVideos.length) {
    return (
      <main className="min-h-screen bg-black text-white p-8">
        <h1 className="text-2xl font-bold mb-4">Nenhum filme encontrado para {genre}</h1>
        <Link href="/genres" className="text-blue-400 hover:underline">
          Voltar às categorias
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">
        Categoria: {filteredVideos[0].genre}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVideos.map((video) => (
          <Link
            key={video.id}
            href={`/video/${video.id}`}
            className="block bg-gray-900 rounded-xl overflow-hidden hover:ring-2 hover:ring-blue-400"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{video.title}</h2>
              <p className="text-gray-400">{video.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
