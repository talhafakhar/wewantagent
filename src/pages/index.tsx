import React from "react";
import HeroSection from "@/components/HomePage/HeroSection";
import BenefitSection from "@/components/HomePage/BenefitSection";
import OrbitAnimation from "@/components/HomePage/FlowSection";
import GlobeSection from "@/components/HomePage/GlobeSection";
import PricingSection from "@/components/HomePage/PricingTableSection";
import TestimonialsSection from "@/components/HomePage/TestimonialSection";
import FaqSection from "@/components/HomePage/FaqSection";
import FooterSection from "@/components/Footer/footer";
import {FAQPageJsonLd, NextSeo, OrganizationJsonLd, WebPageJsonLd} from "next-seo";
import BannerSection from "@/components/HomePage/BannerSection";
import {motion} from "framer-motion";
import BlogCard from "@/components/Blog/BlogCard";
import {BlogResponse} from "@/types/blog";
import {GetStaticProps} from "next";
import {fetchBlogs} from "@/lib/strapi";

type Props = {
    initialBlogs: BlogResponse['data'];
    pagination: BlogResponse['meta']['pagination'];
};
export const getStaticProps: GetStaticProps<Props> = async () => {
    const {data, pagination} = await fetchBlogs(1, 10);
    return {
        props: {
            initialBlogs: data,
            pagination: pagination || null,
        },
        revalidate: 3600,
    };
};
export default function Home({initialBlogs}: Props) {
    const blogs = initialBlogs;
    return (
        <>
            <NextSeo
                title="We Want Agent | The Custom Build AI Automation Agency"
                description="We Want Agent is an AI automation agency building custom AI agents for real estate, healthcare, and accounting. Share your problem, get your automation roadmap"
                canonical="https://wewantagent.com/"
                facebook={{
                    appId: '1234567890',
                }}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: 'We Want Agent is an AI automation agency building custom AI agents for real estate, healthcare, and accounting. Share your problem, get your automation roadmap'
                    },
                    {property: 'dc:creator', content: 'We Want Agent'},
                    {name: 'author', content: 'We Want Agent'},
                    {name: 'robots', content: 'index, follow'},
                ]}
                openGraph={{
                    type: 'website',
                    url: 'https://wewantagent.com/',
                    title: 'We Want Agent | The Custom Build AI Automation Agency',
                    description: 'We Want Agent is an AI automation agency building custom AI agents for real estate, healthcare, and accounting. Share your problem, get your automation roadmap',
                    images: [
                        {
                            url: 'https://wewantagent.com/images/og-image.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'We Want Agent | The Custom Build AI Automation Agency',
                        },
                    ],
                    site_name: 'We Want Agent',
                }}
                twitter={{
                    handle: '@wewantagent',
                    site: '@wewantagent',
                    cardType: 'summary_large_image',
                }}
            />
            <OrganizationJsonLd
                type="Organization"
                id="https://wewantagent.com/#organization"
                name="We Want Agent"
                url="https://wewantagent.com/"
                logo="https://wewantagent.com/assets/logo.png"
                sameAs={[
                    'https://www.facebook.com/wewantagent',
                    'https://twitter.com/wewantagent',
                    'https://www.linkedin.com/company/wewantagent/',
                ]}
                contactPoints={[
                    {
                        telephone: '+1-234-567-890',
                        contactType: 'Customer Service',
                        areaServed: 'US',
                        availableLanguage: ['English'],
                    },
                ]}
                address={{
                    streetAddress: '456 Strategy Avenue',
                    addressLocality: 'New York',
                    addressRegion: 'NY',
                    postalCode: '10001',
                    addressCountry: 'US',
                }}
            />
            <WebPageJsonLd
                id="https://wewantagent.com/#webpage"
                url="https://wewantagent.com/"
                name="We Want Agent | The Custom Build AI Automation Agency"
                description="We Want Agent is an AI automation agency building custom AI agents for real estate, healthcare, and accounting. Share your problem, get your automation roadmap."
                potentialAction={{
                    target: 'https://wewantagent.com/?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />
            <FAQPageJsonLd
                mainEntity={[
                    {
                        id: 1,
                        question: "How to create an AI agent for my business?",
                        answer: "We start with a discovery call to understand your pain points. Then our automation expert maps out what tasks to automate, designs the AI agent architecture, develops it custom for your workflow, tests thoroughly, and deploys it into your systems. You're involved at every step, no surprises."
                    },
                    {
                        id: 2,
                        question: "How much does AI cost for a small business?",
                        answer: "It depends on complexity, but most AI automation agency projects start between $5,000-$15,000 for initial development. Monthly maintenance runs $500-$2,000. We provide transparent quotes upfront—no hidden fees. Think of it as hiring a full-time employee who never sleeps, never quits, and costs less annually."
                    },
                    {
                        id: 3,
                        question: "Will AI assistants work with my current software?",
                        answer: "Yes. We build AI automation service solutions that integrate with your existing CRM, scheduling tools, accounting software, and databases. No need to change what's working, we make it work smarter. If you use it daily, we can likely automate around it or enhance it."
                    },
                    {
                        id: 4,
                        question: "How long does it take to build custom AI agents?",
                        answer: "Simple artificial intelligence automation takes 2-4 weeks. Complex multi-system integrations need 6-12 weeks. Rush projects possible for urgent needs. We give you realistic timelines during consultation, never overpromise. Most clients see their first automation running within 30 days of starting"
                    },
                ]}
            />
            <div className="bg-black">
                <HeroSection/>
                <BenefitSection/>
                <OrbitAnimation/>
                <GlobeSection/>
                <TestimonialsSection/>
                <PricingSection/>
                <BannerSection
                    text="Wasting hours on repetitive tasks let AI handle the work while you focus on growth Get your"
                    subtext="Free automation roadmap"
                    lastText="today"
                />
                <FaqSection/>
                <div>
                    <div className="max-w-7xl mx-auto px-4 py-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                        >
                            <h2 className="text-3xl sm:text-5xl font-semibold mb-4 text-white leading-tight">
                                Our Latest Insights
                            </h2>
                            <p className="text-gray-300  leading-relaxed">
                                We Love Sharing Information.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs && blogs.length > 0 ? (
                                blogs.slice(0, 3).map((blog, index) => (
                                    <BlogCard key={blog.id} blog={blog} id={index}/>
                                ))
                            ) : (
                                <div className="col-span-full text-center text-gray-500">
                                    No blogs available at the moment.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <FooterSection/>
            </div>
        </>
    );
}

