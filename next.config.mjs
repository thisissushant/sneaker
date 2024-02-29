/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com" }],
    domains: ["plus.unsplash.com"],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
