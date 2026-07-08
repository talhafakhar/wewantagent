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
    imageSrc: string;
width?: number;
}
const HeroSection: React.FC<HeroSectionProps> = ({
                                                     title,
                                                     description,
                                                     buttonText,
                                                     buttonHref = "/contact",
                                                     imageSrc,
                                                     width
                                                 }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
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
        <motion.section
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative min-h-screen overflow-hidden bg-cover bg-center bg-black bg-no-repeat"
            style={{ backgroundImage: "url('/assets/services/hero-bg.webp')" }}
        >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex flex-col min-h-screen">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col justify-center items-start max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="flex md:flex-row flex-col gap-5 items-center justify-center md:justify-between">
                        <div className="w-full md:w-1/2">
                            <motion.h1
                                variants={item}
                                className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl"
                            >
                                <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                                    {title}
                                </span>
                            </motion.h1>
                            <motion.p variants={item} className="mt-4 text-gray-200">
                                {description}
                            </motion.p>
                            <div className="mt-10">
                                <GlowButton href={buttonHref} shape="rect">{buttonText}</GlowButton>
                            </div>
                        </div>

                        <motion.div
                            variants={item}
                            className="w-full md:w-1/2 flex justify-center md:justify-end"
                        >
                            <Image
                                src={imageSrc}
                                alt={title}
                                width={width ? width : 500}
                                height={500}
                                priority
                                loading="eager"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;
