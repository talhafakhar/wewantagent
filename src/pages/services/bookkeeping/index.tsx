
import React  from "react";
import HeroSection from "@/components/services/HeroSection";
import FooterSection from "@/components/Footer/footer";
import ServicesSection from "@/components/services/ServicesSection";
import StatsSection from "@/components/services/StatsSection";
import RealEstateCaseStudy from "@/components/services/RealEstateCaseStudy";
import BusinessSolutionsSection from "@/components/services/BusinessSolutionsSection";
import ProcessTimeline from "@/components/services/FlowSection";
import AIModulesSection from "@/components/services/ModalSection";
import IndustrySolutionsSection from "@/components/services/IndustrySolutionSection";
import {NextSeo, WebPageJsonLd, BreadcrumbJsonLd} from "next-seo";
import {
    Calendar,
    Check, CheckSquare,
    FileText,
    Home,
    MessageCircle,
    Users, XCircle, FileCheck, Briefcase, DollarSign, ShoppingCart, Heart, Clipboard, BarChart2, CreditCard, ShieldCheck
} from "lucide-react";
import ContactSection from "@/components/services/ContactFormSection";
import BannerSection from "@/components/HomePage/BannerSection";

export default function BookkeepingAi() {
    const stats = [
        {
            icon: Calendar,
            title: "Processing",
            description: "Invoice entry, expense categorization, receipt matching automated instantly",
        },
        {
            icon: MessageCircle,
            title: "Reconciliation",
            description: "Bank statements, credit cards, accounts matched automatically accurately",
        },
        {
            icon: Users,
            title: "Reporting",
            description: "Financial statements, tax reports, dashboards generated automatically always",
        },
        {
            icon: FileText,
            title: "Compliance",
            description: "Audit trails, documentation, regulatory checks maintained automatically continuously",
        },
    ];
    const industries = [
        {
            icon: Briefcase,
            title: "Accounting Firms",
            description:
                "Automate client bookkeeping, invoice processing, reconciliation, reporting, compliance checks for accounting firm automation at scale.",
        },
        {
            icon: DollarSign,
            title: "Small Business Finance",
            description:
                "Handle expense tracking, invoice management, payroll processing, tax preparation, financial reporting for business owners automatically.",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce Operations",
            description:
                "Automate sales reconciliation, inventory accounting, payment processing, multi-channel revenue tracking, COGS calculation for online stores.",
        },
        {
            icon: Clipboard,
            title: "Professional Services",
            description:
                "Track project expenses, client billing, time-based revenue, contractor payments, profitability analysis for consulting firms automatically.",
        },
        {
            icon: Home,
            title: "Real Estate Finance",
            description:
                "Automate rent collection tracking, property expense allocation, owner distributions, tax documentation, portfolio reporting for property managers.",
        },
        {
            icon: Heart,
            title: "Nonprofit Organizations",
            description:
                "Handle donation tracking, grant accounting, fund allocation, program expense reporting, compliance documentation for nonprofit finance teams.",
        },
    ];
    const services = [
        {
            title: "Financial Data Normalization Agent",
            desc: "Extracts transaction data from QuickBooks, Xero, banking systems automatically. Cleans messy data, normalizes field names, classifies accounts into revenue, COGS, expenses, assets, liabilities, equity categories. No manual exports needed. Data becomes structured, analysis-ready instantly always.",
            icon: FileCheck,
        },
        {
            title: "Financial Statement Generator Agent",
            desc: "Automatically generates profit and loss statements, balance sheets, cashflow reports from normalized data. Revenue, COGS, gross profit, net income computed automatically. Assets, liabilities, equity balanced perfectly. Replaces manual Excel building. Everything updates automatically with new transactions daily.",
            icon: BarChart2,
        },
        {
            title: "Dashboard Visualization Agent",
            desc: "Builds dynamic visual dashboards using Google Sheets and Looker Studio automatically. Revenue versus expenses charts, gross profit trends, cashflow analysis, anomaly detection tables. KPI cards for assets, liabilities, equity. Real-time business pulse without opening accounting software ever.",
            icon: FileText,
        },
        {
            title: "Invoice Processing Agent",
            desc: "Bookkeeping automation extracts data from invoices automatically using OCR and AI. Vendor names, amounts, dates, and line items captured accurately. Posts to correct accounts, matches purchase orders, and flags duplicates. Processes hundreds of invoices daily without human data entry needed.",
            icon: CreditCard,
        },
        {
            title: "Reconciliation and Compliance Agent",
            desc: "Matches bank transactions with accounting records automatically. Identifies discrepancies, flags missing entries, and suggests corrections. Maintains audit trails, generates compliance reports, and tracks tax documentation. Accounting workflow automation ensures books stay clean, audit-ready, and always without manual checking needed.",
            icon: ShieldCheck,
        },
    ];
    const caseStudyCards = [
        {
            heading: "The Problem",
            listIcon: XCircle,
            listIconColor: "text-secondary",
            points: [
                "Staff spent 25 hours weekly on manual data entry and invoice processing",
                "Month-end close took 7 days due to reconciliation bottlenecks",
                "Client reports delayed, causing satisfaction issues and retention concerns",
            ],
        },
        {
            heading: "Our Approach",
            listIcon: CheckSquare,
            listIconColor: "text-primary",
            points: [
                "Deployed Financial Data Normalization Agent cleaning QuickBooks data automatically",
                "Invoice Processing Agent handled document extraction and posting automatically",
                "Dashboard Visualization Agent generated real-time client reports instantly",
            ],
        },
        {
            heading: "The Outcome",
            listIcon: Check,
            listIconColor: "text-accent",
            points: [
                "Data entry time reduced by 22 hours weekly, staff focused on advisory services",
                "Month-end close completed in 2 days with automated reconciliation processes",
                "Client satisfaction increased 40%, firm capacity doubled without new hires",
            ],
        },
    ];
    const steps = [
        {
            number: 1,
            title: " GAAP",
            description:
                "Financial records prepared and maintained in full accordance with Generally Accepted Accounting Principles. Accuracy and consistency guaranteed always.",
        },
        {
            number: 2,
            title: "Security",
            description:
                "Financial data encrypted with bank-level security, access controlled, and stored with multi-layer authentication protocols. Your books protected completely.",
        },
        {
            number: 3,
            title: "Compliance",
            description:
                "Automation follows IRS regulations, tax filing requirements, and industry accounting standards. Documentation and reporting standards maintained consistently.",
        },
        {
            number: 4,
            title: "ACCURACY",
            description:
                "Real-time reconciliation, error detection, and audit-ready records. Every transaction verified and every number accountable at all times.",
        },
    ];
    return (
        <>
            <NextSeo
                title="Bookkeeping AI Agent | GAAP Compliant Financial Automation | We Want Agent"
                description="Automate bookkeeping, tax compliance, and financial reporting with secure AI agents. GAAP compliant and always accurate. Powered by We Want Agent."
                canonical="https://wewantagent.com/services/bookkeeping"
                openGraph={{
                    type: "website",
                    url: "https://wewantagent.com/services/bookkeeping",
                    title: "Bookkeeping AI Agent | GAAP Compliant Financial Automation | We Want Agent",
                    description: "Automate bookkeeping, tax compliance, and financial reporting with secure AI agents. GAAP compliant and always accurate. Powered by We Want Agent.",
                    images: [
                        {
                            url: "https://wewantagent.com/assets/home/logo white.png",
                            width: 1200,
                            height: 630,
                            alt: "Bookkeeping AI Agent by We Want Agent",
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
                id="https://wewantagent.com/services/bookkeeping#webpage"
                url="https://wewantagent.com/services/bookkeeping"
                name="Bookkeeping AI Agent | GAAP Compliant Financial Automation | We Want Agent"
                description="Automate bookkeeping, tax compliance, and financial reporting with secure AI agents. GAAP compliant and always accurate. Powered by We Want Agent."
            />
            <BreadcrumbJsonLd
                useAppDir={false}
                itemListElements={[
                    { position: 1, name: "Home", item: "https://wewantagent.com/" },
                    { position: 2, name: "Bookkeeping", item: "https://wewantagent.com/services/bookkeeping" },
                ]}
            />
            <div className="bg-black">
                <HeroSection
                    title="Bookkeeping AI Agent"
                    description=" Stop manual data entry forever. Our accounting automation handles invoices, expenses, reconciliation, reporting automatically for firms"
                    buttonText="Get Your AI Agent"
                    imageSrc="/assets/services/bookkeepingAgent.webp"
                    width={440}
                    height={536}
                />
                <BusinessSolutionsSection
                    heading="AI Agents Built For Accounting Firms"
                    paragraphs={[
                        "Stop losing billable hours to manual bookkeeping tasks and data entry chaos. Our bookkeeping ai handles invoice processing, expense categorization, bank reconciliation, financial reporting, and compliance checks automatically. From AI extracting transaction data instantly to automated financial statement generation, we build intelligent accounting ai agent systems that work continuously. Routine transactions get processed without human touch, anomalies flagged for review, reports generated on schedule automatically",
                        "We use advanced language models, n8n workflow automation, and seamless integrations with QuickBooks, Xero, accounting software, and banking systems. Automation of accounting process designed specifically for accounting firms, bookkeeping services, CFO offices, and finance departments who want accuracy with less manual work and overhead costs always",
                    ]}
                    lottieFile={() => import("@/assets/lottie/bookkeeping.json")}
                />
                <StatsSection
                    heading="What We Automate For You"
                    stats={stats}
                    buttonText="Know Our Full Capabilities"
                />
                <IndustrySolutionsSection
                    heading="Bookkeeping AI For Every Business Type"
                    description="From small businesses to enterprises, our bookkeeping ai agents adapt to your industry needs."
                    industries={industries}
                />
                <ServicesSection
                    heading="Accounting Automation That Actually Works"
                    description="We build five accounting ai agent solutions eliminating manual work. Each handles workflows, integrates with systems, delivers accurate results"
                    services={services}
                />
                <RealEstateCaseStudy
                    heading="Real Results From Accounting Clients"
                    description="See how we transformed regional accounting firm with 15 staff completely"
                    imageSrc="/assets/services/bookkeepingRotot.webp"
                    width={400}
                    cards={caseStudyCards}
                />
                <ProcessTimeline
                    heading="GAAP Compliant Accurate Always"
                    steps={steps}
                />
                <AIModulesSection/>
                <ContactSection/>
                <BannerSection
                    text="Will AI replace bookkeepers? No. It makes them strategic advisors"
                    subtext="Get accounting automation"
                    lastText="today"

                />
                <FooterSection/>
            </div>
        </>
    );
}

