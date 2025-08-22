import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Head>
        <title>Cineva</title>
      </Head>
      <h1 className="text-5xl font-bold mb-6">🎬 Bem-vindo ao Cineva</h1>
      <p className="text-lg">O cinema na tua tela</p>
    </div>
  )
}