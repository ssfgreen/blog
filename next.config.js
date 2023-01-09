const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // allow next/image to serve remote images from safelisted domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/samsfgreen/**",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
