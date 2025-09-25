'use client'

export function FreshSeasonalFruitsCard() {
  return (
    <div className="bg-gray-100 rounded-xl p-6 sm:p-8 max-w-md mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Fruit Illustrations */}
      <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-6">
        {/* Orange */}
        <div className="text-4xl sm:text-5xl md:text-6xl transform hover:scale-110 transition-transform duration-300">
          🍊
        </div>
        
        {/* Lemon */}
        <div className="text-4xl sm:text-5xl md:text-6xl transform hover:scale-110 transition-transform duration-300">
          🍋
        </div>
        
        {/* Kiwi */}
        <div className="text-4xl sm:text-5xl md:text-6xl transform hover:scale-110 transition-transform duration-300">
          🥝
        </div>
        
        {/* Strawberry */}
        <div className="text-4xl sm:text-5xl md:text-6xl transform hover:scale-110 transition-transform duration-300">
          🍓
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="flex justify-center items-center space-x-3 mb-4">
        {/* Water Droplet */}
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,9H14V4H5V21H19V9Z" />
          </svg>
        </div>
        
        {/* Leaf */}
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center">
        {/* Main Heading */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Fresh Seasonal Fruits
        </h3>
        
        {/* Sub-text/Tagline */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          Premium quality, delivered fresh
        </p>
      </div>

      {/* Optional: Add a subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-4 left-4 w-8 h-8 bg-green-300 rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 bg-orange-300 rounded-full"></div>
        <div className="absolute top-1/2 left-2 w-4 h-4 bg-yellow-300 rounded-full"></div>
        <div className="absolute top-1/3 right-2 w-5 h-5 bg-red-300 rounded-full"></div>
      </div>
    </div>
  )
}
