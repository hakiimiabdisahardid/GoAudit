import type { ReactNode } from "react"

/** Standard page heading with Somali title, English subtitle and optional actions. */
export function PageHeader({
  titleSo,
  titleEn,
  description,
  actions,
}: {
  titleSo: string
  titleEn?: string
  description?: string
  actions?: ReactNode
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-balance">{titleSo}</h1>
        {titleEn && <p className="text-sm font-medium text-muted-foreground">{titleEn}</p>}
        {description && <p className="mt-1 max-w-2xl text-sm text-muted-foreground text-pretty">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  )
}
