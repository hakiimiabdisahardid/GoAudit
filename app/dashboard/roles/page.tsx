import { ShieldCheck, Check, Users } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card, CardContent, Button, Badge } from "@/components/ui/primitives"
import { roles } from "@/lib/mock-data"

export default function RolesPage() {
  return (
    <div>
      <PageHeader
        titleSo="Doorarka & Fasaxyada"
        titleEn="Roles & Permissions"
        description="Nidaamka kala-sareynta: Milkiile → Maamule → Baare → Daawade. Mid walbaa wuxuu leeyahay fasaxyo cad."
        actions={<Button variant="outline">Door cusub</Button>}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {roles.map((role) => (
          <Card key={role.key}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <h3 className="font-semibold leading-tight">{role.labelSo}</h3>
                    <p className="text-xs text-muted-foreground">{role.labelEn}</p>
                  </div>
                </div>
                <Badge tone="neutral">
                  <Users className="h-3 w-3" />
                  {role.userCount}
                </Badge>
              </div>

              <p className="mt-4 text-sm text-muted-foreground text-pretty">{role.description}</p>

              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Fasaxyada</p>
                <ul className="flex flex-col gap-1.5">
                  {role.permissions.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
