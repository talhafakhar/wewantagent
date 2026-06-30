"use client";
import React, { useEffect, useRef, useState } from "react";
import {
    Variants,
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
} from "framer-motion";
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

    // --- Scroll-driven depth (Apple/Linear style: slow, layered, spring-eased) ---
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // Spring-smooth the raw scroll value so motion settles instead of tracking 1:1.
    // Low stiffness + high damping = slow, heavy, "expensive" easing rather than a snap.
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 20,
        mass: 0.6,
    });

    // Each layer moves a distinct amount — depth is felt through the
    // difference between layers, scaled up for a more noticeable effect.
    const videoY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
    const videoScale = useTransform(smoothProgress, [0, 1], [1, 1.18]);
    const vignetteY = useTransform(smoothProgress, [0, 1], ["0%", "16%"]);
    const contentY = useTransform(smoothProgress, [0, 1], ["0%", "-24%"]);

    // --- Cursor-driven micro-parallax (the bit most visitors actually see) ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springMouseX = useSpring(mouseX, { stiffness: 40, damping: 15 });
    const springMouseY = useSpring(mouseY, { stiffness: 40, damping: 15 });

    const videoOffsetX = useTransform(springMouseX, [-1, 1], ["-2%", "2%"]);
    const videoOffsetY = useTransform(springMouseY, [-1, 1], ["-2%", "2%"]);
    const contentOffsetX = useTransform(springMouseX, [-1, 1], ["1.5%", "-1.5%"]);
    const contentOffsetY = useTransform(springMouseY, [-1, 1], ["1.5%", "-1.5%"]);

    const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
        const { innerWidth, innerHeight } = window;
        mouseX.set((e.clientX / innerWidth) * 2 - 1);
        mouseY.set((e.clientY / innerHeight) * 2 - 1);
    };

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
            ref={sectionRef}
            onPointerMove={handlePointerMove}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative min-h-screen bg-black w-full overflow-hidden"
        >
            <motion.div
                className="absolute -inset-x-[5%] -inset-y-[16%] will-change-transform"
                style={{ y: videoY, x: videoOffsetX, scale: videoScale }}
            >
                <motion.video
                    className="w-full h-full object-cover"
                    style={{ y: videoOffsetY }}
                    src="/assets/home/hero-bg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                />
            </motion.div>

            {/* Base tint */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Vignette layer — moves a hair slower than the video for a faint sense of depth */}
            <motion.div
                style={{ y: vignetteY }}
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(0,0,0,0.55)_100%)]"
            />

            <motion.div
                style={{
                    y: contentY,
                    x: contentOffsetX,
                }}
                className="relative z-10 flex flex-col min-h-screen w-full"
            >
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
            </motion.div>
        </motion.section>
    );
};

export default HeroSection;