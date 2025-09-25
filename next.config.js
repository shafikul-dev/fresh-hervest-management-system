/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features
  experimental: {
    // Server actions are enabled by default in Next.js 15
  },
  
  // Development configuration
  ...(process.env.NODE_ENV === 'development' && {
    // Disable file system caching to prevent ENOENT errors
    onDemandEntries: {
      // Period (in ms) where the server will keep pages in the buffer
      maxInactiveAge: 25 * 1000,
      // Number of pages that should be kept simultaneously without being disposed
      pagesBufferLength: 2,
    },
  }),
  
  // Image optimization
  images: {
    domains: ['your-api-domain.com'], // Add your API domain here
    formats: ['image/webp', 'image/avif'],
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add custom webpack configuration if needed
    
    // Development-specific optimizations to prevent ENOENT errors
    if (dev) {
      // Disable file system caching
      config.cache = false
      
      // Optimize file watching
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules/**', '**/.next/**', '**/.git/**'],
      }
      
      // Add error handling for missing files
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        })
      )
    }
    
    return config
  },
  
  // Output configuration for static export (if needed)
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }
}

module.exports = nextConfig
