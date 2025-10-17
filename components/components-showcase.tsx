"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Square, Cards, File, Table, Bookmark } from "phosphor-react"
import { ButtonShowcase } from "./showcase/button-showcase"
import { CardShowcase } from "./showcase/card-showcase"
import { FormShowcase } from "./showcase/form-showcase"
import { TableShowcase } from "./showcase/table-showcase"
import { BadgeShowcase } from "./showcase/badge-showcase"

export function ComponentsShowcase() {
  const [activeTab, setActiveTab] = useState("buttons")

  const tabs = [
    { id: "buttons", label: "Buttons", icon: Square },
    { id: "cards", label: "Cards", icon: Cards },
    { id: "forms", label: "Forms", icon: File },
    { id: "table", label: "Table", icon: Table },
    { id: "badges", label: "Badges", icon: Bookmark },
  ]

  return (
    <div className="min-h-screen bg-[#111818] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between bg-[#111818] p-4 border-b border-[#273a3a]">
        <Link href="/" className="text-white hover:text-[#06f9f9] transition-colors">
          <ArrowLeft size={24} weight="regular" />
        </Link>
        <h1 className="text-lg font-bold text-white flex-1 text-center">Components</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-4 md:p-6">
          {activeTab === "buttons" && <ButtonShowcase />}
          {activeTab === "cards" && <CardShowcase />}
          {activeTab === "forms" && <FormShowcase />}
          {activeTab === "table" && <TableShowcase />}
          {activeTab === "badges" && <BadgeShowcase />}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="border-t border-[#273a3a] bg-[#1b2727] flex justify-around p-4">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? "text-white" : "text-[#9bbbbb] hover:text-white"
              }`}
            >
              <Icon size={24} weight={isActive ? "fill" : "regular"} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
