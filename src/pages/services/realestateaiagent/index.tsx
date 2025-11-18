
import React from "react";
import HeroSection from "@/components/services/HeroSection";
import FooterSection from "@/components/Footer/footer";
import ServicesSection from "@/components/services/ServicesSection";
import StatsSection from "@/components/services/StatsSection";
import RealEstateCaseStudy from "@/components/services/RealEstateCaseStudy";
import BusinessSolutionsSection from "@/components/services/BusinessSolutionsSection";
import ProcessTimeline from "@/components/services/FlowSection";
import AIModulesSection from "@/components/services/ModalSection";
import IndustrySolutionsSection from "@/components/services/IndustrySolutionSection";
import {NextSeo, WebPageJsonLd} from "next-seo";
import aiDevelopmentLottie from "@/assets/lottie/aiDevelopment.json";
import {
    Building2,
    Calendar,
    CalendarCheck, Check, CheckSquare, Crown,
    FileText, Hammer,
    Home, KeyRound,
    Mail,
    MessageCircle,
    PhoneCall, TrendingUp,
    UserCheck,
    Users, XCircle
} from "lucide-react";
import ContactSection from "@/components/services/ContactFormSection";
import BannerSection from "@/components/HomePage/BannerSection";

export default function RealEstateAiAgent() {
    const stats = [
        {
            icon: MessageCircle,
            title: "Communication",
            description:
                "Voice calls, email responses, SMS follow-ups, and chat inquiries are handled instantly",
        },
        {
            icon: Users,
            title: "Leads",
            description:
                "Capture, qualification, scoring, routing, and nurturing are automated completely for hot prospects only",
        },
        {
            icon: Calendar,
            title: "Scheduling",
            description:
                "Showing appointments, virtual tours, consultations, and open houses coordinated automatically without chaos",
        },
        {
            icon: FileText,
            title: "Administration",
            description:
                "CRM updates, document processing, data entry, listing syndication, and reporting are handled automatically",
        },
    ];
    const services = [
        {
            title: "Voice AI Agent",
            desc: "Never miss a buyer call again. The AI voice agent qualifies leads, books appointments, scores intent, and ensures only serious prospects reach your team.",
            icon: PhoneCall,
        },
        {
            title: "Email Response Agent",
            desc: "Instantly replies to inquiries with personalized details, qualifying questions, and matching listings. Keeps conversations active and routes hot leads directly to agents.",
            icon: Mail,
        },
        {
            title: "Lead Qualification Agent",
            desc: "Analyzes every lead in real time, scoring based on budget, urgency, and engagement. Surfaces high-intent buyers while filtering out low-quality leads automatically.",
            icon: UserCheck,
        },
        {
            title: "Listing Management Agent",
            desc: "Publish listings to MLS, Zillow, social media, and your site simultaneously. Updates, archives, and edits sync everywhere automatically—no manual effort needed.",
            icon: Home,
        },
        {
            title: "Transaction Coordinator Agent",
            desc: "Extracts key dates, manages tasks, tracks documents, and ensures compliance. Keeps every transaction on schedule while you focus on closing deals.",
            icon: CalendarCheck,
        },
    ];
    const industries = [
        {
            icon: Home,
            title: "Residential Sales",
            description: "Automate lead response, showing coordination, offer management, and transaction paperwork for residential real estate agent AI systems",
        },
        {
            icon: Building2,
            title: "Commercial Real Estate",
            description: "Handle tenant inquiries, property tours, LOI processing, and lease administration automatically for commercial transactions daily",
        },
        {
            icon: KeyRound,
            title: "Property Management",
            description: "Automate tenant screening, maintenance requests, rent collection reminders, lease renewals, and communication for property managers",
        },
        {
            icon: TrendingUp,
            title: "Real Estate Investment",
            description: "Deal analysis, market research, property tracking, contractor coordination, and portfolio reporting are automated for investors.",
        },
        {
            icon: Crown,
            title: "Luxury Real Estate",
            description: "Concierge-level communication, private showing coordination, confidential marketing, white glove service, and automated elegantly always",
        },
        {
            icon: Hammer,
            title: "New Construction",
            description: "Automate buyer inquiries, lot availability, upgrade selections, construction updates, and closing coordination for builders efficiently",
        },
    ];
    const caseStudyCards = [
        {
            heading: "The Problem",
            listIcon: XCircle,
            listIconColor: "text-secondary",
            points: [
                "Average lead response time was 4.6 hours, causing 40% lead loss",
                "Inconsistent follow-up meant warm leads went cold without nurturing",
                "Agents spent 15 hours weekly on admin instead of closings",
            ],
        },
        {
            heading: "Our Approach",
            listIcon: CheckSquare,
            listIconColor: "text-primary",
            points: [
                "Deployed Voice AI Agent answering all calls instantly with qualification",
                "The Email Response Agent replied to inquiries within 60 seconds automatically",
                "Lead Qualification Agent scored, routed, and updated CRM in real-time",
            ],
        },
        {
            heading: "The Outcome",
            listIcon: Check,
            listIconColor: "text-accent",
            points: [
                "Lead response dropped to 47 seconds, and conversion increased 64% immediately",
                "Agents saved 12 hours weekly, closing rate doubled with qualified leads",
                "Generated $380,000 additional revenue within 90 days after $47,000 investment",
            ],
        },
    ];
    const steps = [
        {
            number: 1,
            title: "Fair Housing",
            description:
                "All communication adheres to Fair Housing guidelines perfectly. No discriminatory language ever, compliant descriptions always.",
        },
        {
            number: 2,
            title: "RESPA",
            description:
                "Transaction data handling meets RESPA requirements completely. Proper disclosures made, fee transparency maintained, protection guaranteed.",
        },
        {
            number: 3,
            title: "NAR",
            description:
                "Automation follows the National Association of Realtors' ethics code, best practices consistently, without compromise ever happening.",
        },
        {
            number: 4,
            title: "Privacy",
            description:
                "Client information is secured with encryption standards, access controls are implemented, and privacy law compliance is maintained always.",
        },
    ];
    const title = "Real Estate AI Agent Automation Services | We Want Agent";
    const description =
        "Real estate ai agent automation for agents, brokers, and property managers. Voice AI, lead qualification, listing management, and marketing automation for real estate agents";
    const url = "https://wewantagent.com/services/realestateaiagent";
    const imageUrl = "https://wewantagent.com/images/realestate-og.jpg";

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description,
                    images: [
                        {
                            url: imageUrl,
                            width: 1200,
                            height: 630,
                            alt: "Real Estate AI Agent by We Want Agent",
                        },
                    ],
                    site_name: "We Want Agent",
                }}
                twitter={{
                    handle: "@wewantagent",
                    site: "@wewantagent",
                    cardType: "summary_large_image",
                }}
            />
            <WebPageJsonLd
                id={`${url}#webpage`}
                url={url}
                name={title}
                description={description}
            />
            <div className="bg-black">
                <HeroSection
                    title="Real Estate AI Agent"
                    description="Never miss another lead. Our real estate automation handles calls, emails, follow-ups, and scheduling instantly for you."
                    buttonText="Get Your AI Agent"
                    imageSrc="/assets/services/realEstate.webp"
                />
                <BusinessSolutionsSection
                    heading="Custom AI Agents Built For Real Estate Success"
                    paragraphs={[
                        "Stop losing deals to slow response times and manual tasks. Our real estate agent AI handles lead qualification, client communication, listing management, document processing, and appointment coordination automatically. From voice agents answering calls instantly to email automation nurturing prospects, we build intelligent systems that work while you sleep.",
                        "High intent leads get fast-tracked to your team, cold prospects enter nurture campaigns, and administrative tasks happen without human effort. We use advanced language models, n8n workflow automation, and custom integrations with your existing CRM and MLS systems. Fair Housing Act compliant, RESPA aligned, NAR guideline adherent. Real estate automation designed specifically for agents, brokerages, property managers, and investors who want more closings with less grinding.",
                    ]}
                    lottieFile={aiDevelopmentLottie}
                />
                <StatsSection
                    heading="What We Automate For You"
                    stats={stats}
                    buttonText="See Full Capabilities"
                />
                <IndustrySolutionsSection
                    heading="Real Estate Automation Across Every Property Type"
                    description="Whether you specialize in residential, commercial, luxury, or rentals, our AI agents adapt to your niche."
                    industries={industries}
                />
                <ServicesSection
                    heading="Core AI Solutions Deep Dive"
                    description="We built five AI agents that streamline real estate operations. Each one automates specific workflows, integrates seamlessly, and delivers measurable results."
                    services={services}
                />
                <RealEstateCaseStudy
                    heading="Real Results From Real Estate Clients"
                    description="See how we transformed a regional brokerage with 47 agents completely."
                    imageSrc="/assets/svg/services/robotFly.svg"
                    cards={caseStudyCards}
                />
                <ProcessTimeline
                    heading="Built Right. Compliant Always."
                    steps={steps}
                />
                <AIModulesSection/>
                <ContactSection/>
                <BannerSection
                    text="Stop losing deals to agents who respond faster"
                    subtext="Get your custom real estate"
                    lastText="AI Agent today"

                />
                <FooterSection/>
            </div>
        </>
    );
}

