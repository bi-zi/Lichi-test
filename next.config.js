/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.lichi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;