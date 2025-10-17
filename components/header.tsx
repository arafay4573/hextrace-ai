import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center justify-between bg-[#111818] p-4 border-b border-[#273a3a]">
      <Link href="/" className="flex items-center gap-2">
        <h2 className="text-white text-lg font-bold">HexTrace AI</h2>
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/dashboard" className="text-[#9bbbbb] hover:text-[#06f9f9] transition-colors">
          Dashboard
        </Link>
        <Link href="/components" className="text-[#9bbbbb] hover:text-[#06f9f9] transition-colors">
          Components
        </Link>
        <button className="text-[#9bbbbb] hover:text-[#06f9f9] transition-colors">Login</button>
      </nav>
    </header>
  )
}
