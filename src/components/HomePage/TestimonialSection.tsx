"use client";
import React, { useRef } from "react";
import ScrollGlow from "@/components/ui/ScrollGlow";

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const testimonialsTop = [
        {
            title: "Regional Brokerage Real Estate",
            industry: "Real Estate",
            text: "47 second average response time, 64% conversion increase, and 12 hours saved per agent weekly. The ROI was immediate.",
        },
        {
            title: "Multi-Location Clinic Healthcare",
            industry: "Healthcare",
            text: "No-shows dropped from 22% to 8%, saving us $12,600 monthly. The AI handles 200+ calls daily without missing one.",
        },
        {
            title: "Accounting Practice Finance",
            industry: "Finance",
            text: "Month-end close went from 7 days to 2 days. Client satisfaction up 40%, and we doubled capacity without new hires.",
        },
        {
            title: "Small Business Bookkeeping Firm",
            industry: "Bookkeeping",
            text: "Onboarding calls and reconciliation follow-ups are fully automated, cutting admin time by 15 hours a week.",
        },
        {
            title: "Boutique Law Firm Legal",
            industry: "Legal",
            text: "Client intake and scheduling are now fully automated, giving our paralegals back 10+ hours a week for billable work.",
        },
        {
            title: "Home Services Company Field Service",
            industry: "Field Service",
            text: "Our custom AI agent handles dispatch confirmations and rescheduling instantly, keeping every technician on time.",
        },
    ];

    const testimonialsBottom = [
        {
            title: "E-commerce Retailer Retail",
            industry: "Retail",
            text: "Order status and return inquiries are resolved instantly, cutting our support ticket backlog by 70% in the first month.",
        },
        {
            title: "Dental Group Practice Healthcare",
            industry: "Healthcare",
            text: "Appointment reminders and rebooking run automatically now, freeing our front desk to focus on patients in the chair.",
        },
        {
            title: "Independent Insurance Agency Insurance",
            industry: "Insurance",
            text: "Renewal calls happen on schedule every time, and our close rate on policy renewals climbed 30% in one quarter.",
        },
        {
            title: "Property Management Group Real Estate",
            industry: "Real Estate",
            text: "Maintenance requests are logged and routed automatically around the clock, so nothing falls through the cracks overnight.",
        },
        {
            title: "Auto Repair Shop Automotive",
            industry: "Automotive",
            text: "Estimate follow-ups that used to slip through the cracks now happen automatically, lifting our approval rate by 25%.",
        },
        {
            title: "Regional CPA Group Finance",
            industry: "Finance",
            text: "Tax season intake calls are triaged and scheduled by our custom agent, letting the team focus purely on client work.",
        },
    ];

    return (
        <section ref={sectionRef} className="relative overflow-hidden h-screen flex flex-col justify-center py-20">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <ScrollGlow target={sectionRef} />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl mx-auto text-center">
                    <span className="font-medium mb-4 block bg-gradient-to-r from-[white] via-[#f2c14e] to-[#f2c14e] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(242,193,78,0.45)]">What Clients Say</span>
                    <h2 className="text-4xl leading-[3rem] font-semibold bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                        Real Results From Beta Partners
                    </h2>
                    <p className="mt-4 text-gray-400">
                        From massive time savings to direct revenue growth. Actual results from the innovative teams driving efficiency with our custom solutions.
                    </p>
                </div>

                <div className="w-full mt-10 flex flex-col gap-6 overflow-hidden">
                    <div className="marquee-row overflow-hidden">
                        <div className="marquee-track flex w-max animate-marquee-right">
                            {[...testimonialsTop, ...testimonialsTop].map((t, i) => (
                                <div key={i} className="shrink-0 w-[280px] sm:w-[320px] mr-6">
                                    <div className="group h-full min-h-[160px] border border-white/10 rounded-xl max-sm:max-w-sm max-sm:mx-auto p-6 bg-gradient-to-b from-white/[0.06] to-white/[0.015] backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-white/20 hover:from-white/10 hover:to-white/[0.03]">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-white to-[#f2c14e] bg-clip-text text-transparent">
                                                {t.title}
                                            </h3>
                                            <p className="text-xs uppercase tracking-wide text-gray-400 mb-4">
                                                {t.industry}
                                            </p>
                                            <p className="text-sm text-gray-400 leading-6">
                                                {t.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="marquee-row overflow-hidden">
                        <div className="marquee-track flex w-max animate-marquee-left">
                            {[...testimonialsBottom, ...testimonialsBottom].map((t, i) => (
                                <div key={i} className="shrink-0 w-[280px] sm:w-[320px] mr-6">
                                    <div className="group h-full min-h-[160px] border border-white/10 rounded-xl max-sm:max-w-sm max-sm:mx-auto p-6 bg-gradient-to-b from-white/[0.06] to-white/[0.015] backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-white/20 hover:from-white/10 hover:to-white/[0.03]">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-white to-[#f2c14e] bg-clip-text text-transparent">
                                                {t.title}
                                            </h3>
                                            <p className="text-xs uppercase tracking-wide text-gray-400 mb-4">
                                                {t.industry}
                                            </p>
                                            <p className="text-sm text-gray-400 leading-6">
                                                {t.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
