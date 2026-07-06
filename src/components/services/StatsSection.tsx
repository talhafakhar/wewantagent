"use client";
import React from "react";
import { motion, easeOut } from "framer-motion";
import { LucideIcon } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
interface StatItem {
    icon: LucideIcon;
    title: string;
    description: string;
}
interface StatsSectionProps {
    heading: string;
    stats: StatItem[];
    buttonText?: string;
}
const WhatWeDo: React.FC<StatsSectionProps> = ({
                                                       heading,
                                                       stats,
                                                       buttonText,

                                                   }) => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };
    return (
        <section className="py-24 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        {heading}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -100, rotate: -10 }}
                                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="p-6 border border-white/10 rounded-xl bg-black/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                            >
                                <Icon className="text-white w-16 h-16 mb-4" />
                                <h4 className="text-2xl font-bold mb-2 text-white">
                                    {stat.title}
                                </h4>
                                <p className="text-sm text-gray-400">{stat.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {buttonText && (
                    <div className="mt-10 flex justify-center">
                        <GlowButton shape="rect">{buttonText}</GlowButton>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WhatWeDo;
