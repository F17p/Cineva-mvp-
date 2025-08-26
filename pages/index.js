import Link from "next/link";
import movies from "../data/movies";

export default function Home() {
  return (
    <main className="p-8">
      {/* Banner */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-red-600 to-black text-white p-12 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">🎥 Bem-vindo ao Cineva</h1>
          <p className="text-lg mb-6">
            Os melhores filmes e séries para ti e tua família.
          </p>
          <Link href="/categories">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-bold">
              Explorar Categorias
            </button>
          </Link>
        </div>
      </section>

      {/* Lista de Filmes */}
      <section>
        <h2 className="text-2xl font-bold mb-6">🔥 Últimos Filmes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {movies.slice(0, 8).map((movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`}>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition cursor-pointer">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{movie.title}</h3>
                  <p className="text-sm text-gray-400">{movie.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
