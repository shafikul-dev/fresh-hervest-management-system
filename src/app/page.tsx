import { FreshHarvestsHeader } from '@/components/layout/FreshHarvestsHeader'
import { FreshHarvestsHero } from '@/components/sections/FreshHarvestsHero'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <FreshHarvestsHeader />
      <main className="flex-1">
        <FreshHarvestsHero />
      </main>
    </div>
  )
}
