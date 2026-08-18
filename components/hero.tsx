import { Check, X, Camera, ArrowRight, MapPin } from "lucide-react"

const checklistItems = [
  { label: "Nadaafadda jikada", status: "pass" as const, score: "10/10" },
  { label: "Heerkulka qaboojiyaha", status: "pass" as const, score: "8/8" },
  { label: "Calaamadaha badbaadada", status: "fail" as const, score: "0/6" },
  { label: "Kaydinta cuntada", status: "pass" as const, score: "12/12" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2 lg:gap-8">
        {/* Copy */}
        <div className="max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Baaritaan Af-Soomaali hore u dhigaya
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Hubinta iyo baaritaanka goobaha, si sahlan oo af-Soomaali ah
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Hiil Audit wuxuu ganacsiyada leh goobo badan siiyaa checklist-yo mobile ah, warbixin degdeg ah, iyo
            isku-xir toos ah oo u dhexeeya cilladaha la helo, SOP-yada iyo tababarka — dhammaan qiimo{" "}
            <span className="font-medium text-foreground">per-location</span> ah.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#qiimaha"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Bilaw tijaabo bilaash ah
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#habka"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Eeg habka shaqada
            </a>
          </div>

          <p className="mt-5 font-mono text-xs text-muted-foreground">
            Bilaash 14 maalmood · Kaadhka deynta looma baahna
          </p>
        </div>

        {/* Signature element: live inspection card */}
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/5" aria-hidden="true" />
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="text-sm font-semibold">Hubinta Maqaayada — Xarunta Hodan</p>
                <p className="mt-1 flex items-center gap-1 font-mono text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  Muqdisho · 18 Ogos 2026
                </p>
              </div>
              <div className="flex h-11 w-11 flex-col items-center justify-center rounded-lg bg-primary/10">
                <span className="text-sm font-bold text-primary">83%</span>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {checklistItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        item.status === "pass"
                          ? "bg-primary/15 text-primary"
                          : "bg-accent/25 text-accent-foreground"
                      }`}
                    >
                      {item.status === "pass" ? (
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <X className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                    </span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{item.score}</span>
                </li>
              ))}
            </ul>

            {/* Corrective action triggered by failure */}
            <div className="mt-4 rounded-lg border border-accent/40 bg-accent/10 p-3">
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4 text-accent-foreground" aria-hidden="true" />
                <p className="text-xs font-semibold text-accent-foreground">Tallaabo saxeed ayaa la abuuray</p>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-accent-foreground/80">
                {'"Calaamadaha badbaadada" wuu dhacay → tababarka SOP-01 ayaa si toos ah loogu diray maamulaha goobta.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
