import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Hiil Audit — Nidaamka Hubinta & Baaritaanka ee Af-Soomaaliga hore u dhigaya",
  description:
    "Hiil Audit waa platform baaritaan iyo hubin (inspection & audit) oo Af-Soomaali u shaqeeya, qiimo per-location ah, iyo isku-xir toos ah oo u dhexeeya cilladaha, SOP-yada iyo tababarka.",
  keywords: ["audit", "inspection", "Somali", "Hiil Audit", "GoAudit", "checklist", "compliance"],
}

export const viewport: Viewport = {
  themeColor: "#0f5132",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="so" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
