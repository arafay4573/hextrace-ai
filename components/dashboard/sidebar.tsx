"use client"

import Link from "next/link"
import { House, Bell, PresentationChart, PuzzlePiece, Gear, X } from "phosphor-react"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const menuItems = [
    { icon: House, label: "Dashboard", href: "/dashboard" },
    { icon: Bell, label: "Alerts", href: "#" },
    { icon: PresentationChart, label: "Reports", href: "#" },
    { icon: PuzzlePiece, label: "Integrations", href: "#" },
    { icon: Gear, label: "Settings", href: "#" },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {open && <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={onClose}></div>}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-64 h-screen bg-[#111818] border-r border-[#273a3a] p-4 z-50 transform transition-transform md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white">Alex</h2>
          <button onClick={onClose} className="md:hidden text-white hover:text-[#06f9f9]">
            <X size={24} weight="bold" />
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <Link
                key={idx}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                  idx === 0 ? "bg-[#273a3a] text-white" : "text-[#9bbbbb] hover:text-white hover:bg-[#273a3a]"
                }`}
              >
                <Icon size={24} weight={idx === 0 ? "fill" : "regular"} />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
