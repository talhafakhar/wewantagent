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
            className="group relative bg-white/10 backdrop-blur-2xl rounded overflow-hidden border border-gray-900 transition-all duration-500 hover:-translate-y-2"
            style={{animation: `fadeInUp 0.6s ease-out ${id * 0.1}s both`}}>
            {imageUrl && (
                <div className="relative  overflow-hidden border-b border-white h-64">
                    <div
                        className="absolute inset-0 bg-cover bg-center filter blur-[4px] scale-105"
                        style={{backgroundImage: `url(${imageUrl})`}}
                    />

                    <div className="absolute inset-0 bg-white/10 z-10"/>

                    <div className="relative overflow-hidden  h-64 ">
                        <Image
                            src={imageUrl}
                            alt={imageAlt}
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            )}

            <div className="py-6 px-4 sm:px-6 lg:px-8  ">
                <div className="flex flex-wrap gap-2">
                    {blog.tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="relative inline-block px-[1px] py-[1px] text-xs font-semibold text-white rounded"
                        >
    <span
        className="absolute inset-0 rounded p-[1px] bg-gradient-to-r from-primary via-secondary to-accent"
    ></span>
    <span
        className="relative block rounded bg-[#0b0b0b] px-3 py-0.5"
    >
      #{tag.trim()}
    </span>
  </span>
                    ))}

                </div>

                <h3 className="text-xl font-bold text-white leading-tight mt-4 uppercase mb-2">
                    {blog.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {typeof blog.excerpt === "string"
                        ? blog.excerpt
                        : blog.excerpt
                            ?.map((block) =>
                                block.children?.map((child) => child.text || "").join(" ")
                            )
                            .join(" ")}
                </p>
            </div>

            <div className="px-4 pb-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Calendar size={14}/>
                    <span className="font-medium">{formatDate(blog.published)}</span>
                </div>

                <Link
                    href={`/blogs/${blog.slug}`}
                    className="group/btn flex items-center gap-2 text-sm font-semibold text-white "
                >
                    <span>Read More</span>
                    <div
                        className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center  transition-all duration-300 group-hover/btn:scale-110">
                        <ArrowRight
                            size={14}
                            className="text-white group-hover/btn:translate-x-0.5 transition-transform duration-300"
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
