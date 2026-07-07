"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import ScrollGlow from "@/components/ui/ScrollGlow";

interface Step {
    number: number;
    title: string;
    description: string;
}

interface ProcessTimelineProps {
    heading: string;
    steps: Step[];
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ heading, steps }) => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative bg-black text-white py-20 overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
                    <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                        {heading}
                    </span>
                </h2>

                <div className="relative border-l-2 border-gray-700 ml-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative mb-12 last:mb-0"
                        >
                            <div className="absolute -left-[22px] top-0 flex items-center justify-center">
                                <div className="p-[2px] rounded-full bg-gradient-to-r from-primary via-accent to-secondary">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-bold">
                                        {step.number}
                                    </div>
                                </div>
                            </div>

                            <div className="ml-8 bg-white/10 border border-white/20 rounded p-6 shadow-md hover:shadow-[#5EA8FF]/20 transition">
                                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide bg-gradient-to-r from-[white] from-0% via-[#f2c14e] via-20% to-[#f2c14e] bg-clip-text text-transparent">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
