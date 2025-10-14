"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BannerSection() {
    return (
        <section className="relative text-white px-4">
            <div className="relative py-6 md:py-14 rounded max-w-7xl mx-auto px-2 text-center  flex flex-col items-center justify-center"
                style={{
                    backgroundImage: "url('/assets/home/banner-bg.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60 " />


                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl font-semibold leading-snug "
                    >
                         Wasting hours on repetitive tasks let AI handle the work while you focus on growth.

                        Get your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary font-bold">Free automation roadmap</span> today.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-8"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="relative rounded bg-gradient-to-r from-primary via-accent to-secondary p-[2px] shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <span className="block rounded bg-black text-white  py-2 px-6  ">
                                Book your call
                            </span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
