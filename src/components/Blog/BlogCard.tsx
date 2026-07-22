import React from "react";
import Link from "next/link";
import Image from "next/image";
import {BlogPost} from "@/types/blog";
import {ArrowRight, Calendar} from "lucide-react";

interface BlogCardProps {
    blog: BlogPost;
    id: number;
}

const BlogCard: React.FC<BlogCardProps> = ({blog, id}) => {
    const imageUrl = blog.feature_image?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.feature_image.url}`
        : null;

    const imageAlt = blog.feature_image?.alternativeText || blog.title || "Blog cover image";

    const formatDate = (dateString: string) =>
        new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    return (
        <div
            className="group relative h-full flex flex-col bg-white/[0.04] backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10 transform-gpu transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(242,193,78,0.6),0_0_55px_rgba(242,193,78,0.35)]"
            style={{animation: `fadeInUp 0.6s ease-out ${id * 0.1}s both`}}>
            {imageUrl && (
                <div className="relative overflow-hidden h-56 rounded-t-2xl isolate transform-gpu [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-cover rounded-t-2xl transition-transform duration-700 ease-out will-change-transform transform-gpu [backface-visibility:hidden] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/10 to-transparent"/>
                </div>
            )}

            <div className="py-5 px-5 sm:px-6 flex-1">
                <div className="flex flex-wrap gap-1.5">
                    {blog.tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block text-[11px] font-medium tracking-wide text-primary/90 bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1"
                        >
                            #{tag.trim()}
                        </span>
                    ))}
                </div>

                <h3 className="text-lg font-bold leading-snug mt-4 mb-2 text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#f2c14e] group-hover:to-[#4fd1a5] group-hover:bg-clip-text group-hover:text-transparent">
                    <Link
                        href={`/blogs/${blog.slug}`}
                        title={`Read more about ${blog.title}`}
                    >
                        {blog.title}
                    </Link>
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {typeof blog.excerpt === "string"
                        ? blog.excerpt
                        : blog.excerpt
                            ?.map((block) =>
                                block.children?.map((child) => child.text || "").join(" ")
                            )
                            .join(" ")}
                </p>
            </div>

            <div className="px-5 sm:px-6 pb-5 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar size={13}/>
                    <span className="font-medium">{formatDate(blog.published)}</span>
                </div>

                <Link
                    href={`/blogs/${blog.slug}`}
                    title={`Read more about ${blog.title}`}
                    className="group/btn flex items-center gap-2 text-sm font-semibold text-white"
                >
                    <div
                        className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#e0af3f] group-hover/btn:border-[#e0af3f] group-hover/btn:scale-110">
                        <ArrowRight
                            size={14}
                            className="text-white group-hover/btn:text-[#0b0b0b] group-hover/btn:translate-x-0.5 transition-transform duration-300"
                        />
                    </div>
                </Link>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default BlogCard;
