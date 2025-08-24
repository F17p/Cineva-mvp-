import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-500">🎬 Cineva</Link>
        <nav className="flex space-x-6">
          <Link href="/">Início</Link>
          <Link href="/genres">Categorias</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/contact">Contato</Link>
        </nav>
      </div>
    </header>
  )
}
