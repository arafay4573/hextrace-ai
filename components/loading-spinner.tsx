"use client"

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-[#273a3a] border-t-[#06f9f9] animate-spin"></div>
        <div
          className="absolute inset-2 rounded-full border-2 border-transparent border-r-[#8A2BE2] animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>
      </div>
    </div>
  )
}
