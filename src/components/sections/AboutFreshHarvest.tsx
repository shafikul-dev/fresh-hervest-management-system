'use client'

import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function AboutFreshHarvest() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image composition (left) */}
        <div className="relative flex items-center justify-center">
          {/* circular green backdrop */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-green-100 -z-10" />
          <div className="relative w-full max-w-md">
            <PlaceholderImage
              src="/images/surprised-young-male-gardener-wearing-gardening-hat-holds-vegetable-basket-grapes.jpg"
              alt="Happy farmer holding a box of fresh vegetables"
              width={720}
              height={720}
              className="w-full h-auto object-contain"
            />

            {/* floating brand pill */}
            <div className="hidden sm:flex items-center gap-2 absolute top-6 left-6 bg-white rounded-xl shadow-md px-3 py-2">
              <span className="w-6 h-6 rounded-full bg-pink-500 text-white text-xs grid place-items-center font-semibold">M</span>
              <span className="text-sm font-semibold text-slate-700">Fresh Harvest</span>
            </div>

            {/* floating small product card */}
            <div className="hidden sm:block absolute -bottom-4 right-4 w-28 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-2">
                <PlaceholderImage
                  src="/images/lettuce.png"
                  alt="Mustard"
                  width={120}
                  height={80}
                  className="w-full h-16 object-contain"
                />
                <p className="mt-1 text-[11px] text-gray-700">Mustard</p>
                <p className="text-[10px] text-gray-500">$1.1/kg</p>
                <div className="mt-1 mb-2 h-7 grid place-items-center text-[10px] text-gray-600 border rounded-md">Add to cart</div>
              </div>
            </div>
          </div>

          {/* small leaf deco */}
          <svg className="hidden sm:block absolute -top-3 right-12 w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
          </svg>
        </div>

        {/* Content (right) */}
        <div>
          <span className="inline-block text-[10px] sm:text-xs uppercase tracking-wide text-green-700 bg-green-100 px-3 py-1 rounded-full">About us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-800">About Fresh Harvest</h2>
          <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 max-w-xl">
            Welcome to Fresh Harvest, your premier destination for high-quality and
            fresh produce. We are passionate about providing you with the freshest fruits,
            vegetables, and specialty salads to nourish you from the inside out.
            With a dedication to sustainable sourcing and exceptional service, we
            strive to make your grocery shopping experience delightful.
          </p>
          <button className="mt-6 inline-flex items-center justify-center bg-orange-500 text-white px-5 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-orange-600 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}


