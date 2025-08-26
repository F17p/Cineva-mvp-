import { useRouter } from "next/router";
import Link from "next/link";
import movies from "../../data/movies";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const filteredMovies = movies.filter(
    (movie) => movie.category.toLowerCase() === category?.toLowerCase()
  );

  if (filteredMovies.length === 0) {
    return <h1 className="p-8">Nenhum filme encontrado em {category}</h1>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        🎬 Categoria: {category}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition cursor-pointer">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
