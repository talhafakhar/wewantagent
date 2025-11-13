"use client";
import React from "react";
import { motion } from "framer-motion";

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
    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    {heading}
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

                            <div className="ml-8 bg-white/10 border border-white/20 rounded p-6 shadow-md hover:shadow-[#00D1B2]/20 transition">
                                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
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
