import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const notoSans = Noto_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HexTrace AI - Cybersecurity Solutions",
  description: "AI-powered cybersecurity platform for real-time threat detection",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#111818] text-white`}>{children}</body>
    </html>
  )
}
