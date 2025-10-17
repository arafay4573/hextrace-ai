export function Footer() {
  return (
    <footer className="bg-[#111818] border-t border-[#273a3a] px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">HexTrace AI</h3>
            <p className="text-[#9bbbbb] text-sm">Advanced cybersecurity solutions powered by AI</p>
          </div>

          <nav className="flex gap-8">
            <a href="#" className="text-[#9bbbbb] hover:text-[#06f9f9] transition-colors">
              Home
            </a>
            <a href="#" className="text-[#9bbbbb] hover:text-[#06f9f9] transition-colors">
              Features
            </a>
            <a href="#" className="text-[#9bbbbb] hover:text-[#06f9f9] transition-colors">
              Pricing
            </a>
            <a href="#" className="text-[#9bbbbb] hover:text-[#06f9f9] transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="border-t border-[#273a3a] pt-8 text-center">
          <p className="text-[#9bbbbb] text-sm">© 2025 HexTrace AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
