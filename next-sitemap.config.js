/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://wewantagent.com',
    generateRobotsTxt: true,
    exclude: [
        '/api/*',
        '/_next/*',
        '/admin/*',
        '/_error',
        '/404',
        '/500',
        'about-us',
        '/blogs',
        '/blogs/[slug]',
        '/server-sitemap.xml',
        '/server-sitemap-index.xml'
    ],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/', disallow: [ '/api/', '/_next/', '/admin/','about-us']},
            { userAgent: 'GPTBot', allow: '/' },
            { userAgent: 'ChatGPT-User', allow: '/' },
            { userAgent: 'CCBot', allow: '/' },
            { userAgent: 'ClaudeBot', allow: '/' },
            { userAgent: 'Google-Extended', allow: '/' },
            { userAgent: 'Amazonbot', allow: '/' },
            { userAgent: 'Applebot', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },
        ],
        additionalSitemaps: [
            'https://wewantagent.com/server-sitemap.xml',
        ]
    },
    transform: async (config, path) => {
        if (path.startsWith('/blogs')) return null;

        const priorities = {
            '/': 1.0,
            '/automationexpert': 0.8,
            '/contact': 0.8,
            '/services': 0.9,
        };
        const changeFreqs = {
            '/': 'daily',
            '/contact': 'monthly',
            '/automationexpert': 'monthly',
        };

        const lastmodDate = new Date();
        const lastmodMonthly = `${lastmodDate.getFullYear()}-${String(
            lastmodDate.getMonth() + 1
        ).padStart(2, '0')}`;

        return {
            loc: path,
            changefreq: changeFreqs[path] || 'monthly',
            priority: priorities[path] || 0.5,
            lastmod: lastmodMonthly,
        };
    },
};
