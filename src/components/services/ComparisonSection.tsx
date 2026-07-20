"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";

interface ComparisonRow {
    without: string;
    with: string;
}

interface ComparisonSectionProps {
    heading: string;
    rows: ComparisonRow[];
    buttonText: string;
    buttonHref?: string;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
                                                                   heading,
                                                                   rows,
                                                                   buttonText,
                                                                   buttonHref = "/contact",
                                                               }) => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative py-20 text-white overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-semibold text-center mb-16 max-w-3xl mx-auto"
                >
                    <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                        {heading}
                    </span>
                </motion.h2>

                <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className={`relative max-w-[400px] w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 transition-all duration-300 group hover:border-primary hover:-translate-y-1`}
                    >
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6 ml-2">
                                    <h3 className="text-xl font-medium text-gray-200">Without AI</h3>
                                <span className="text-sm text-[#f2c14e] font-medium">Old Way</span>
                            </div>

                            <ul className="space-y-5">
                                {rows.map((row, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/6">
                                            <X className="w-4 h-4 text-[#8aa1c8] group-hover:text-[#8aa1c8] transition-colors duration-300" />
                                        </div>
                                        <p className="text-base text-gray-300 leading-relaxed">{row.without}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.08 }}
                        viewport={{ once: true }}
                        className={`relative max-w-[400px] w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 transition-all duration-300 group hover:border-primary hover:-translate-y-1 hover:shadow-[0_20px_60px rgba(43,143,255,0.08)]`}
                    >
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6 ml-2">
                                    <h3 className="text-xl font-medium text-white">With We Want Agent</h3>
                                <span className="text-sm text-[#5EA8FF] font-medium">AI-powered</span>
                            </div>

                            <ul className="space-y-5">
                                {rows.map((row, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/6">
                                            <Check className="w-4 h-4 text-[#8aa1c8] group-hover:text-[#8aa1c8] transition-colors duration-300" />
                                        </div>
                                        <p className="text-base text-gray-100 leading-relaxed">{row.with}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 flex justify-center">
                    <GlowButton href={buttonHref} shape="rect">
                        {buttonText}
                    </GlowButton>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
