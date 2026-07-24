
import React from "react";
import HeroSection from "@/components/services/HeroSection";
import FooterSection from "@/components/Footer/footer";
import ServicesSection from "@/components/services/ServicesSection";
import StatsSection from "@/components/services/StatsSection";
import ProblemSection from "@/components/services/ProblemSection";
import ComparisonTableSection from "@/components/services/ComparisonTableSection";
import MythsSection from "@/components/services/MythsSection";
import IndustrySolutionsSection from "@/components/services/IndustrySolutionSection";
import ProcessTimeline from "@/components/services/FlowSection";
import AIModulesSection from "@/components/services/ModalSection";
import { NextSeo, WebPageJsonLd, BreadcrumbJsonLd } from "next-seo";
import {
    Briefcase,
    Calculator,
    Cloud,
    Compass,
    Gauge,
    GraduationCap,
    Home,
    Map,
    Megaphone,
    PackageSearch,
    Percent,
    Scale,
    SearchCheck,
    ShoppingCart,
    Stethoscope,
    Target,
    UserSearch,
    UtensilsCrossed,
} from "lucide-react";
import BannerSection from "@/components/HomePage/BannerSection";
import FaqSection from "@/components/HomePage/FaqSection";

export default function AiConsulting() {
    const services = [
        {
            title: "AI Readiness Assessment",
            desc: "We evaluate your current systems, data, workflows, and team capabilities to determine exactly how ready your business is for AI adoption.",
            icon: Gauge,
        },
        {
            title: "Opportunity Audit",
            desc: "We identify the specific processes in your business where AI delivers the highest ROI, ranked by impact, cost, and speed to implement.",
            icon: SearchCheck,
        },
        {
            title: "Custom AI Roadmap",
            desc: "You receive a clear, prioritised adoption plan covering the tools you need, the talent required, and the technology that fits your existing stack.",
            icon: Map,
        },
        {
            title: "Tool & Vendor Selection",
            desc: "Skip the trial-and-error. We recommend the exact platforms and tools for your use case, based on what we deploy every day.",
            icon: PackageSearch,
        },
        {
            title: "Implementation Guidance",
            desc: "Whether you build in-house or with us, you get expert guidance at every step so nothing stalls and nothing gets wasted.",
            icon: Compass,
        },
        {
            title: "Team Enablement Strategy",
            desc: "We show you how to prepare your people for AI adoption, from change management to training plans that actually stick.",
            icon: GraduationCap,
        },
    ];

    const industries = [
        {
            icon: Scale,
            title: "Legal",
            description:
                "Law firms drown in documents, contracts, and research. We show you how AI can cut review time, automate drafting, and reclaim billable hours.",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce",
            description:
                "From customer support to inventory and product descriptions, we map out AI systems that help you sell more while doing less.",
        },
        {
            icon: UtensilsCrossed,
            title: "Restaurants & Hospitality",
            description:
                "Reservations, orders, reviews, and guest communication. We identify where AI can elevate your guest experience and cut operational chaos.",
        },
        {
            icon: UserSearch,
            title: "Recruitment & HR",
            description:
                "Resume screening, interview scheduling, and candidate communication. We show you how AI can compress your time-to-hire dramatically.",
        },
        {
            icon: Megaphone,
            title: "Marketing Agencies",
            description:
                "Content production, client reporting, and campaign management. We help agencies scale output without scaling headcount.",
        },
        {
            icon: Briefcase,
            title: "Consultants",
            description:
                "Research, proposal writing, and client management. We help consultants deliver more value in less time with AI-powered workflows.",
        },
        {
            icon: Cloud,
            title: "SaaS Products",
            description:
                "Customer support, user onboarding, and churn prevention. We map AI strategies that grow retention and revenue.",
        },
        {
            icon: Home,
            title: "Real Estate",
            description:
                "Property listings, lead follow-ups, and client management. We show you how AI keeps your pipeline moving around the clock.",
        },
        {
            icon: Stethoscope,
            title: "Healthcare",
            description:
                "Patient scheduling, documentation, and compliance workflows. We guide you through AI adoption that respects HIPAA at every step.",
        },
        {
            icon: Calculator,
            title: "Bookkeeping & Finance",
            description:
                "Transaction processing, reconciliation, and reporting. We map out AI systems that keep your books accurate and audit-ready.",
        },
    ];

    const steps = [
        {
            number: 1,
            title: "Discovery Call",
            description:
                "A free 30-minute conversation about your business, your challenges, and your goals. We listen first.",
        },
        {
            number: 2,
            title: "Deep-Dive Assessment",
            description:
                "We audit your workflows, systems, and data to find your highest-value AI opportunities.",
        },
        {
            number: 3,
            title: "Strategy & Roadmap Delivery",
            description:
                "You receive your custom AI roadmap: prioritised opportunities, recommended tools, timelines, and budget estimates.",
        },
        {
            number: 4,
            title: "Ongoing Advisory",
            description:
                "Keep us in your corner as you implement. We guide, troubleshoot, and adjust the plan as your business evolves.",
        },
    ];

    const comparisonRows = [
        { label: "Best for", left: "Businesses exploring AI", right: "Businesses ready to build" },
        { label: "You get", left: "Strategy, audit, roadmap", right: "Full build and deployment" },
        { label: "We deliver", left: "The plan", right: "The plan plus execution" },
        { label: "Timeline", left: "1 to 3 weeks", right: "4 to 12 weeks" },
        { label: "Next step", left: "Implement yourself or upgrade", right: "Launch and scale" },
    ];

    const myths = [
        {
            myth: "\"Consultants just tell you what you already know\"",
            reality: "We build AI systems every day. Our advice comes from deployment experience, not theory.",
        },
        {
            myth: "\"I can figure this out myself with ChatGPT\"",
            reality: "Tools are easy. Strategy is hard. Knowing which processes to automate first is where the ROI lives.",
        },
        {
            myth: "\"Consulting is expensive\"",
            reality: "A wrong AI investment costs far more than the right advice. We save you from expensive mistakes.",
        },
        {
            myth: "\"My business is too small for AI consulting\"",
            reality: "Small businesses see the fastest wins because they can move immediately on our recommendations.",
        },
        {
            myth: "\"AI projects take too long to deliver value\"",
            reality: "We focus on rapid, prioritised experiments that prove value in weeks - not months.",
        },
    ];

    const results = [
        {
            icon: Percent,
            title: "1 to 3 weeks",
            description: "From first call to complete roadmap",
        },
        {
            icon: Target,
            title: "Top 3",
            description: "Highest-ROI opportunities identified for your business",
        },
        {
            icon: SearchCheck,
            title: "Zero",
            description: "Wasted spend on tools that don't fit",
        },
        {
            icon: Map,
            title: "100%",
            description: "Roadmap tailored to your business, not a template",
        },
    ];

    const faqs = [
        {
            question: "What are AI consulting services?",
            answer:
                "AI consulting helps businesses figure out where and how to use artificial intelligence. That includes assessing your readiness, identifying opportunities, selecting tools, and building an adoption roadmap.",
        },
        {
            question: "How is this different from your AI Transformation Program?",
            answer:
                "Consulting gives you the strategy and plan. Transformation includes the full build, integration, and deployment. Many clients start with consulting and upgrade.",
        },
        {
            question: "How long does a consulting engagement take?",
            answer:
                "Most engagements run 1 to 3 weeks from discovery call to delivered roadmap. Ongoing advisory is available after that.",
        },
        {
            question: "Do I need any technical knowledge?",
            answer:
                "None. We translate everything into plain business language. You'll understand every recommendation and why it matters.",
        },
        {
            question: "What does it cost?",
            answer:
                "Every engagement is tailored to your business size and scope. We share clear pricing after your free discovery call. No surprises.",
        },
        {
            question: "What if I want you to implement the roadmap?",
            answer:
                "Perfect. That's our AI Transformation Program, and your consulting investment counts toward it.",
        },
    ];

    const title = "AI Consulting Services | Strategy, Audits & Roadmaps | We Want Agent";
    const description =
        "Not sure where AI fits in your business? Our AI consulting services deliver clear strategy, system audits, and adoption roadmaps. Book a free consultation today.";
    const url = "https://wewantagent.com/services/ai-consulting";
    const imageUrl = "https://wewantagent.com/assets/og/service-ai-consulting.jpg";

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    type: "website",
                    url,
                    title,
                    description,
                    images: [
                        {
                            url: imageUrl,
                            width: 1200,
                            height: 630,
                            alt: "AI Consulting Services by We Want Agent",
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
            <BreadcrumbJsonLd
                useAppDir={false}
                itemListElements={[
                    { position: 1, name: "Home", item: "https://wewantagent.com/" },
                    { position: 2, name: "AI Consulting", item: url },
                ]}
            />
            <div className="bg-black">
                <HeroSection
                    title="Everyone Says Use AI. We Show You Exactly How."
                    description="Cut through the AI hype. Our consulting services give you a clear strategy, honest assessment, and step-by-step roadmap to make AI work for your business. No jargon, no guesswork, no wasted budget."
                    buttonText="Book Your Free Consultation"
                    buttonHref="https://calendly.com/talhafakhar/discoverycall"
                    buttonTarget="_blank"
                    buttonRel="noopener noreferrer"
                    imageSrc="/assets/services/aiDevelopment.webp"
                    width={420}
                    height={480}
                    imageClassName="-mt-16 md:-mt-24"
                    contentClassName="mt-10 md:mt-16"
                    note="30 minutes. Zero commitment. Walk away with clarity."
                />
                <ProblemSection
                    heading="You Know AI Matters. You Just Don't Know Where to Start."
                    paragraphs={[
                        "Every week there's a new AI tool, a new headline, a new competitor claiming they've gone AI-first. Meanwhile, you're stuck asking the real questions:",
                        "Where does AI actually fit in my business? What's worth investing in and what's just hype? How do I avoid spending money on tools that don't deliver?",
                        "That's exactly what our AI consulting answers. We turn confusion into a clear, actionable plan.",
                    ]}
                    buttonText="Get Your Answers"
                />
                <ServicesSection
                    heading="Consulting That Ends with a Plan, Not a PowerPoint"
                    services={services}
                    buttonText="Start With Your Free Assessment"
                    buttonHref="/contact"
                    buttonFillsLastRow
                />
                <IndustrySolutionsSection
                    heading="Deep Expertise Across Industries That Run on Efficiency"
                    description="We've built AI solutions across sectors. That experience powers every consultation."
                    industries={industries}
                    note="Don't see your industry? The principles transfer. Book a call and we'll map it out together."
                    buttonText="Find AI Opportunities in Your Industry"
                    buttonHref="https://calendly.com/talhafakhar/discoverycall"
                    buttonTarget="_blank"
                    buttonRel="noopener noreferrer"
                />
                <ProcessTimeline
                    heading="Four Steps from Confusion to Clarity"
                    steps={steps}
                    buttonText="Book Your Discovery Call"
                    buttonHref="https://calendly.com/talhafakhar/discoverycall"
                    buttonTarget="_blank"
                    buttonRel="noopener noreferrer"
                />
                <ComparisonTableSection
                    heading="Not Sure Which Service You Need?"
                    leftHeader="AI Consulting"
                    rightHeader="AI Transformation"
                    rows={comparisonRows}
                    note="Start with consulting. Upgrade to transformation whenever you're ready. Your consulting investment counts toward your transformation package."
                    buttonText="Talk Through Your Options"
                    buttonHref="https://calendly.com/talhafakhar/discoverycall"
                    buttonTarget="_blank"
                    buttonRel="noopener noreferrer"
                />
                <MythsSection
                    heading="What's Really Stopping You?"
                    myths={myths}
                    buttonText="Still Unsure? Ask Us Anything"
                />
                <StatsSection
                    heading="Clarity Pays for Itself"
                    stats={results}
                    buttonText="Get Your Roadmap"
                />
                <FaqSection
                    heading="Questions? Answered."
                    subheading="Everything you need to know about AI consulting"
                    faqs={faqs}
                    showButton={false}
                />
                <AIModulesSection />
                <BannerSection
                    text="The Best Time to Get AI Clarity Was Yesterday. The Second Best Is Now."
                    description="Book your free 30-minute consultation. Whether we work together or not, you'll leave with a clearer picture of what AI can do for your business."
                    buttonText="Book Your Free Consultation Now"
                    note="Limited slots available each week."
                />
                <FooterSection />
            </div>
        </>
    );
}
