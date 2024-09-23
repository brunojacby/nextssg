/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,  
  images: {
    unoptimized: true,
    domains: [
      "via.placeholder.com",
      "cdn.dummyjson.com",
      "jsonplaceholder.typicode.com",
    ],
  },
};

module.exports = nextConfig;
