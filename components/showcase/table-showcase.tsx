export function TableShowcase() {
  const users = [
    { name: "User 1", status: "Active", role: "Admin" },
    { name: "User 2", status: "Inactive", role: "User" },
    { name: "User 3", status: "Active", role: "User" },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Table</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#3a5555]">
              <th className="text-left px-4 py-3 text-white font-bold">Name</th>
              <th className="text-left px-4 py-3 text-white font-bold">Status</th>
              <th className="text-left px-4 py-3 text-white font-bold">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="border-b border-[#3a5555] hover:bg-[#273a3a] transition-colors">
                <td className="px-4 py-3 text-white">{user.name}</td>
                <td className="px-4 py-3 text-[#9bbbbb]">{user.status}</td>
                <td className="px-4 py-3 text-white">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
