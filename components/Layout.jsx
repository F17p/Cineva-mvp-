import Link from 'next/link'
import { useState } from 'react'

export default function Layout({ children }) {
  const [search] = useState("") // (campo visual removido p/ não conflitar com a Home; podemos reativar depois)

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      {/* NAVBAR */}
      <header className="bg-gray-900 px-6 py-4 flex items-center justify-between shadow-md">
        <Link href="/" className="text-2xl font-bold text-red-500">🎬 Cineva</Link>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-red-400">Início</Link>
          <Link href="/genres" className="hover:text-red-400">Categorias</Link>
          <Link href="/sobre" className="hover:text-red-400">Sobre</Link>
        </nav>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 px-6 py-6">{children}</main>

      {/* FOOTER */}
      <footer className="bg-gray-900 px-6 py-4 text-center text-gray-400">
        © {new Date().getFullYear()} Cineva — Cinema online simples e legal.
      </footer>
    </div>
  )
}
