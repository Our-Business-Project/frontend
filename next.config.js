/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_API_URL: process.env.BACKEND_API_URL,
  },
  images: {
    domains: ['ik.imagekit.io'],
  },
};

module.exports = nextConfig;
