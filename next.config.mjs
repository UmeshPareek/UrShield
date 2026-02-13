/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // Optimized for Giant assets
  images: { unoptimized: true }
};

export default nextConfig;
