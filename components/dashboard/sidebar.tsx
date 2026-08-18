"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShieldCheck, X } from "lucide-react"
import { navGroups } from "@/lib/nav"
import { cn } from "@/lib/utils"

function isActive(pathname: string, href: string): boolean {
  if (href === "/dashboard") return pathname === "/dashboard"
  // Avoid the builder path also matching /templates
  if (href === "/dashboard/templates") return pathname === "/dashboard/templates"
  return pathname === href || pathname.startsWith(href + "/")
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col bg-card">
      <div className="flex h-16 items-center justify-between gap-2 border-b border-border px-5">
        <Link href="/dashboard" className="flex items-center gap-2" onClick={onNavigate}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">Hiil Audit</span>
        </Link>
        {onNavigate && (
          <button onClick={onNavigate} className="rounded-md p-1 text-muted-foreground hover:bg-muted lg:hidden" aria-label="Xir menu-ka">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navGroups.map((group) => (
          <div key={group.titleSo} className="mb-5">
            <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {group.titleSo}
            </p>
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const active = isActive(pathname, item.href)
                const Icon = item.icon
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={cn(
                        "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                        active ? "bg-primary/10 font-medium text-primary" : "text-foreground hover:bg-muted",
                      )}
                    >
                      <Icon className={cn("h-4.5 w-4.5 shrink-0", active ? "text-primary" : "text-muted-foreground")} />
                      <span className="flex flex-col leading-tight">
                        <span>{item.labelSo}</span>
                        <span className="text-[11px] text-muted-foreground">{item.labelEn}</span>
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-border p-3">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            MI
          </span>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-sm font-medium">Maryan Ismaaciil</span>
            <span className="truncate text-xs text-muted-foreground">Milkiile</span>
          </div>
        </div>
      </div>
    </div>
  )
}
