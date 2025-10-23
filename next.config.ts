import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'api.wewantagent.com',
            },
            {
                protocol: 'https',
                hostname: 'wewantagent.com',
            },
        ],
    },
};

export default nextConfig;
