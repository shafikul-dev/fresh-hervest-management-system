import Image from 'next/image'
import React from 'react'

interface PlaceholderImageProps {
  width: number
  height: number
  alt: string
  className?: string
  children?: React.ReactNode
  src?: string
}

export function PlaceholderImage({ width, height, alt, className = '', children, src }: PlaceholderImageProps) {
  // If caller supplies Tailwind width/height classes (e.g., w-full, h-40),
  // avoid forcing fixed inline width/height so the component is responsive.
  const hasSizeClasses = /(^|\s)(w-|w\/|w-full|h-)/.test(className)

  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={hasSizeClasses ? { width: '100%', height: '100%', objectFit: 'cover' } : undefined}
        sizes={hasSizeClasses ? '(max-width: 640px) 100vw, 50vw' : undefined}
      />
    )
  }

  return (
    <div 
      className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}
      style={hasSizeClasses ? undefined : { width, height }}
    >
      {children || (
        <div className="text-center">
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c1.1 0 2 .9 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
          <p className="text-xs">{alt}</p>
        </div>
      )}
    </div>
  )
}
