"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";
interface  BannerSectionProps {
    text?: string;
    subtext?: string;
    lastText?: string;
}
export default function BannerSection({text, subtext, lastText}: BannerSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative overflow-hidden text-white  ">
            <ScrollGlow target={sectionRef} />
            <div className="relative py-6 md:py-14 rounded max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center  flex flex-col items-center justify-center"
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
                        {text}  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary font-bold">{subtext}</span> {lastText}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-8"
                    >
                        <GlowButton href="https://calendly.com/talhafakhar/discoverycall" target="_blank" rel="noopener noreferrer" shape="rect">Book your call</GlowButton>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
