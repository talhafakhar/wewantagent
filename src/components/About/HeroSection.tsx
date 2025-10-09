
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
        <section
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/assets/about/about-bg.webp')" }}
        >
            <div className="absolute inset-0 bg-black/30" />
               <div>
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
                           className="text-5xl md:text-[6rem] font-semibold text-white max-w-5xl"
                       >
                           Where Human Vision Meets Artificial Intelligence
                       </motion.h1>
                          <motion.p
                            variants={item}
                            className="mt-6 text-lg md:text-xl text-white max-w-3xl"
                        >
                            At Mesha, we harness the power of AI to transform your ideas into stunning visual realities.
                        </motion.p>

                   </motion.div>
               </div>
        </section>
    );
};

export default HeroSection;
