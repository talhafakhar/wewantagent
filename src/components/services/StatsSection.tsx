"use client";
import React, { useRef } from "react";
import { motion, easeOut } from "framer-motion";
import { LucideIcon } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";
interface StatItem {
    icon: LucideIcon;
    title: string;
    description: string;
}
interface StatsSectionProps {
    heading: string;
    stats: StatItem[];
    buttonText?: string;
    buttonHref?: string;
}
const WhatWeDo: React.FC<StatsSectionProps> = ({
                                                       heading,
                                                       stats,
                                                       buttonText,
                                                       buttonHref = "/contact",

                                                   }) => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative py-24 text-white overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                            {heading}
                        </span>
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
                                <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#f2c14e] to-[#a1e355] bg-clip-text text-transparent">
                                    {stat.title}
                                </h4>
                                <p className="text-sm text-gray-400">{stat.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {buttonText && (
                    <div className="mt-16 flex justify-center">
                        <GlowButton href={buttonHref} shape="rect">{buttonText}</GlowButton>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WhatWeDo;
