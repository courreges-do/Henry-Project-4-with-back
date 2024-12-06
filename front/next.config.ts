import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tandilphone.com.ar",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
