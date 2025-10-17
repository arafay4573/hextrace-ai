export function AnalyticsChart() {
  return (
    <div className="p-6 bg-[#1b2727] border border-[#3a5555] rounded-lg">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-[#9bbbbb] text-sm mb-2">Last 7 Days</p>
          <p className="text-4xl font-bold text-white">120</p>
          <p className="text-[#0bda50] text-sm mt-2">+15% from last week</p>
        </div>
      </div>

      {/* Simple SVG Chart */}
      <svg
        width="100%"
        height="200"
        viewBox="0 0 480 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="mb-6"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06f9f9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06f9f9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 109C18 109 18 21 36 21C54 21 54 41 72 41C90 41 90 93 108 93C127 93 127 33 145 33C163 33 163 101 181 101C199 101 199 61 217 61C236 61 236 45 254 45C272 45 272 121 290 121C308 121 308 149 326 149C344 149 344 1 363 1C381 1 381 81 399 81C417 81 417 129 435 129C453 129 453 25 472 25V150H0V109Z"
          fill="url(#chartGradient)"
        />
        <path
          d="M0 109C18 109 18 21 36 21C54 21 54 41 72 41C90 41 90 93 108 93C127 93 127 33 145 33C163 33 163 101 181 101C199 101 199 61 217 61C236 61 236 45 254 45C272 45 272 121 290 121C308 121 308 149 326 149C344 149 344 1 363 1C381 1 381 81 399 81C417 81 417 129 435 129C453 129 453 25 472 25"
          stroke="#06f9f9"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="flex justify-around text-[#9bbbbb] text-xs font-bold">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  )
}
