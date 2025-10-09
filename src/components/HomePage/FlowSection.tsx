"use client";
import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import {BookUser, DollarSign, Flame, Phone, UserCircle2, Youtube} from "lucide-react";

const features = [
    {
        icon: <Flame className="w-6 h-6 text-white"/>,
        title: "Calorie Tracker",
        description:
            "Snap a photo and I’ll estimate your calories, providing weekly summaries to keep you on track.",
    },
    {
        icon: <Phone className="w-6 h-6 text-white"/>,
        title: "Track Skin Health",
        description:
            "Upload regular selfies to detect subtle changes — wrinkles, spots, or collagen loss — and track your skin’s journey.",
    },
    {
        icon: <UserCircle2 className="w-6 h-6 text-white"/>,
        title: "Get New Headshots",
        description:
            "Snap a selfie for a professional, polished headshot — perfect for LinkedIn or social media.",
    },
    {
        icon: <BookUser className="w-6 h-6 text-white"/>,
        title: "Address Book",
        description:
            "Upload a business card or contact, and I’ll keep track of who you meet, when, and where.",
    },
    {
        icon: <Youtube className="w-6 h-6 text-white"/>,
        title: "YouTube Video Summaries",
        description:
            "Get summaries of your favorite videos so you can absorb content efficiently and discuss insights later.",
    },
    {
        icon: <DollarSign className="w-6 h-6 text-white"/>,
        title: "Track Receipts & Spending",
        description:
            "Upload bills or receipts and I’ll summarize your spending — helping you catch trends before issues arise.",
    },
];

const OrbitAnimation: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], ["-70%", "40%"]);


    return (
        <section ref={sectionRef} className="relative py-20 px-5 overflow-hidden">
            <motion.div
                style={{y: yParallax}}
                className="absolute inset-0 flex justify-center items-center pointer-events-none"
            >
                <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-600/20 to-blue-500/30 blur-3xl"/>
            </motion.div>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                    viewport={{once: true}}
                >
                    <h2 className="text-4xl md:text-6xl text-center pb-2 text-white mb-4  tracking-tight">
                        Empower Your Workflow with AI
                    </h2>
                    <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20">
                        Seamlessly integrate cutting-edge AI tools into your daily tasks and projects.
                    </p>
                </motion.div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-16">
                    <motion.div
                        initial={{opacity: 0, x: -80}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 1.2, ease: "easeOut"}}
                        viewport={{once: true}}
                        className="w-full md:w-1/2 text-center md:text-left"
                    >
                        <Image
                            src="/assets/home/chatbot.png"
                            alt="AI Chatbot"
                            width={500}
                            height={500}
                            className="border border-gray-600 rounded-xl mb-5 mx-auto md:mx-0 shadow-lg"
                        />
                        <motion.span
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.3}}
                            viewport={{once: true}}
                            className="text-xl md:text-2xl  bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] bg-clip-text text-transparent font-semibold"
                        >
                            Real-time AI Collaboration
                        </motion.span>
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                            viewport={{once: true}}
                            className="text-gray-400 max-w-lg mt-2 mx-auto md:mx-0"
                        >
                            Experience real-time assistance. Ask your AI Agent to coordinate tasks, answer questions,
                            and maintain team alignment.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 1.2, ease: "easeOut"}}
                        viewport={{once: true}}
                        className="w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] relative flex items-center justify-center"
                    >
                        <motion.div
                            animate={{rotate: 360}}
                            transition={{duration: 30, repeat: Infinity, ease: "linear"}}
                            className="absolute w-[380px] h-[380px] rounded-full border border-white"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Image src="/assets/svg/home/n8n.svg" alt="n8n" width={40} height={40}/>
                            </div>
                            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                                <Image src="/assets/svg/home/vercel.svg" alt="vercel" width={40} height={40}/>
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                                <Image src="/assets/svg/home/flask.svg" alt="flask" width={40} height={40}/>
                            </div>
                            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                                <Image src="/assets/svg/home/gemini.svg" alt="gemini" width={40} height={40}/>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{rotate: -360}}
                            transition={{duration: 40, repeat: Infinity, ease: "linear"}}
                            className="absolute w-[280px] h-[280px] rounded-full border border-white"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Image src="/assets/svg/home/claude.svg" alt="claude" width={35} height={35}/>
                            </div>
                            <div className="absolute bottom-[12%] left-[18%] translate-y-1/2 -translate-x-1/2">
                                <Image src="/assets/svg/home/gpt.svg" alt="gpt" width={35} height={35}/>
                            </div>
                            <div className="absolute bottom-[12%] right-[18%] translate-y-1/2 translate-x-1/2">
                                <Image src="/assets/svg/home/deepseek.svg" alt="deepseek" width={35} height={35}/>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{scale: 0.8}}
                            animate={{scale: [1, 1.05, 1]}}
                            transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
                            className="absolute w-[120px] h-[120px] rounded-full flex items-center justify-center border border-white bg-black/40"
                        >
                            <Image src="/assets/icons/nextjs.svg" alt="Center" width={45} height={45}/>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 1}}
                            className="absolute z-20 bg-black px-5 py-4 rounded-full shadow-lg"
                        >
                            <Image src="/assets/svg/home/logo.svg" alt="AI Core" width={40} height={40}/>
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="text-center relative mt-32 z-10 text-white"
                >
                    <h2 className="text-4xl md:text-6xl mb-4">
                        The Ultimate Assistant, Built For You
                    </h2>
                    <p className="text-gray-400">
                        Unlock ten times the productivity. Reclaim your time. Live with purpose and ease.
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                    {features.map((feature, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -80 : 80, y: 20, scale: 0.98 }}
                                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                                transition={{
                                    duration: 1.2,
                                    delay: index * 0.15,
                                    ease: "easeInOut",
                                }}
                                viewport={{ once: true, amount: 0.2 }}

                                className="border border-gray-700 rounded p-6 flex items-start gap-4 0 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-500"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded border border-gray-600 flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg   font-semibold mb-1">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
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

export default OrbitAnimation;
