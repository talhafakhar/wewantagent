import type { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo, ArticleJsonLd } from "next-seo";
import { getBlogBySlug, getLatestSlugs } from "@/lib/strapi";
import type { BlogPost } from "@/types/blog";
import BlogDetail from "@/components/Blog/BlogDetail";
type Props = { blog: BlogPost };
export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getLatestSlugs(10);
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: "blocking",
    };
};
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const slug = String(params!.slug);
    const blog = await getBlogBySlug(slug);

    if (!blog) {
        return { notFound: true, revalidate: 60 };
    }

    return {
        props: { blog },
        revalidate: 300,
    };
};

export default function BlogPostPage({ blog }: Props) {
    const {
        title,
        excerpt,
        slug,
        feature_image,
        publishedAt,
        updatedAt,
    } = blog;

    const description = typeof excerpt === "string"
        ? excerpt
        : excerpt?.map(block => block.children.map(c => c.text).join("")).join(" ") || "";

    const imageUrl = feature_image?.url
        ? `https://api.wewantagent.com${feature_image.url}`
        : "https://wewantagent.com/default-blog.jpg";

    const canonicalUrl = `https://wewantagent.com/blogs/${slug}`;

    return (
        <>
            <NextSeo
                title={title || "We Want Agent Blog"}
                description={description}
                canonical={canonicalUrl}
                openGraph={{
                    type: "article",
                    url: canonicalUrl,
                    title,
                    description,
                    images: [
                        { url: imageUrl, width: 1200, height: 630, alt: title },
                    ],
                    article: {
                        publishedTime: publishedAt,
                        modifiedTime: updatedAt,
                        authors: ["We Want Agent"],
                    },
                }}
                additionalMetaTags={[
                    { name: "robots", content: "index, follow" },
                    { name: "author", content: "We Want Agent" },
                ]}
            />
            <ArticleJsonLd
                useAppDir={false}
                url={canonicalUrl}
                title={title}
                images={[imageUrl]}
                datePublished={publishedAt}
                dateModified={updatedAt}
                authorName={"We Want Agent"}
                publisherName="We Want Agent"
                publisherLogo="https://wewantagent.com/assets/logo.png"
                description={description}
            />
            <BlogDetail blog={blog} />
        </>
    );
}
