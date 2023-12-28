/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**.coverland.com',
      },
    ],
  },
};

module.exports = nextConfig;
