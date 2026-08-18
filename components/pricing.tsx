import { Check } from "lucide-react"

const plans = [
  {
    name: "Bilowga",
    price: "$29",
    unit: "/ goobta / bishii",
    desc: "Ganacsiyada yaryar ee doonaya inay bilaabaan hubin habaysan.",
    features: ["Ilaa 3 goobood", "Checklist-yo aan xaddidnayn", "Warbixin PDF ah", "Hubin offline ah"],
    cta: "Bilaw bilaash",
    highlighted: false,
  },
  {
    name: "Ganacsi",
    price: "$79",
    unit: "/ goobta / bishii",
    desc: "Shabakadaha goobo badan leh ee u baahan kala-sareyn iyo tallaabo saxeed.",
    features: [
      "Goobo aan xaddidnayn",
      "Kala-sareyn door-ku-saleysan",
      "Isku-xir SOP & tababar",
      "Tallaabooyin saxeed oto ah",
      "Taageero mudnaan leh",
    ],
    cta: "Bilaw tijaabo",
    highlighted: true,
  },
  {
    name: "Shirkad",
    price: "Gaar ah",
    unit: "",
    desc: "Franchise-yada waaweyn ee u baahan isku-xir iyo taageero gaar ah.",
    features: ["API & isku-xir", "SSO & amni sare", "Maareeye u qoondaysan", "Tababar iyo hoggaamin"],
    cta: "La xiriir iibinta",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="qiimaha" className="border-y border-border bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Qiimaha</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Qiimo per-location ah — ma aha ciqaab per-user
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Ku dar shaqaale intaad rabto adiga oo aan lacag dheeraad ah bixin. Waxaad bixisaa goobta kaliya.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-primary bg-card shadow-sm ring-1 ring-primary"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 font-mono text-xs font-medium text-primary-foreground">
                  Ugu caansan
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.desc}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="font-mono text-sm text-muted-foreground">{plan.unit}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
