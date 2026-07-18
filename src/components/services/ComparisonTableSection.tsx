"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";

interface TableRow {
    label: string;
    left: string;
    right: string;
}

interface ComparisonTableSectionProps {
    heading: string;
    leftHeader: string;
    rightHeader: string;
    rows: TableRow[];
    note?: string;
    buttonText: string;
    buttonHref?: string;
    buttonTarget?: string;
    buttonRel?: string;
}

const ComparisonTableSection: React.FC<ComparisonTableSectionProps> = ({
                                                                             heading,
                                                                             leftHeader,
                                                                             rightHeader,
                                                                             rows,
                                                                             note,
                                                                             buttonText,
                                                                             buttonHref = "/contact",
                                                                             buttonTarget,
                                                                             buttonRel,
                                                                         }) => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative py-20 text-white overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <div className="grid grid-cols-[1fr_1.3fr_1.3fr] border-b border-white/10">
                        <div className="p-3 sm:p-5" />
                        <div className="p-3 sm:p-5 text-center text-sm sm:text-base font-semibold border-l border-white/10 bg-gradient-to-r from-[#f2c14e] to-white bg-clip-text text-transparent">
                            {leftHeader}
                        </div>
                        <div className="p-3 sm:p-5 text-center text-sm sm:text-base font-semibold border-l border-white/10 bg-gradient-to-r from-[#f2c14e] to-white bg-clip-text text-transparent">
                            {rightHeader}
                        </div>
                    </div>
                    {rows.map((row, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className={`grid grid-cols-[1fr_1.3fr_1.3fr] ${
                                i !== rows.length - 1 ? "border-b border-white/10" : ""
                            }`}
                        >
                            <div className="p-3 sm:p-5 text-xs sm:text-sm md:text-base font-semibold text-gray-400">
                                {row.label}
                            </div>
                            <div className="p-3 sm:p-5 border-l border-white/10 text-xs sm:text-sm md:text-base text-gray-100">
                                {row.left}
                            </div>
                            <div className="p-3 sm:p-5 border-l border-white/10 text-xs sm:text-sm md:text-base text-gray-100">
                                {row.right}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {note && (
                    <p className="mt-8 text-gray-400 text-center max-w-2xl mx-auto">{note}</p>
                )}

                <div className="mt-10 flex justify-center">
                    <GlowButton href={buttonHref} target={buttonTarget} rel={buttonRel} shape="rect">
                        {buttonText}
                    </GlowButton>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTableSection;
