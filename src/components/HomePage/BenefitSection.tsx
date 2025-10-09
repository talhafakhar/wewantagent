"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import { motion, useAnimation, useScroll, useTransform, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
    {
        title: "AUTOMATE COMPLEX WORKFLOWS",
        description:
            "AI agents automate complex tasks like financial reporting and supply chain operations, increasing accuracy and freeing teams for strategic goals.",
        number: "1",
    },
    {
        title: "SCALE WITHOUT ADDED COSTS",
        description:
            "AI agents handle large workloads efficiently, processing invoices and inquiries at scale without increasing operational expenses or resources.",
        number: "2",
    },
    {
        title: "ENHANCE CUSTOMER EXPERIENCES",
        description:
            "AI agents personalize interactions, resolve issues instantly, and predict preferences to create seamless, engaging, and loyal customer experiences.",
        number: "3",
    },
    {
        title: "SOLVE PROBLEMS THROUGH ADVANCED REASONING",
        description:
            "AI agents apply deep reasoning to solve complex issues, optimize workflows, and deliver smart, autonomous business solutions efficiently.",
        number: "4",
    },
    {
        title: "MITIGATE RISKS PROACTIVELY",
        description:
            "AI agents use predictive analytics to identify risks early, ensuring proactive decisions, compliance, and data-driven business protection strategies.",
        number: "5",
    },
    {
        title: "ENABLE REAL-TIME DECISION-MAKING",
        description:
            "AI agents analyze live data to generate insights instantly, empowering agile, informed business decisions across fast-changing environments.",
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

    // Parallax effect for image
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={ref} className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="flex justify-between items-center flex-col md:flex-row">
                    <div className="w-full md:w-1/2 space-y-6">
                        <motion.h2
                            className="text-4xl md:text-6xl text-white mb-6 tracking-tight"
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
                            Why AI Agents
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-400 leading-relaxed"
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
                            Transform your business with AI agents that automate tasks, enhance
                            customer experiences, and drive innovation. Unlock new levels of efficiency
                            and growth today. AI agents are the future of work that you can harness now.
                            Move faster, smarter, and more effectively with AI by your side.
                        </motion.p>
                    </div>

                    {/* Image section with smooth parallax & hover motion */}
                    <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
                        <motion.div
                            style={{ y }}
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
                                <div className="bg-zinc-900 rounded p-6 sm:p-8 shadow-2xl mx-auto max-w-sm h-full group relative overflow-hidden transition-all duration-500 hover:bg-zinc-800">
                                    <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full transition-all duration-700 group-hover:scale-150" />
                                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                        <div className="absolute top-1/4 left-0 w-full h-px bg-white"></div>
                                        <div className="absolute top-1/2 left-0 w-full h-px bg-white"></div>
                                        <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
                                        <div className="absolute top-0 left-1/2 w-px h-full bg-white"></div>
                                    </div>

                                    <div className="relative z-10 mb-6">
                                        <span
                                            className="text-8xl font-bold bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] bg-clip-text text-transparent transition-colors duration-500"
                                            style={{ fontFamily: "Arial Black, sans-serif" }}
                                        >
                                            {service.number}
                                        </span>
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 px-2 tracking-wide group-hover:tracking-wider transition-all duration-300">
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
                        className="relative h-12 w-40 overflow-hidden  text-white shadow-2xl transition-all duration-200
    before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto
    before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300
    before:ease-out hover:before:h-40 hover:before:w-40
    border-transparent bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] p-[2px]"
                    >
  <span className="relative z-10 flex h-full w-full items-center justify-center bg-black rounded-sm">
    Get Started Free
  </span>
                    </motion.button>

                </div>

            </div>
        </section>
    );
};

export default BenefitSection;
