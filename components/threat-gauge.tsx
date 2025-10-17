"use client"

import { useEffect, useState } from "react"

export function ThreatGauge() {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    let current = 0
    const target = 80
    const increment = target / 30 // Animate over ~30 frames

    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setPercentage(target)
        clearInterval(interval)
      } else {
        setPercentage(Math.floor(current))
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle cx="60" cy="60" r="45" fill="none" stroke="#273a3a" strokeWidth="8" />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="#06f9f9"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.05s linear" }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#06f9f9]">{percentage}%</p>
            <p className="text-xs text-[#9bbbbb]">Threat Level</p>
          </div>
        </div>
      </div>
    </div>
  )
}
