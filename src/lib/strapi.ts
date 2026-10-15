import type { BlogPost, BlogResponse } from "@/types/blog";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

const strapiEnabled = Boolean(STRAPI_URL && STRAPI_API_TOKEN);

const emptyPagination = {
    page: 1,
    pageSize: 10,
    pageCount: 0,
    total: 0,
};

export async function sFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    if (!strapiEnabled) {
        throw new Error("Strapi is disabled: API token is missing");
    }
    const headers: HeadersInit = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    };
    const res = await fetch(`${STRAPI_URL}${endpoint}`, {
        method: "GET",
        headers,
        cache: "no-store",
        ...options,
    });
    if (!res.ok) {
        throw new Error(`Strapi returned ${res.status}`);
    }
    return res.json();
}

export async function getBlogs(page = 1, pageSize = 10): Promise<BlogResponse> {
    return sFetch<BlogResponse>(
        `api/blogs?populate=feature_image&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
    );
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    if (!strapiEnabled) {
        return null;
    }

    const q = new URLSearchParams({
        "filters[slug][$eq]": slug,
        populate: "feature_image",
    });

    const data = await sFetch<BlogResponse>(`/api/blogs?${q.toString()}`);
    return data.data?.[0] ?? null;
}

export async function getLatestSlugs(limit = 10): Promise<string[]> {
    if (!strapiEnabled) {
        return [];
    }

    const data = await sFetch<BlogResponse>(
        `api/blogs?fields[0]=slug&pagination[page]=1&pagination[pageSize]=${limit}&sort=createdAt:desc`
    );

    return (data.data ?? [])
        .map((item: any) => item?.attributes?.slug ?? item?.slug)
        .filter(Boolean);
}

export async function fetchBlogs(page = 1, pageSize = 10) {
    if (!strapiEnabled) {
        return {
            data: [],
            pagination: {
                ...emptyPagination,
                page,
                pageSize,
            },
        };
    }
    try {
        const data = await getBlogs(page, pageSize);
        return {
            data: data.data ?? [],
            pagination: data.meta?.pagination ?? {
                ...emptyPagination,
                page,
                pageSize,
            },
        };
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return {
            data: [],
            pagination: {
                ...emptyPagination,
                page,
                pageSize,
            },
        };
    }
}