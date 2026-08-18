import { Check, Minus } from "lucide-react"

const rows = [
  { feature: "Luqad Af-Soomaali oo hore u dhigan", hiil: true, others: false },
  { feature: "Qiimo per-location (aan per-user ahayn)", hiil: true, others: false },
  { feature: "Isku-xir cilad → SOP → tababar", hiil: true, others: false },
  { feature: "Kala-sareyn franchisor / maareeye / baare", hiil: true, others: "limited" as const },
  { feature: "Hubin offline oo mobile-first ah", hiil: true, others: true },
  { feature: "Warbixin degdeg ah oo la qaybiyo", hiil: true, others: true },
]

function Cell({ value }: { value: boolean | "limited" }) {
  if (value === "limited") {
    return <span className="font-mono text-xs text-muted-foreground">xaddidan</span>
  }
  return value ? (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
      <Check className="h-3.5 w-3.5" aria-hidden="true" />
    </span>
  ) : (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
      <Minus className="h-3.5 w-3.5" aria-hidden="true" />
    </span>
  )
}

export function Comparison() {
  return (
    <section id="isbarbardhig" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Isbarbardhig</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Maxay Hiil Audit uga duwan tahay aaladaha caalamiga ah
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Qiimaha per-user wuxuu qaali ku noqdaa shabakadaha waaweyn ee goobaha badan. Waxaan u naqshadeynay suuqa
          maxalliga ah.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-card">
              <th className="px-5 py-4 text-sm font-semibold">Astaanta</th>
              <th className="px-5 py-4 text-center text-sm font-semibold text-primary">Hiil Audit</th>
              <th className="px-5 py-4 text-center text-sm font-semibold text-muted-foreground">Aaladaha kale</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : "bg-card"}>
                <td className="px-5 py-4 text-sm">{row.feature}</td>
                <td className="px-5 py-4 text-center">
                  <div className="flex justify-center">
                    <Cell value={row.hiil} />
                  </div>
                </td>
                <td className="px-5 py-4 text-center">
                  <div className="flex justify-center">
                    <Cell value={row.others} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
