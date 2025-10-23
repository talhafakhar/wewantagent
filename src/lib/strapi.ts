import type { BlogPost, BlogResponse } from "@/types/blog";
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "https://api.wewantagent.com";
const API_TOKEN = process.env.STRAPI_API_TOKEN;
if (!API_TOKEN) {
    console.warn("⚠️ No STRAPI_API_TOKEN found in environment variables!");
}
export async function sFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${STRAPI_URL}${endpoint}`;
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...(API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {}),
        },
        cache: "no-store",
        ...options,
    });

    if (!res.ok) {
        const text = await res.text();
        console.error(`❌ Failed to fetch ${endpoint}:`, res.status, text);
        throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
    }

    return res.json();
}
export async function getBlogs(page = 1, pageSize = 10): Promise<BlogResponse> {
    return sFetch<BlogResponse>(
        `/api/blogs?populate=feature_image&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
    );
}
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const q = new URLSearchParams({
        "filters[slug][$eq]": slug,
        populate: "feature_image",
    });
    const data = await sFetch<BlogResponse>(`/api/blogs?${q.toString()}`);
    return data.data?.[0] ?? null;
}
export async function getLatestSlugs(limit = 50): Promise<string[]> {
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
