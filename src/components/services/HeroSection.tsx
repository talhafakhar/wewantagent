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
height?: number;
imageClassName?: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({
                                                     title,
                                                     description,
                                                     buttonText,
                                                     buttonHref = "/contact",
                                                     imageSrc,
                                                     width,
                                                     height,
                                                     imageClassName = ""
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
                    className="flex-1 flex flex-col justify-center items-start pt-28 lg:pt-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center w-full">
                        <div className="w-full">
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
                            <div className="mt-10 flex justify-center lg:justify-start">
                                <GlowButton href={buttonHref} shape="rect">{buttonText}</GlowButton>
                            </div>
                        </div>

                        <motion.div
                            variants={item}
                            className="w-full flex justify-center md:justify-end"
                        >
                            <div className={imageClassName}>
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    width={width ? width : 400}
                                    height={height ? height : 600}
                                    className="h-auto max-w-full"
                                    style={{ width: width ? width : 400 }}
                                    priority
                                    loading="eager"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;
