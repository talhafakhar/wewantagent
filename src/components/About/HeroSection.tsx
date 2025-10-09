
"use client";
import React from "react";
import { easeOut, motion} from "framer-motion";
import Navbar from "@/components/Header/Navbar"

const HeroSection = () => {
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
        hidden: {
            opacity: 0,
            x: -40,
            scale: 0.98,
            filter: "blur(4px)"
        },
        show: {
            opacity: 1,
            x: 0,
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
            className="relative min-h-screen bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/assets/about/about-bg.webp')" }}
        >
            <div className="absolute inset-0 bg-black/30" />
               <div className="relative z-10 px-4 flex flex-col justify-center items-start min-h-screen max-w-7xl mx-auto">
                   <Navbar/>
                   <motion.div
                       variants={container}
                       initial="hidden"
                       animate="show"
                   >
                      <div className="text-start">
                          <motion.h1
                              variants={item}
                              className="text-5xl md:text-8xl font-semibold text-white max-w-4xl"
                          >
                              Where Human Vision Meets AI
                          </motion.h1>
                            <motion.p
                                variants={item}
                                className="mt-4 text-sm text-gray-200"
                            >
                                we blend human creativity with cutting-edge AI technology to deliver unparalleled visual solutions
                            </motion.p>
                          <div className="mt-10 ">
                              <motion.button
                                  variants={{
                                      hover: {
                                          scale: 1.05,
                                          rotate: [0, 1, -1, 0],
                                          transition: { duration: 0.3 },
                                      },
                                      tap: {
                                          scale: 0.95,
                                      },
                                  }}
                                  whileHover="hover"
                                  whileTap="tap"
                                  className="relative h-12 w-64 overflow-hidden  text-white shadow-2xl transition-all duration-200
    before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto
    before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300
    before:ease-out hover:before:h-40 hover:before:w-64
    border-transparent bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] p-[2px]"
                              >
  <span className="relative z-10 flex h-full w-full items-center justify-center text-nowrap bg-black rounded-sm">
    BOOK A FREE CONSULTATION
  </span>
                              </motion.button>

                          </div>

                      </div>

                   </motion.div>
               </div>
        </motion.section>
    );
};

export default HeroSection;
