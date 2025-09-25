'use client'

import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function CustomerTestimonials() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative leaves */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-green-500 opacity-60">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
            </svg>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-green-500 opacity-60">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 6,17.25C7.5,17.25 9,16.5 10,15.5C11,14.5 12,13.5 13,12.5C14,11.5 15,10.5 16,9.5C17,8.5 17,8 17,8Z"/>
            </svg>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with Fresh Harvests
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Customer Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <PlaceholderImage
                width={200}
                height={200}
                alt="Customer testimonial"
                className="rounded-full"
              >
                <div className="text-center p-8">
                  <div className="text-6xl mb-2">👨‍🌾</div>
                  <p className="text-sm text-gray-600">Happy Customer</p>
                </div>
              </PlaceholderImage>
              
              {/* Decorative orange splashes */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="flex-1">
            <div className="bg-gray-100 rounded-xl p-6 sm:p-8 relative">
              <div className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                &ldquo;Today I received my Fresh Harvest! The quality of their products is outstanding. 
                It&apos;s always fresh, flavorful, and delicious. The convenience of ordering online and 
                having it delivered to my doorstep is also a big plus! Fresh Harvest has become my 
                go-to for all my fruit and vegetable needs.&rdquo;
              </div>
              
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Jonathan,</span> @freshcustomer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
