import { Smartphone, ListChecks, FileText, GitBranch, Users, Languages } from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Hubin mobile-first & offline",
    body: "Kooxaha goobta ku jira waxay hubin ku samayn karaan iyaga oo internet la'aan; xogtu si toos ah ayay isu keydisaa marka la xiriiro.",
  },
  {
    icon: ListChecks,
    title: "Maareynta checklist-yada",
    body: "Maktabad templates ah oo la diyaariyay, oo la habeeyay ganacsiyada Soomaaliyeed — cunto, caafimaad, tafaariiq iyo warshado.",
  },
  {
    icon: FileText,
    title: "Warbixin degdeg ah",
    body: "Warbixin nadiif ah oo si toos ah loo abuuro oo loo qaybiyo ka dib marka hubintu dhammaato — PDF ama link.",
  },
  {
    icon: GitBranch,
    title: "Tallaabooyin saxeed (corrective actions)",
    body: "Cillad kasta oo la helo waxay abuurtaa hawl la xilsaaray, waqti xaddidan iyo la-socod ilaa la xalliyo.",
  },
  {
    icon: Users,
    title: "Kala-sareyn door-ku-saleysan",
    body: "Aragti gaar ah oo loogu talagalay milkiilaha (franchisor), maareeyaha aagga, iyo baaraha — dhammaan hal nidaam.",
  },
  {
    icon: Languages,
    title: "Af-Soomaali hore u dhigan",
    body: "Interface, warbixinno iyo taageero luqadeed oo maxalli ah — ma aha turjumaad kaliya, laakiin naqshad Soomaali u dhalatay.",
  },
]

export function Features() {
  return (
    <section id="astaamaha" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Astaamaha</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Wax kasta oo baaritaanka goobaha u baahan yahay, hal meel
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Naqshadeynta waxaa lagu saleeyay caqabadaha dhabta ah ee shirkadaha goobo badan leh ee Soomaaliyeed.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="bg-card p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <feature.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
