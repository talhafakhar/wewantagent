import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.wewantagent.com',
            },
            {
                protocol: 'https',
                hostname: 'wewantagent.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/about-us',
                destination: '/automationexpert',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
