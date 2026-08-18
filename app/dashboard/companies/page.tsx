import { Plus, Building2, MapPin, Users } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card, CardContent, Button } from "@/components/ui/primitives"
import { ScoreRing } from "@/components/ui/score-ring"
import { companies } from "@/lib/mock-data"
import { formatDate } from "@/lib/utils"

export default function CompaniesPage() {
  return (
    <div>
      <PageHeader
        titleSo="Shirkadaha"
        titleEn="Companies"
        description="Maamul shirkadaha (franchisors) iyo guudmarka waxqabadkooda."
        actions={
          <Button>
            <Plus className="h-4 w-4" />
            Shirkad cusub
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((c) => (
          <Card key={c.id} className="transition-shadow hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                    {c.logoText}
                  </span>
                  <div>
                    <h3 className="font-semibold leading-tight">{c.name}</h3>
                    <p className="text-xs text-muted-foreground">{c.industry}</p>
                  </div>
                </div>
                <ScoreRing value={c.avgScore} size={48} strokeWidth={5} />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-muted/60 p-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> Laamo
                  </div>
                  <p className="mt-1 text-lg font-semibold tabular-nums">{c.branchCount}</p>
                </div>
                <div className="rounded-lg bg-muted/60 p-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5" /> Shaqaale
                  </div>
                  <p className="mt-1 text-lg font-semibold tabular-nums">{c.employeeCount}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Building2 className="h-3.5 w-3.5" />
                  La abuuray {formatDate(c.createdAt)}
                </span>
                <Button variant="ghost" size="sm">
                  Fur
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
