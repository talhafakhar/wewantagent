
import React from "react";
import HeroSection from "@/components/services/HeroSection";
import FooterSection from "@/components/Footer/footer";
import ServicesSection from "@/components/services/ServicesSection";
import StatsSection from "@/components/services/StatsSection";
import ProblemSection from "@/components/services/ProblemSection";
import ComparisonSection from "@/components/services/ComparisonSection";
import TechStackSection from "@/components/services/TechStackSection";
import MythsSection from "@/components/services/MythsSection";
import WhoForSection from "@/components/services/WhoForSection";
import WhyUsSection from "@/components/services/WhyUsSection";
import ProcessTimeline from "@/components/services/FlowSection";
import AIModulesSection from "@/components/services/ModalSection";
import { NextSeo, WebPageJsonLd, BreadcrumbJsonLd } from "next-seo";
import {
    BrainCircuit,
    ClipboardCheck,
    DollarSign,
    Eye,
    Languages,
    Mic,
    Percent,
    RefreshCw,
    Sparkles,
    Target,
    TrendingUp,
    Workflow,
    Zap,
} from "lucide-react";
import BannerSection from "@/components/HomePage/BannerSection";
import FaqSection from "@/components/HomePage/FaqSection";

export default function AiTransformation() {
    const services = [
        {
            title: "Predictive AI",
            desc: "Know what's coming before it happens. We build systems that analyse your historical data, spot patterns, and hand you decisions backed by deep learning, not hunches.",
            icon: TrendingUp,
        },
        {
            title: "Generative AI",
            desc: "Turn hours of content, proposals, and creative work into minutes. From workshops to full integration, we make generative AI work for your exact use case.",
            icon: Sparkles,
        },
        {
            title: "Natural Language Processing (NLP)",
            desc: "Automate document processing, extract insights from text, analyse customer sentiment, and build systems that genuinely understand human language.",
            icon: Languages,
        },
        {
            title: "Machine Learning (ML)",
            desc: "Custom ML models designed around your business, with end-to-end pipelines that integrate directly into your existing infrastructure.",
            icon: BrainCircuit,
        },
        {
            title: "ML Ops",
            desc: "Your AI shouldn't degrade over time. We automate deployment, monitoring, and retraining so your systems stay fast, accurate, and reliable.",
            icon: RefreshCw,
        },
        {
            title: "Computer Vision",
            desc: "Give your business eyes. Document scanning, quality control, image recognition, and real-time video analysis, fully automated.",
            icon: Eye,
        },
        {
            title: "Speech & Voice AI",
            desc: "Voice-enabled workflows, speech-to-text automation, and natural voice experiences your customers will actually enjoy using.",
            icon: Mic,
        },
        {
            title: "Intelligent Automation",
            desc: "Connect AI to your daily operations. Eliminate manual tasks, cut errors to zero, and accelerate every workflow end to end.",
            icon: Workflow,
        },
        {
            title: "AI Assessment Services",
            desc: "Not sure where to start? We audit your systems, pinpoint your highest-ROI opportunities, and hand you a clear adoption roadmap with tools, talent, and tech included.",
            icon: ClipboardCheck,
        },
    ];

    const comparisonRows = [
        { without: "Hours of manual data entry", with: "Fully automated processing" },
        { without: "Customers waiting for replies", with: "Instant AI-powered responses, 24/7" },
        { without: "Decisions based on guesswork", with: "Predictive insights before problems hit" },
        { without: "Costs rising with every hire", with: "Scaling without growing headcount" },
        { without: "Disconnected tools and silos", with: "One seamlessly connected system" },
        { without: "Falling behind competitors", with: "Leading your market" },
    ];

    const steps = [
        {
            number: 1,
            title: "Discovery & Audit",
            description:
                "We dig into your workflows and find exactly where AI delivers the fastest wins. No generic advice, just specific opportunities with real numbers.",
        },
        {
            number: 2,
            title: "Strategy & Roadmap",
            description:
                "You get a clear, prioritised roadmap aligned to your business goals. No jargon. No fluff. Just a plan you can act on immediately.",
        },
        {
            number: 3,
            title: "Build & Develop",
            description:
                "Our team builds your custom AI solutions including NLP pipelines, ML models, and intelligent agents, purpose-built for how your business actually runs.",
        },
        {
            number: 4,
            title: "Integrate & Connect",
            description:
                "We plug AI directly into your existing tools like your CRM, ERP, and communication platforms, with zero disruption to daily operations.",
        },
        {
            number: 5,
            title: "Train & Enable",
            description:
                "Your team learns to use, manage, and scale AI with confidence. No technical background required.",
        },
        {
            number: 6,
            title: "Track & Optimise",
            description:
                "We measure what matters: hours saved, costs cut, revenue grown. And we keep optimising long after launch.",
        },
    ];

    const techStackRows = [
        { function: "Large Language Models", tools: "Claude, GPT-4, Gemini, Anthropic API, OpenAI API" },
        { function: "NLP & Text Processing", tools: "spaCy, Hugging Face, NLTK" },
        { function: "Machine Learning", tools: "TensorFlow, PyTorch, Scikit-learn" },
        { function: "Computer Vision", tools: "OpenCV, Roboflow, AWS Rekognition" },
        { function: "Speech & Voice", tools: "Whisper, ElevenLabs, Google Speech" },
        { function: "AI Orchestration", tools: "LangChain, LlamaIndex, Pinecone, Weaviate" },
        { function: "Automation & Workflow", tools: "n8n, Make, Zapier, Langflow" },
        { function: "Cloud & Infrastructure", tools: "AWS, Google Cloud, Azure, Docker, Kubernetes, Supabase" },
        { function: "CRM & Communication", tools: "Salesforce, HubSpot, Slack, Notion, ClickUp, Discord" },
        { function: "Analytics & Reporting", tools: "Google Analytics, Looker, Power BI" },
    ];

    const myths = [
        {
            myth: "\"AI is only for big companies\"",
            reality:
                "Wrong. Our most dramatic results come from small and mid-sized businesses because they move faster.",
        },
        {
            myth: "\"AI will replace my team\"",
            reality: "AI removes the work your team hates. They'll do more of what they're actually good at.",
        },
        {
            myth: "\"Implementation takes forever\"",
            reality: "Simple automations go live in days. Full transformations in weeks, not months or years.",
        },
        {
            myth: "\"It won't work with my tools\"",
            reality: "We integrate with your existing stack. No rip-and-replace. No disruption.",
        },
        {
            myth: "\"I need technical knowledge\"",
            reality: "You need zero technical background. That's literally why we exist.",
        },
    ];

    const results = [
        {
            icon: Percent,
            title: "80%",
            description: "Reduction in manual task time",
        },
        {
            icon: Zap,
            title: "3x",
            description: "Faster workflow execution",
        },
        {
            icon: DollarSign,
            title: "60%",
            description: "Lower operational costs",
        },
        {
            icon: Target,
            title: "100%",
            description: "Custom built for your business",
        },
    ];

    const personas = [
        {
            role: "Business Owners",
            description: "tired of watching profit disappear into inefficiency",
        },
        {
            role: "Operations Managers",
            description: "expected to do more without more headcount",
        },
        {
            role: "Startups",
            description: "that want to build AI-first from day one",
        },
        {
            role: "Enterprises",
            description: "stuck with legacy systems that slow everything down",
        },
        {
            role: "Teams",
            description: "that know AI matters but don't know where to start",
        },
    ];

    const faqs = [
        {
            question: "What is AI Transformation?",
            answer:
                "It's the process of integrating AI into your operations by replacing manual processes, enabling smarter decisions, and building systems that scale with you.",
        },
        {
            question: "How long does implementation take?",
            answer:
                "Simple automations: days. Full-scale transformations: 4 to 12 weeks. You get a clear timeline before we start, and we stick to it.",
        },
        {
            question: "Do I need technical knowledge?",
            answer:
                "No. We handle everything technical including development, deployment, and maintenance. You focus on running your business.",
        },
        {
            question: "How is pricing structured?",
            answer:
                "Every business is different, so every package is tailored. We scope your needs first, then build a proposal that fits your goals and budget. No surprises, no hidden fees.",
        },
        {
            question: "Will this work with my existing tools?",
            answer:
                "Yes. We specialise in integrating AI with what you already use, whether that's your CRM, ERP, communication tools, or custom systems.",
        },
        {
            question: "What happens after launch?",
            answer:
                "We stay. Ongoing support, performance monitoring, and continuous optimisation are part of how we work. Your AI keeps improving, and so do your results.",
        },
    ];

    const whyUsItems = [
        "End-to-end execution covering strategy, build, deploy, and optimise",
        "Full AI spectrum including Predictive, Generative, NLP, ML, Vision, and Voice",
        "Industry agnostic and built for any business, any sector",
        "No lock-in because we work with your existing stack",
        "Tailored pricing with packages built around your needs",
        "Ongoing support that continues long after launch",
    ];

    const title = "AI Transformation Program | Custom AI Solutions at Speed & Scale | We Want Agent";
    const description =
        "Stop losing time to manual work. We Want Agent builds custom AI systems that cut costs by 60% and triple your speed. Book your free strategy call today.";
    const url = "https://wewantagent.com/services/ai-transformation";
    const imageUrl = "https://wewantagent.com/assets/home/logo white.png";

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
                            alt: "AI Transformation Program by We Want Agent",
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
                    { position: 2, name: "AI Transformation", item: url },
                ]}
            />
            <div className="bg-black">
                <HeroSection
                    title="Your Competitors Are Already Using AI. Are You?"
                    description="We design, build, and deploy custom AI systems that cut manual work by 80%, slash operational costs, and scale your business from strategy to full execution. You don't need to understand AI. You just need the right partner."
                    buttonText="Book Your Free Strategy Call"
                    buttonHref="https://calendly.com/talhafakhar/discoverycall"
                    buttonTarget="_blank"
                    buttonRel="noopener noreferrer"
                    imageSrc="/assets/services/aiDevelopment.webp"
                    width={420}
                    height={480}
                    imageClassName="-mt-16 md:-mt-24"
                    contentClassName="mt-10 md:mt-16"
                    note="30 minutes. No commitment. Just a clear picture of what AI can do for your business."
                />
                <ProblemSection
                    heading="Every Day Without AI Is Money Left on the Table"
                    paragraphs={[
                        "Your team is drowning in repetitive tasks. Your customers wait hours for responses. Your decisions rely on gut feeling instead of data.",
                        "Meanwhile, businesses that adopted AI are moving 3x faster, spending 60% less on operations, and winning customers you're losing.",
                        "The gap isn't talent. It's not budget. It's execution, and that's exactly what we deliver.",
                    ]}
                    buttonText="See What's Possible for Your Business"
                />
                <ComparisonSection
                    heading="This Is What Transformation Actually Looks Like"
                    rows={comparisonRows}
                    buttonText="Get Your Free AI Audit"
                />
                <ServicesSection
                    heading="The Full Spectrum of AI, Delivered at Speed and Scale"
                    description="Whatever your business needs, we have the capability to build it."
                    services={services}
                />
                <ProcessTimeline
                    heading="From First Call to Full Transformation. Here's How It Works"
                    steps={steps}
                    buttonText="Start Step 1. It's Free →"
                    buttonHref="/contact"
                />
                <TechStackSection
                    heading="Best-in-Class Tools Across Every AI Function"
                    description="We don't experiment on your business. We deploy proven, industry-leading technology."
                    rows={techStackRows}
                />
                <MythsSection
                    heading="What's Really Stopping You?"
                    description="Let's be honest about the objections in your head right now."
                    myths={myths}
                    buttonText="Still Have Doubts? Let's Talk"
                    buttonHref="https://calendly.com/talhafakhar/discoverycall"
                    buttonTarget="_blank"
                    buttonRel="noopener noreferrer"
                />
                <StatsSection
                    heading="Numbers Don't Lie"
                    stats={results}
                    buttonText="Get These Results"
                />
                <WhoForSection
                    heading="If Any of These Sound Like You, We Should Talk"
                    personas={personas}
                    buttonText="Yes, That's Me. Book My Call"
                    buttonHref="https://calendly.com/talhafakhar/discoverycall"
                    buttonTarget="_blank"
                    buttonRel="noopener noreferrer"
                />
                <FaqSection
                    heading="Questions? Answered."
                    subheading="Everything you need to know about the AI Transformation Program"
                    faqs={faqs}
                    showButton={false}
                />
                <WhyUsSection
                    heading="We Don't Sell AI. We Deliver Outcomes."
                    items={whyUsItems}
                />
                <AIModulesSection />
                <BannerSection
                    text="Every Week You Wait, the Gap Gets Wider"
                    description="Your free 30-minute strategy call gives you a clear AI roadmap for your business, whether you work with us or not. No commitment. No pressure. Just clarity."
                    buttonText="Book Your Free Strategy Call Now"
                    note="Limited slots available each week."
                />
                <FooterSection />
            </div>
        </>
    );
}
