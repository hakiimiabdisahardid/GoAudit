import { ShieldCheck } from "lucide-react"

const navItems = [
  { label: "Astaamaha", href: "#astaamaha" },
  { label: "Habka Shaqada", href: "#habka" },
  { label: "Isbarbardhig", href: "#isbarbardhig" },
  { label: "Qiimaha", href: "#qiimaha" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Hiil Audit</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Bogagga muhiimka ah">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm font-medium text-foreground transition-colors hover:text-primary sm:block"
          >
            Gal
          </a>
          <a
            href="#qiimaha"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Bilaw Bilaash
          </a>
        </div>
      </div>
    </header>
  )
}
