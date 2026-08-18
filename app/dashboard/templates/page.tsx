import Link from "next/link"
import { Plus, ClipboardList, ListChecks, Repeat, PenLine } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card, CardContent, Button, Badge } from "@/components/ui/primitives"
import { templates } from "@/lib/mock-data"
import { formatDate } from "@/lib/utils"

export default function TemplatesPage() {
  return (
    <div>
      <PageHeader
        titleSo="Templates-ka Baaritaanka"
        titleEn="Audit Templates"
        description="Qaabab baaritaan oo diyaar ah oo lagu dhaqan geliyo laamaha. Ku dar su'aalo, qeybo iyo miisaan."
        actions={
          <Link href="/dashboard/templates/builder">
            <Button>
              <Plus className="h-4 w-4" />
              Template cusub
            </Button>
          </Link>
        }
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <Card key={t.id} className="flex flex-col">
            <CardContent className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ClipboardList className="h-5.5 w-5.5" />
                </span>
                <Badge tone={t.published ? "success" : "warning"}>{t.published ? "La daabacay" : "Qabyo"}</Badge>
              </div>

              <h3 className="mt-4 font-semibold leading-tight text-balance">{t.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{t.category}</p>
              <p className="mt-2 flex-1 text-sm text-muted-foreground text-pretty">{t.description}</p>

              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <ListChecks className="h-3.5 w-3.5" /> {t.questionCount} su'aal
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Repeat className="h-3.5 w-3.5" /> {t.usageCount}x
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">Cusboonaysiin {formatDate(t.updatedAt)}</span>
                <Link href="/dashboard/templates/builder">
                  <Button variant="ghost" size="sm">
                    <PenLine className="h-4 w-4" />
                    Wax ka beddel
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
