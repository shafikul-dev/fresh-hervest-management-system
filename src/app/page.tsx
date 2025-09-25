import { FreshHarvestsHeader } from '@/components/layout/FreshHarvestsHeader'
import { FreshHarvestsHero } from '@/components/sections/FreshHarvestsHero'
import { SeasonalFruitBundle } from '@/components/sections/SeasonalFruitBundle'
import { CustomerTestimonials } from '@/components/sections/CustomerTestimonials'
import { BlogSection } from '@/components/sections/BlogSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <FreshHarvestsHeader />
      <main className="flex-1">
        <FreshHarvestsHero />
        <SeasonalFruitBundle />
        <CustomerTestimonials />
        <BlogSection />
      </main>
    </div>
  )
}
