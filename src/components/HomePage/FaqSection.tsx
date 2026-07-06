"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";
const faqs = [
    {
        question: "How to create an AI agent for my business?",
        answer:
            "We start with a discovery call to understand your pain points. Then our automation expert maps out what tasks to automate, designs the AI agent architecture, develops it custom for your workflow, tests thoroughly, and deploys it into your systems. You're involved at every step - no surprises.",
    },
    {
        question: "How much does AI cost for a small business?",
        answer:
            "It depends on complexity, but most AI automation agency projects start between $5,000–$15,000 for initial development. Monthly maintenance runs $500–$2,000. We provide transparent quotes upfront - no hidden fees. Think of it as hiring a full-time employee who never sleeps, never quits, and costs less annually.",
    },
    {
        question: "Will AI assistants work with my current software?",
        answer:
            "Yes. We build AI automation service solutions that integrate with your existing CRM, scheduling tools, accounting software, and databases. No need to change what's working - we make it work smarter. If you use it daily, we can likely automate around it or enhance it.",
    },
    {
        question: "How long does it take to build custom AI agents?",
        answer:
            "Simple artificial intelligence automation takes 2–4 weeks. Complex multi-system integrations need 6–12 weeks. Rush projects are possible for urgent needs. We give you realistic timelines during consultation - never overpromise. Most clients see their first automation running within 30 days of starting.",
    },
];
export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const half = Math.ceil(faqs.length / 2);
    const columns = [faqs.slice(0, half), faqs.slice(half)];
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative overflow-hidden py-24 text-white">
            <ScrollGlow target={sectionRef} />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-3xl sm:text-6xl font-semibold tracking-tight bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                        Frequently asked questions
                    </h2>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                        Questions We Hear Every Day
                    </p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="mt-10 flex justify-center"
                    >
                        <GlowButton shape="rect">Book a free consultation</GlowButton>
                    </motion.div>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {columns.map((col, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-6">
                            {col.map((faq, i) => {
                                const index = colIndex * half + i;
                                const isOpen = openIndex === index;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                            ease: "easeOut",
                                        }}
                                        viewport={{ once: true }}
                                        className={`rounded-2xl border p-6 transition-colors duration-300 ${
                                            isOpen
                                                ? "border-primary/60 bg-white/5"
                                                : "border-white/10 bg-white/[0.02]"
                                        }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenIndex(isOpen ? null : index)
                                            }
                                            className="flex w-full items-center justify-between gap-4 text-left"
                                        >
                                            <span className="text-base sm:text-lg font-medium text-white">
                                                {faq.question}
                                            </span>
                                            <span
                                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
                                                    isOpen
                                                        ? "border-primary/60 text-primary"
                                                        : "border-white/20 text-white"
                                                }`}
                                            >
                                                {isOpen ? (
                                                    <X size={16} />
                                                ) : (
                                                    <Plus size={16} />
                                                )}
                                            </span>
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: "easeOut",
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
