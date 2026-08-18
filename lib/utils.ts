export type ClassValue = string | number | null | false | undefined | ClassValue[]

/**
 * Minimal className joiner (clsx-style) with no external deps.
 * Kept dependency-free so the project stays lean; swap for `clsx` + `tailwind-merge`
 * later if desired.
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = []
  for (const input of inputs) {
    if (!input) continue
    if (Array.isArray(input)) {
      const nested = cn(...input)
      if (nested) out.push(nested)
    } else {
      out.push(String(input))
    }
  }
  return out.join(" ")
}

/** Format a number as a percentage string, e.g. 87 -> "87%". */
export function pct(value: number): string {
  return `${Math.round(value)}%`
}

/** Format an ISO date string into a short Somali-friendly date. */
export function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
}

/** Relative-ish time label used in notifications / activity feeds. */
export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const mins = Math.round(diff / 60000)
  if (mins < 1) return "hadda"
  if (mins < 60) return `${mins} daqiiqo kahor`
  const hrs = Math.round(mins / 60)
  if (hrs < 24) return `${hrs} saac kahor`
  const days = Math.round(hrs / 24)
  return `${days} maalmood kahor`
}
