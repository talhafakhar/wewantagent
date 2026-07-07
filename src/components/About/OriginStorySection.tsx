"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import ScrollGlow from "@/components/ui/ScrollGlow";
export default function OriginStory() {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative text-white py-16 overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-10"
                >
                    <div className="space-y-6">
                        <p className="text-center font-semibold text-lg tracking-wide bg-gradient-to-r from-[#fff4d6] via-[#f7d488] to-[#f2c14e] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
                            01 - Our Mission
                        </p>

                        <h2 className="text-center text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                            Building AI That Actually Works
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:border-primary hover:-translate-y-1">
                            <p className="text-gray-300 leading-relaxed">
                                Most automation fails because companies force generic solutions onto unique problems. We do the opposite. Every AI agent we build starts with understanding your specific workflow, your team&#39;s pain points, and your industry&#39;s challenges. We&#39;re automation experts who&#39;ve seen what works and what wastes money
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:border-primary hover:-translate-y-1">
                            <p className="text-gray-300 leading-relaxed">
                                Real estate agents are drowning in follow-ups. Healthcare practices are buried in scheduling chaos. Accounting firms are losing hours to data entry. We&#39;ve automated all of it. Our mission is simple: stop businesses from doing work machines should handle. Give teams their time back for strategy, relationships, and growth. No fluff, no overpromises, just intelligent automation that fits your reality and delivers measurable results from day one.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
