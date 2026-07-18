"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
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

const TechStackSection: React.FC<TechStackSectionProps> = ({ heading, description, rows }) => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative py-20 text-white overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

                <div className="rounded-2xl border border-white/10 divide-y divide-white/10 bg-white/[0.02] overflow-hidden">
                    {rows.map((row, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 p-5 hover:bg-white/5 transition-colors duration-300"
                        >
                            <div className="sm:w-1/3 font-semibold bg-gradient-to-r from-[#f2c14e] to-white bg-clip-text text-transparent">
                                {row.function}
                            </div>
                            <div className="sm:w-2/3 text-gray-400 text-sm md:text-base">
                                {row.tools}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
