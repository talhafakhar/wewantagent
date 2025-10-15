import HeroSection from "@/components/About/HeroSection";
import React from "react";
import OriginStory from "@/components/About/OriginStorySection";
import SolutionsSection from "@/components/About/SolutionsSection";
import MeetOurTeam from "@/components/About/MeetOurTeam";
import ContactSection from "@/components/About/ContactSection";
import FooterSection from "@/components/Footer/footer";
import {NextSeo ,WebPageJsonLd} from "next-seo";
import BannerSection from "@/components/HomePage/BannerSection";

export default function AboutUsPage() {
    return (
        <>
            <NextSeo
                title="Automation Expert Team — Custom AI Solutions | We Want Agent"
                description="Meet our automation expert team building custom AI agents for real estate, healthcare, and accounting. We listen, strategize, and deliver AI that actually works for your business."
                canonical="https://wewantagent.com/automationexpert"
                facebook={{
                    appId: '1234567890',
                }}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content:
                            'AI automation experts, custom AI solutions, AI agency team, We Want Agent team, AI for real estate, AI for healthcare, AI for accounting, automation specialists, AI consulting experts',
                    },
                    { property: 'dc:creator', content: 'We Want Agent' },
                    { name: 'author', content: 'We Want Agent' },
                    { name: 'robots', content: 'index, follow' },
                ]}
                openGraph={{
                    type: 'website',
                    url: 'https://wewantagent.com/automationexpert',
                    title: 'Automation Expert Team — Custom AI Solutions | We Want Agent',
                    description:
                        'Meet our automation expert team building custom AI agents for real estate, healthcare, and accounting. We listen, strategize, and deliver AI that actually works for your business.',
                    images: [
                        {
                            url: 'https://wewantagent.com/images/automation-expert-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Automation Expert Team | We Want Agent',
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

            <WebPageJsonLd
                id="https://wewantagent.com/automationexpert#webpage"
                url="https://wewantagent.com/automationexpert"
                name="Automation Expert Team — Custom AI Solutions | We Want Agent"
                description="Meet our automation expert team building custom AI agents for real estate, healthcare, and accounting. We listen, strategize, and deliver AI that actually works for your business."
                potentialAction={{
                    target: 'https://wewantagent.com/automationexpert?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <div className="bg-black">
                <HeroSection/>
                <OriginStory/>
                <SolutionsSection/>
                <MeetOurTeam/>
                <ContactSection/>
                <BannerSection
                    text="Let automation experts handle the repetitive work while you focus on"
                    subtext="growing your business"
                    lastText="today"
                />
                <FooterSection/>
            </div>
        </>
    );
}

