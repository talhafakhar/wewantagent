"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ScrollGlow from "@/components/ui/ScrollGlow";

interface WhyUsSectionProps {
    heading: string;
    items: string[];
}

const WhyUsSection: React.FC<WhyUsSectionProps> = ({ heading, items }) => {
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
                    className="text-3xl md:text-5xl font-semibold text-center mb-14 max-w-3xl mx-auto"
                >
                    <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                        {heading}
                    </span>
                </motion.h2>

                <div className="grid gap-5 sm:grid-cols-2">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
                        >
                            <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                            <span className="text-gray-300">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
