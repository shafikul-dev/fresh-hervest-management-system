'use client'

import Link from 'next/link'
import { useState } from 'react'

export function FreshHarvestsHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative w-8 h-8">
            {/* Two overlapping leaf shapes forming H */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-green-600 rounded-full transform rotate-45"></div>
              <div className="absolute w-4 h-4 bg-green-500 rounded-full transform -rotate-45"></div>
            </div>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-green-800">Fresh Harvests</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/shop" className="text-gray-700 hover:text-green-600 font-medium">
            Shop
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
            About us
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-green-600 font-medium">
            Blog
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
          {/* Heart Icon with label - hidden on small screens */}
          <button className="hidden sm:flex items-center space-x-1 hover:bg-gray-100 rounded-lg px-2 py-1 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-sm text-gray-600 hidden lg:inline">Favorites</span>
          </button>

          {/* Cart Icon with notification and label */}
          <button className="relative flex items-center space-x-1 hover:bg-gray-100 rounded-lg px-2 py-1 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <span className="text-sm text-gray-600 hidden lg:inline">Cart</span>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">3</span>
            </div>
          </button>

          {/* Sign In Button */}
          <button className="bg-green-500 text-white px-3 sm:px-4 lg:px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm sm:text-base">
            <span className="hidden sm:inline">Sign in</span>
            <span className="sm:hidden">Sign in</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 py-4 bg-white relative z-50">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/shop" 
              className="text-gray-700 hover:text-green-600 font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-green-600 font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-green-600 font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="px-4 py-2 border-t border-gray-200 mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors w-full">
                Sign in
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* User Profile Section - Overlay - Hidden on mobile to avoid conflicts */}
      <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
            <span className="text-white font-semibold text-xl">JD</span>
          </div>
          <span className="text-sm text-gray-600 mt-2 font-medium">Home</span>
        </div>
      </div>
    </header>
  )
}
