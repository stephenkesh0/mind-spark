/** @type {import('next').NextConfig} */
const nextConfig = {
  // Here I pasted image hostname to be able to use external images because, react doesn't accept external images without adding the hostname here
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }, {hostname: "res.cloudinary.com"}],
  },
};

export default nextConfig;
