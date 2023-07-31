/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    loader: "akamai",
    path: "/",
  },
  eslint: {
    ignoreDuringBuilds: true,

  },

  typescript: {

    ignoreBuildErrors: true,

  }
}

module.exports = nextConfig
