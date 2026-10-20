import React, { JSX } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { BlogPost, LexicalNode, Media, Tag } from "@/types/blog";
import FooterSection from "@/components/Footer/footer";
import GlowButton from "@/components/ui/GlowButton";
import { Calendar, RefreshCw } from "lucide-react";

interface BlogDetailProps {
    blog: BlogPost | null;
}
const F_BOLD = 1;
const F_ITALIC = 2;
const F_STRIKE = 4;
const F_UNDER = 8;
const F_CODE = 16;
const F_SUB = 32;
const F_SUP = 64;

const HEADING_SIZE: Record<string, string> = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
};

function renderLexicalNode(node: LexicalNode, key: number): React.ReactNode {
    if (!node) return null;

    switch (node.type) {
        case "root":
            return (
                <React.Fragment key={key}>
                    {node.children?.map((c, i) => renderLexicalNode(c, i))}
                </React.Fragment>
            );

        case "paragraph":
            return (
                <p key={key} className="mb-4 leading-relaxed">
                    {node.children?.map((c, i) => renderLexicalNode(c, i))}
                </p>
            );

        case "heading": {
            const tag = node.tag || "h2";
            const Tag = tag as keyof JSX.IntrinsicElements;
            return (
                <Tag
                    key={key}
                    className={`font-bold mb-4 mt-6 bg-gradient-to-r from-white to-[#f2c14e] bg-clip-text text-transparent ${
                        HEADING_SIZE[tag] ?? "text-2xl"
                    }`}
                >
                    {node.children?.map((c, i) => renderLexicalNode(c, i))}
                </Tag>
            );
        }

        case "list": {
            const ordered = node.listType === "number";
            const ListTag = ordered ? "ol" : "ul";
            const cls = ordered
                ? "list-decimal ml-6 mb-4 space-y-2 marker:text-[#f2c14e]"
                : "list-disc ml-6 mb-4 space-y-2 marker:text-[#f2c14e]";
            return (
                <ListTag key={key} className={cls}>
                    {node.children?.map((c, i) => renderLexicalNode(c, i))}
                </ListTag>
            );
        }

        case "listitem":
            return (
                <li key={key}>
                    {node.children?.map((c, i) => renderLexicalNode(c, i))}
                </li>
            );

        case "quote":
            return (
                <blockquote
                    key={key}
                    className="border-l-4 border-[#f2c14e]/50 pl-4 italic my-4 text-gray-300"
                >
                    {node.children?.map((c, i) => renderLexicalNode(c, i))}
                </blockquote>
            );

        case "link":
        case "autolink": {
            const url = node.fields?.url || node.url || "#";
            const newTab = node.fields?.newTab ?? /^https?:\/\//.test(url);
            return (
                <a
                    key={key}
                    href={url}
                    className="text-[#f2c14e] hover:text-[#4fd1a5] underline underline-offset-2 transition-colors"
                    target={newTab ? "_blank" : "_self"}
                    rel={newTab ? "noopener noreferrer" : ""}
                >
                    {node.children?.map((c, i) => renderLexicalNode(c, i))}
                </a>
            );
        }

        case "linebreak":
            return <br key={key} />;

        case "horizontalrule":
            return <hr key={key} className="my-8 border-white/10" />;

        case "text": {
            let content: React.ReactNode = node.text ?? "";
            const fmt = typeof node.format === "number" ? node.format : 0;

            if (fmt & F_CODE)
                content = (
                    <code className="bg-white/10 px-2 py-1 rounded text-sm font-mono text-[#f2c14e]">
                        {content}
                    </code>
                );
            if (fmt & F_BOLD)
                content = (
                    <strong className="bg-gradient-to-r from-[#f2c14e] to-white bg-clip-text text-transparent">
                        {content}
                    </strong>
                );
            if (fmt & F_ITALIC) content = <em>{content}</em>;
            if (fmt & F_UNDER) content = <u>{content}</u>;
            if (fmt & F_STRIKE) content = <s>{content}</s>;
            if (fmt & F_SUB) content = <sub>{content}</sub>;
            if (fmt & F_SUP) content = <sup>{content}</sup>;

            return <React.Fragment key={key}>{content}</React.Fragment>;
        }

        default:
            return node.children ? (
                <React.Fragment key={key}>
                    {node.children.map((c, i) => renderLexicalNode(c, i))}
                </React.Fragment>
            ) : null;
    }
}

function renderRichText(rich?: BlogPost["content"] | string): React.ReactNode {
    if (!rich) return null;
    if (typeof rich === "string") return <p>{rich}</p>;
    return renderLexicalNode(rich.root as unknown as LexicalNode, 0);
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
    if (!blog) {
        return (
            <div className="min-h-screen bg-[#07080c]">
                <motion.div
                    className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-md mx-auto">
                        <div className="w-24 h-24 mx-auto mb-8 bg-white/[0.04] border border-white/10 rounded-full flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-[#f2c14e]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold mb-4 text-white">
                            Blog Not Found
                        </h1>
                        <p className="text-gray-400 mb-8">
                            The blog post you&apos;re looking for doesn&apos;t exist or may
                            have been moved.
                        </p>
                        <GlowButton href="/blogs">← Back to List</GlowButton>
                    </div>
                </motion.div>
            </div>
        );
    }

    const img = typeof blog.heroImage === "object" && blog.heroImage
            ? (blog.heroImage as Media)
            : null;

    const imageUrl = img?.url ? img.url.startsWith("http")
            ? img.url
            : `${process.env.NEXT_PUBLIC_PAYLOAD_URL}${img.url}`
        : null;

    const formatDate = (iso: string) =>
        new Date(iso).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    const tags: string[] = Array.isArray(blog.tags) ? blog.tags
            .map((t) => (typeof t === "object" && t ? (t as Tag).name : ""))
            .filter(Boolean)
        : [];

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" as const },
    };
    const staggerContainer = {
        animate: { transition: { staggerChildren: 0.1 } },
    };

    return (
        <div className="bg-[#07080c]">
            <div className="relative flex flex-col justify-end min-h-[320px] md:min-h-[380px] lg:min-h-[440px] overflow-hidden">
                {imageUrl ? (
                    <>
                        <Image
                            src={imageUrl}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-[#07080c]/60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-[#07080c]/60 to-[#07080c]/20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#07080c]/80 via-[#07080c]/30 to-transparent" />
                    </>
                ) : (
                    <>
                        <div
                            className="pointer-events-none absolute -left-[10%] -top-[10%] h-[560px] w-[560px] rounded-full blur-[70px]"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(242,193,78,0.18), transparent 65%)",
                            }}
                        />
                        <div
                            className="pointer-events-none absolute -right-[10%] top-[20%] h-[480px] w-[480px] rounded-full blur-[70px]"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(79,209,165,0.14), transparent 65%)",
                            }}
                        />
                    </>
                )}

                <motion.header
                    className="relative z-10 max-w-5xl mx-auto w-full px-6 lg:px-8 pt-32 pb-14 text-left"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {tags.length > 0 && (
                        <motion.div
                            className="flex flex-wrap gap-1.5 mb-6"
                            variants={fadeInUp}
                        >
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-block text-[11px] font-medium tracking-wide text-primary/90 bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1"
                                >
                                    #{tag.trim()}
                                </span>
                            ))}
                        </motion.div>
                    )}

                    <motion.h1
                        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
                        variants={fadeInUp}
                    >
                        <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                            {blog.title}
                        </span>
                    </motion.h1>

                    <motion.div
                        className="flex flex-wrap items-center gap-6 text-gray-400 mb-8"
                        variants={fadeInUp}
                    >
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-[#f2c14e]" />
                            <span className="text-sm font-medium">
                                Published {formatDate(blog.publishedAt)}
                            </span>
                        </div>

                        {blog.updatedAt && blog.updatedAt !== blog.publishedAt && (
                            <div className="flex items-center gap-2">
                                <RefreshCw size={14} className="text-[#4fd1a5]" />
                                <span className="text-sm font-medium">
                                    Updated {formatDate(blog.updatedAt)}
                                </span>
                            </div>
                        )}
                    </motion.div>

                    {blog.excerpt && (
                        <motion.div
                            className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl"
                            variants={fadeInUp}
                        >
                            {blog.excerpt}
                        </motion.div>
                    )}
                </motion.header>
            </div>

            <div className="relative overflow-hidden">
                <div
                    className="pointer-events-none absolute -right-[10%] top-[10%] h-[480px] w-[480px] rounded-full blur-[70px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(79,209,165,0.14), transparent 65%)",
                    }}
                />
                <motion.main
                    className="relative z-10"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-16 pb-20">
                        <motion.article className="max-w-none mb-16" variants={fadeInUp}>
                            <div className="max-w-none text-gray-300">
                                {renderRichText(blog.content)}
                            </div>
                        </motion.article>

                        <motion.footer
                            className="py-8 border-t border-white/10"
                            variants={fadeInUp}
                        >
                            <GlowButton href="/">← Back to Home</GlowButton>
                        </motion.footer>
                    </div>
                </motion.main>
            </div>
            <FooterSection />
        </div>
    );
};

export default BlogDetail;