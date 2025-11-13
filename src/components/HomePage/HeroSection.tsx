"use client";
import React, { useEffect, useState } from "react";
import {Variants, motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Header/Navbar";
import { ArrowRight } from "lucide-react";
const logos = [
    { src: "/assets/svg/home/mesha.svg" },
    { src: "/assets/home/serve_co_logo.webp" },
    { src: "/assets/home/pandora.webp" },
];

const HeroSection = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % logos.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            },
        },
    };


    const float = {
        initial: "hidden",
        animate: "show",
    };


    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen bg-black w-full overflow-x-hidden overflow-y-auto"
        >
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/assets/home/hero-bg.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex flex-col min-h-screen w-full">
                <Navbar />

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col justify-center items-center text-center px-4 py-12  w-full"
                >
                    <motion.h1
                        variants={item}
                        {...float}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] font-semibold text-white max-w-[90%] md:max-w-3xl lg:max-w-4xl mx-auto leading-tight px-2"
                    >
                        Build Custom AI Agents That Work
                    </motion.h1>

                    <motion.div
                        variants={item}
                        className="max-w-4xl mx-auto text-start p-4  backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-lg md:rounded-xl mt-6  transition-all duration-300"
                    >
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary uppercase bg-clip-text text-transparent font-semibold text-sm md:text-base mb-1 block">
                            What Is We Want Agent
                        </span>
                        <p className="text-white text-sm md:text-base leading-relaxed">
                            We&#39;re an AI automation agency building custom agents for your business. No templates, just intelligent automation designed for your workflow and industry.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-4 mt-4    max-w-4xl mx-auto ">
                        {[
                            {
                                title: "Industries We Serve",
                                button: "Specialize in Real Estate, Healthcare, and Accounting",
                            },
                            {
                                title: "Portfolio & Results",
                                button: "Book a portfolio call",
                            },
                            {
                                title: "Get Your AI Agent",
                                button: "Tell us what's slowing you down",
                            },
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                variants={item}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="group bg-white/10 hover:bg-white/20 backdrop-blur-xl px-4 py-1 rounded-xl shadow-lg
                                flex flex-col justify-start text-left transition-all duration-300
                                cursor-pointer w-full  min-h-[110px] "
                            >
                                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-semibold text-base md:text-lg mb-2">
                                    {card.title}
                                </span>

                                <div className="flex flex-grow items-center ">
                                    <button className="flex items-center gap-2 text-white text-sm md:text-base text-left group-hover:translate-x-1 transition-transform duration-300 w-full">
                                        <span>
                                            {card.button}
                                        </span>
                                        <ArrowRight size={16} className="shrink-0" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="hidden lg:block absolute bottom-8 right-8 xl:right-12 p-2">
                        <div className="relative w-32 h-48">
                            {logos.map((logo, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-700 ${
                                        i === index ? "opacity-100" : "opacity-0"
                                    }`}
                                >
                                    <div className="w-32 h-16 flex items-center justify-center">
                                        <Image
                                            width={120}
                                            height={60}
                                            src={logo.src}
                                            alt="client logo"
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="text-xs text-start border-t border-white/30 pt-2 mt-2">
                                        DELIVERING RESULTS TO CLIENTS OF ALL SIZES
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;