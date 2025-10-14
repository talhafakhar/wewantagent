
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
export default function Home() {
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
                        answer:"We start with a discovery call to understand your pain points. Then our automation expert maps out what tasks to automate, designs the AI agent architecture, develops it custom for your workflow, tests thoroughly, and deploys it into your systems. You're involved at every step, no surprises."
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
                <BannerSection/>
                <FaqSection/>
                <FooterSection/>
            </div>
        </>
    );
}

