'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useGetProductsQuery } from '@/store/api/apiSlice'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import type { Product } from '@/types'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'fruits', label: 'Fruits' },
  { key: 'vegetables', label: 'Vegetables' },
  { key: 'salad', label: 'Salad' },
] as const

type FilterKey = (typeof FILTERS)[number]['key']

function inferGroup(p: Product): FilterKey {
  const n = (p.name || '').toLowerCase()
  if (/(salad)/.test(n)) return 'salad'
  if (/(lettuce|cabbage|cauliflower|onion|eggplant|mushroom|mustard|peas)/.test(n)) return 'vegetables'
  return 'fruits'
}

export function FreshSeasonalFruitsSection() {
  const { data, isLoading, isError, refetch } = useGetProductsQuery({})
  const [active, setActive] = useState<FilterKey>('all')

  const products = (data?.data ?? []) as Product[]

  const filtered = useMemo(() => {
    const list = active === 'all' ? products : products.filter((p) => inferGroup(p) === active)
    return list.slice(0, 8)
  }, [products, active])

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block text-[10px] sm:text-xs uppercase tracking-wide text-green-600 bg-green-50 px-3 py-1 rounded-full">Our Products</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A]">Our Fresh Products</h2>
          <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
            We pride ourselves on offering a wide variety of fresh and flavorful fruits,
            vegetables, and specialty salads.
          </p>

          {/* Filters */}
          <div className="mt-5 inline-flex items-center md:gap-2 bg-white p-1 rounded-full border border-gray-200 shadow-sm max-sm:w-full max-sm:ml-[-10px] overflow-hidden">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  active === f.key
                    ? 'bg-[#1FAE61] text-white'
                    : 'bg-transparent text-gray-700 hover:bg-gray-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading / Error */}
        {isLoading && (
          <div className="py-16 text-center text-gray-500">Loading products…</div>
        )}
        {isError && (
          <div className="py-16 text-center">
            <p className="text-red-600 mb-3">Failed to load products.</p>
            <button onClick={() => refetch()} className="px-4 py-2 bg-gray-900 text-white rounded-lg">Retry</button>
          </div>
        )}

        {/* Grid */}
        {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                aria-label={`View details for ${p.name}`}
                className="group bg-white rounded-2xl border border-gray-200 shadow-[0_4px_12px_rgba(16,24,40,0.06)] p-4 hover:shadow-md transition-shadow h-full flex flex-col"
              >
                <div className="flex items-center justify-center bg-gray-50 rounded-xl mb-4 h-40">
                  <PlaceholderImage
                    src={p.image}
                    alt={p.name}
                    width={320}
                    height={200}
                    className="w-full h-40 object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 leading-none">{p.name}</p>
                  <p className="text-[#1E293B] font-semibold">${Number(p.price || 0).toFixed(2)}<span className="text-gray-500 text-xs">/kg</span></p>
                </div>
                <div className="mt-auto pt-3">
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={(e) => { e.preventDefault(); /* TODO: wire up cart action */ }}
                  >
                    Add to cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/products" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-green-700 transition-colors">
            See all products
          </Link>
        </div>
      </div>
    </section>
  )
}
