import Link from "next/link";
import videos from "../../data/videos.json";
import ImageWithFallback from "../../components/ImageWithFallback";

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

export async function getStaticPaths() {
  const genres = [...new Set(videos.map(v => slugify(v.genre)))];
  const paths = genres.map((genre) => ({ params: { genre } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { genre } = params;
  const filteredVideos = videos.filter((v) => slugify(v.genre) === genre);
  const displayGenre = filteredVideos[0]?.genre || genre;
  return {
    props: { filteredVideos, displayGenre }
  };
}

export default function GenrePage({ filteredVideos, displayGenre }) {
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Categoria: {displayGenre}</h1>
        <Link href="/genres" className="text-blue-400 hover:underline">← Voltar</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <Link
            key={video.id}
            href={`/video/${video.id}`}
            className="block bg-gray-900 rounded-xl overflow-hidden hover:ring-2 hover:ring-blue-400"
          >
            <ImageWithFallback
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{video.title}</h2>
              <p className="text-gray-400 text-sm">{video.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
