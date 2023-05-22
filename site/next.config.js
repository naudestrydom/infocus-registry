/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Final Guru Repo',
    description: 'Custom store for Kasm supported workspaces.',
    icon: 'https://userverifried.github.io/kasm-registry/1.0/icon.png',
    listUrl: 'https://userverifried.github.io/kasm-registry/',
    contactUrl: 'https://userverifried.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
