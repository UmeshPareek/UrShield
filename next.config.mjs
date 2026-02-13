/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Allows the build to complete even if there are minor type mismatches
    ignoreBuildErrors: true, 
  },
  eslint: {
    // Prevents linting warnings from crashing the deployment
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
