import { useRef, useState } from "react";
import type { GetStaticProps } from "next";
import { NextSeo, WebPageJsonLd } from "next-seo";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import BlogCard from "@/components/Blog/BlogCard";
import FooterSection from "@/components/Footer/footer";
import { fetchBlogs } from "@/lib/strapi";
import type { BlogResponse } from "@/types/blog";

const MAX_BLOGS = 100;

type Props = {
    blogs: BlogResponse["data"];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const { data } = await fetchBlogs(1, MAX_BLOGS);
    return {
        props: { blogs: data },
        revalidate: 3600,
    };
};

export default function BlogsIndex({ blogs }: Props) {
    const swiperRef = useRef<SwiperInstance | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const showNavigation = blogs && blogs.length > 3;

    return (
        <>
            <NextSeo
                title="Blog | We Want Agent"
                description="Insights, guides, and updates on AI automation, agents, and workflow transformation from the We Want Agent team."
                canonical="https://wewantagent.com/blogs"
                openGraph={{
                    url: "https://wewantagent.com/blogs",
                    title: "Blog | We Want Agent",
                    description: "Insights, guides, and updates on AI automation, agents, and workflow transformation from the We Want Agent team.",
                    images: [
                        {
                            url: "https://wewantagent.com/assets/home/logo white.png",
                            width: 1200,
                            height: 630,
                        },
                    ],
                }}
            />
            <WebPageJsonLd
                id="https://wewantagent.com/blogs#webpage"
                url="https://wewantagent.com/blogs"
                name="Blog | We Want Agent"
                description="Insights, guides, and updates on AI automation, agents, and workflow transformation."
            />

            <div className="min-h-screen relative overflow-hidden bg-[#07080c] text-white">
                <div
                    className="pointer-events-none absolute -left-[8%] -top-[8%] h-[540px] w-[540px] rounded-full blur-[80px]"
                    style={{
                        background: "radial-gradient(circle, rgba(94, 168, 255, 0.28), transparent 65%)",
                    }}
                />
                <div
                    className="pointer-events-none absolute -right-[12%] top-[10%] h-[520px] w-[520px] rounded-full blur-[90px]"
                    style={{
                        background: "radial-gradient(circle, rgba(79, 209, 165, 0.18), transparent 65%)",
                    }}
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl sm:text-5xl font-semibold mb-4 leading-tight bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                            Our Latest Insights
                        </h1>
                        <p className="text-gray-300 leading-relaxed">
                            We Love Sharing Information.
                        </p>
                    </div>

                    {blogs && blogs.length > 0 ? (
                        <div className="relative">
                            <Swiper
                                modules={[Navigation]}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                    setIsBeginning(swiper.isBeginning);
                                    setIsEnd(swiper.isEnd);
                                }}
                                onSlideChange={(swiper) => {
                                    setIsBeginning(swiper.isBeginning);
                                    setIsEnd(swiper.isEnd);
                                }}
                                spaceBetween={40}
                                slidesPerView={1}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="!py-3 !px-1"
                            >
                                {blogs.map((blog, index) => (
                                    <SwiperSlide key={blog.id} className="h-auto">
                                        <BlogCard blog={blog} id={index} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {showNavigation && (
                                <div className="flex justify-center items-center mt-8 space-x-4">
                                    <button
                                        onClick={() => swiperRef.current?.slidePrev()}
                                        disabled={isBeginning}
                                        className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 disabled:opacity-40"
                                        aria-label="Previous blogs"
                                    >
                                        <ChevronLeft className="text-white w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => swiperRef.current?.slideNext()}
                                        disabled={isEnd}
                                        className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 disabled:opacity-40"
                                        aria-label="Next blogs"
                                    >
                                        <ChevronRight className="text-white w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500">
                            No blogs available at the moment.
                        </div>
                    )}
                </div>

                <FooterSection />
            </div>
        </>
    );
}
