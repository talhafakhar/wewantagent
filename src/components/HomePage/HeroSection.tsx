"use client";
import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import GlowButton from "@/components/ui/GlowButton";

const MARQUEE_ITEMS = [
    "Delivering results to clients of all sizes",
    "Real Estate",
    "Healthcare",
    "Accounting",
];

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.15 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Scroll-driven parallax for the ambient background blobs — offset scales with
    // how far the section's center sits from the viewport's center.
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const blobs = Array.from(
            section.querySelectorAll<HTMLElement>("[data-parallax]")
        );

        const onScroll = () => {
            const vh = window.innerHeight;
            const rect = section.getBoundingClientRect();
            const center = rect.top + rect.height / 2 - vh / 2;
            blobs.forEach((blob) => {
                const speed = parseFloat(blob.dataset.parallax || "0");
                blob.style.transform = `translate3d(0, ${(-center * speed).toFixed(1)}px, 0)`;
            });
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#07080c] px-6 pb-[60px] pt-[120px] text-center"
        >
            {/* ambient gradient blobs */}
            <div
                data-parallax="0.14"
                className="pointer-events-none absolute -left-[8%] -top-[10%] h-[620px] w-[620px] rounded-full blur-[40px]"
                style={{
                    background: "radial-gradient(circle, rgba(56,150,255,0.55), transparent 65%)",
                    animation: "heroFloatA 14s ease-in-out infinite",
                }}
            />
            <div
                data-parallax="0.22"
                className="pointer-events-none absolute -bottom-[15%] -right-[10%] h-[560px] w-[560px] rounded-full blur-[50px]"
                style={{
                    background: "radial-gradient(circle, rgba(70,130,255,0.34), transparent 65%)",
                    animation: "heroFloatB 17s ease-in-out infinite",
                }}
            />
            <div
                data-parallax="0.1"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] rounded-full blur-[60px]"
                style={{
                    background: "radial-gradient(circle, rgba(94,168,255,0.28), transparent 70%)",
                    animation: "heroFloatC 20s ease-in-out infinite",
                    translate: "-50% -50%",
                }}
            />

            {/* faint grid pattern */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                    maskImage:
                        "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 75%)",
                }}
            />

            {/* bottom fade to background */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-b from-transparent to-[#07080c]" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-[2] max-w-[880px]"
            >
                <motion.div
                    variants={item}
                    className="mb-[30px] inline-flex items-center gap-[10px] rounded-full border border-white/[0.12] bg-white/[0.03] px-4 py-[7px]"
                >
                    <span
                        className="h-[7px] w-[7px] rounded-full bg-[#5EA8FF]"
                        style={{
                            boxShadow: "0 0 10px #5EA8FF",
                            animation: "heroPulseGlow 2s ease-in-out infinite",
                        }}
                    />
                    <span className="font-['Space_Mono'] text-xs uppercase tracking-[2px] text-[#c2c5d2]">
                        AI Automation Agency
                    </span>
                </motion.div>

                <motion.h1
                    variants={item}
                    className="mb-6 font-['Space_Grotesk'] text-[clamp(44px,8vw,92px)] font-semibold leading-[0.98] tracking-[-0.035em] text-white/80"
                >
                    Build Custom AI Agents That{" "}
                    <span className="bg-gradient-to-r from-[#8FCBFF] via-[#5EA8FF] to-[#3E7BFF] bg-clip-text text-transparent">
                        Work
                    </span>
                </motion.h1>

                <motion.p
                    variants={item}
                    className="mx-auto mb-[38px] max-w-[600px] text-[17px] leading-[1.6] text-[#9095a6] md:text-[20px]"
                >
                    We&#39;re an AI automation agency building custom agents for your
                    business. No templates, just intelligent automation designed for
                    your workflow and industry.
                </motion.p>

                <motion.div
                    variants={item}
                    className="flex flex-wrap items-center justify-center gap-[14px]"
                >
                    <GlowButton href="/contact">
                        Get Your AI Agent →
                    </GlowButton>
                    <Link
                        href="/contact"
                        className="font-['Space_Grotesk'] rounded-full border border-white/[0.14] bg-white/[0.04] px-[30px] py-[15px] text-[15px] font-semibold text-[#eceef4] transition-all duration-200 hover:border-white/[0.28] hover:bg-white/[0.08]"
                    >
                        Book a Portfolio Call
                    </Link>
                </motion.div>
            </motion.div>

            {/* scrolling marquee */}
            <div
                className="absolute inset-x-0 bottom-[34px] z-[2] overflow-hidden"
                style={{
                    maskImage:
                        "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
                }}
            >
                <div
                    className="flex w-max gap-[60px] opacity-55"
                    style={{ animation: "heroMarquee 28s linear infinite" }}
                >
                    {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((text, i) => (
                        <span
                            key={i}
                            className="whitespace-nowrap font-['Space_Mono'] text-xs uppercase tracking-[2px] text-[#6b6f80]"
                        >
                            {text}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes heroFloatA {
                    0%,
                    100% {
                        translate: 0 0;
                        scale: 1;
                    }
                    25% {
                        translate: 26% 18%;
                        scale: 1.25;
                    }
                    50% {
                        translate: 14% -32%;
                        scale: 0.8;
                    }
                    75% {
                        translate: -20% -8%;
                        scale: 1.15;
                    }
                }
                @keyframes heroFloatB {
                    0%,
                    100% {
                        translate: 0 0;
                        scale: 1;
                    }
                    25% {
                        translate: -28% -20%;
                        scale: 0.78;
                    }
                    50% {
                        translate: -16% 26%;
                        scale: 1.3;
                    }
                    75% {
                        translate: 22% 10%;
                        scale: 0.9;
                    }
                }
                @keyframes heroFloatC {
                    0%,
                    100% {
                        translate: -50% -50%;
                        scale: 1;
                        opacity: 0.7;
                    }
                    33% {
                        translate: calc(-50% + 24%) calc(-50% - 24%);
                        scale: 1.3;
                        opacity: 0.95;
                    }
                    66% {
                        translate: calc(-50% - 24%) calc(-50% + 18%);
                        scale: 0.75;
                        opacity: 0.5;
                    }
                }
                @keyframes heroPulseGlow {
                    0%,
                    100% {
                        opacity: 0.5;
                    }
                    50% {
                        opacity: 0.9;
                    }
                }
                @keyframes heroMarquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
