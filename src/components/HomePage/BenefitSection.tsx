"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {EffectCoverflow} from "swiper/modules";
import { motion, useAnimation, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
    {
        title: "Share Your Biggest Problem Now",
        description:
            "Tell us what's killing productivity. Data entry, client follow-ups, or document processing? We listen first. No cookie-cutter solutions here, just honest conversation about where artificial intelligence automation transforms your workflow and eliminates bottlenecks completely",
        number: "1",
    },
    {
        title: "We Build Your Automation Map",
        description:
            "Our automation expert analyzes operations and designs a custom AI agent strategy. You'll see how the AI automation service works for your industry, what gets automated first, and the timeline. No tech jargon, just clear plans that make sense always",
        number: "2",
    },
    {
        title: "Watch Your Business Transform",
        description:
            " Your AI assistants go live, handling tasks while you focus on growth. We monitor, optimize, and scale automation. You'll wonder how you operated without intelligent agents managing mundane tasks so you can do meaningful work every single day",
        number: "3",
    },
    {
        title: "Transparent Pricing Always Upfront",
        description:
            "Wondering how much does AI cost? We break down every dollar before you commit. No hidden fees, no surprise charges, no vague estimates that double later. AI automation agency services with honest pricing for honest work always",
        number: "4",
    },
    {
        title: "Learn How AI Agents Work",
        description:
            "Curious about how to create an AI agent for your business? We show you the entire process from discovery to deployment. Understanding the technology helps you make better decisions about automation investments always",
        number: "5",
    },
    {
        title: " Industry Specific Expertise Matters\n",
        description:
            "Our ai automation agency specializes in real estate, healthcare, and accounting. We speak your industry language, understand your challenges, build solutions that fit your workflow. Generic automation fails, custom agents succeed every time.",
        number: "6",
    },
];

const BenefitSection = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    return (
        <section ref={ref} className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-20">
                <div className="flex justify-between items-center flex-col md:flex-row">
                    <div className="w-full md:w-1/2 space-y-6">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                            variants={{
                                hidden: { opacity: 0, y: 80, skewY: 5 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    skewY: 0,
                                    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
                                },
                            }}
                            initial="hidden"
                            animate={controls}
                        >
                            AI Automation Agency
                        </motion.h2>

                        <motion.p
                            className=" text-gray-400 leading-relaxed"
                            variants={{
                                hidden: { opacity: 0, y: 40, filter: "blur(5px)" },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)",
                                    transition: { duration: 1.2, delay: 0.3, ease: easeOut },
                                },
                            }}
                            initial="hidden"
                            animate={controls}
                        >
                            Tired of repetitive tasks eating up your day? We&#39;re an AI automation agency building intelligent agents for your business. Share what&#39;s slowing you down in real estate, healthcare, or accounting. We&#39;ll map your automation roadmap, develop AI assistants that work, and hand you back your time so you can focus on growth.
                        </motion.p>
                    </div>
                    <div className="w-full md:w-1/2 mt-10 md:mt-0 flex md:justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <Image
                                    width={220}
                                    height={220}
                                    src="/assets/svg/home/robot.svg"
                                    alt="Services Illustration"
                                    className="mx-auto"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-20">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={20}
                        initialSlide={1}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        modules={[EffectCoverflow]}
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-zinc-900 rounded p-6 sm:p-8 shadow-2xl mx-auto max-w-sm h-full min-h-[420px] flex flex-col justify-between group relative overflow-hidden transition-all duration-500 hover:bg-zinc-800">
                                    <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full transition-all duration-700 group-hover:scale-150" />
                                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                        <div className="absolute top-1/4 left-0 w-full h-px bg-white"></div>
                                        <div className="absolute top-1/2 left-0 w-full h-px bg-white"></div>
                                        <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
                                        <div className="absolute top-0 left-1/2 w-px h-full bg-white"></div>
                                    </div>
                                    <div className="relative z-10 mb-6">
      <span
          className="text-8xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent transition-colors duration-500"
          style={{ fontFamily: "Arial Black, sans-serif" }}
      >
        {service.number}
      </span>
                                    </div>
                                    <div className="relative z-10 flex-1">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 uppercase sm:mb-4 px-2 tracking-wide group-hover:tracking-wider transition-all duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed px-2 group-hover:text-gray-300 transition-colors duration-300">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="mt-10  flex justify-center ">
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
                        className="relative h-12 w-60 overflow-hidden  text-white shadow-2xl transition-all duration-200
    before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto
    before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300
    before:ease-out hover:before:h-40 hover:before:w-60
    border-transparent bg-gradient-to-r from-primary via-accent to-secondary p-[2px]"
                    >
  <span className="relative z-10 text-nowrap flex h-full w-full items-center justify-center bg-black rounded-sm">
    Book a Free Consultation
  </span>
                    </motion.button>

                </div>

            </div>
        </section>
    );
};

export default BenefitSection;
