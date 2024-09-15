/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "via.placeholder.com",
      "cdn.dummyjson.com",
      "jsonplaceholder.typicode.com",
    ],
  },
};

module.exports = nextConfig;
