import { Plus, MapPin } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card, Button, Badge } from "@/components/ui/primitives"
import { branches, companies } from "@/lib/mock-data"
import { formatDate } from "@/lib/utils"

function scoreTone(score: number | null) {
  if (score == null) return "neutral" as const
  if (score >= 90) return "success" as const
  if (score >= 75) return "warning" as const
  return "danger" as const
}

export default function BranchesPage() {
  const companyName = (id: string) => companies.find((c) => c.id === id)?.name ?? "—"

  return (
    <div>
      <PageHeader
        titleSo="Laamaha"
        titleEn="Branches & Locations"
        description="Dhammaan goobaha lagu qabto baaritaannada. Qiimaha waa per-location."
        actions={
          <Button>
            <Plus className="h-4 w-4" />
            Laan cusub
          </Button>
        }
      />

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3 font-medium">Laanta</th>
                <th className="px-5 py-3 font-medium">Shirkad</th>
                <th className="px-5 py-3 font-medium">Maamule</th>
                <th className="px-5 py-3 font-medium">Shaqaale</th>
                <th className="px-5 py-3 font-medium">Dhibco ugu dambeeya</th>
                <th className="px-5 py-3 font-medium">Baaritaan</th>
                <th className="px-5 py-3 font-medium">Xaalad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {branches.map((b) => (
                <tr key={b.id} className="hover:bg-muted/30">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-medium leading-tight">{b.name}</p>
                        <p className="text-xs text-muted-foreground">{b.city}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{companyName(b.companyId)}</td>
                  <td className="px-5 py-4">{b.manager}</td>
                  <td className="px-5 py-4 tabular-nums">{b.employeeCount}</td>
                  <td className="px-5 py-4">
                    {b.lastAuditScore != null ? (
                      <Badge tone={scoreTone(b.lastAuditScore)}>{b.lastAuditScore}%</Badge>
                    ) : (
                      <span className="text-xs text-muted-foreground">Weli lama baarin</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">
                    {b.lastAuditAt ? formatDate(b.lastAuditAt) : "—"}
                  </td>
                  <td className="px-5 py-4">
                    <Badge tone={b.status === "active" ? "success" : "neutral"}>
                      {b.status === "active" ? "Firfircoon" : "Joojisan"}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
