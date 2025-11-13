"use client";
import React from "react";
import { easeOut, motion } from "framer-motion";
import Navbar from "@/components/Header/Navbar";

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
                <Navbar />
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
                                className="relative h-12 w-40 overflow-hidden text-white shadow-2xl transition-all duration-200
                                    before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto
                                    before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300
                                    before:ease-out hover:before:h-40 hover:before:w-40
                                    border-transparent bg-gradient-to-r from-primary via-accent to-secondary p-[2px]"
                            >
                                <span className="relative z-10 flex h-full w-full items-center justify-center text-nowrap bg-black rounded-sm">
                                  Schedule Free Call
                                </span>
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;
