/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'openweathermap.org' }],
    qualities: [75, 85, 100],
  },
};

export default nextConfig;
