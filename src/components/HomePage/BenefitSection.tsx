"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, easeOut, useScroll, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RobotSvg from "./RobotSvg";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";
import BenefitCardFan from "./BenefitCardFan";

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
        title: "Industry Expertise Matters",
        description:
            "Our ai automation agency specializes in real estate, healthcare, and accounting. We speak your industry language, understand your challenges, build solutions that fit your workflow. Generic automation fails, custom agents succeed every time.",
        number: "6",
    },
];

const firstRowServices = services.slice(0, 3);
const secondRowServices = services.slice(3, 6);

const BenefitSection = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 20,
        mass: 0.6,
    });

    const textY = useTransform(smoothProgress, [0, 1], ["30%", "-30%"]);
    const robotY = useTransform(smoothProgress, [0, 1], ["55%", "-55%"]);
    const robotScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.05, 0.8]);
    const cardsY = useTransform(smoothProgress, [0, 1], ["18%", "-18%"]);

    return (
        <section
            ref={(node) => {
                ref(node);
                sectionRef.current = node;
            }}
            className="relative min-h-screen overflow-hidden"
        >
            <ScrollGlow target={sectionRef} />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-20">
                <div className="flex justify-between items-center flex-col md:flex-row">
                    <motion.div className="w-full md:w-1/2 space-y-6" style={{ y: textY }}>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent"
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
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
                        style={{ y: robotY, scale: robotScale }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <RobotSvg />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div className="mt-20" style={{ y: cardsY }}>
                    <BenefitCardFan services={firstRowServices} />
                </motion.div>

                <motion.div className="mt-12" style={{ y: cardsY }}>
                    <BenefitCardFan services={secondRowServices} />
                </motion.div>
                <div className="mt-6 flex justify-center ">
                    <GlowButton href="/contact" shape="rect">Book a Free Consultation</GlowButton>

                </div>

            </div>
        </section>
    );
};

export default BenefitSection;
