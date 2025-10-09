
"use client";
import React, {useEffect, useState} from "react";
import {easeInOut, easeOut, motion} from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Header/Navbar";
import {ArrowRight} from "lucide-react";

const logos = [
    {src: "/assets/svg/home/mesha.svg"},
    {src: "/assets/home/serve_co_logo.webp"},
    {src: "/assets/home/pandora.webp"},
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
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };
    const item = {
        hidden: {opacity: 0, y: 40, scale: 0.98, filter: "blur(4px)"},
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {duration: 0.8, ease: easeOut},
        },
    };
    const float = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: easeInOut,
            },
        },
    };

    return (
        <motion.section
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative min-h-screen ">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/assets/home/hero-bg.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
            />
            <div className="absolute inset-0 bg-black/60"/>

            <div className="relative z-10">
                <Navbar/>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative z-10   h-screen flex flex-col justify-center items-center text-center px-4"
                >
                    <motion.h1
                        variants={item}
                        {...float}
                        className="text-5xl md:text-[6rem] font-semibold text-white max-w-4xl mx-auto"
                    >
                        Meet Your New Digital Team Member
                    </motion.h1>

                    <motion.div  variants={item} className="max-w-3xl text-start p-3 backdrop-blur-xl bg-white/10  transition-all  duration-300 hover:bg-white/20 rounded mt-8">
                        <span
                            className="bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] uppercase bg-clip-text text-transparent font-semibold  mb-1"
                        >
We want agent
                        </span>
                        <p className="text-white">
                            Hey there 👋 We are Fantasive A digital creative agency focused on branding, UX/UI, web design and development.How can we help you?
                        </p>
                    </motion.div>
                    <div className="flex  flex-col sm:flex-row items-center max-w-3xl mx-auto justify-center gap-4 mt-5">
                        <motion.div variants={item} className="bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded text-start shadow-md w-64 transition-all cursor-pointer duration-300">
                            <span
                                className="bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] bg-clip-text text-transparent font-semibold"
                            >
                                Seeing is believing
                            </span>
                            <button className="flex items-center justify-center gap-2 text-white font-semibold">
                                Show me your work <ArrowRight size={18} />
                            </button>
                        </motion.div>
                        <motion.div variants={item} className="bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded text-start shadow-md w-64 transition-all cursor-pointer duration-300">
                            <span className=" bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] bg-clip-text text-transparent">Are we the right match?</span>
                            <button className="flex items-center justify-center gap-2 text-white font-semibold">
                                Tell me <ArrowRight size={18} />
                            </button>
                        </motion.div>
                        <motion.div variants={item} className="bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded text-start shadow-md w-64 transition-all duration-300 cursor-pointer">
                            <span className="bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] bg-clip-text text-transparent">I have a project</span>
                            <button className="flex items-center justify-center gap-2 text-white font-semibold">
                                Let&#39;s get started <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    </div>
                    <div className="absolute bottom-0 right-10 p-2">
                        <div className="relative w-32 h-48 ">
                            {logos.map((logo, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 flex flex-col items-center justify-center  text-white transition-opacity duration-700 ${
                                        i === index ? "opacity-100" : "opacity-0"
                                    }`}
                                >
                                    <div className="w-32 h-16">
                                        <Image width={120} height={120} src={logo.src} alt="logo" className="mb-2"/>
                                    </div>
                                    <p className="text-xs text-start border-t pt-5">DELIVERING RESULTS TO CLIENTS OF ALL
                                        SIZES</p>
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
