import type { LucideIcon } from "lucide-react"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/primitives"
import { cn } from "@/lib/utils"

export function StatCard({
  label,
  value,
  sublabel,
  icon: Icon,
  trend,
  tone = "primary",
}: {
  label: string
  value: string | number
  sublabel?: string
  icon: LucideIcon
  trend?: { value: string; up: boolean }
  tone?: "primary" | "accent" | "danger"
}) {
  const iconTone =
    tone === "accent"
      ? "bg-accent/25 text-accent-foreground"
      : tone === "danger"
        ? "bg-red-100 text-red-700"
        : "bg-primary/10 text-primary"

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <span className={cn("flex h-10 w-10 items-center justify-center rounded-lg", iconTone)}>
          <Icon className="h-5 w-5" />
        </span>
        {trend && (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 text-xs font-medium",
              trend.up ? "text-primary" : "text-red-600",
            )}
          >
            {trend.up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
            {trend.value}
          </span>
        )}
      </div>
      <p className="mt-4 text-3xl font-bold tabular-nums tracking-tight">{value}</p>
      <p className="mt-1 text-sm font-medium">{label}</p>
      {sublabel && <p className="text-xs text-muted-foreground">{sublabel}</p>}
    </Card>
  )
}
