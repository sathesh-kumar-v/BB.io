export function StatsSection() {
  const stats = [
    {
      value: "325%",
      label: "Average ROI",
      description: "across all projects",
    },
    {
      value: "50-70%",
      label: "Cost Savings",
      description: "vs traditional agencies",
    },
    {
      value: "2-7",
      label: "Week Sprints",
      description: "rapid delivery cycles",
    },
    {
      value: "100%",
      label: "Client Success",
      description: "proven track record",
    },
  ]

  return (
    <section className="py-20 px-6 lg:px-8 border-y border-[#262626]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-[#111111] rounded-2xl border border-[#262626] hover:border-[#6366f1]/50 transition-colors"
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mb-2">
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-[#71717a] text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
