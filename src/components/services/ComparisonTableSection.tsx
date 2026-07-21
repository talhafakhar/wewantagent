"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Target, Package, Rocket, Clock, ArrowRight, Sparkles } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";

interface TableRow {
    label: string;
    left: string;
    right: string;
}

const LABEL_ICONS: Record<string, React.ElementType> = {
    "Best for": Target,
    "You get": Package,
    "We deliver": Rocket,
    "Timeline": Clock,
    "Next step": ArrowRight,
};

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[leftHeader, rightHeader].map((headerLabel, col) => (
                        <motion.div
                            key={headerLabel}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: col * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative rounded-2xl border p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                                col === 1
                                    ? "border-primary/30 bg-primary/[0.04] hover:border-primary"
                                    : "border-white/10 bg-white/[0.02] hover:border-white/25"
                            }`}
                        >
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 bg-gradient-to-r from-[#f2c14e] to-white bg-clip-text text-transparent">
                                {headerLabel}
                            </h3>

                            <div className="space-y-3 divide-y divide-white/10">
                                {rows.map((row, i) => {
                                    const Icon = LABEL_ICONS[row.label] ?? Sparkles;
                                    const value = col === 0 ? row.left : row.right;
                                    return (
                                        <div key={i} className={`flex items-center gap-3 ${i !== 0 ? "pt-3" : ""}`}>
                                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/6">
                                                <Icon className="w-3.5 h-3.5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                                                    {row.label}
                                                </div>
                                                <p className="text-sm text-gray-100 leading-snug">
                                                    {value}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
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
