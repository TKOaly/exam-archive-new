/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Permissions-Policy',
            value:
              'microphone=(), geolocation=(), usb=(), payment=(), autoplay=(), battery=(), display-capture=(), document-domain=(), encrypted-media=(), gamepad=(), gyroscope=(), midi=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=()'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; img-src 'self'; media-src 'self'; script-src 'self';"
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
