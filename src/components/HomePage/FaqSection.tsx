"use client";
import React from "react";
import { motion } from "framer-motion";
const faqs = [
    {
        question: "How to create an AI agent for my business?",
        answer:
            "We start with a discovery call to understand your pain points. Then our automation expert maps out what tasks to automate, designs the AI agent architecture, develops it custom for your workflow, tests thoroughly, and deploys it into your systems. You're involved at every step — no surprises.",
    },
    {
        question: "How much does AI cost for a small business?",
        answer:
            "It depends on complexity, but most AI automation agency projects start between $5,000–$15,000 for initial development. Monthly maintenance runs $500–$2,000. We provide transparent quotes upfront — no hidden fees. Think of it as hiring a full-time employee who never sleeps, never quits, and costs less annually.",
    },
    {
        question: "Will AI assistants work with my current software?",
        answer:
            "Yes. We build AI automation service solutions that integrate with your existing CRM, scheduling tools, accounting software, and databases. No need to change what's working — we make it work smarter. If you use it daily, we can likely automate around it or enhance it.",
    },
    {
        question: "How long does it take to build custom AI agents?",
        answer:
            "Simple artificial intelligence automation takes 2–4 weeks. Complex multi-system integrations need 6–12 weeks. Rush projects are possible for urgent needs. We give you realistic timelines during consultation — never overpromise. Most clients see their first automation running within 30 days of starting.",
    },
];
export default function FaqSection() {
    return (
        <section className="py-24 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <h2 className="text-3xl sm:text-6xl font-semibold tracking-tight text-white">
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
                            className="mt-10 "
                        >
                            <motion.button
                                variants={{
                                    hover: {
                                        scale: 1.05,
                                        rotate: [0, 1, -1, 0],
                                        transition: { duration: 0.3 },
                                    },
                                    tap: { scale: 0.95 },
                                }}
                                whileHover="hover"
                                whileTap="tap"
                                className="relative h-12 w-60 overflow-hidden text-white shadow-2xl transition-all duration-200
              before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto
              before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300
              before:ease-out hover:before:h-40 hover:before:w-60
              border-transparent bg-gradient-to-r from-primary via-accent to-secondary p-[2px]"
                            >
            <span className="relative z-10 flex h-full w-full items-center justify-center text-nowrap bg-black rounded-sm">
              Book a free consultation
            </span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    <div className="mt-10 lg:col-span-7 lg:mt-0">
                        <dl className="divide-y divide-white/10">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: true }}
                                    className="py-6 first:pt-0 last:pb-0"
                                >
                                    <dt className="text-xl font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                        {faq.question}
                                    </dt>
                                    <dd className="mt-3 text-base leading-7 text-gray-400">
                                        {faq.answer}
                                    </dd>
                                </motion.div>
                            ))}
                        </dl>
                    </div>

                </div>

            </div>
        </section>
    );
}
