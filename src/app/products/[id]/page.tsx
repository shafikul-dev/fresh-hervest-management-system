"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { useGetProductByIdQuery, useGetProductsQuery } from "@/store/api/apiSlice"
import { PlaceholderImage } from "@/components/ui/PlaceholderImage"
import { useState, useMemo } from "react"
import type { Product, PaginatedResponse } from "@/types"
import { FreshHarvestsHeader } from "@/components/layout/FreshHarvestsHeader"
import { FreshHarvestsFooter } from "@/components/layout/FreshHarvestsFooter"

function getEmojiForProduct(name: string): string {
  const n = name.toLowerCase()
  if (n.includes("apple")) return "🍎"
  if (n.includes("banana")) return "🍌"
  if (n.includes("coconut")) return "🥥"
  if (n.includes("guava")) return "🥝"
  if (n.includes("kiwi")) return "🥝"
  if (n.includes("pomegranate")) return "🍎"
  if (n.includes("mango")) return "🥭"
  if (n.includes("grape") || n.includes("grapes")) return "🍇"
  return "🍏"
}

export default function ProductDetailsPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const productId = params?.id

  const { data: product, isLoading, isError } = useGetProductByIdQuery(productId as string, {
    skip: !productId,
  })

  const { data: related } = useGetProductsQuery(
    { limit: 8, page: 1, category: product?.category },
    { skip: !product?.category }
  )

  const [qty, setQty] = useState<number>(1)

  const emoji = useMemo(() => getEmojiForProduct(product?.name ?? ""), [product?.name])

  if (!productId) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-600">Invalid product.</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-600">Loading product...</p>
      </div>
    )
  }

  if (isError || !product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <p className="text-red-600">Failed to load product.</p>
        <button onClick={() => router.back()} className="px-4 py-2 bg-gray-800 text-white rounded-lg">Go back</button>
      </div>
    )
  }

  const priceLabel = product.price ? `$${Number(product.price).toFixed(2)}` : "$0.00"
  const relatedItemsAll: Product[] = (related as PaginatedResponse<Product> | undefined)?.data ?? []
  const relatedItems = relatedItemsAll.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <FreshHarvestsHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 w-full">
        {/* Breadcrumbs */}
        <div className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span className="mx-1 sm:mx-2">/</span>
          <Link href="/products" className="hover:text-green-600">Shop</Link>
          <span className="mx-1 sm:mx-2">/</span>
          <span className="text-gray-700 truncate max-w-[60vw] sm:max-w-none">{product.name}</span>
        </div>

        {/* Top: Image + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Image panel */}
          <div className="bg-gray-100 rounded-2xl p-5 sm:p-8 h-[240px] sm:h-[360px] md:h-[420px] flex flex-col items-center justify-center">
            <div className="text-[56px] sm:text-[88px] md:text-[104px] mb-4 sm:mb-6 select-none">{emoji}</div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold text-sm sm:text-base">{product.name}</p>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Premium quality</p>
            </div>
          </div>

          {/* Info */}
          <div className="lg:pl-2">
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{product.name}</h1>
              <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-400 text-gray-900 font-bold shadow-sm">5</span>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3 mb-3">
              <div className="flex text-yellow-500 text-base sm:text-lg leading-none">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-500">100+ reviews</span>
            </div>

            <div className="text-green-600 text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-5">{priceLabel}<span className="text-base sm:text-lg font-semibold">/kg</span></div>

            <p className="text-gray-700 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
              {product.description || "Experience the rich, natural taste of our premium product, sourced responsibly and delivered fresh."}
            </p>

            {/* Quantity and actions */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-7">
              <div className="flex items-center border rounded-lg overflow-hidden w-full sm:w-auto">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2 text-gray-700 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                  className="w-14 sm:w-16 text-center outline-none py-2 bg-white"
                  min={1}
                />
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-2 text-gray-700 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <button disabled className="px-4 py-3 bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed w-full sm:w-auto">Save as favorite</button>
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 w-full sm:w-auto">Add to cart</button>
            </div>

            {/* Meta */}
            <div className="text-xs sm:text-sm text-gray-600 space-y-1">
              <p><span className="text-gray-700 font-medium">Category:</span> {product.category || "General"}</p>
              <p><span className="text-gray-700 font-medium">SKU:</span> {product.id}</p>
            </div>
          </div>
        </div>

        {/* Description box */}
        <div className="mt-10 sm:mt-12">
          <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3">Description</h2>
          <div className="bg-gray-50 border rounded-xl p-4 sm:p-5 text-gray-700 leading-relaxed text-sm sm:text-base">
            {product.description || "Our products are carefully grown, ensuring that each batch is harvested at the optimal time to preserve quality and freshness. Enjoy premium taste and texture with every bite."}
          </div>
        </div>

        {/* Related products */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-5 sm:mb-6">
            <span className="inline-block text-[10px] sm:text-xs uppercase tracking-wide text-green-600 bg-green-50 px-2 sm:px-3 py-1 rounded-full">Our Products</span>
            <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl font-bold text-gray-900">Related products</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {relatedItems.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="block group">
                <div className="bg-white border rounded-xl p-2 sm:p-4 hover:shadow-md transition-shadow">
                  <PlaceholderImage
                    src={p.image}
                    alt={p.name}
                    width={300}
                    height={220}
                    className="w-full h-28 sm:h-40 object-cover rounded-lg"
                  >
                    <div className="flex items-center justify-center h-28 sm:h-40 text-4xl sm:text-5xl select-none">{getEmojiForProduct(p.name)}</div>
                  </PlaceholderImage>
                  <div className="mt-2 sm:mt-3">
                    <p className="text-[11px] sm:text-sm text-gray-500">{p.category || "Fruit"}</p>
                    <p className="font-semibold text-gray-900 truncate text-sm sm:text-base">{p.name}</p>
                    <p className="text-green-600 font-semibold text-sm sm:text-base">${Number(p.price || 0).toFixed(2)}</p>
                    <span className="inline-block mt-1 text-[11px] sm:text-xs text-gray-600 group-hover:text-green-600 bg-gray-100 rounded-md px-2 py-1">Add to cart</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FreshHarvestsFooter />
    </div>
  )
}
