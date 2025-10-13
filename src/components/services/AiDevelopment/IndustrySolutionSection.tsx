"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Banknote, Code2 } from "lucide-react";

const IndustrySolutionsSection = () => {
    const industries = [
        {
            icon: <HeartPulse className="w-10 h-10 " />,
            title: "Healthcare",
            points: [
                "Computer vision to analyze medical images",
                "Automate data entry into Electronic Health Records (EHRs)",
                "Accurate diagnosis with Natural Language Processing (NLP)",
            ],
        },
        {
            icon: <Banknote className="w-10 h-10" />,
            title: "Fintech",
            points: [
                "Fraud detection and prevention with real-time analytics",
                "Algorithmic trading with ML models for market predictions",
                "Intelligent chatbot for automated response",
            ],
        },
        {
            icon: <Code2 className="w-10 h-10 " />,
            title: "Software & IT",
            points: [
                "Predictive customer behavior with AI models",
                "Automation in software process with ML model deployment",
                "Error prediction with AI forecasts during the development phase",
            ],
        },
    ];

    return (
        <section className="] text-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-8"
                >
                    AI Solutions for Your Industry
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-gray-300 text-lg mb-10 "
                >
                    We understand that each industry has unique challenges and opportunities
                </motion.p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industries.map((industry, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            whileHover={{ scale: 1.04 }}
                            className="bg-[#1a1a1a] rounded p-8 text-left shadow-md border border-[#262626] hover:border-[#00D1B2] hover:shadow-[#00D1B2]/20 transition-all duration-300"
                        >
                            <div className="mb-6">{industry.icon}</div>
                            <h3 className="text-2xl font-bold  mb-4">
                                {industry.title}
                            </h3>

                            <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
                                {industry.points.map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-[#00D1B2] mr-2">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrySolutionsSection;
