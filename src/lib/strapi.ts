import type { BlogPost, BlogResponse } from "@/types/blog";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://api.wewantagent.com";
const STRAPI_API_TOKEN =
    process.env.STRAPI_API_TOKEN

export async function sFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${STRAPI_URL}${endpoint}`;
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
        ...options,
    });

    const text = await res.text();

    if (!res.ok) {
        console.error(`❌ Fetch failed [${res.status}] ${url}`);
        console.error(text.slice(0, 200));
        throw new Error(`Strapi returned ${res.status}`);
    }

    try {
        return JSON.parse(text);
    } catch {
        console.error(`❌ Invalid JSON from ${url}:`, text.slice(0, 200));
        throw new Error(`Invalid JSON from Strapi`);
    }
}

export async function getBlogs(page = 1, pageSize = 10): Promise<BlogResponse> {
    return sFetch<BlogResponse>(
        `/api/blogs?populate=feature_image&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
    );
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    // Don't specify `.url` in populate; Strapi will return full image object
    const q = new URLSearchParams({
        "filters[slug][$eq]": slug,
        populate: "feature_image",
    });
    const data = await sFetch<BlogResponse>(`/api/blogs?${q.toString()}`);
    return data.data?.[0] ?? null;
}
export async function getLatestSlugs(limit = 10): Promise<string[]> {
    const data = await sFetch<any>(
        `/api/blogs?fields[0]=slug&pagination[page]=1&pagination[pageSize]=${limit}&sort=createdAt:desc`
    );
    return (data.data ?? [])
        .map((x: any) => x?.attributes?.slug ?? x?.slug)
        .filter(Boolean);
}

export async function fetchBlogs(page = 1, pageSize = 10) {
    try {
        const data = await getBlogs(page, pageSize);
        return { data: data.data ?? [], pagination: data.meta.pagination };
    } catch (error) {
        console.error("🚨 Error fetching blogs:", error);
        return { data: [], pagination: { page, pageSize, pageCount: 0, total: 0 } };
    }
}
