"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FaqSection() {
    const faqs = [
        {
            question: "Can I use your software to become a billionaire?",
            answer: "Absolutely! But only if you already have a billion dollars. Otherwise, we recommend starting with something more attainable, like getting through your email inbox.",
        },
        {
            question: "Is your software bug-free?",
            answer: "Our software is as bug-free as a pristine forest... which is to say, there are probably a few bugs hiding somewhere. But don't worry, our team of digital exterminators is on standby!",
        },
        {
            question: "What do I do if I forget my password?",
            answer: "First, try panicking for a few seconds – this seems to help most people. If that doesn't work, click the “Forgot Password” link, and we’ll send you on a thrilling adventure to reset it!",
        },
        {
            question: "Can your software make me coffee?",
            answer: "We're working on it! But until then, our software is excellent at giving you more time to make your own coffee. We call that a win-win!",
        },
    ];

    return (
        <section className="py-24 text-white bg-black">
            <div className="mx-auto max-w-7xl px-6">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Left Section */}
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
                            Still need help?{" "}
                            <a href="#" className="font-semibold text-blue-500">
                                Chat
                            </a>{" "}
                            to us.
                        </p>
                    </motion.div>

                    {/* Right Section */}
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
                                    <dt className="text-xl font-semibold bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] bg-clip-text text-transparent">
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
