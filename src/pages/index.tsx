"use client";
import React, { useState } from "react";
import HeroSection from "@/components/HomePage/HeroSection";
import BenefitSection from "@/components/HomePage/BenefitSection";
import OrbitAnimation from "@/components/HomePage/FlowSection";
import GlobeSection from "@/components/HomePage/GlobeSection";
import PricingSection from "@/components/HomePage/PricingTableSection";
import TestimonialsSection from "@/components/HomePage/TestimonialSection";
import FaqSection from "@/components/HomePage/FaqSection";
import FooterSection from "@/components/Footer/footer";
import BannerSection from "@/components/HomePage/BannerSection";
import { motion } from "framer-motion";
import BlogCard from "@/components/Blog/BlogCard";
import { BlogResponse } from "@/types/blog";
import { GetStaticProps } from "next";
import { fetchBlogs } from "@/lib/strapi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    FAQPageJsonLd,
    NextSeo,
    OrganizationJsonLd,
    WebPageJsonLd,
} from "next-seo";
type Props = {
    initialBlogs: BlogResponse["data"];
    pagination: BlogResponse["meta"]["pagination"];
};
export const getStaticProps: GetStaticProps<Props> = async () => {
    const { data, pagination } = await fetchBlogs(1, 3);
    return {
        props: { initialBlogs: data, pagination: pagination || null },
        revalidate: 3600,
    };
};
export default function Home({ initialBlogs, pagination }: Props) {
    const [blogs, setBlogs] = useState(initialBlogs || []);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(pagination?.pageCount || 1);
    const [loading, setLoading] = useState(false);
    const loadNext = async (nextPage: number) => {
        setLoading(true);
        const { data, pagination } = await fetchBlogs(nextPage, 3);
        setBlogs(data);
        setPage(nextPage);
        setPageCount(pagination.pageCount);
        setLoading(false);
    };
    return (
        <>
            <NextSeo
                title="We Want Agent | The Custom Build AI Automation Agency"
                description="We Want Agent is an AI automation agency building custom AI agents."
                canonical="https://wewantagent.com/"
                additionalMetaTags={[
                    { name: 'robots', content: 'index, follow' }
                ]}
                openGraph={{
                    url: "https://wewantagent.com/",
                    images: [
                        {
                            url: "https://wewantagent.com/assets/home/logo white.png",
                            width: 1200,
                            height: 630
                        }
                    ]
                }}
            />
            <OrganizationJsonLd
                type="Organization"
                id="https://wewantagent.com/#organization"
                name="We Want Agent"
                url="https://wewantagent.com/"
                logo="https://wewantagent.com/assets/logo.png"
            />

            <WebPageJsonLd
                id="https://wewantagent.com/#webpage"
                url="https://wewantagent.com/"
                name="We Want Agent"
            />
            <FAQPageJsonLd
                mainEntity={[
                    {
                        "@type": "Question",
                        "name": "How to create an AI agent for my business?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We start with a discovery call to understand your pain points. Then our automation expert maps out what tasks to automate, designs the AI agent architecture, develops it custom for your workflow, tests thoroughly, and deploys it into your systems."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does AI cost for a small business?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It depends on complexity, but most AI automation agency projects start between $5,000–$15,000. Monthly maintenance runs $500–$2,000."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will AI assistants work with my current software?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We build AI automation solutions that integrate with your existing CRM, scheduling tools, accounting software, and databases."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to build custom AI agents?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Simple automation takes 2–4 weeks. Complex multi-system integrations need 6–12 weeks. Most clients see their first automation running within 30 days."
                        }
                    }
                ]}
            />

            <div className="bg-black">
                <HeroSection />
                <BenefitSection />
                <OrbitAnimation />
                <GlobeSection />
                <TestimonialsSection />
                <PricingSection />
                <BannerSection
                    text="Wasting hours on repetitive tasks? Let AI handle the work while you focus on growth."
                    subtext="Get your"
                    lastText="Free automation roadmap today."
                />
                <FaqSection />

                <div className="max-w-7xl mx-auto px-4 py-8 relative">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-5xl font-semibold mb-4 text-white leading-tight">
                            Our Latest Insights
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            We Love Sharing Information.
                        </p>
                    </motion.div>

                    {loading ? (
                        <div className="text-center text-gray-400">Loading...</div>
                    ) : blogs && blogs.length > 0 ? (
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            {blogs.map((blog, index) => (
                                <SwiperSlide key={blog.id}>
                                    <BlogCard blog={blog} id={index} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="text-center text-gray-500">
                            No blogs available at the moment.
                        </div>
                    )}

                    {pageCount > 1 && (
                        <div className="flex justify-center items-center mt-8 space-x-4">
                            <button
                                onClick={() => loadNext(page - 1)}
                                disabled={page === 1}
                                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 disabled:opacity-40"
                            >
                                <ChevronLeft className="text-white w-5 h-5" />
                            </button>
                            <button
                                onClick={() => loadNext(page + 1)}
                                disabled={page === pageCount}
                                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 disabled:opacity-40"
                            >
                                <ChevronRight className="text-white w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>

                <FooterSection />
            </div>
        </>
    );
}
