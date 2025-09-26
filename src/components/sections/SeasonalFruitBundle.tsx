'use client'

import { useState, useEffect } from 'react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function SeasonalFruitBundle() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 18,
    minutes: 54,
    seconds: 21
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Seasonal Fruit Bundle
            </h2>
            
            <div className="mb-8">
              <p className="text-base sm:text-lg text-gray-600 mb-2">Discount up to</p>
              <p className="text-3xl sm:text-4xl font-bold text-orange-500">80% OFF</p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-8">
              <div className="flex space-x-2 sm:space-x-4">
                <div className="text-center">
                  <div className="bg-gray-100 text-gray-800 px-2 sm:px-4 py-2 sm:py-3 rounded-lg font-bold text-lg sm:text-2xl min-w-[60px] sm:min-w-[80px]">
                    {timeLeft.days.toString().padStart(2, '0')}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">Days</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 text-gray-800 px-2 sm:px-4 py-2 sm:py-3 rounded-lg font-bold text-lg sm:text-2xl min-w-[60px] sm:min-w-[80px]">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">Hour</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 text-gray-800 px-2 sm:px-4 py-2 sm:py-3 rounded-lg font-bold text-lg sm:text-2xl min-w-[60px] sm:min-w-[80px]">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">Min</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 text-gray-800 px-2 sm:px-4 py-2 sm:py-3 rounded-lg font-bold text-lg sm:text-2xl min-w-[60px] sm:min-w-[80px]">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">Second</p>
                </div>
              </div>
            </div>

            {/* Code Button */}
            <button className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-green-600 transition-colors w-full sm:w-auto">
              CODE: FRESH28
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <div className="relative">
              <PlaceholderImage
                width={500}
                height={400}
                alt="Seasonal Fruit Bundle"
                className="rounded-lg w-full h-auto"
              >
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🍊🍋🥝🍓</div>
                  <div className="text-4xl mb-2">🍃</div>
                  <p className="text-lg text-gray-600 font-medium">Fresh Seasonal Fruits</p>
                  <p className="text-sm text-gray-500 mt-2">Premium quality, delivered fresh</p>
                </div>
              </PlaceholderImage>
              
              {/* Decorative leaves */}
              <div className="absolute -left-4 -top-4 text-green-500 opacity-60">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
                </svg>
              </div>
              <div className="absolute -right-4 -bottom-4 text-green-500 opacity-40">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
