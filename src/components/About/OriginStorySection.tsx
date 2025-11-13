"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function OriginStory() {
    return (
        <section className="relative   text-white py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8 ">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <p className="font-medium text-sm tracking-wide">
                        01 — Our Mission
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                        Building AI {" "}
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            That Actually Works
                        </span>
                    </h2>

                    <p className="text-gray-300 leading-relaxed">
                        Most automation fails because companies force generic solutions onto unique problems. We do the opposite. Every AI agent we build starts with understanding your specific workflow, your team&#39;s pain points, and your industry&#39;s challenges. We&#39;re automation experts who&#39;ve seen what works and what wastes money
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        Real estate agents are drowning in follow-ups. Healthcare practices are buried in scheduling chaos. Accounting firms are losing hours to data entry. We&#39;ve automated all of it. Our mission is simple: stop businesses from doing work machines should handle. Give teams their time back for strategy, relationships, and growth. No fluff, no overpromises, just intelligent automation that fits your reality and delivers measurable results from day one.

                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="w-full max-w-md">
                        <Image
                            src="/assets/about/make-ai.webp"
                            alt="Origin Story"
                            width={500}
                            height={500}
                            className="transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
