"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function GlobeSection() {
    return (
        <section className="px-6  relative overflow-hidden pt-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute inset-0 flex items-center justify-center "
            >
                <Image
                    src="/assets/home/globe.png"
                    alt="Globe"
                    width={500}
                    height={400}
                    className="animate-spin-slow opacity-90s"
                />
                <div className="absolute w-[500px] h-[500px] bg-black/60 rounded-full"></div>
            </motion.div>

            <div className="text-center relative z-10">
                <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-7xl text-white font-bold tracking-tight mb-4"
                >
                    Connecting the World
                </motion.h2>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
                >
                    Our network spans across continents, empowering businesses
                    and people with cutting-edge digital solutions. Experience
                    innovation without borders.
                </motion.p>

                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    className="mt-8 flex justify-center"
                >
                    <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <div className="mt-10  flex justify-center ">
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
                        className="relative h-12 w-40 overflow-hidden border text-white shadow-2xl transition-all duration-200
                     before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto
                     before:h-0 before:w-0 hover:text-black before:rounded-sm before:bg-white before:duration-300
                     before:ease-out hover:before:h-40 hover:before:w-40"
                    >
                        <span className="relative z-10">Get Started Free</span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
