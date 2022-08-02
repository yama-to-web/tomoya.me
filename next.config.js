/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['assets.st-note.com', 'scontent-nrt1-1.cdninstagram.com', 'images.microcms-assets.io'],
  },
}

module.exports = nextConfig
