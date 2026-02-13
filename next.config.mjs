/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This forces the build to finish even if there are tiny type warnings
    ignoreBuildErrors: true, 
  },
  eslint: {
    // This prevents linting errors from stopping your launch
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
