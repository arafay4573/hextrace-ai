import Link from "next/link"
import { ParticleBackground } from "./particle-background"

export function Hero() {
  return (
    <section className="relative min-h-[480px] flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#111818] via-[#1b2727] to-[#111818] overflow-hidden">
      <ParticleBackground />

      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06f9f9] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8A2BE2] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-6 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
          Unlock the Power of AI-Driven Cybersecurity
        </h1>
        <p className="text-base md:text-lg text-[#9bbbbb] leading-relaxed">
          HexTrace AI provides cutting-edge solutions to protect your digital assets from evolving threats. Our advanced
          algorithms and real-time monitoring ensure your peace of mind.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-[#06f9f9] text-[#111818] font-bold rounded-lg hover:bg-[#00d4d4] glow-button transition-all"
          >
            Start Free Trial
          </Link>
          <button className="px-6 py-3 border border-[#06f9f9] text-[#06f9f9] font-bold rounded-lg hover:bg-[#06f9f9] hover:text-[#111818] transition-all glow-button">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
