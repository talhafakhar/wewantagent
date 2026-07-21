"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";

export default function GlobeSection() {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="px-4 sm:px-6 lg:px-8  relative overflow-hidden pt-60 pb-40">
            <ScrollGlow target={sectionRef} />
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
                    className="text-4xl md:text-7xl bg-gradient-to-r from-white via-[#f2c14e] to-[#4fd1a5] bg-clip-text text-transparent font-bold tracking-tight mb-4"
                >
                    Transparent From Day One
                </motion.h2>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
                >
                    Wondering how much AI costs? We scope your project and break down every dollar before you commit. No hidden fees, no surprise charges, no vague estimates that double later.
                </motion.p>

                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    className="mt-2 flex justify-center"
                >
                    <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <div className="mt-4 flex justify-center translate-y-0">
                    <GlowButton href="#pricing" shape="rect">Get Your Custom Quote</GlowButton>
                </div>
            </div>
        </section>
    );
}
