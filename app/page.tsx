import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { Features } from "@/components/features"
import { ClosedLoop } from "@/components/closed-loop"
import { Comparison } from "@/components/comparison"
import { Pricing } from "@/components/pricing"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <ClosedLoop />
        <Comparison />
        <Pricing />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
