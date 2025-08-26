// pages/movies/[id].js
import { useRouter } from "next/router";
import movies from "../../data/movies";

export default function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;

  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) return <h1>Filme não encontrado</h1>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <p className="mb-4">Categoria: {movie.category}</p>
      
      <img
        src={movie.image}
        alt={movie.title}
        className="rounded-lg mb-6 w-64"
      />

      <iframe
        width="100%"
        height="400"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </main>
  );
}
