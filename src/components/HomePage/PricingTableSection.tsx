"use client";
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
    const plans = [
        {
            title: "Starter Pack",
            price: "$2,500",
            billing: "/project",
            description:
                "This plan is ideal for small businesses testing AI automation agency services for the first time with single workflow needs.",
            features: [
                "1 AI Agent Developed",
                "Single Workflow Automation",
                "Basic Integration (1-2 Tools)",
                "2 Weeks Development Time",
                "30 Days Post-Launch Support",
            ],
            unavailableFeatures: [
                "Advanced Multi-System Integration",
                "Dedicated Account Manager",
                "Priority Updates",
            ],
            highlight: false,
            cta: "Get Started",
        },
        {
            title: "Growth Pack",
            price: "$8,500",
            billing: "/project",
            description:
                "This plan is ideal for growing businesses ready to automate multiple processes and scale operations with AI assistants.",
            features: [
                "3 AI Agents Developed",
                "Multi-Workflow Automation",
                "Advanced Integration (Up to 5 Tools)",
                "6-8 Weeks Development Time",
                "90 Days Post-Launch Support",
                "Custom Dashboard & Analytics",
                "Monthly Optimization Sessions",
            ],
            unavailableFeatures: ["White-Glove Onboarding"],
            highlight: true,
            badge: "Most Popular",
            cta: "Get Started",
        },
        {
            title: "Enterprise Pack",
            price: "Custom Pricing",
            billing: "",
            description:
                "This plan is ideal for established companies needing comprehensive artificial intelligence automation across departments with dedicated support.",
            features: [
                "Unlimited AI Agents",
                "Enterprise-Wide Automation",
                "Full System Integration (Unlimited)",
                "Custom Timeline Based on Scope",
                "12 Months Premium Support",
                "Dedicated Account Manager",
                "White-Glove Onboarding",
                "Priority Feature Development",
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

    return (
        <section className="relative flex flex-col items-center justify-center text-white px-6 py-20">
            <div className="relative max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
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
                            className={`relative flex flex-col justify-between p-8 rounded-2xl backdrop-blur-3xl shadow-2xl shadow-gray-900/50 transition-all duration-500 transform hover:scale-[1.03] ${
                                plan.highlight
                                    ? "bg-white/20 border border-white/10"
                                    : "bg-white/5 border border-white/10"
                            }`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 right-4 bg-gradient-to-r from-primary via-accent to-secondary text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                                    {plan.badge}
                                </div>
                            )}

                            <div>
                                <div className="flex flex-col gap-3">
                  <span className="text-xl font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    {plan.title}
                  </span>
                                    <p>
                    <span className="text-3xl font-bold tracking-tight">
                      {plan.price}
                    </span>{" "}
                                        <span className="text-base font-medium text-white/70">
                      {plan.billing}
                    </span>
                                    </p>
                                </div>

                                <p className="mt-8 text-sm text-white/80">{plan.description}</p>

                                <ul className="flex flex-col mt-8 text-sm gap-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-400" />
                                            {feature}
                                        </li>
                                    ))}
                                    {plan.unavailableFeatures.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 opacity-50">
                                            <XCircle className="w-5 h-5 text-red-400" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex mt-10">
                                <a
                                    href="#"
                                    className={`w-full h-12 flex items-center justify-center rounded font-medium transition-all duration-200 ${
                                        plan.highlight
                                            ? "bg-white text-black hover:bg-white/80"
                                            : "bg-white/10 text-white hover:bg-white/5"
                                    }`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;
