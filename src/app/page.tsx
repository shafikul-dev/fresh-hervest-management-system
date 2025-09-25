import { FreshHarvestsHeader } from '@/components/layout/FreshHarvestsHeader'
import { FreshHarvestsFooter } from '@/components/layout/FreshHarvestsFooter'
import { FreshHarvestsHero } from '@/components/sections/FreshHarvestsHero'
import { SeasonalFruitBundle } from '@/components/sections/SeasonalFruitBundle'
import { CustomerTestimonials } from '@/components/sections/CustomerTestimonials'
import { BlogSection } from '@/components/sections/BlogSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <FreshHarvestsHeader />
      <main className="flex-1">
        <FreshHarvestsHero />
        <SeasonalFruitBundle />
        <CustomerTestimonials />
        <BlogSection />
      </main>
      <FreshHarvestsFooter />
    </div>
  )
}
