"use client";
import React from "react";
import { motion, easeOut } from "framer-motion";
import { LucideIcon } from "lucide-react";
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
                                <h3 className="text-2xl font-bold mb-2 text-white">
                                    {stat.title}
                                </h3>
                                <p className="text-sm text-gray-400">{stat.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {buttonText && (
                    <div className="mt-10 flex justify-center">
                        <motion.button
                            variants={{
                                hover: {
                                    scale: 1.05,
                                    rotate: [0, 1, -1, 0],
                                    transition: { duration: 0.3 },
                                },
                                tap: { scale: 0.95 },
                            }}
                            whileHover="hover"
                            whileTap="tap"
                            className="relative h-12 w-44 overflow-hidden text-white shadow-2xl transition-all duration-200
                before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto
                before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300
                before:ease-out hover:before:h-40 hover:before:w-44
                border-transparent bg-gradient-to-r from-primary via-accent to-secondary p-[2px]"
                        >
              <span className="relative z-10 flex h-full w-full items-center justify-center text-nowrap bg-black rounded-sm">
                {buttonText}
              </span>
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WhatWeDo;
