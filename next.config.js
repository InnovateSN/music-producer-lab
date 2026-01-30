/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep strict mode for better error detection
  reactStrictMode: true,

  // Configure public directory
  // Static HTML files can be accessed directly
  async rewrites() {
    return [
      // Allow direct access to static HTML files in root
      {
        source: '/:path*.html',
        destination: '/:path*.html',
      },
    ];
  },

  // Optimization
  poweredByHeader: false,
  compress: true,

  // Environment variables that are safe to expose to the browser
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },

  // Experimental features
  experimental: {
    // Enable server actions for forms
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Headers for security
  async headers() {
    return [
      {
        source: '/:path*',
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
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.com https://*.clerk.accounts.dev",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://*.clerk.com https://*.clerk.accounts.dev",
              "connect-src 'self' https://*.clerk.com https://*.clerk.accounts.dev https://*.neon.tech",
              "frame-src 'self' https://*.clerk.com https://*.clerk.accounts.dev",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
