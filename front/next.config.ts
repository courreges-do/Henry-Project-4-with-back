import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.tandilphone.com.ar",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
