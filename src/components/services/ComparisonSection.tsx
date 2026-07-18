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

                <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02]">
                    <div className="grid grid-cols-2 border-b border-white/10">
                        <div className="p-4 sm:p-5 text-center text-sm sm:text-base font-semibold bg-gradient-to-r from-[#f2c14e] to-white bg-clip-text text-transparent">
                            Without AI
                        </div>
                        <div className="p-4 sm:p-5 text-center text-sm sm:text-base font-semibold bg-gradient-to-r from-[#f2c14e] to-white bg-clip-text text-transparent">
                            With We Want Agent
                        </div>
                    </div>
                    {rows.map((row, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className={`grid grid-cols-2 ${
                                i !== rows.length - 1 ? "border-b border-white/10" : ""
                            }`}
                        >
                            <div className="p-3 sm:p-5 flex items-start gap-2 sm:gap-3 border-r border-white/10 text-gray-400">
                                <X className="text-secondary shrink-0 mt-0.5" size={16} />
                                <span className="text-xs sm:text-sm md:text-base">{row.without}</span>
                            </div>
                            <div className="p-3 sm:p-5 flex items-start gap-2 sm:gap-3 text-gray-100">
                                <Check className="text-accent shrink-0 mt-0.5" size={16} />
                                <span className="text-xs sm:text-sm md:text-base">{row.with}</span>
                            </div>
                        </motion.div>
                    ))}
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
