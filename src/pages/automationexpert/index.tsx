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
                description="Meet our automation expert team building custom AI solutions."
                canonical="https://wewantagent.com/automationexpert"
                additionalMetaTags={[
                    { name: 'robots', content: 'index, follow' }
                ]}
                openGraph={{
                    url: "https://wewantagent.com/automationexpert",
                    images: [
                        {
                            url: "https://wewantagent.com/images/automation-expert-og.jpg",
                            width: 1200,
                            height: 630
                        }
                    ]
                }}
            />

            <WebPageJsonLd
                id="https://wewantagent.com/automationexpert#webpage"
                url="https://wewantagent.com/automationexpert"
                name="Automation Expert Team"
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

