"use client";
import React, { useEffect, useState } from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
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
        show: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    const item = {
        hidden: { opacity: 0, y: 40, scale: 0.98, filter: "blur(4px)" },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: easeOut },
        },
    };

    const float = {
        animate: {
            y: [0, -10, 0],
            transition: { duration: 4, repeat: Infinity, ease: easeInOut },
        },
    };

    return (
        <motion.section
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative min-h-screen overflow-hidden"
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
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col justify-center items-center text-center px-4"
                >
                    <motion.h1
                        variants={item}
                        {...float}
                        className="text-5xl md:text-[6rem] font-semibold text-white max-w-3xl mx-auto"
                    >
                        Build Custom AI Agents That Work
                    </motion.h1>

                    <motion.div
                        variants={item}
                        className="max-w-3xl mx-auto text-start p-3 backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded mt-8 transition-all duration-300"
                    >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary uppercase bg-clip-text text-transparent font-semibold mb-1">
              What Is We Want Agent
            </span>
                        <p className="text-white">
                            We&#39;re an AI automation agency building custom agents for your business. No templates, just intelligent automation designed for your workflow and industry.
                        </p>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mt-6 w-full max-w-3xl mx-auto">
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
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ scale: 1.04 }}
                                className="group bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-1 rounded-xl shadow-lg
                 flex flex-col justify-between text-center transition-all duration-300
                 cursor-pointer w-full sm:w-64 min-h-[110px]"
                            >
                                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-semibold text-lg mb-1">
        {card.title}
      </span>
                                <div className="flex flex-col items-center justify-center flex-grow">
                                    <button className="flex items-center justify-center gap-2 text-white font-semibold  group-hover:translate-x-1 transition-transform duration-300">
                                        {card.button}
                                        <ArrowRight size={16} className="shrink-0" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="absolute bottom-0 right-10 p-2 lg:block hidden">
                        <div className="relative w-32 h-48">
                            {logos.map((logo, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-700 ${
                                        i === index ? "opacity-100" : "opacity-0"
                                    }`}
                                >
                                    <div className="w-32 h-16">
                                        <Image
                                            width={120}
                                            height={120}
                                            src={logo.src}
                                            alt="logo"
                                            className="mb-2"
                                        />
                                    </div>
                                    <p className="text-xs text-start border-t pt-5">
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
