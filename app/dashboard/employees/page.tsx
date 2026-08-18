import { Plus, Mail, Phone } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card, Button, Badge, Avatar } from "@/components/ui/primitives"
import { employees, roles } from "@/lib/mock-data"
import type { RoleKey } from "@/lib/types"

function roleLabel(key: RoleKey) {
  return roles.find((r) => r.key === key)?.labelSo ?? key
}

function roleTone(key: RoleKey) {
  switch (key) {
    case "owner":
      return "success" as const
    case "manager":
      return "info" as const
    case "auditor":
      return "warning" as const
    default:
      return "neutral" as const
  }
}

export default function EmployeesPage() {
  return (
    <div>
      <PageHeader
        titleSo="Shaqaalaha"
        titleEn="Employees & Users"
        description="Maamul isticmaaleyaasha, doorarkooda iyo laamaha ay ka tirsan yihiin."
        actions={
          <Button>
            <Plus className="h-4 w-4" />
            Shaqaale cusub
          </Button>
        }
      />

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3 font-medium">Qofka</th>
                <th className="px-5 py-3 font-medium">Xiriir</th>
                <th className="px-5 py-3 font-medium">Door</th>
                <th className="px-5 py-3 font-medium">Laan</th>
                <th className="px-5 py-3 font-medium">Xaalad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {employees.map((e) => (
                <tr key={e.id} className="hover:bg-muted/30">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar text={e.avatarText} />
                      <div>
                        <p className="font-medium leading-tight">{e.name}</p>
                        <p className="text-xs text-muted-foreground">{e.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5" /> {e.email}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5" /> {e.phone}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <Badge tone={roleTone(e.role)}>{roleLabel(e.role)}</Badge>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{e.branchName ?? "Dhammaan laamaha"}</td>
                  <td className="px-5 py-4">
                    <Badge tone={e.active ? "success" : "neutral"}>{e.active ? "Firfircoon" : "Joojisan"}</Badge>
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
