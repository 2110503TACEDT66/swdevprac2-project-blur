/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
      domains: ['drive.google.com', 'drive.usercontent.google.com'],
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
