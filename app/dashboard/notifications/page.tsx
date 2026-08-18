import { Wrench, ClipboardCheck, GraduationCap, Info } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card, Button } from "@/components/ui/primitives"
import { notifications } from "@/lib/mock-data"
import { timeAgo, cn } from "@/lib/utils"
import type { AppNotification } from "@/lib/types"

const iconMap: Record<AppNotification["type"], { icon: LucideIcon; tone: string }> = {
  corrective: { icon: Wrench, tone: "bg-accent/25 text-accent-foreground" },
  audit: { icon: ClipboardCheck, tone: "bg-primary/10 text-primary" },
  training: { icon: GraduationCap, tone: "bg-blue-100 text-blue-700" },
  system: { icon: Info, tone: "bg-muted text-muted-foreground" },
}

export default function NotificationsPage() {
  const unread = notifications.filter((n) => !n.read).length

  return (
    <div>
      <PageHeader
        titleSo="Ogeysiisyo"
        titleEn="Notifications"
        description={`Waxaad haysataa ${unread} ogeysiis oo aan la akhrin.`}
        actions={<Button variant="outline">Calaamadee dhammaan la akhriyay</Button>}
      />

      <Card className="divide-y divide-border overflow-hidden">
        {notifications.map((n) => {
          const { icon: Icon, tone } = iconMap[n.type]
          return (
            <div key={n.id} className={cn("flex items-start gap-4 p-5", !n.read && "bg-primary/[0.03]")}>
              <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", tone)}>
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{n.title}</p>
                  {!n.read && <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />}
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground text-pretty">{n.body}</p>
                <p className="mt-1 text-xs text-muted-foreground">{timeAgo(n.createdAt)}</p>
              </div>
            </div>
          )
        })}
      </Card>
    </div>
  )
}
