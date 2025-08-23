import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight">Cineva</h1>
        <p className="mt-4 text-lg text-gray-300">Cinema online, simples e legal.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/catalog" className="px-6 py-3 rounded-xl bg-white text-black font-semibold">Explorar catálogo</Link>
          <a href="https://vercel.com" target="_blank" className="px-6 py-3 rounded-xl border border-white/20">Como foi feito</a>
        </div>
      </div>
    </main>
  )
}
