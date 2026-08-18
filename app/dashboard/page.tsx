import Link from "next/link"
import { ClipboardCheck, TrendingUp, Wrench, AlertTriangle, MapPin, ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { StatCard } from "@/components/dashboard/stat-card"
import { ScoreTrend } from "@/components/dashboard/score-trend"
import { Card, CardHeader, CardTitle, CardContent, Button } from "@/components/ui/primitives"
import { ScoreRing } from "@/components/ui/score-ring"
import { AuditStatusBadge, CorrectiveStatusBadge, PriorityBadge } from "@/components/ui/status"
import { overviewStats, audits, correctiveActions, branches } from "@/lib/mock-data"
import { formatDate } from "@/lib/utils"

export default function OverviewPage() {
  const recentAudits = audits.slice(0, 4)
  const openActions = correctiveActions.filter((c) => c.status !== "done").slice(0, 4)
  const topBranches = [...branches]
    .filter((b) => b.lastAuditScore != null)
    .sort((a, b) => (b.lastAuditScore ?? 0) - (a.lastAuditScore ?? 0))
    .slice(0, 4)

  return (
    <div>
      <PageHeader
        titleSo="Bogga Hore"
        titleEn="Overview"
        description="Guudmar degdeg ah oo ku saabsan waxqabadka baaritaanka ee dhammaan laamahaaga."
        actions={
          <Link href="/dashboard/reports">
            <Button variant="outline">Warbixin buuxa</Button>
          </Link>
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          label="Baaritaanno bishaan"
          value={overviewStats.auditsThisMonth}
          icon={ClipboardCheck}
          trend={{ value: "12%", up: true }}
        />
        <StatCard
          label="Celceliska Dhibcaha"
          value={`${overviewStats.avgScore}%`}
          icon={TrendingUp}
          trend={{ value: "4%", up: true }}
        />
        <StatCard
          label="Talaabooyin sax oo furan"
          value={overviewStats.openCorrectiveActions}
          icon={Wrench}
          tone="accent"
          sublabel={`${overviewStats.overdueActions} dib u dhacay`}
        />
        <StatCard
          label="Laamo firfircoon"
          value={overviewStats.activeBranches}
          icon={MapPin}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle>Isbeddelka Dhibcaha</CardTitle>
              <p className="text-sm text-muted-foreground">8 toddobaad ee la soo dhaafay</p>
            </div>
            <span className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              {overviewStats.passRate}% pass rate
            </span>
          </CardHeader>
          <CardContent>
            <ScoreTrend />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Laamaha ugu sarreeya</CardTitle>
            <p className="text-sm text-muted-foreground">Dhibcaha baaritaanka ugu dambeeya</p>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {topBranches.map((b) => (
              <div key={b.id} className="flex items-center gap-3">
                <ScoreRing value={b.lastAuditScore ?? 0} size={44} strokeWidth={5} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{b.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{b.city}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Baaritaannada dhawaa</CardTitle>
            <Link href="/dashboard/audits" className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              Dhammaan <ArrowRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent className="flex flex-col divide-y divide-border">
            {recentAudits.map((a) => (
              <div key={a.id} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{a.branchName}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {a.templateName} · {a.auditorName}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <AuditStatusBadge status={a.status} />
                  {a.score != null && <span className="text-sm font-semibold tabular-nums">{a.score}%</span>}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4.5 w-4.5 text-accent-foreground" />
              <CardTitle>Talaabooyin saxid ah oo furan</CardTitle>
            </div>
            <Link
              href="/dashboard/corrective-actions"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              Dhammaan <ArrowRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent className="flex flex-col divide-y divide-border">
            {openActions.map((c) => (
              <div key={c.id} className="flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{c.questionText}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {c.branchName} · {formatDate(c.dueDate)}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <CorrectiveStatusBadge status={c.status} />
                  <PriorityBadge priority={c.priority} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
