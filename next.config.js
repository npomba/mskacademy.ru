/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const { createSecureHeaders } = require('next-secure-headers')
const dev = process.env.NODE_ENV !== 'production'

const nextConfig = withPWA({
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    locales: ['ru_RU', 'kk_KZ', 'uz_UZ'],
    defaultLocale: 'ru_RU',
    localeDetection: true
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  pwa: {
    dest: 'public',
    disable: dev,
    register: true,
    scope: '/'
  },
  async headers() {
    return [
      {
        source: '/:path*',
        // headers: createSecureHeaders()
        headers: createSecureHeaders({
          referrerPolicy: 'no-referrer-when-downgrade',
          frameGuard: false
        })
      }
    ]
  }
})

module.exports = nextConfig
