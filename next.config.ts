import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
            },
            {
                protocol: 'https',
                hostname: 'wewantagent.com',
            },
        ],
    },
};

export default nextConfig;
