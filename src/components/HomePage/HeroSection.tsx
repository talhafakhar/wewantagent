<<<<<<< HEAD
<<<<<<< HEAD
"use client";
import React, {useEffect, useState} from "react";
import {easeInOut, easeOut, motion} from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Header/Navbar";

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
    const buttonHover = {
        hover: {
            scale: 1.05,
            rotate: [0, 1, -1, 0],
            transition: {duration: 0.3},
        },
        tap: {
            scale: 0.95,
        },
    };
    return (
        <section className="relative min-h-screen bg-black">
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
                    className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-4"
                >
                    <motion.h1
                        variants={item}
                        {...float}
                        className="text-5xl md:text-[6rem] font-semibold text-white max-w-4xl mx-auto"
                    >
                        Meet Your New Digital Team Member
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="mt-6 text-lg text-white max-w-2xl mx-auto"
                    >
                        AI agents that handle the work — so you can focus on what matters most.
                    </motion.p>

                    <motion.div variants={item} className="mt-10">
                        <motion.button
                            variants={buttonHover}
                            whileHover="hover"
                            whileTap="tap"
                            className="relative h-12 w-40 overflow-hidden border text-white shadow-2xl transition-all duration-200
                     before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto
                     before:h-0 before:w-0 hover:text-black before:rounded-sm before:bg-white before:duration-300
                     before:ease-out hover:before:h-40 hover:before:w-40"
                        >
                            <span className="relative z-10">Get Started Free</span>
                        </motion.button>
                    </motion.div>
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

        </section>
    );
};

export default HeroSection;
=======
"use client";
import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Header/Navbar";
const logos = [
    { src: "/assets/svg/home/mesha.svg"},
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
    return (
        <section
            className="h-screen w-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/home/hero-bg.webp')",
                backgroundRepeat: "no-repeat",
            }}
        >
           <Navbar/>
            <div className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-[6rem] font-semibold text-white max-w-4xl mx-auto"
                >
                    Meet Your New Digital Team Member
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-6 text-lg text-white"
                >
                    AI agents that handle the work — so you can focus on what matters most.
                </motion.p>
              <motion.div  initial={{ opacity: 0, y: 30 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 1 }} className="mt-10">
                  <button
                      className="relative h-12 w-40 overflow-hidden border text-white  shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 hover:text-black before:rounded-sm before:bg-white before:duration-300 before:ease-out  hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                      <span className="relative z-10">Get Started Free</span>
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
                              <p className="text-xs text-start border-t pt-5">DELIVERING RESULTS TO CLIENTS OF ALL SIZES</p>
                          </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
>>>>>>> 70a25946396756ff9f33423c65e1b48df9f82b63
=======
"use client";
import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Header/Navbar";
const logos = [
    { src: "/assets/svg/home/mesha.svg"},
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
    return (
        <section
            className="h-screen w-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/home/hero-bg.webp')",
                backgroundRepeat: "no-repeat",
            }}
        >
           <Navbar/>
            <div className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-[6rem] font-semibold text-white max-w-4xl mx-auto"
                >
                    Meet Your New Digital Team Member
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-6 text-lg text-white"
                >
                    AI agents that handle the work — so you can focus on what matters most.
                </motion.p>
              <motion.div  initial={{ opacity: 0, y: 30 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 1 }} className="mt-10">
                  <button
                      className="relative h-12 w-40 overflow-hidden border text-white  shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 hover:text-black before:rounded-sm before:bg-white before:duration-300 before:ease-out  hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                      <span className="relative z-10">Get Started Free</span>
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
                              <p className="text-xs text-start border-t pt-5">DELIVERING RESULTS TO CLIENTS OF ALL SIZES</p>
                          </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
>>>>>>> 70a25946396756ff9f33423c65e1b48df9f82b63
