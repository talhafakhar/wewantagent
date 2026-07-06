"use client";
import React from "react";
import { easeOut, motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";

const HeroSection = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };
    const item = {
        hidden: { opacity: 0, x: -40, scale: 0.98, filter: "blur(4px)" },
        show: {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: easeOut },
        },
    };

    return (
        <motion.section
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/about/about-bg.webp')" }}
        >
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 flex flex-col min-h-screen">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col justify-center items-start max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 "
                >
                    <div className="max-w-4xl">
                        <motion.h1
                            variants={item}
                            className="text-5xl md:text-7xl font-semibold text-white leading-tight"
                        >
                            Meet Your Automation Expert Team
                        </motion.h1>

                        <motion.p
                            variants={item}
                            className="mt-6 text-base md:text-lg text-gray-200 max-w-2xl"
                        >
                            We&#39;re not another cookie-cutter AI shop. We&#39;re builders who actually listen, strategists who solve real problems, automation experts obsessed with giving you time back.
                        </motion.p>

                        <motion.div variants={item} className="mt-10">
                            <GlowButton shape="rect">Schedule Free Call</GlowButton>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;
