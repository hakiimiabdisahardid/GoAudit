const stats = [
  { value: "Af-Soomaali", label: "Luqad hore u dhigan, la-degganaansho maxalli ah" },
  { value: "Offline", label: "Hubin goobta laga sameeyo iyada oo internet la'aan" },
  { value: "Per-location", label: "Qiimo aan ku xirneyn tirada isticmaalayaasha" },
  { value: "Closed-loop", label: "Cilad → SOP → tababar, si toos ah" },
]

export function StatsBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.value} className="px-5 py-6">
            <p className="font-mono text-base font-semibold text-primary">{stat.value}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
