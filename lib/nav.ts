import type { LucideIcon } from "lucide-react"
import {
  LayoutDashboard,
  Building2,
  MapPin,
  Users,
  ShieldCheck,
  ClipboardList,
  ListChecks,
  PlayCircle,
  History,
  BarChart3,
  Wrench,
  Bell,
  Settings,
} from "lucide-react"

export interface NavItem {
  href: string
  labelSo: string
  labelEn: string
  icon: LucideIcon
}

export interface NavGroup {
  titleSo: string
  items: NavItem[]
}

/** Sidebar navigation, grouped by function. Somali label first, English as sublabel. */
export const navGroups: NavGroup[] = [
  {
    titleSo: "Guud",
    items: [{ href: "/dashboard", labelSo: "Bogga Hore", labelEn: "Overview", icon: LayoutDashboard }],
  },
  {
    titleSo: "Ururka",
    items: [
      { href: "/dashboard/companies", labelSo: "Shirkadaha", labelEn: "Companies", icon: Building2 },
      { href: "/dashboard/branches", labelSo: "Laamaha", labelEn: "Branches", icon: MapPin },
      { href: "/dashboard/employees", labelSo: "Shaqaalaha", labelEn: "Employees", icon: Users },
      { href: "/dashboard/roles", labelSo: "Doorarka", labelEn: "Roles & Permissions", icon: ShieldCheck },
    ],
  },
  {
    titleSo: "Baaritaanka",
    items: [
      { href: "/dashboard/templates", labelSo: "Templates", labelEn: "Audit Templates", icon: ClipboardList },
      { href: "/dashboard/templates/builder", labelSo: "Dhisaha Su'aalaha", labelEn: "Checklist Builder", icon: ListChecks },
      { href: "/dashboard/audits/new", labelSo: "Bilow Baaritaan", labelEn: "Start Audit", icon: PlayCircle },
      { href: "/dashboard/audits", labelSo: "Taariikhda", labelEn: "Audit History", icon: History },
      { href: "/dashboard/corrective-actions", labelSo: "Talaabooyin Sax", labelEn: "Corrective Actions", icon: Wrench },
    ],
  },
  {
    titleSo: "Falanqaynta",
    items: [{ href: "/dashboard/reports", labelSo: "Warbixinno", labelEn: "Reports", icon: BarChart3 }],
  },
  {
    titleSo: "Nidaamka",
    items: [
      { href: "/dashboard/notifications", labelSo: "Ogeysiisyo", labelEn: "Notifications", icon: Bell },
      { href: "/dashboard/settings", labelSo: "Dejinta", labelEn: "Settings", icon: Settings },
    ],
  },
]

/** Flat list for lookups (active state, breadcrumbs). */
export const allNavItems: NavItem[] = navGroups.flatMap((g) => g.items)
