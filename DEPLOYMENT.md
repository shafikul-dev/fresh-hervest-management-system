# Deployment Guide - SM Technology Frontend

This guide provides step-by-step instructions for deploying the SM Technology frontend application to various platforms.

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Steps:
1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository
2. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
3. **Configure Environment Variables**:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://your-live-server-url.com
   NEXT_PUBLIC_APP_NAME=SM Technology
   NEXT_PUBLIC_APP_VERSION=1.0.0
   ```
4. **Deploy**: Click "Deploy" and your app will be live!

#### Custom Domain (Optional):
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

### 2. Netlify

#### Steps:
1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add the same variables as Vercel
4. **Deploy**: Connect your GitHub repository and deploy

### 3. AWS Amplify

#### Steps:
1. **Connect Repository**: Link your GitHub repository
2. **Build Settings**:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
3. **Environment Variables**: Add your environment variables
4. **Deploy**: Save and deploy

### 4. Railway

#### Steps:
1. **Connect GitHub**: Link your repository
2. **Environment Variables**: Add your variables
3. **Deploy**: Railway will automatically detect Next.js and deploy

## 🔧 Manual Deployment

### Build for Production

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start
```

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t sm-technology-frontend .
docker run -p 3000:3000 sm-technology-frontend
```

## 🌐 Environment Configuration

### Required Environment Variables

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://your-live-server-url.com

# App Configuration
NEXT_PUBLIC_APP_NAME=SM Technology
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### Optional Environment Variables

```env
# Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# Error Tracking
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_ERROR_TRACKING=true
```

## 📊 Performance Optimization

### 1. Image Optimization
- Use Next.js `Image` component for automatic optimization
- Configure image domains in `next.config.js`
- Use WebP/AVIF formats when possible

### 2. Bundle Analysis
```bash
npm install --save-dev @next/bundle-analyzer
```

Add to `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Run analysis:
```bash
ANALYZE=true npm run build
```

### 3. Caching Strategy
- Static assets are automatically cached
- API responses use RTK Query caching
- Configure CDN caching headers

## 🔒 Security Considerations

### 1. Environment Variables
- Never commit `.env.local` to version control
- Use platform-specific environment variable management
- Rotate API keys regularly

### 2. Headers Configuration
The app includes security headers in `next.config.js`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

### 3. HTTPS
- Always use HTTPS in production
- Configure SSL certificates
- Use HSTS headers

## 📈 Monitoring and Analytics

### 1. Performance Monitoring
- Use Vercel Analytics (if on Vercel)
- Integrate Google Analytics
- Set up error tracking with Sentry

### 2. Health Checks
Create a health check endpoint:
```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({ status: 'ok', timestamp: new Date().toISOString() })
}
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check environment variables
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Runtime Errors**:
   - Check browser console for errors
   - Verify API endpoints are accessible
   - Check CORS configuration

3. **Performance Issues**:
   - Run bundle analysis
   - Check image optimization
   - Monitor Core Web Vitals

### Debug Mode
Enable debug mode in development:
```bash
DEBUG=* npm run dev
```

## 📞 Support

For deployment issues:
- Check platform-specific documentation
- Review Next.js deployment guide
- Contact: 01886807417

## 📋 Pre-Deployment Checklist

- [ ] All tests passing (`npm test`)
- [ ] Build successful (`npm run build`)
- [ ] Environment variables configured
- [ ] API endpoints accessible
- [ ] Images optimized
- [ ] Security headers configured
- [ ] Performance optimized
- [ ] Error handling implemented
- [ ] Analytics configured (if needed)
- [ ] SSL certificate configured
- [ ] Domain configured
- [ ] Monitoring set up

---

**Ready to deploy!** 🚀

Choose your preferred deployment method and follow the steps above. The application is optimized for production and ready to handle real-world traffic.
