import { ShieldCheck } from "lucide-react"

const columns = [
  {
    title: "Alaabta",
    links: ["Astaamaha", "Qiimaha", "Habka shaqada", "Templates"],
  },
  {
    title: "Shirkadda",
    links: ["Nagu saabsan", "Shaqooyin", "Xiriir", "Blog"],
  },
  {
    title: "Kaalmo",
    links: ["Diiwaanka caawimaada", "Barashada", "Xaaladda nidaamka", "Amniga"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold tracking-tight">Hiil Audit</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Platform-ka hubinta iyo baaritaanka ee Af-Soomaaliga hore u dhigaya, loogu talagalay ganacsiyada goobo
              badan leh.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-foreground transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">© 2026 Hiil Audit. Dhammaan xuquuqda way dhowran yihiin.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Sirta
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Shuruudaha
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
