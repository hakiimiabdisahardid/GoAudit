import { Badge } from "./primitives"
import type { AuditStatus, CorrectiveActionStatus, Priority } from "@/lib/types"

const auditStatusMap: Record<AuditStatus, { tone: "neutral" | "success" | "warning" | "info"; label: string }> = {
  draft: { tone: "neutral", label: "Qabyo" },
  in_progress: { tone: "warning", label: "Socda" },
  submitted: { tone: "info", label: "La gudbiyay" },
  reviewed: { tone: "success", label: "La eegay" },
}

export function AuditStatusBadge({ status }: { status: AuditStatus }) {
  const s = auditStatusMap[status]
  return <Badge tone={s.tone}>{s.label}</Badge>
}

const caStatusMap: Record<CorrectiveActionStatus, { tone: "neutral" | "success" | "warning" | "danger"; label: string }> = {
  open: { tone: "neutral", label: "Furan" },
  in_progress: { tone: "warning", label: "Socda" },
  done: { tone: "success", label: "La dhammeeyay" },
  overdue: { tone: "danger", label: "Dib u dhacay" },
}

export function CorrectiveStatusBadge({ status }: { status: CorrectiveActionStatus }) {
  const s = caStatusMap[status]
  return <Badge tone={s.tone}>{s.label}</Badge>
}

const priorityMap: Record<Priority, { tone: "neutral" | "warning" | "danger"; label: string }> = {
  low: { tone: "neutral", label: "Hoose" },
  medium: { tone: "warning", label: "Dhexe" },
  high: { tone: "danger", label: "Sare" },
}

export function PriorityBadge({ priority }: { priority: Priority }) {
  const p = priorityMap[priority]
  return <Badge tone={p.tone}>{p.label}</Badge>
}
