// Development configuration to prevent ENOENT errors
process.env.NODE_ENV = 'development';
process.env.NEXT_TELEMETRY_DISABLED = '1';
process.env.NEXT_DISABLE_CACHE = '1';
process.env.WEBPACK_DISABLE_CACHE = 'true';
process.env.NEXT_DISABLE_FILE_SYSTEM_CACHE = '1';

// Set file system polling for better file watching
process.env.CHOKIDAR_USEPOLLING = 'true';
process.env.CHOKIDAR_INTERVAL = '1000';

console.log('🔧 Development configuration loaded');
console.log('📁 File system caching disabled');
console.log('👀 File watching optimized');
