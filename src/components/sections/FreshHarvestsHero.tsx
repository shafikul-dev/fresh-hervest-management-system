'use client'

import { useState } from 'react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function FreshHarvestsHero() {
  const [showSpecialOffer] = useState(true)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative">
      {/* Right-half background color */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-green-500" /> */}

      {/* Left Section - Content */}
      <div className="flex-1 bg-transparent px-4 sm:px-6 py-8 lg:py-16 flex flex-col justify-center relative">
        {/* Decorative Leaves */}
        <div className="absolute top-10 left-4 text-green-500 opacity-60">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
          </svg>
        </div>
        <div className="absolute top-1/2 left-8 text-green-500 opacity-40">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
          </svg>
        </div>
        
        <div className="max-w-lg mx-auto lg:mx-0 lg:max-w-none">
          {/* Welcome Text */}
          <p className="text-green-500 text-sm font-medium mb-4">Welcome to Fresh Harvest</p>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Fresh Fruits and<br />Vegetables
          </h1>
          
          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables.
          </p>
          
          {/* Shop Now Button */}
          <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-600 transition-colors mb-8 w-full sm:w-auto">
            Shop Now
          </button>


<div className='flex'>

 <div className='hidden md:block ml-[10vw]'>  
<svg className='text-green-600' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="50" transform="rotate(-90)"><path d="M47.917 10.417q-25-3.125-37.5 12.5c-3.125 4.167-4.167 8.333-4.167 12.5m0 0-4.167-6.25m4.167 6.25 6.25-3.125" stroke="currentColor"/></svg>
</div>
          
          {/* Special Offer Card */}
          {showSpecialOffer && (
            <div className="relative">
              {/* Pointer arrow to the Special Offer card */}
          
              {/* Special Offer Card EXACT styling */}
              <div className="md:w-[361px] md:h-[165px] bg-white border border-gray-200 rounded-2xl p-3 sm:p-4 shadow-[0_6px_16px_rgba(16,24,40,0.06)]">
                <div className="grid grid-cols-[1fr_auto] gap-3 items-center">
                  {/* Left text block */}
                  <div>
                    <p className="text-[#1FAE61] font-semibold text-xs sm:text-sm mb-1">Special Offer</p>
                    <h3 className="font-rubik text-[22px] leading-7 sm:text-[24px] sm:leading-8 font-extrabold text-[#1E293B] mb-1">Fresh Salad</h3>

                    <div className="flex items-end gap-1 sm:gap-2 mb-3">
                      <span className="text-[#1FAE61] font-semibold text-[12px] sm:text-sm">Up to</span>
                      <span className="text-[#1E293B] font-extrabold text-[22px] sm:text-[26px] leading-none">7</span>
                      <span className="relative inline-flex items-center justify-center mx-0.5">
                        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full ring-2 ring-[#FF7A00] inline-flex items-center justify-center text-[#1E293B] text-[14px] sm:text-[16px] font-extrabold">0</span>
                      </span>
                      <span className="text-[#1E293B] font-extrabold text-[22px] sm:text-[26px] leading-none">%</span>
                      <span className="text-[#0F172A] text-[12px] sm:text-sm ml-1 mb-0.5">off</span>
                    </div>

                    <div className="inline-flex items-center rounded-full px-3 py-1.5 bg-[#0A3D2E]">
                      <span className="text-white/90 text-[11px] sm:text-xs tracking-wide mr-1.5">CODE :</span>
                      <span className="text-[#F7C94A] text-[12px] sm:text-sm font-semibold tracking-wide">FRESH25</span>
                    </div>
                  </div>

                  {/* Salad bowl built with CSS (no external image) */}
                  <div className="flex justify-end">
                    <div className="relative w-[86px] h-[86px] sm:w-[100px] sm:h-[100px] rounded-full bg-white shadow-[0_6px_16px_rgba(16,24,40,0.06)] p-1">
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#d9f8d8] to-[#bcecc0] overflow-hidden">
                        {/* greens */}
                        <span className="absolute left-2 top-3 w-8 h-3 rounded-full bg-[#6fcf97] rotate-12"></span>
                        <span className="absolute left-5 top-6 w-10 h-3 rounded-full bg-[#7bd39e] -rotate-6"></span>
                        <span className="absolute right-3 top-5 w-9 h-3 rounded-full bg-[#5fce8e] rotate-3"></span>
                        {/* red strawberries */}
                        <span className="absolute left-3 bottom-4 w-4 h-4 rounded-full bg-[#ff5a5f] shadow-inner"></span>
                        <span className="absolute right-4 bottom-6 w-4 h-4 rounded-full bg-[#ff6b6f] shadow-inner"></span>
                        {/* lime slice */}
                        <span className="absolute left-7 top-2 w-6 h-6 rounded-full border-2 border-white/70"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

</div>
          
          {/* App Download Section */}
          <div className="mt-8 md:mt-12">
            <p className="text-gray-600 text-sm mb-4">Download App:</p>
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
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section - Image */}
      <div className="flex-1 relative overflow-hidden lg:block">
        

        
        
        {/* Main Image */}
        <div className="relative z-10 flex items-center justify-center   ">
          <div className="relative w-full max-w-xl">
            <PlaceholderImage
              src="/images/girl with vegetable.png"
              width={800}
              height={800}
              alt="Girl with fresh vegetables"
              className="w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  )
}
