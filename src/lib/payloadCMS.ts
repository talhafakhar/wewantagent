import type {BlogPost, BlogResponse, PayloadListResponse } from "@/types/blog";

const PAYLOAD_URL = (process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://payloadcms3.on-forge.com").replace(/\/$/, "");

/**
 * Generic fetch wrapper for Payload CMS REST API (public access, no API key).
 */
export async function pFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${PAYLOAD_URL}${
        endpoint.startsWith("/") ? endpoint : `/${endpoint}`
    }`;
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store",
        ...options,
    });

    const text = await res.text();

    if (!res.ok) {
        console.error(`❌ Payload fetch failed [${res.status}] ${url}`);
        console.error(text.slice(0, 300));
        throw new Error(`Payload returned ${res.status}`);
    }

    try {
        return JSON.parse(text);
    } catch {
        console.error(`❌ Invalid JSON from ${url}:`, text.slice(0, 200));
        throw new Error(`Invalid JSON from Payload`);
    }
}

/**
 * Get paginated blog posts.
 */
export async function getBlogs(page = 1, pageSize = 10, tenantSlug?: string): Promise<BlogResponse> {
    const params = new URLSearchParams({
        page: String(page),
        limit: String(pageSize),
        sort: "-publishedAt",
        depth: "2",
        draft: "false",
        trash: "false",
    });

    if (tenantSlug) {
        params.append("where[tenant.slug][equals]", tenantSlug);
    }

    const raw = await pFetch<PayloadListResponse<BlogPost>>(`/api/posts?${params.toString()}`);

    return {
        data: raw.docs ?? [],
        meta: {
            pagination: {
                page: raw.page ?? page,
                pageSize: raw.limit ?? pageSize,
                pageCount: raw.totalPages ?? 0,
                total: raw.totalDocs ?? 0,
            },
        },
    };
}

/**
 * Get one blog by slug.
 */
export async function getBlogBySlug(slug: string, tenantSlug?: string): Promise<BlogPost | null> {
    const params = new URLSearchParams({
        "where[slug][equals]": slug,
        limit: "1",
        depth: "2",
        draft: "false",
        trash: "false",
    });

    if (tenantSlug) {
        params.append("where[tenant.slug][equals]", tenantSlug);
    }

    const raw = await pFetch<PayloadListResponse<BlogPost>>(`/api/posts?${params.toString()}`);

    return raw.docs?.[0] ?? null;
}

/**
 * Get latest slugs for getStaticPaths.
 */
export async function getLatestSlugs(limit = 10, tenantSlug?: string): Promise<string[]> {
    const params = new URLSearchParams({
        limit: String(limit),
        sort: "-createdAt",
        depth: "0",
        draft: "false",
        trash: "false",
    });

    if (tenantSlug) {
        params.append("where[tenant.slug][equals]", tenantSlug);
    }

    const raw = await pFetch<PayloadListResponse<BlogPost>>(`/api/posts?${params.toString()}`);

    return (raw.docs ?? []).map((doc) => doc?.slug).filter(Boolean) as string[];
}

/**
 * Safe wrapper with fallback for the index page.
 */
export async function fetchBlogs(page = 1, pageSize = 10, tenantSlug?: string) {
    try {
        const data = await getBlogs(page, pageSize, tenantSlug);
        return {data: data.data ?? [], pagination: data.meta.pagination};
    } catch (error) {
        console.error("🚨 Error fetching blogs:", error);
        return {
            data: [],
            pagination: { page, pageSize, pageCount: 0, total: 0 },
        };
    }
}