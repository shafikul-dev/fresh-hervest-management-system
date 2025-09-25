#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧹 Cleaning development environment...');

// Function to safely remove directory
function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Removed: ${dirPath}`);
    } catch (error) {
      console.log(`⚠️  Could not remove: ${dirPath} - ${error.message}`);
    }
  }
}

// Function to safely remove file
function removeFile(filePath) {
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed: ${filePath}`);
    } catch (error) {
      console.log(`⚠️  Could not remove: ${filePath} - ${error.message}`);
    }
  }
}

// Clean build artifacts
console.log('📁 Cleaning build artifacts...');
removeDir('.next');
removeDir('node_modules/.cache');
removeDir('node_modules/.next');

// Clean temporary files
console.log('🗑️  Cleaning temporary files...');
const tempFiles = [
  '.next/static/development/_buildManifest.js.tmp.*',
  '.next/static/development/_ssgManifest.js.tmp.*',
  '.next/static/development/_buildManifest.js',
  '.next/static/development/_ssgManifest.js'
];

// Kill any existing Next.js processes
console.log('🔄 Stopping existing Next.js processes...');
try {
  execSync('pkill -f "next dev" || true', { stdio: 'ignore' });
  console.log('✅ Stopped existing processes');
} catch (error) {
  console.log('ℹ️  No existing processes to stop');
}

// Wait a moment for processes to fully stop
setTimeout(() => {
  console.log('🚀 Starting development server...');
  try {
    execSync('npm run dev', { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ Failed to start development server:', error.message);
    process.exit(1);
  }
}, 1000);
