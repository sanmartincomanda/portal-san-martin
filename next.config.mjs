/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: import.meta.dirname },
  images: {
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1600, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname:
          "/v0/b/comanda-digital-ac1ec.firebasestorage.app/o/store%2Fcatalog%2F**",
      },
      {
        protocol: "https",
        hostname: "tienda.sanmartinsr.com",
        pathname: "/tienda/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
