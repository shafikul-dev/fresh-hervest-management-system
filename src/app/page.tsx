

import { FreshHarvestsHero } from '@/components/sections/FreshHarvestsHero'
import { FreshSeasonalFruitsSection } from '@/components/sections/FreshSeasonalFruitsSection'
import { AboutFreshHarvest } from '@/components/sections/AboutFreshHarvest'
import { SeasonalFruitBundle } from '@/components/sections/SeasonalFruitBundle'
import { CustomerTestimonials } from '@/components/sections/CustomerTestimonials'
import { BlogSection } from '@/components/sections/BlogSection'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header/>
      <main className="flex-1">
        <FreshHarvestsHero />
        <AboutFreshHarvest />
        <FreshSeasonalFruitsSection />
        <SeasonalFruitBundle />
        <CustomerTestimonials />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
