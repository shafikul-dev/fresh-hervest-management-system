# Development Guide

## 🚀 Quick Start

### Regular Development
```bash
npm run dev
```
This will start the development server with optimized settings to prevent ENOENT errors.

### Clean Development (if you encounter issues)
```bash
npm run dev:clean
```
This will automatically clean cache and restart the server.

### Fresh Start (nuclear option)
```bash
npm run dev:fresh
```
This will completely clean everything and start fresh.

## 🔧 Development Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with optimized settings |
| `npm run dev:clean` | Clean cache and restart server automatically |
| `npm run dev:fresh` | Complete clean and fresh start |
| `npm run clean` | Just clean cache without starting server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |

## 🛠️ ENOENT Error Prevention

The following optimizations have been implemented to prevent ENOENT errors:

### 1. Next.js Configuration
- Disabled file system caching in development
- Optimized webpack file watching
- Added proper error handling for missing files

### 2. Development Scripts
- Automatic cache cleaning
- Process management
- File system optimization

### 3. Environment Settings
- Disabled telemetry
- Optimized file watching with polling
- Reduced cache conflicts

## 🔍 Troubleshooting

### If you still get ENOENT errors:

1. **Use the clean script:**
   ```bash
   npm run dev:clean
   ```

2. **Manual clean:**
   ```bash
   npm run clean
   npm run dev
   ```

3. **Complete reset:**
   ```bash
   rm -rf .next node_modules/.cache
   npm run dev
   ```

### Common Issues:

- **Port already in use**: Kill existing processes with `pkill -f "next dev"`
- **Permission errors**: Make sure you have write permissions in the project directory
- **File system issues**: Use the clean scripts to reset the development environment

## 📁 Project Structure

```
sm-technology-frontend/
├── scripts/
│   ├── dev-config.js      # Development configuration
│   ├── dev-clean.js       # Clean development script
│   └── setup-env.js       # Environment setup
├── src/
│   ├── components/        # React components
│   ├── store/            # Redux store
│   └── app/              # Next.js app directory
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🎯 Best Practices

1. **Always use `npm run dev`** for regular development
2. **Use `npm run dev:clean`** if you encounter any issues
3. **Don't manually delete `.next` folder** - use the scripts instead
4. **Keep the development server running** - avoid frequent restarts
5. **Use the clean scripts** when switching branches or after major changes

## 🚨 Emergency Reset

If everything breaks:

```bash
# Stop all processes
pkill -f "next dev"

# Clean everything
rm -rf .next node_modules/.cache

# Reinstall dependencies (if needed)
npm install

# Start fresh
npm run dev
```

This should resolve any persistent development issues.
