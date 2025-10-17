export function CardShowcase() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Cards</h2>

      <div className="space-y-6">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row gap-4 p-6 bg-[#1b2727] border border-[#3a5555] rounded-lg hover:border-[#06f9f9] transition-all">
          <div
            className="w-full md:w-48 h-40 bg-cover bg-center rounded-lg flex-shrink-0"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop")',
            }}
          ></div>
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-bold text-white mb-2">AI-Powered Threat Detection</h3>
            <p className="text-[#9bbbbb] text-sm mb-2">
              Leverage advanced machine learning algorithms to identify and neutralize threats in real-time.
            </p>
            <p className="text-[#9bbbbb] text-xs">3 min read</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-4 p-6 bg-[#1b2727] border border-[#3a5555] rounded-lg hover:border-[#06f9f9] transition-all">
          <div
            className="w-full md:w-48 h-40 bg-cover bg-center rounded-lg flex-shrink-0"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1516321318423-f06f70504c11?w=400&h=300&fit=crop")',
            }}
          ></div>
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-bold text-white mb-2">Automated Incident Response</h3>
            <p className="text-[#9bbbbb] text-sm">
              Streamline your security operations with automated workflows for incident handling.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
