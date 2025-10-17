import { ShieldWarning } from "phosphor-react"

export function AlertsList() {
  const alerts = [
    { title: "Critical Alert", time: "10:30 AM" },
    { title: "Suspicious Activity", time: "11:45 AM" },
    { title: "Malware Detected", time: "12:20 PM" },
    { title: "Unauthorized Access", time: "01:15 PM" },
    { title: "Data Breach Attempt", time: "02:00 PM" },
    { title: "Network Intrusion", time: "02:45 PM" },
  ]

  return (
    <div className="space-y-2">
      {alerts.map((alert, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between p-4 bg-[#1b2727] border border-[#3a5555] rounded-lg hover:border-[#06f9f9] transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#273a3a] rounded-lg">
              <ShieldWarning size={24} className="text-white" weight="regular" />
            </div>
            <div>
              <p className="text-white font-medium">{alert.title}</p>
              <p className="text-[#9bbbbb] text-sm">{alert.time}</p>
            </div>
          </div>
          <div className="w-3 h-3 rounded-full bg-[#0bda50]"></div>
        </div>
      ))}
    </div>
  )
}
