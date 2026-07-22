"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HomePage/HeroSection";
import ScrollGlow from "@/components/ui/ScrollGlow";
import { motion } from "framer-motion";
import BlogCard from "@/components/Blog/BlogCard";
import { BlogResponse } from "@/types/blog";
import { GetStaticProps } from "next";
import { fetchBlogs } from "@/lib/strapi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    FAQPageJsonLd,
    NextSeo,
    OrganizationJsonLd,
    WebPageJsonLd,
} from "next-seo";

const BenefitSection = dynamic(() => import("@/components/HomePage/BenefitSection"));
const OrbitAnimation = dynamic(() => import("@/components/HomePage/FlowSection"));
const GlobeSection = dynamic(() => import("@/components/HomePage/GlobeSection"));
const TestimonialsSection = dynamic(() => import("@/components/HomePage/TestimonialSection"));
// const PricingSection = dynamic(() => import("@/components/HomePage/PricingTableSection"));
const FaqSection = dynamic(() => import("@/components/HomePage/FaqSection"));
const FooterSection = dynamic(() => import("@/components/Footer/footer"));
const BannerSection = dynamic(() => import("@/components/HomePage/BannerSection"));

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
    const insightsRef = useRef<HTMLElement>(null);
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
                title="AI Automation Agency | Custom AI Agents for Business | We Want Agent"
                description="We build custom AI agents that eliminate repetitive tasks, automate workflows, and save you hours daily. Serving 10+ industries. Book a free consultation today."
                canonical="https://wewantagent.com/"
                openGraph={{
                    type: "website",
                    url: "https://wewantagent.com/",
                    images: [
                        {
                            url: "https://wewantagent.com/assets/og/home.jpg",
                            width: 1200,
                            height: 630
                        }
                    ]
                }}
                twitter={{
                    handle: "@wewantagent",
                    site: "@wewantagent",
                    cardType: "summary_large_image",
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
                        questionName: "How to create an AI agent for my business?",
                        acceptedAnswerText:
                            "We start with a discovery call to understand your pain points. Then our automation expert maps out what tasks to automate, designs the AI agent architecture, develops it custom for your workflow, tests thoroughly, and deploys it into your systems."
                    },
                    {
                        questionName: "How much does AI cost for a small business?",
                        acceptedAnswerText:
                            "It depends on complexity, but most AI automation agency projects start between $5,000–$15,000. Monthly maintenance runs $500–$2,000."
                    },
                    {
                        questionName: "Will AI assistants work with my current software?",
                        acceptedAnswerText:
                            "Yes. We build AI automation solutions that integrate with your existing CRM, scheduling tools, accounting software, and databases."
                    },
                    {
                        questionName: "How long does it take to build custom AI agents?",
                        acceptedAnswerText:
                            "Simple automation takes 2–4 weeks. Complex multi-system integrations need 6–12 weeks. Most clients see their first automation running within 30 days."
                    }
                ]}
            />

            <div className="bg-black">
                <HeroSection />
                <BenefitSection />
                <OrbitAnimation />
                <GlobeSection />
                <TestimonialsSection />
                {/* <PricingSection /> */}
                <BannerSection
                    text="Wasting hours on repetitive tasks? Let AI handle the work while you focus on growth."
                    subtext="Get your"
                    lastText="Free automation roadmap today."
                />
                <FaqSection />

                <section id="blog-section" ref={insightsRef} className="relative overflow-hidden py-8">
                    <ScrollGlow
                        target={insightsRef}
                        speed={0}
                        positionClassName="left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2"
                    />
                    <div className="max-w-7xl mx-auto px-4 relative">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-5xl font-semibold mb-4 leading-tight bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                            Our Latest Insights
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            We Love Sharing Information.
                        </p>
                    </motion.div>

                    {loading ? (
                        <div className="text-center text-gray-400">Loading...</div>
                    ) : blogs && blogs.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-3 px-1">
                            {blogs.map((blog, index) => (
                                <BlogCard key={blog.id} blog={blog} id={index} />
                            ))}
                        </div>
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
                </section>

                <FooterSection />
            </div>
        </>
    );
}
