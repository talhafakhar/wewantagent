"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";
interface Faq {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    heading?: string;
    subheading?: string;
    faqs?: Faq[];
    showButton?: boolean;
}

const defaultFaqs: Faq[] = [
    {
        question: "How to create an AI agent for my business?",
        answer:
            " It starts with a free consultation where we identify your biggest time drains. From there, we design, build, and deploy a custom AI agent that fits your exact workflow. You don't need any technical knowledge; we handle everything from discovery to deployment.",
    },
    {
        question: "How much does AI cost for a small business?",
        answer:
            "Every project is tailored to your needs and scope, so pricing varies. We provide a clear, itemized quote after your free consultation, before any commitment. No hidden fees, no surprises, and packages designed to pay for themselves in saved hours.",
    },
    {
        question: "Will AI assistants work with my current software?",
        answer:
            "Yes. We build automation that works with your existing systems, not against them. Whether you use Gmail, Slack, ClickUp, QuickBooks, Salesforce, or custom tools, your stack stays and we make it smarter.",
    },
    {
        question: "How long does it take to build custom AI agents?",
        answer:
            "Simple single-workflow agents go live in about 2 weeks. Multi-workflow systems take 6 to 8 weeks. Enterprise-wide automation timelines are scoped based on your needs, and we always give you a clear timeline before starting.",
    },
];

export default function FaqSection({
                                         heading = "Frequently Asked Questions",
                                         subheading = "Questions We Hear Every Day",
                                         faqs = defaultFaqs,
                                         showButton = true,
                                     }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
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
                        {heading}
                    </h2>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                        {subheading}
                    </p>
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

                {showButton && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="mt-16 flex justify-center"
                    >
                        <GlowButton href="https://calendly.com/talhafakhar/discoverycall" target="_blank" rel="noopener noreferrer" shape="rect">Book a free consultation</GlowButton>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
