export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Cineva — Todos os direitos reservados</p>
        <ul className="flex gap-6 text-sm">
          <li>
            <a href="mailto:cineva017@gmail.com" className="hover:text-white">📧 Email</a>
          </li>
          <li>
            <a href="https://wa.me/244952356080" target="_blank" className="hover:text-green-400">💬 WhatsApp</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-red-500">📞 Contato</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
