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
                destination: '/about',
                permanent: true,
            },
            {
                source: '/automationexpert',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/services/realestateaiagent',
                destination: '/services/real-estate',
                permanent: true,
            },
            {
                source: '/services/healthcareautomation',
                destination: '/services/healthcare',
                permanent: true,
            },
            {
                source: '/services/bookkeepingai',
                destination: '/services/bookkeeping',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
