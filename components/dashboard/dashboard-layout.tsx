"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { AlertsList } from "./alerts-list"
import { AnalyticsChart } from "./analytics-chart"
import { ThreatGauge } from "../threat-gauge"
import { Bell } from "phosphor-react"

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#111818] flex">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-[#111818] p-4 border-b border-[#273a3a]">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden text-white hover:text-[#06f9f9]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex-1"></div>

          <button className="text-white hover:text-[#06f9f9] transition-colors">
            <Bell size={24} weight="regular" />
          </button>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Dashboard</h1>

            <div className="mb-6 p-6 rounded-lg bg-[#273a3a] border border-[#3a5555] flex justify-center">
              <ThreatGauge />
            </div>

            {/* Alerts Section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Recent Alerts</h2>
              <AlertsList />
            </div>

            {/* Analytics Section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Alerts Over Time</h2>
              <AnalyticsChart />
            </div>

            {/* Quick Actions */}
            <div className="flex gap-4 flex-wrap">
              <button className="px-6 py-3 bg-[#06f9f9] text-[#111818] font-bold rounded-lg hover:bg-[#00d4d4] transition-all glow-button">
                Scan Now
              </button>
              <button className="px-6 py-3 bg-[#273a3a] text-white font-bold rounded-lg hover:bg-[#3a5555] transition-all glow-button">
                Pause Scans
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
