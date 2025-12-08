import { GetServerSideProps } from "next";
const SITE_URL = "https://wewantagent.com";
const generateSiteMap = (blogs: { slug: string; updatedAt: string }[]) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogs
        .map(
            (blog) => `
  <url>
    <loc>${SITE_URL}/blogs/${blog.slug}</loc>
    <lastmod>${new Date(blog.updatedAt).toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
        )
        .join("")}
</urlset>`;
};
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const API_TOKEN = process.env.STRAPI_API_TOKEN;
    const STRAPI_URL = process.env.STRAPI_URL || "https://api.wewantagent.com/";
    if (!API_TOKEN) {
        return {
            notFound: true,
        };
    }
    try {
        const response = await fetch(
            `${STRAPI_URL}/api/blogs?fields[0]=slug&pagination[page]=1&pagination[pageSize]=10&sort=createdAt:desc`,
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();

        const blogs = (data.data ?? []).map((blog: any) => ({
            slug: blog?.attributes?.slug ?? blog?.slug,
            updatedAt: blog?.attributes?.updatedAt ?? blog?.updatedAt ?? new Date().toISOString(),
        }));

        const sitemap = generateSiteMap(blogs);

        res.setHeader("Content-Type", "application/xml");
        res.write(sitemap);
        res.end();

        return {
            props: {},
        };
    } catch (error) {
        console.error("Error generating sitemap:", error);
        return {
            notFound: true,
        };
    }
};

export default function SiteMap() {
    return null;
}
