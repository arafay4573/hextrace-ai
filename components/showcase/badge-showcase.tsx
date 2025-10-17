export function BadgeShowcase() {
  const badges = ["Critical", "Warning", "Info"]

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Badges</h2>

      <div className="flex gap-3 flex-wrap">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="px-4 py-2 bg-[#273a3a] text-white text-sm font-medium rounded-lg border border-[#3a5555] hover:border-[#06f9f9] transition-colors"
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  )
}
