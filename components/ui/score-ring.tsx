import { cn } from "@/lib/utils"

/** Circular score gauge. Color shifts by threshold (pass/warn/fail). */
export function ScoreRing({
  value,
  size = 72,
  strokeWidth = 8,
  className,
}: {
  value: number
  size?: number
  strokeWidth?: number
  className?: string
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  const color = value >= 90 ? "var(--primary)" : value >= 75 ? "var(--accent)" : "#dc2626"

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth} className="fill-none stroke-muted" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="fill-none transition-all"
          style={{ stroke: color }}
        />
      </svg>
      <span className="absolute text-sm font-bold tabular-nums" style={{ color }}>
        {Math.round(value)}%
      </span>
    </div>
  )
}
