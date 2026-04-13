export function ClientLogosSection() {
  const logos = [
    'Heritage Grocer Group',
    'Microsoft',
    'Instacart',
    'Uber',
    'Zendesk',
    'Salesforce',
    'Shopify',
    'Oracle',
  ]

  return (
    <section className="py-12 border-y border-[#1E2A3A] bg-[#0D1117]/50 overflow-hidden">
      <div className="container-custom mb-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-[#475569]">
          Teams from top companies build with ORIGIN
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap items-center">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1E2A3A] bg-[#0D1117] text-[#475569] text-sm font-semibold font-display whitespace-nowrap hover:text-[#94A3B8] hover:border-[#00D4FF]/20 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7C3AED]" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
