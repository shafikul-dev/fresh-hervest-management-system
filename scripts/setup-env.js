#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const envExample = `# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://your-live-server-url.com

# App Configuration
NEXT_PUBLIC_APP_NAME=SM Technology
NEXT_PUBLIC_APP_VERSION=1.0.0

# Optional: Add other environment variables as needed
# NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
# NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
`

const envPath = path.join(process.cwd(), '.env.local')

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envExample)
  console.log('✅ Created .env.local file with default configuration')
  console.log('📝 Please update the API_BASE_URL with your actual server URL')
} else {
  console.log('⚠️  .env.local file already exists')
}

console.log('\n🚀 Setup complete! You can now run:')
console.log('   npm run dev')
