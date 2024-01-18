/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["lh3.googleusercontent.com", "open.spotifycdn.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "open.spotifycdn.com",
            },
        ],
    },
};

export default nextConfig;
