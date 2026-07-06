"use client";
import React, { useRef } from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import ScrollGlow from "@/components/ui/ScrollGlow";
import GlowButton from "@/components/ui/GlowButton";

const PricingSection = () => {
    const plans = [
        {
            title: "Starter Pack",
            price: "$2,500",
            billing: "/project",
            description:
                "Perfect for startups and small teams testing AI automation for the first time. Get your first workflow automated and experience measurable efficiency within two weeks. Zero complexity, immediate results.",
            features: [
                "1 AI Agent Developed",
                "Single Workflow Automation",
                "Basic Integration (1–2 Tools)",
                "2 Weeks Development Time",
                "30 Days Post-Launch Support",
                "Ideal For: Businesses automating their first process or validating AI’s ROI.",
            ],
            unavailableFeatures: [],
            highlight: false,
            cta: "Get Started",
        },
        {
            title: "Growth Pack",
            price: "$8,500",
            billing: "/project",
            badge: "Most Popular",
            description:
                "Built for growing companies ready to scale automation across departments. Empower your operations with multi-workflow AI systems and advanced integrations that deliver real business impact.",
            features: [
                "3 AI Agents Developed",
                "Multi-Workflow Automation",
                "Advanced Integration (Up to 5 Tools)",
                "6–8 Weeks Development Time",
                "90 Days Post-Launch Support",
                "Custom Dashboard & Analytics",
                "Monthly Optimization Sessions",
                "Ideal For: Teams ready to replace repetitive manual tasks with intelligent automation.",
            ],
            unavailableFeatures: [],
            highlight: true,
            cta: "Get Started",
        },
        {
            title: "Enterprise Pack",
            price: "Custom Pricing",
            billing: "",
            description:
                "Tailored for established organizations needing end-to-end AI automation across divisions. Get enterprise-level support, full system integration, and dedicated management for sustainable AI transformation.",
            features: [
                "Unlimited AI Agents",
                "Enterprise-Wide Automation",
                "Full System Integration (Unlimited)",
                "Custom Timeline Based on Scope",
                "12 Months Premium Support",
                "Dedicated Account Manager",
                "White-Glove Onboarding",
                "Priority Feature Development",
                "Ideal For: Enterprises seeking complete AI-driven digital transformation.",
            ],
            unavailableFeatures: [],
            highlight: false,
            cta: "Contact Sales",
        },
    ];
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 },
        },
    };

    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative flex flex-col items-center justify-center overflow-x-hidden text-white  py-20">
            <ScrollGlow
                target={sectionRef}
                positionClassName="left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2"
            />
            <div className="relative max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                        Simple Pricing, Powerful Results
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-base leading-relaxed">
                        Choose the plan that fits your automation goals
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-8 lg:grid-cols-3"
                >
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative flex h-full flex-col p-6 rounded-2xl backdrop-blur-3xl shadow-2xl shadow-gray-900/50 transition-all duration-500 transform hover:scale-[1.03] hover:border-primary/60 hover:shadow-[0_0_20px_rgba(94,168,255,0.35),0_0_55px_rgba(94,168,255,0.18)] bg-white/5 border border-white/10"
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 right-4 bg-gradient-to-r from-primary via-accent to-secondary text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="flex h-full flex-col">
                                <span className="text-lg font-medium bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                    {plan.title}
                                </span>

                                <p className="mt-3">
                                    <span className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                        {plan.price}
                                    </span>{" "}
                                    <span className="text-sm font-medium text-white/50">
                                        {plan.billing}
                                    </span>
                                </p>

                                <p className="mt-4 min-h-[92px] text-sm text-white/60 leading-relaxed">
                                    {plan.description}
                                </p>

                                <div className="mt-6">
                                    <GlowButton href="#" shape="rect" className="w-full">
                                        {plan.cta}
                                    </GlowButton>
                                </div>

                                <div className="mt-6 border-t border-white/10" />

                                <ul className="mt-6 flex flex-1 flex-col text-sm gap-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 shrink-0 text-primary" />
                                            <span className="text-white/80">{feature}</span>
                                        </li>
                                    ))}
                                    {plan.unavailableFeatures.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 opacity-50">
                                            <X className="w-5 h-5 shrink-0 text-white/50" />
                                            <span className="text-white/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;
