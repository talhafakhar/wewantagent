import type { BlogPost, BlogResponse } from "@/types/blog";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://api.wewantagent.com";
const API_TOKEN = process.env.STRAPI_API_TOKEN || "081c1895ad5b206f85bd087ebb8ff34d2ab9e1e8ad3dd0ff0069daf4998b9d17ce33c254bbe7858bf464e08e066b69b23f6656120d830dc89b5c35caef41fce0a131f7062c0806edf118c475e1802b6775d4f6367256058b8f0aa0c173441ca51b80e35013d5e247f4745add80cf63d655e276d18cbd7b9c9368aea5276a9062"

if (!API_TOKEN) {
    console.warn("⚠️ No STRAPI API token found!");
}

export async function sFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${STRAPI_URL}${endpoint}`;
    const res = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            ...(API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {}),
        },
        cache: "no-store",
        ...options,
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to fetch ${endpoint}: ${res.status} — ${text}`);
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
