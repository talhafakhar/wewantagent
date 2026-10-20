// ======================
// MEDIA
// ======================
export interface MediaSize {
    url: string;
    width: number;
    height: number;
    mimeType?: string;
    filesize?: number;
    filename?: string;
}

export interface Media {
    id: number;
    alt?: string | null;
    url: string;
    thumbnailURL?: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    focalX?: number;
    focalY?: number;
    sizes?: {
        thumbnail?: MediaSize;
        card?: MediaSize;
        hero?: MediaSize;
        [key: string]: MediaSize | undefined;
    };
    createdAt: string;
    updatedAt: string;
}

// ======================
// LEXICAL RICH TEXT
// ======================
export interface LexicalNode {
    type: string;
    version?: number;
    text?: string;
    format?: number | string;
    detail?: number;
    mode?: string;
    style?: string;
    tag?: string;
    listType?: "number" | "bullet" | "check";
    start?: number;
    value?: number;
    url?: string;
    fields?: { url?: string; newTab?: boolean; linkType?: string };
    children?: LexicalNode[];
    direction?: string | null;
    indent?: number;
    textFormat?: number;
    textStyle?: string;
    [key: string]: any;
}

export interface LexicalRoot {
    root: {
        type: "root";
        children: LexicalNode[];
        direction?: string | null;
        format?: string | number;
        indent?: number;
        version?: number;
    };
}

// ======================
// TENANT
// ======================
export interface Tenant {
    id: number;
    name: string;
    slug: string;
    domains?: Array<{ id: string; domain: string }>;
    updatedAt: string;
    createdAt: string;
}

// ======================
// AUTHOR
// ======================
export interface Author {
    id: number;
    tenant: number | Tenant;
    name: string;
    role?: string | null;
    bio?: string | null;
    photo?: Media | number | null;
    website?: string | null;
    updatedAt: string;
    createdAt: string;
}

// ======================
// CATEGORY / TAG
// ======================
export interface Category {
    id: number;
    tenant?: Tenant | number;
    name: string;
    slug: string;
    description?: string | null;
    updatedAt: string;
    createdAt: string;
}

export interface Tag {
    id: number;
    tenant?: Tenant | number;
    name: string;
    slug: string;
    description?: string | null;
    updatedAt: string;
    createdAt: string;
}

// ======================
// BLOG POST
// ======================
export interface BlogPost {
    id: number;
    tenant?: Tenant | number;
    title: string;
    slug: string;
    excerpt?: string;
    heroImage?: Media | number | null;
    author?: Author | number | null;
    categories?: Category[] | number[];
    tags?: Tag[] | number[];
    readingTime?: number | null;
    content?: LexicalRoot | string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
    _status?: "draft" | "published";
    meta?: {
        title?: string;
        description?: string;
        image?: Media | number | null;
    };
}

// ======================
// PAYLOAD RESPONSES
// ======================
export interface PayloadListResponse<T> {
    docs: T[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface BlogResponse {
    data: BlogPost[];
    meta: { pagination: Pagination };
}