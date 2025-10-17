import { Shield, MagnifyingGlass, Gear } from "phosphor-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Real-Time Threat Detection",
      description:
        "Our AI algorithms continuously monitor your systems, identifying and neutralizing threats as they emerge.",
    },
    {
      icon: MagnifyingGlass,
      title: "Advanced Vulnerability Scanning",
      description:
        "Proactively identify and address vulnerabilities in your infrastructure with our comprehensive scanning tools.",
    },
    {
      icon: Gear,
      title: "Automated Incident Response",
      description: "Automate your response to security incidents, minimizing downtime and mitigating potential damage.",
    },
  ]

  return (
    <section className="px-4 py-16 bg-[#111818]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
          <p className="text-[#9bbbbb] text-base md:text-lg">
            Explore the core capabilities that make HexTrace AI the ultimate cybersecurity solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-lg border border-[#3a5555] bg-[#1b2727] hover:border-[#06f9f9] hover:bg-[#273a3a] transition-all duration-300 group"
              >
                <Icon
                  size={24}
                  className="text-[#06f9f9] mb-4 group-hover:text-[#8A2BE2] transition-colors"
                  weight="regular"
                />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-[#9bbbbb] text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
