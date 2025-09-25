"use client"

import Link from "next/link"
import { useGetProductsQuery } from "@/store/api/apiSlice"
import { PlaceholderImage } from "@/components/ui/PlaceholderImage"

export default function ProductsPage() {
  const { data, isLoading, isError, refetch } = useGetProductsQuery({})
  const products = data?.data ?? []

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-600">Loading products...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <p className="text-red-600">Failed to load products.</p>
        <button onClick={() => refetch()} className="px-4 py-2 rounded-lg bg-gray-800 text-white">Retry</button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-2">Browse our fresh harvest selection</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`} className="group block">
              <div className="bg-white border rounded-xl p-3 hover:shadow-md transition-shadow">
                <PlaceholderImage alt={p.name} width={300} height={220} className="w-full h-40 rounded-lg">
                  <div className="flex items-center justify-center h-40 text-5xl">🍎</div>
                </PlaceholderImage>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">{p.category || "Fruit"}</p>
                  <p className="font-semibold text-gray-900 truncate">{p.name}</p>
                  <p className="text-green-600 font-semibold">${Number(p.price || 0).toFixed(2)}</p>
                  <span className="text-xs text-gray-500 group-hover:text-green-600">View details</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
