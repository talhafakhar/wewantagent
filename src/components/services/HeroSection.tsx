"use client";
import React from "react";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import GlowButton from "@/components/ui/GlowButton";

interface HeroSectionProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref?: string;
    buttonTarget?: string;
    buttonRel?: string;
    imageSrc: string;
width?: number;
height?: number;
imageClassName?: string;
contentClassName?: string;
note?: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({
                                                     title,
                                                     description,
                                                     buttonText,
                                                     buttonHref = "/contact",
                                                     buttonTarget,
                                                     buttonRel,
                                                     imageSrc,
                                                     width,
                                                     height,
                                                     imageClassName = "",
                                                     contentClassName = "",
                                                     note,
                                                 }) => {
    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.3 },
        },
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

    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            <Image
                src="/assets/services/hero-bg.webp"
                alt=""
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                quality={45}
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex flex-col min-h-screen">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col justify-center items-start pt-28 lg:pt-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center w-full">
                        <div className={`w-full ${contentClassName}`}>
                            <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
                                <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                                    {title}
                                </span>
                            </h1>
                            <motion.p variants={item} className="mt-4 text-gray-200">
                                {description}
                            </motion.p>
                            <div className="mt-10 flex flex-col items-center lg:items-start gap-3">
                                <GlowButton href={buttonHref} target={buttonTarget} rel={buttonRel} shape="rect">{buttonText}</GlowButton>
                                {note && <p className="text-sm text-gray-400">{note}</p>}
                            </div>
                        </div>

                        <div className="w-full flex justify-center md:justify-end">
                            <div className={imageClassName}>
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    width={width ? width : 400}
                                    height={height ? height : 600}
                                    className="h-auto max-w-full"
                                    style={{ width: width ? width : 400 }}
                                    priority
                                    fetchPriority="high"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
