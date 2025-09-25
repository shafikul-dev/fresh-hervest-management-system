'use client'

import { FreshSeasonalFruitsCard } from '@/components/ui/FreshSeasonalFruitsCard'

export function FreshSeasonalFruitsSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          {/* Decorative leaves */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-green-500 opacity-60 hidden md:block">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
            </svg>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Fresh Seasonal Fruits
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of seasonal fruits, handpicked for the freshest taste and highest quality.
          </p>
          
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-green-500 opacity-60 hidden md:block">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
            </svg>
          </div>
        </div>

        {/* Cards Grid - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {/* Main Featured Card */}
          <div className="sm:col-span-2 lg:col-span-1">
            <FreshSeasonalFruitsCard />
          </div>
          
          {/* Additional Fruit Cards */}
          <div className="bg-gray-100 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl mb-4">🍎</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Fresh Apples</h3>
              <p className="text-sm sm:text-base text-gray-600">Crisp and sweet</p>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl mb-4">🍌</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Organic Bananas</h3>
              <p className="text-sm sm:text-base text-gray-600">Perfectly ripe</p>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl mb-4">🍇</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Sweet Grapes</h3>
              <p className="text-sm sm:text-base text-gray-600">Juicy and fresh</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
            Shop Fresh Fruits
          </button>
        </div>
      </div>
    </section>
  )
}
