"use client";
import { motion, easeOut } from "framer-motion";
import { Home, HeartPulse, Calculator } from "lucide-react";
import React from "react";

const industries = [
    {
        title: "Real Estate Focused",
        description:
            "We understand MLS systems, CRM workflows, lead nurturing cycles, and transaction coordination chaos. Your AI agent speaks real estate — not generic business automation that misses industry-specific needs.",
        icon: Home,
    },
    {
        title: "Healthcare Specialized",
        description:
            "HIPAA compliance, EHR integration, patient scheduling complexity, and insurance verification headaches. We build healthcare automation that handles regulatory requirements while actually improving patient experience and staff efficiency.",
        icon: HeartPulse,
    },
    {
        title: "Accounting Mastery",
        description:
            "QuickBooks integration, invoice processing, expense categorization, reconciliation workflows, and tax document organization. We automate bookkeeping tasks that consume hours daily while maintaining accuracy and compliance standards your accountants demand.",
        icon: Calculator,
    },
];

export default function AutomationExperts() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.8, ease: easeOut },
        }),
    };

    return (
        <section className="relative text-white py-24  overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 ">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <p className="font-medium tracking-wide mb-2">03 —Expertise In</p>
                    <h2 className="max-w-4xl mx-auto text-4xl md:text-5xl font-semibold leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Automation Experts
            </span>
                        <br />
                        Who Speak Your Industry Language
                    </h2>
                </motion.div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 place-items-stretch">
                    {industries.map((industry, i) => {
                        const Icon = industry.icon;
                        return (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="bg-[#0d0d0d]/60 border border-white/10 hover:border-secondary/40
                transition-all duration-300
             rounded-tr-[4rem] rounded-bl-2xl p-8 flex flex-col text-left"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-primary/10 text-accent">
                                    <Icon className="w-7 h-7" />
                                </div>

                                {/* Title & Text */}
                                <h3 className="text-2xl font-semibold mb-4 text-white">
                                    {industry.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {industry.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
                <div className="mt-10  flex justify-center ">
                    <motion.button
                        variants={{
                            hover: {
                                scale: 1.05,
                                rotate: [0, 1, -1, 0],
                                transition: { duration: 0.3 },
                            },
                            tap: {
                                scale: 0.95,
                            },
                        }}
                        whileHover="hover"
                        whileTap="tap"
                        className="relative h-12 w-64 overflow-hidden  text-white shadow-2xl transition-all duration-200
    before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto
    before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300
    before:ease-out hover:before:h-40 hover:before:w-64
    border-transparent bg-gradient-to-r from-primary via-accent to-secondary p-[2px]"
                    >
  <span className="relative z-10 flex h-full w-full items-center justify-center bg-black rounded-sm">
    Get a Free Consultation
  </span>
                    </motion.button>

                </div>
            </div>
        </section>
    );
}
