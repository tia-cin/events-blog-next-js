/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["external-content.duckduckgo.com", "cdn-icons-png.flaticon.com"],
  },
};

module.exports = nextConfig;
