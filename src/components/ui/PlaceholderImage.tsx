interface PlaceholderImageProps {
  width: number
  height: number
  alt: string
  className?: string
  children?: React.ReactNode
}

export function PlaceholderImage({ width, height, alt, className = '', children }: PlaceholderImageProps) {
  return (
    <div 
      className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}
      style={{ width, height }}
    >
      {children || (
        <div className="text-center">
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
          <p className="text-xs">{alt}</p>
        </div>
      )}
    </div>
  )
}
