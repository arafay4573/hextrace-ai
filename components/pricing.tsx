import { Check } from "phosphor-react"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: ["Basic threat detection", "Limited vulnerability scans", "Community support"],
    },
    {
      name: "Pro",
      price: "$49",
      features: [
        "Advanced threat detection",
        "Unlimited vulnerability scans",
        "Priority support",
        "Customizable alerts",
      ],
      highlighted: true,
    },
  ]

  return (
    <section className="px-4 py-16 bg-[#111818]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-lg border transition-all duration-300 ${
                plan.highlighted
                  ? "border-[#06f9f9] bg-[#1b2727] shadow-lg shadow-[#06f9f9]/20"
                  : "border-[#3a5555] bg-[#1b2727] hover:border-[#06f9f9]"
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="text-[#9bbbbb] ml-2">/month</span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-bold mb-6 transition-all ${
                  plan.highlighted
                    ? "bg-[#06f9f9] text-[#111818] hover:bg-[#00d4d4]"
                    : "bg-[#273a3a] text-white hover:bg-[#3a5555]"
                }`}
              >
                {plan.highlighted ? "Upgrade" : "Get Started"}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3 text-[#9bbbbb]">
                    <Check size={20} className="text-[#06f9f9] flex-shrink-0" weight="bold" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
