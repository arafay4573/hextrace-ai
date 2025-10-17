export function FormShowcase() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Forms</h2>

      <div className="max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-[#273a3a] border border-[#3a5555] rounded-lg text-white placeholder-[#9bbbbb] focus:outline-none focus:border-[#06f9f9] transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 bg-[#273a3a] border border-[#3a5555] rounded-lg text-white placeholder-[#9bbbbb] focus:outline-none focus:border-[#06f9f9] transition-colors"
          />
        </div>

        <button className="w-full px-6 py-3 bg-[#06f9f9] text-[#111818] font-bold rounded-lg hover:bg-[#00d4d4] transition-all">
          Login
        </button>
      </div>
    </div>
  )
}
