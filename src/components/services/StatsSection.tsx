"use client";
import React, { useRef } from "react";
import { motion, easeOut } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";
interface StatItem {
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
        <section ref={sectionRef} className="relative py-14 text-white overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-2">
                    <div className="md:flex md:items-start md:gap-10">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="md:w-1/2"
                        >
                            <div className="mb-3">
                                <span className="text-xs uppercase tracking-wider text-[#f2c14e]/90">Proven results</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-left md:text-left">
                                <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                                    {heading}
                                </span>
                            </h2>
                            <p className="mt-4 text-gray-400 max-w-sm">Real results from live deployments - metrics we consistently deliver.</p>

                            {buttonText && (
                                <div className="mt-8">
                                    <GlowButton href={buttonHref} shape="rect">{buttonText}</GlowButton>
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="md:w-1/2 mt-8 md:mt-0"
                        >
                            <div className="max-w-[520px] mx-auto">
                                <div className="grid grid-cols-2 gap-4">
                                    {stats.slice(0,4).map((stat, index) => (
                                        <div
                                            key={index}
                                            className="p-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-200"
                                        >
                                            <div className="text-3xl md:text-2xl font-semibold text-[#f2c14e]/90 mb-1 leading-tight">{stat.title}</div>
                                            <div className="text-sm text-gray-300">{stat.description}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* CTA is placed under the heading in the left column */}
            </div>
        </section>
    );
};

export default WhatWeDo;
