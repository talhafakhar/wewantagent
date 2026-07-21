"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
    Brain,
    MessageSquare,
    Cpu,
    Eye,
    Mic,
    Workflow,
    Zap,
    Cloud,
    Users,
    BarChart3,
    Sparkles,
} from "lucide-react";
import ScrollGlow from "@/components/ui/ScrollGlow";

interface TechRow {
    function: string;
    tools: string;
}

interface TechStackSectionProps {
    heading: string;
    description?: string;
    rows: TechRow[];
}

const FUNCTION_ICONS: Record<string, React.ElementType> = {
    "Large Language Models": Brain,
    "NLP & Text Processing": MessageSquare,
    "Machine Learning": Cpu,
    "Computer Vision": Eye,
    "Speech & Voice": Mic,
    "AI Orchestration": Workflow,
    "Automation & Workflow": Zap,
    "Cloud & Infrastructure": Cloud,
    "CRM & Communication": Users,
    "Analytics & Reporting": BarChart3,
};

const TechStackSection: React.FC<TechStackSectionProps> = ({ heading, description, rows }) => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative py-20 text-white overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-semibold max-w-3xl mx-auto"
                    >
                        <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                            {heading}
                        </span>
                    </motion.h2>
                    {description && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mt-4 text-gray-400 max-w-2xl mx-auto"
                        >
                            {description}
                        </motion.p>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {rows.map((row, i) => {
                        const Icon = FUNCTION_ICONS[row.function] ?? Sparkles;
                        const tools = row.tools.split(",").map((t) => t.trim()).filter(Boolean);
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/6">
                                        <Icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <h3 className="font-semibold bg-gradient-to-r from-[#f2c14e] to-white bg-clip-text text-transparent">
                                        {row.function}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((tool, j) => (
                                        <span
                                            key={j}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
