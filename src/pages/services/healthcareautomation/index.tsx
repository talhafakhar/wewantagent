
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
import {NextSeo, WebPageJsonLd} from "next-seo";
import healthcareLottie from "@/assets/lottie/healthcare.json";
import {
    Brain,
    Building2,
    Calendar,
    CalendarCheck, Check, CheckSquare,
    FileText,
    Home,
    MessageCircle,
    Sparkles, Stethoscope,
    Users, Activity, XCircle, ClipboardList, FileCheck
} from "lucide-react";
import ContactSection from "@/components/services/ContactFormSection";
import BannerSection from "@/components/HomePage/BannerSection";

export default function HealthcareAutomation() {
    const stats = [
        {
            icon: Calendar,
            title: "Scheduling",
            description:
                "Appointment booking, rescheduling, confirmations, and calendar are always automated",
        },
        {
            icon: MessageCircle,
            title: "Communication",
            description:
                "Patient inquiries, reminders, follow-ups, and refills are handled automatically",
        },
        {
            icon: Users,
            title: "Intake",
            description:
                "Registration, history collection, verification, and forms are processed digitally",
        },
        {
            icon: FileText,
            title: "Documentation",
            description:
                "Visit notes, billing codes, claims, and records are updated accurately",
        },
    ];
    const industries = [
        {
            icon: Home,
            title: "Primary Care Practices",
            description:
                "Automate appointment scheduling, patient intake, preventive reminders, chronic management, and referral coordination for primary care.",
        },
        {
            icon: Building2,
            title: "Dental Practices",
            description:
                "Automate cleaning reminders, appointment confirmations, insurance verification, treatment follow-ups, and recall campaigns for dentists.",
        },
        {
            icon: Brain,
            title: "Mental Health Providers",
            description:
                "Handle intake assessments, session scheduling, crisis routing, prescription refills, and therapy reminders for behavioral health providers.",
        },
        {
            icon: Activity,
            title: "Urgent Care Centers",
            description:
                "Automate wait updates, symptom checking, insurance verification, post-visit instructions, and follow-up scheduling for urgent care centers.",
        },
        {
            icon: Stethoscope,
            title: "Specialty Care Clinics",
            description:
                "Manage consultation requests, pre-visit instructions, post-procedure follow-ups, specialist referrals, and complex scheduling automatically.",
        },
        {
            icon: Sparkles,
            title: "Medical Spas",
            description:
                "Automate consultation booking, treatment reminders, aftercare instructions, membership management, and review requests for aesthetic practices.",
        },
    ];
    const services = [
        {
            title: "Appointment Scheduling Agent",
            desc: "Healthcare agents answer calls instantly, check availability, and book appointments. Cancellations trigger waitlist notifications automatically. Rescheduling handled without staff involvement. Patients select times, and confirmations are sent via text. No-show rates drop, calendars stay full always.",
            icon: CalendarCheck,
        },
        {
            title: "Patient Intake Agent",
            desc: "Automation in healthcare sends intake forms after booking. Collects history, medications, allergies, and insurance digitally. Incomplete forms trigger reminders automatically. Data flows to EHR without manual entry. Staff verifies information, and check-in is streamlined efficiently.",
            icon: ClipboardList,
        },
        {
            title: "Insurance Verification Agent",
            desc: "Verification happens before appointments automatically. Healthcare agents check eligibility, coverage, copays, and deductibles instantly. Patients receive cost estimates upfront. Issues trigger communication. Staff stops calling insurers. Denials decrease, revenue accelerates, and transparency improves.",
            icon: FileCheck,
        },
        {
            title: "Triage and Routing Agent",
            desc: "AI asks qualifying questions, assesses urgency, and routes appropriately. Emergency symptoms escalate immediately. Routine questions answered instantly. Refill requests route correctly. Billing is directed properly. Urgent cases reach clinicians fast. Routine handled efficiently. Staff time is always protected.",
            icon: Stethoscope,
        },
        {
            title: "Patient Communication Agent",
            desc: "Automated reminders sent via preferred channels. Prescription notifications, lab results, and care instructions are delivered automatically. Follow-ups, medication reminders, and wellness checks happen on schedule. Patients engaged, no-shows drop, compliance improves. Staff stops phone tag daily consistently.",
            icon: MessageCircle,
        },
    ];
    const caseStudyCards = [
        {
            heading: "The Problem",
            listIcon: XCircle,
            listIconColor: "text-secondary",
            points: [
                "Front desk overwhelmed with 200+ daily calls, 30% went to voicemail",
                "22% no-show rate costing $18,000 monthly in lost revenue",
                "Staff spent 3 hours daily on insurance verification and intake",
            ],
        },
        {
            heading: "Our Approach",
            listIcon: CheckSquare,
            listIconColor: "text-primary",
            points: [
                "Deployed Appointment Scheduling Agent handling all booking calls instantly",
                "Patient Communication Agent sent automated reminders via text and email",
                "Insurance Verification Agent checked coverage before every appointment automatically",
            ],
        },
        {
            heading: "The Outcome",
            listIcon: Check,
            listIconColor: "text-accent",
            points: [
                "No-show rate dropped to 8%, recovering $12,600 monthly revenue immediately",
                "Front desk handled 200+ calls daily without missed calls ever",
                "Staff saved 15 hours weekly, patient satisfaction scores increased 34%",
            ],
        },
    ];
    const steps = [
        {
            number: 1,
            title: " HIPAA",
            description:
                "Patient data encrypted, access controlled, audit trails maintained. Complete HIPAA compliance is guaranteed",
        },
        {
            number: 2,
            title: "Security",
            description:
                "Healthcare agents use encrypted channels, secure storage, authentication protocols. Patient privacy protected completely",
        },
        {
            number: 3,
            title: "Compliance ",
            description:
                "Automation follows healthcare regulations, medical board requirements, telehealth laws. Documentation standards maintained consistently",
        },
        {
            number: 4,
            title: "Privacy ",
            description:
                "Patient consent management, data access controls, PHI protection protocols. Privacy regulations ensured thoroughly always",
        },
    ];
    return (
        <>
            <NextSeo
                title="Health Care Automation AI Agents Solutions | We Want Agent"
                description="Health care automation with healthcare agents for scheduling, intake, insurance verification, and patient communication. Automation in health care that reduces admin burden"
                canonical="https://wewantagent.com/services/healthcareautomation"
                openGraph={{
                    url: "https://wewantagent.com/services/healthcareautomation",
                    title: "Health Care Automation AI Agents Solutions | We Want Agent",
                    description: "Health care automation with healthcare agents for scheduling, intake, insurance verification, and patient communication. Automation in health care that reduces admin burden",
                    images: [
                        {
                            url: "https://wewantagent.com/images/healthcareautomation-og.jpg",
                            width: 1200,
                            height: 630,
                            alt: "Healthcare AI Agent by We Want Agent",
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
                id="https://wewantagent.com/services/healthcareautomation#webpage"
                url="https://wewantagent.com/services/healthcareautomation"
                name="Health Care Automation AI Agents Solutions | We Want Agent"
                description="Health care automation with healthcare agents for scheduling, intake, insurance verification, and patient communication. Automation in health care that reduces admin burden"
            />

            <div className="bg-black">
                <HeroSection
                    title="Health Care Automation"
                    description="Stop administrative chaos. Healthcare agents handle scheduling, insurance, intake, communication, and follow-ups automatically for your practice"
                    buttonText="Get Your AI Agent"
                    imageSrc="/assets/services/healthCare.webp"
                />
                <BusinessSolutionsSection
                    heading="AI Agents Built For Healthcare Providers"
                    paragraphs={[
                        "Stop losing hours to administrative chaos and patient communication bottlenecks. Our automation in health care handles appointment scheduling, patient intake, insurance verification, prescription refills, and follow-up coordination automatically. From AI answering patient calls instantly to automated reminder systems reducing no-shows, we build intelligent healthcare agents that work around the clock. Urgent cases get priority routing, routine requests are handled without staff intervention, and the administrative burden is eliminated completely.",
                        "We use advanced language models, n8n workflow automation, and HIPAA-compliant integrations with your EHR, practice management software, and communication systems. Health care automation designed specifically for clinics, hospitals, private practices, and specialty care providers who want better patient experience with less administrative overhead and burnout",
                    ]}
                    lottieFile={healthcareLottie}
                />
                <StatsSection
                    heading="What We Automate For You"
                    stats={stats}
                    buttonText="See Full Capabilities"
                />
                <IndustrySolutionsSection
                    heading="Automation In Health Care Every Practice Type"
                    description="We create custom healthcare agents for every specialty and practice type. Here are just a few examples of how we streamline operations across the industry."
                    industries={industries}
                />
                <ServicesSection
                    heading="Healthcare Agents Transform Patient Experience"
                    description="We built five healthcare agents, eliminating administrative burden. Each handles workflows, integrates with EHR, and delivers results immediately"
                    services={services}
                />
                <RealEstateCaseStudy
                    heading="Real Results From Healthcare Providers"
                    description="See how we transformed a multi-location clinic with providers completely"
                    imageSrc="/assets/services/robotDr.webp"
                    width={700}
                    cards={caseStudyCards}
                />
                <ProcessTimeline
                    heading=" HIPAA Compliant Secure Always"
                    steps={steps}
                />
                <AIModulesSection/>
                <ContactSection/>
                <BannerSection
                    text="Stop drowning in administrative tasks. Get your"
                    subtext="custom health care automation"
                    lastText="solution today"

                />
                <FooterSection/>
            </div>
        </>
    );
}

