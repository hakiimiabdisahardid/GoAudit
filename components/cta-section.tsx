import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center md:px-12 md:py-20">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">
          Bilow inaad hubiso goobahaaga maanta
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
          Ku biir ganacsiyada Soomaaliyeed ee isticmaalaya Hiil Audit si ay u kordhiyaan tayada, u yareeyaan
          khataraha, oo ay u xakameeyaan goobahooda dhammaan.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#qiimaha"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Bilaw tijaabo bilaash ah
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Qorsheynta bandhig (demo)
          </a>
        </div>
      </div>
    </section>
  )
}
