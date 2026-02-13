/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Allows the build to complete even with type mismatches
    ignoreBuildErrors: true, 
  },
  eslint: {
    // Prevents linting from stopping the build
    ignoreDuringBuilds: true,
  },
  // Ensure the build process handles the CSS loader correctly
  swcMinify: true,
};

export default nextConfig;
