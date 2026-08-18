import { Globe, Building, CreditCard, Bell } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Card, CardHeader, CardTitle, CardContent, Button, Input, Label, Badge } from "@/components/ui/primitives"

function Toggle({ on = false, label }: { on?: boolean; label: string }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm">{label}</span>
      <span
        className={`inline-flex h-6 w-11 items-center rounded-full px-0.5 ${on ? "justify-end bg-primary" : "justify-start bg-muted"}`}
      >
        <span className="h-5 w-5 rounded-full bg-card shadow" />
      </span>
    </div>
  )
}

export default function SettingsPage() {
  return (
    <div>
      <PageHeader
        titleSo="Dejinta"
        titleEn="Settings"
        description="Maamul akoonkaaga, ururkaaga, luqadda iyo lacag-bixinta."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center gap-2">
            <Building className="h-5 w-5 text-primary" />
            <CardTitle>Macluumaadka Ururka</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label>Magaca Ururka</Label>
              <Input defaultValue="Hiil Audit Group" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Emailka Xiriirka</Label>
              <Input type="email" defaultValue="admin@hiilaudit.so" />
            </div>
            <div>
              <Button>Kaydi</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <CardTitle>Luqadda & Goobta</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Luqadda aasaasiga ah</span>
              <Badge tone="success">Af-Soomaali</Badge>
            </div>
            <Toggle on label="Muuji sarbeebta Ingiriisi (English labels)" />
            <Toggle on label="Nidaamka taariikhda: Muqdisho (EAT)" />
            <Toggle label="Habka mugdiga (Dark mode)" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            <CardTitle>Lacag-bixinta</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="rounded-lg border border-border bg-muted/40 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Qorshaha Ganacsi</p>
                  <p className="text-sm text-muted-foreground">Qiimo per-location ah</p>
                </div>
                <Badge tone="success">Firfircoon</Badge>
              </div>
              <p className="mt-3 text-2xl font-bold">
                $9<span className="text-sm font-normal text-muted-foreground"> / laan / bishii</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">31 laan × $9 = $279 / bishii</p>
            </div>
            <div>
              <Button variant="outline">Maamul qorshaha</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle>Ogeysiisyada</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <Toggle on label="Ku wargeli talaabo saxid oo cusub" />
            <Toggle on label="Ku wargeli baaritaan hoos u dhacay (< 75%)" />
            <Toggle label="Warbixin toddobaadle ah oo email ah" />
            <Toggle on label="Xasuusin talaabo dib u dhacday" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
