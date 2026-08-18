import { ClipboardCheck, AlertTriangle, BookOpen, GraduationCap } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Hubi",
    body: "Baaraha wuxuu dhammaystiraa checklist-ka goobta iyaga oo isticmaalaya sawirro iyo qiimeyn.",
  },
  {
    step: "02",
    icon: AlertTriangle,
    title: "Ogow cilladda",
    body: "Qodob kasta oo dhaca wuxuu si toos ah u calaamadaa cillad iyo darajo khatar.",
  },
  {
    step: "03",
    icon: BookOpen,
    title: "Ku xir SOP-ka",
    body: "Cilladdu waxay xirmaa SOP-ka saxda ah — ma jiro xog kala go'an (silos).",
  },
  {
    step: "04",
    icon: GraduationCap,
    title: "U dir tababar",
    body: "Shaqaalaha khuseeya waxaa loo diraa tababar toos ah si aan cilladdu mar kale u dhicin.",
  },
]

export function ClosedLoop() {
  return (
    <section id="habka" className="border-y border-border bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Habka Shaqada</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Nidaam xiran: cilladi ma noqoto warbixin kaliya
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Meesha aaladaha kale ay ku joojiyaan warbixinta, Hiil Audit wuxuu si toos ah u xiraa cilladaha SOP-yada iyo
            tababarka — sidaas darteed tayadu way soo hagaagtaa waqti ka dib.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.step} className="relative rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm font-semibold text-muted-foreground">{s.step}</span>
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
