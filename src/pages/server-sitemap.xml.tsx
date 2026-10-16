import type { GetServerSideProps } from "next";
import type { BlogPost, PayloadListResponse } from "@/types/blog";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://wewantagent.com";

const PAYLOAD_URL = (
    process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://payloadcms3.on-forge.com"
).replace(/\/$/, "");

// ---------- Sitemap XML generator ----------
const generateSiteMap = (blogs: BlogPost[]) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogs
        .map((blog) => {
            const lastmod = (blog.updatedAt || blog.publishedAt || new Date().toISOString())
                .split("T")[0];
            return `  <url>
    <loc>${SITE_URL}/blogs/${blog.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
        })
        .join("\n")}
</urlset>`;
};

// ---------- Fetch all blogs from Payload ----------
async function getAllBlogs(): Promise<BlogPost[]> {
    const params = new URLSearchParams({
        limit: "1000",     // fetch up to 1000 blogs
        depth: "0",        // we only need slug + dates, no media/relations
        sort: "-updatedAt",
        draft: "false",
        trash: "false",
    });

    const res = await fetch(`${PAYLOAD_URL}/api/posts?${params.toString()}`, {
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Payload returned ${res.status}`);
    }

    const data: PayloadListResponse<BlogPost> = await res.json();
    return data.docs ?? [];
}

// ---------- SSR ----------
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    try {
        const blogs = await getAllBlogs();
        const sitemap = generateSiteMap(blogs);

        res.setHeader("Content-Type", "application/xml");
        // Cache at CDN for 1 hour, revalidate in background — good balance
        res.setHeader(
            "Cache-Control",
            "public, s-maxage=3600, stale-while-revalidate=86400"
        );
        res.write(sitemap);
        res.end();

        return { props: {} };
    } catch (error) {
        console.error("🚨 Error generating blog sitemap:", error);

        // Fail-safe: return empty but valid sitemap
        const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;

        res.setHeader("Content-Type", "application/xml");
        res.write(emptySitemap);
        res.end();

        return { props: {} };
    }
};

export default function SiteMap() {
    return null;
}