'use client'

import { useState } from 'react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function FreshHarvestsHero() {
  const [showSpecialOffer] = useState(true)

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Content */}
      <div className="flex-1 bg-white px-6 py-8 flex flex-col justify-center">
        <div className="max-w-lg mx-auto lg:mx-0">
          {/* Welcome Text */}
          <p className="text-green-500 text-lg font-medium mb-4">Welcome to Fresh Harvest</p>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Fresh Fruits and Vegetables
          </h1>
          
          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            We are passionate about bringing you the freshest, highest-quality fruits and vegetables 
            directly from local farms to your table. Experience the difference that fresh, organic 
            produce makes in your daily meals.
          </p>
          
          {/* Shop Now Button */}
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors mb-8">
            Shop Now
          </button>
          
          {/* Special Offer Card */}
          {showSpecialOffer && (
            <div className="relative">
              {/* Curved Arrow */}
              <div className="absolute -left-8 top-4 transform rotate-12">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              <div className="bg-white border-2 border-green-500 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-green-500 font-semibold text-sm mb-2">Special Offer</p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Fresh Salad</h3>
                    <p className="text-green-600 font-bold text-base md:text-lg mb-4">Up to 70% off</p>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm">
                      CODE: FRESH25
                    </button>
                  </div>
                  <div className="ml-4 md:ml-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="text-green-600 text-xl md:text-2xl">🥗</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* App Download Section */}
          <div className="mt-8 md:mt-12">
            <p className="text-gray-600 text-sm mb-4">Download our app for the best experience</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center space-x-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center space-x-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section - Image */}
      <div className="flex-1 bg-green-500 relative overflow-hidden hidden lg:block">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-14 h-14 bg-white rounded-full"></div>
        </div>
        
        {/* Main Image */}
        <div className="relative z-10 flex items-center justify-center h-full p-8">
          <div className="relative">
            {/* Floating Leaf */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
              </svg>
            </div>
            
            {/* Girl with Vegetables */}
            <div className="relative">
              <PlaceholderImage
                width={500}
                height={600}
                alt="Girl with fresh vegetables"
                className="rounded-lg"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">👧</div>
                  <div className="text-4xl mb-2">🥕🥬🍅</div>
                  <p className="text-sm text-gray-600">Fresh Vegetables</p>
                </div>
              </PlaceholderImage>
              
              {/* Spark Icons */}
              <div className="absolute top-20 right-8">
                <svg className="w-6 h-6 text-orange-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="absolute top-32 right-12">
                <svg className="w-4 h-4 text-orange-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Image Section */}
      <div className="lg:hidden bg-green-500 py-8 px-6">
        <div className="max-w-md mx-auto">
          <PlaceholderImage
            width={400}
            height={300}
            alt="Girl with fresh vegetables"
            className="rounded-lg"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">👧</div>
              <div className="text-4xl mb-2">🥕🥬🍅</div>
              <p className="text-sm text-gray-600">Fresh Vegetables</p>
            </div>
          </PlaceholderImage>
        </div>
      </div>
    </div>
  )
}
