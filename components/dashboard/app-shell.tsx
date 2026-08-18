"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { Bell, Menu, Search } from "lucide-react"
import { Sidebar } from "./sidebar"
import { cn } from "@/lib/utils"

export function AppShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-border lg:block">
        <Sidebar />
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setMobileOpen(false)} aria-hidden />
          <aside className="absolute inset-y-0 left-0 w-72 border-r border-border shadow-xl">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur md:px-6">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-md p-2 text-muted-foreground hover:bg-muted lg:hidden"
            aria-label="Fur menu-ka"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="relative hidden flex-1 md:block md:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Raadi laan, shaqaale, ama baaritaan..."
              className="h-10 w-full rounded-lg border border-border bg-card pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/dashboard/notifications"
              className="relative rounded-lg p-2 text-muted-foreground hover:bg-muted"
              aria-label="Ogeysiisyo"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
            </Link>
            <Link
              href="/dashboard/audits/new"
              className="hidden items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90 sm:inline-flex sm:h-10"
            >
              Bilow Baaritaan
            </Link>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              MI
            </span>
          </div>
        </header>

        <main className={cn("mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8")}>{children}</main>
      </div>
    </div>
  )
}
