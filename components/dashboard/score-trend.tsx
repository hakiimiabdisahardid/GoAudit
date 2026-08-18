import { scoreTrend } from "@/lib/mock-data"

/** Lightweight dependency-free bar chart for the 8-week average-score trend. */
export function ScoreTrend() {
  const max = 100
  return (
    <div className="flex h-40 items-end gap-2">
      {scoreTrend.map((point) => (
        <div key={point.label} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex w-full flex-1 items-end">
            <div
              className="w-full rounded-t-md bg-primary/80 transition-all hover:bg-primary"
              style={{ height: `${(point.value / max) * 100}%` }}
              title={`${point.label}: ${point.value}%`}
            />
          </div>
          <span className="text-[10px] text-muted-foreground">{point.label.replace("Todo ", "T")}</span>
        </div>
      ))}
    </div>
  )
}
