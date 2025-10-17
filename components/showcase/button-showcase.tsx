export function ButtonShowcase() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Buttons</h2>

      <div className="space-y-6">
        {/* Primary Buttons */}
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-3 bg-[#06f9f9] text-[#111818] font-bold rounded-lg hover:bg-[#00d4d4] transition-all glow-button">
            Primary
          </button>
          <button className="px-6 py-3 bg-[#273a3a] text-white font-bold rounded-lg hover:bg-[#3a5555] transition-all">
            Secondary
          </button>
        </div>

        {/* Tertiary & Disabled */}
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-3 border border-[#06f9f9] text-[#06f9f9] font-bold rounded-lg hover:bg-[#06f9f9] hover:text-[#111818] transition-all">
            Tertiary
          </button>
          <button
            disabled
            className="px-6 py-3 bg-[#273a3a] text-[#9bbbbb] font-bold rounded-lg opacity-50 cursor-not-allowed"
          >
            Disabled
          </button>
        </div>
      </div>
    </div>
  )
}
