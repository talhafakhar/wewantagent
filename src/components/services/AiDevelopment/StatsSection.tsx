"use client";

import {easeOut, motion} from "framer-motion";
import {
    Trophy,
    Users,
    Trees,
    ShieldCheck
} from "lucide-react";
import React from "react";
const stats = [
    {
        icon: Trophy,
        title: "Top 1%",
        description: "of software development companies on Clutch",
    },
    {
        icon: Users,
        title: "60%",
        description: "of business is based on customer referrals",
    },
    {
        icon: Trees,
        title: "CO2-Neutral",
        description: "offsetting unavoidable emission by reforestation",
    },
    {
        icon: ShieldCheck,
        title: "ISO 27001",
        description: "data security certification by Bureau Veritas",
    },

];
export default function StatsSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };
    return (
        <section className=" py-24 ">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-4xl md:text-5xl text-white font-semibold leading-tight">
                        Recognized for excellence
                    </h2>
                </motion.div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="p-6 border "
                            >
                                <Icon className=" text-white  w-16 h-16 mb-4" />
                                <span className="text-2xl font-bold mb-2 text-white">{stat.title}</span>
                                <p className="text-sm text-gray-400">{stat.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
                <div className="mt-10 flex justify-center">
                    <motion.button
                        variants={{
                            hover: {
                                scale: 1.05,
                                rotate: [0, 1, -1, 0],
                                transition: {duration: 0.3},
                            },
                            tap: {
                                scale: 0.95,
                            },
                        }}
                        whileHover="hover"
                        whileTap="tap"
                        className="relative h-12 w-64 overflow-hidden  text-white shadow-2xl transition-all duration-200
    before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto
    before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300
    before:ease-out hover:before:h-40 hover:before:w-64
    border-transparent bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] p-[2px]"
                    >
  <span className="relative z-10 flex h-full w-full items-center justify-center text-nowrap bg-black rounded-sm">
    BOOK A FREE CONSULTATION
  </span>
                    </motion.button>

                </div>
            </div>
        </section>
    );
}
