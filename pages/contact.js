export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contato</h1>
        <p className="text-gray-300 mb-4">
          Entre em contato com a equipe Cineva:
        </p>
        <ul className="space-y-2 text-gray-400">
          <li>📧 Email: <a href="mailto:cineva017@gmail.com" className="text-red-500 hover:underline">cineva017@gmail.com</a></li>
          <li>📱 WhatsApp: <a href="https://wa.me/244952356080" target="_blank" className="text-green-400 hover:underline">+244 952 356 080</a></li>
          <li>📍 Localização: Luanda, Angola</li>
        </ul>
      </div>
    </main>
  )
}
