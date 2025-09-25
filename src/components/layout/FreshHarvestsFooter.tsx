'use client'

import Link from 'next/link'

export function FreshHarvestsFooter() {
  return (
    <footer className="bg-gray-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Leftmost Section - Brand & App Downloads */}
          <div className="lg:col-span-1">
            {/* Logo and Brand Name */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-8 h-8">
                {/* Four-leaf clover-like icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full transform rotate-45"></div>
                  <div className="absolute w-4 h-4 bg-green-500 rounded-full transform -rotate-45"></div>
                </div>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-800">Fresh Harvests</span>
            </div>

            {/* Download App Section */}
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Download App</h3>
              <div className="space-y-3">
                {/* App Store Button */}
                <button className="flex items-center space-x-3 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>

                {/* Google Play Button */}
                <button className="flex items-center space-x-3 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-600">
              Copyright 2024. All Rights Reserved by Fresh Harvests.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Quick Links 1</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-green-600 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-green-600 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Quick Links 2</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/account" className="text-gray-600 hover:text-green-600 transition-colors">
                  Account
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-600 hover:text-green-600 transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/signin" className="text-gray-600 hover:text-green-600 transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-600 hover:text-green-600 transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us & Payment Methods */}
          <div>
            {/* Contact Us */}
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
              <div className="space-y-3">
                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">1-234-567-8900</span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">freshharvests@gmail.com</span>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Taman Jaya, Street, Perumda, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Accepted Payment Methods */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Accepted Payment Methods</h3>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                {/* VISA */}
                <div className="bg-blue-600 text-white px-2 sm:px-3 py-2 rounded text-xs sm:text-sm font-bold">
                  VISA
                </div>
                {/* PayPal */}
                <div className="bg-blue-600 text-white px-2 sm:px-3 py-2 rounded text-xs sm:text-sm font-bold">
                  PayPal
                </div>
                {/* Apple Pay */}
                <div className="bg-black text-white px-2 sm:px-3 py-2 rounded text-xs sm:text-sm font-bold flex items-center space-x-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Media Icons */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex justify-end">
          <div className="flex space-x-4">
            {/* Twitter */}
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.297c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 1.75c-1.297 0-2.448.49-3.323 1.297-.807.875-1.297 2.026-1.297 3.323s.49 2.448 1.297 3.323c.875.807 2.026 1.297 3.323 1.297s2.448-.49 3.323-1.297c.807-.875 1.297-2.026 1.297-3.323s-.49-2.448-1.297-3.323c-.875-.807-2.026-1.297-3.323-1.297z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
