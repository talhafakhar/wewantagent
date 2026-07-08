import React, {JSX} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {BlogPost, RichTextBlock} from "@/types/blog";
import FooterSection from "@/components/Footer/footer";
import GlowButton from "@/components/ui/GlowButton";
import {ArrowLeft, Calendar, RefreshCw} from "lucide-react";

interface BlogDetailProps {
    blog: BlogPost | null;
}

const BlogDetail: React.FC<BlogDetailProps> = ({blog}) => {
    if (!blog) {
        return (
            <div className="min-h-screen bg-[#07080c]">
                <motion.div
                    className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    <div className="max-w-md mx-auto">
                        <div
                            className="w-24 h-24 mx-auto mb-8 bg-white/[0.04] border border-white/10 rounded-full flex items-center justify-center">
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
                        <h1 className="text-4xl font-bold mb-4 text-white">Blog Not Found</h1>
                        <p className="text-gray-400 mb-8">
                            The blog post you&apos;re looking for doesn&apos;t exist or may have been moved.
                        </p>
                        <GlowButton href="/blogs">
                            ← Back to List
                        </GlowButton>
                    </div>
                </motion.div>
            </div>
        );
    }
    const imageUrl = blog.feature_image?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.feature_image.url}`
        : null;

    const formatDate = (iso: string) =>
        new Date(iso).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    const fadeInUp = {
        initial: {opacity: 0, y: 60},
        animate: {opacity: 1, y: 0},
        transition: {duration: 0.6, ease: "easeOut"},
    };

    const staggerContainer = {animate: {transition: {staggerChildren: 0.1}}};
    const renderRichText = (blocks?: RichTextBlock[] | string) => {
        if (!blocks) return null;
        if (typeof blocks === "string") return <p>{blocks}</p>;
        return (
            <>
                {blocks.map((block, index) => {
                    switch (block.type) {
                        case 'heading':
                            const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
                            return (
                                <HeadingTag
                                    key={index}
                                    className={`font-bold mb-4 bg-gradient-to-r from-white to-[#f2c14e] bg-clip-text text-transparent ${
                                        block.level === 1 ? 'text-4xl' :
                                            block.level === 2 ? 'text-3xl' :
                                                block.level === 3 ? 'text-2xl' :
                                                    'text-xl'
                                    }`}
                                >
                                    {block.children.map((child, i) => renderTextNode(child, i))}
                                </HeadingTag>
                            );

                        case 'list':
                            const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
                            const listClass = block.format === 'ordered' ? 'list-decimal' : 'list-disc';
                            return (
                                <ListTag key={index} className={`${listClass} ml-6 mb-4 space-y-2 marker:text-[#f2c14e]`}>
                                    {block.children.map((item, i) => (
                                        <li key={i}>
                                            {item.children?.map((child, j) => renderTextNode(child, j))}
                                        </li>
                                    ))}
                                </ListTag>
                            );

                        case 'quote':
                            return (
                                <blockquote
                                    key={index}
                                    className="border-l-4 border-[#f2c14e]/50 pl-4 italic my-4 text-gray-300"
                                >
                                    {block.children.map((child, i) => renderTextNode(child, i))}
                                </blockquote>
                            );

                        case 'code':
                            return (
                                <pre key={index} className="bg-white/[0.04] border border-white/10 p-4 rounded-xl overflow-x-auto mb-4">
                                <code>
                                    {block.children.map((child) => child.text).join('')}
                                </code>
                            </pre>
                            );

                        default:
                            return (
                                <p key={index} className="mb-4 leading-relaxed">
                                    {block.children.map((child, i) => renderTextNode(child, i))}
                                </p>
                            );
                    }
                })}
            </>
        );
    };

    const renderTextNode = (child: any, key: number) => {
        if (!child) return null;
        let content: React.ReactNode = child.text || '';
        const style: React.CSSProperties = {};
        if (child.color && !child.bold) {
            style.color = child.color;
        }
        if (child.backgroundColor) {
            style.backgroundColor = child.backgroundColor;
        }

        if (child.type === 'link') {
            return (
                <a
                    key={key}
                    href={child.url}
                    className="text-[#f2c14e] hover:text-[#4fd1a5] underline underline-offset-2 transition-colors"
                    target={child.url?.startsWith('http') ? '_blank' : '_self'}
                    rel={child.url?.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                    {child.children?.map((c: any, i: number) => renderTextNode(c, i)) || child.text}
                </a>
            );
        }
        if (child.code) {
            content = <code className="bg-white/10 px-2 py-1 rounded text-sm font-mono text-[#f2c14e]">{content}</code>;
        }

        if (child.bold) {
            content = (
                <strong className="bg-gradient-to-r from-white to-[#f2c14e] bg-clip-text text-transparent">
                    {content}
                </strong>
            );
        }

        if (child.italic) {
            content = <em>{content}</em>;
        }

        if (child.underline) {
            content = <u>{content}</u>;
        }

        if (child.strikethrough) {
            content = <s>{content}</s>;
        }
        if (Object.keys(style).length > 0) {
            return (
                <span key={key} style={style}>
                {content}
            </span>
            );
        }
        return <React.Fragment key={key}>{content}</React.Fragment>;
    };

    return (
        <div className="bg-[#07080c]">
            <div className="relative min-h-screen overflow-hidden">
                <div
                    className="pointer-events-none absolute -left-[10%] -top-[10%] h-[560px] w-[560px] rounded-full blur-[70px]"
                    style={{background: "radial-gradient(circle, rgba(242,193,78,0.18), transparent 65%)"}}
                />
                <div
                    className="pointer-events-none absolute -right-[10%] top-[20%] h-[480px] w-[480px] rounded-full blur-[70px]"
                    style={{background: "radial-gradient(circle, rgba(79,209,165,0.14), transparent 65%)"}}
                />

                <div className="relative z-10 flex flex-col min-h-screen">
                    <motion.main
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-36 pb-20">
                            <motion.div variants={fadeInUp} className="mb-8">
                                <Link
                                    href="/blogs"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#f2c14e] transition-colors"
                                >
                                    <ArrowLeft className="w-4 h-4"/>
                                    Back to Blogs
                                </Link>
                            </motion.div>

                            <motion.header className="mb-12" variants={fadeInUp}>
                                {blog.tags && (
                                    <motion.div className="flex flex-wrap gap-1.5 mb-6" variants={fadeInUp}>
                                        {blog.tags?.map((tag, index) => (
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
                                        <Calendar size={14} className="text-[#f2c14e]"/>
                                        <span className="text-sm font-medium">
                                            Published {formatDate(blog.published)}
                                        </span>
                                    </div>

                                    {blog.updatedAt && blog.updatedAt !== blog.published && (
                                        <div className="flex items-center gap-2">
                                            <RefreshCw size={14} className="text-[#4fd1a5]"/>
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
                                        {renderRichText(blog.excerpt)}
                                    </motion.div>
                                )}
                            </motion.header>

                            {imageUrl && (
                                <motion.div className="mb-16" variants={fadeInUp}>
                                    <div
                                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] h-[260px] md:h-[380px] lg:h-[460px]">
                                        <Image
                                            src={imageUrl}
                                            alt={blog.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-transparent"/>
                                    </div>
                                </motion.div>
                            )}

                            <motion.article className="max-w-none mb-16" variants={fadeInUp}>
                                <div className="max-w-none text-gray-300">
                                    {renderRichText(blog.content)}
                                </div>
                            </motion.article>

                            <motion.footer className="py-8 border-t border-white/10" variants={fadeInUp}>
                                <GlowButton href="/">
                                    ← Back to Home
                                </GlowButton>
                            </motion.footer>
                        </div>
                    </motion.main>
                </div>
            </div>
            <FooterSection/>
        </div>
    );
};

export default BlogDetail;
