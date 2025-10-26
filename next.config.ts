import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://sekigahara.live-first.info/**')],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
}

export default nextConfig
