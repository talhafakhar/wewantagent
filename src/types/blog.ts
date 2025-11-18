// ======================
// MEDIA TYPES
// ======================

export interface MediaFormat {
    url: string;
    width: number;
    height: number;
}

export interface Media {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    width: number;
    height: number;
    formats?: {
        thumbnail?: MediaFormat;
        small?: MediaFormat;
        medium?: MediaFormat;
        large?: MediaFormat;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    provider: string;
    provider_metadata?: any;
    previewUrl?: string | null;
}

// ======================
// BLOG TYPES
// ======================
export interface RichTextBlock {
    type: string;
    level?: number;
    format?: 'ordered' | 'unordered';
    children: Array<RichTextChild>;
}
export interface RichTextChild {
    text: string;
    type?: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
    color?: string;
    backgroundColor?: string;
    url?: string;
    children?: Array<RichTextChild>;
}

export interface BlogPost {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    content?: RichTextBlock[] | string;
    excerpt?: RichTextBlock[] | string;
    tags?: string[];
    published: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    feature_image?: Media | null;
}

// ======================
// STRAPI RESPONSE TYPES
// ======================

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface BlogResponse {
    data: BlogPost[];
    meta: {
        pagination: Pagination;
    };
}
