import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mariaschnee-pflege.de" }],
        destination: "https://mariaschnee-pflege.de/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
