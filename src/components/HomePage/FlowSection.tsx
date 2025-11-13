"use client";
import React, {useRef, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import {
    Building2,
    Stethoscope,
    Calculator,
    FileSpreadsheet,
    CalendarDays,
    MailCheck,
} from "lucide-react";
const services = [
    {
        icon: <Building2 className="w-6 h-6 text-white" />,
        title: "Real Estate Intelligence",
        description:
            "Follow-up emails sent automatically. Lead qualification happening round the clock. Property data organized instantly. Your AI handles admin while you close deals and build relationships that matter most",
        number: "1",
    },
    {
        icon: <Stethoscope className="w-6 h-6 text-white" />,
        title: "Healthcare Workflow Automation",
        description:
            "Patient scheduling, insurance verification, appointment reminders all running without staff intervention. Your team focuses on care while AI automation service manages operational chaos behind scenes completely and efficiently",
        number: "2",
    },
    {
        icon: <Calculator className="w-6 h-6 text-white" />,
        title: "Accounting That Thinks",
        description:
            "Invoice processing, expense categorization, reconciliation checks done before you think about them. Your artificial intelligence automation catches errors, flags anomalies, and keeps books clean automatically every time",
        number: "3",
    },
    {
        icon: <FileSpreadsheet className="w-6 h-6 text-white" />,
        title: "Data Entry Elimination",
        description:
            "Manual data entry consumes hours daily across every department. AI agents capture information from emails, forms, and documents, then populate your systems automatically without human typing errors ever again",
        number: "4",
    },
    {
        icon: <CalendarDays className="w-6 h-6 text-white" />,
        title: "Appointment Scheduling Automation",
        description:
            "Back and forth emails finding meeting times waste everyone's day. Your AI assistant checks calendars, suggests times, sends confirmations, and handles rescheduling while you focus on actual conversations that matter",
        number: "5",
    },
    {
        icon: <MailCheck className="w-6 h-6 text-white" />,
        title: "Email Response Intelligence",
        description:
            "Inbox overload kills productivity when simple questions need answers fast. AI reads incoming emails, categorizes urgency, drafts appropriate responses, and flags only what truly needs your personal attention right now",
        number: "6",
    },
];

const OrbitAnimation: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], ["-70%", "40%"]);
    const SmartImage = ({
                            name,
                            width,
                            height,
                        }: {
        name: string;
        width: number;
        height: number;
    }) => {
        const [src, setSrc] = useState(`/assets/svg/home/${name}.svg`);

        const handleError = () => {
            if (src.endsWith(".svg")) setSrc(`/assets/svg/home/${name}.jpeg`);
            else setSrc(`/assets/svg/home/fallback.svg`);
        };

        return (
            <Image
                src={src}
                alt={name}
                width={width}
                height={height}
                onError={handleError}
                unoptimized
                className="rounded-full"
            />
        );
    };


    return (
        <section ref={sectionRef} className="relative py-20  overflow-hidden">
            <motion.div
                style={{y: yParallax}}
                className="absolute inset-0 flex justify-center items-center pointer-events-none"
            >
                <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-600/20 to-blue-500/30 blur-3xl"/>
            </motion.div>
            <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8  ">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                    viewport={{once: true}}
                >
                    <h2 className="text-4xl md:text-5xl font-semibold text-center pb-2 text-white mb-4  tracking-tight">
                        Empower Your Workflow with AI
                    </h2>
                    <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20">
                        Seamlessly integrate cutting-edge AI tools into your daily tasks and projects.
                    </p>
                </motion.div>


                <div className="flex flex-col md:flex-row justify-between items-center gap-16 ">
                    <motion.div
                        initial={{opacity: 0, x: -80}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 1.2, ease: "easeOut"}}
                        viewport={{once: true}}
                        className="text-center md:text-left"
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
                            className="text-xl md:text-2xl  bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-semibold"
                        >
                            No Templates Only Solutions
                        </motion.span>
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                            viewport={{once: true}}
                            className="text-gray-400 max-w-lg mt-2 mx-auto md:mx-0"
                        >
                            Other AI automation agency services sell pre-built tools that barely fit. We don&#39;t. Every agent is built from scratch for your exact needs, workflow, and challenges.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] relative flex items-center justify-center "
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[380px] h-[380px] rounded-full border border-white/30"
                        >
                            {[
                                "n8n",
                                "make",
                                "discord",
                                "slack",
                                "trello",
                                "google-sheet",
                                "googlDocs",
                                "GoogleDrive",
                                "Gmail",
                                "Outlook",
                                "clickup",
                            ].map((name, i) => (
                                <div
                                    key={name}
                                    className="absolute flex items-center justify-center"
                                    style={{
                                        top: "50%",
                                        left: "50%",
                                        transform: `rotate(${(i * 360) / 11}deg) translate(190px) rotate(-${
                                            (i * 360) / 11
                                        }deg) translate(-50%, -50%)`,
                                    }}
                                >
                                    <SmartImage name={name} width={34} height={34} />
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[280px] h-[280px] rounded-full border border-white/40"
                        >
                            {[
                                "claude",
                                "gpt",
                                "gemini",
                                "LangChain",
                                "Python",
                                "PostgreSQL",
                                "mongodb",
                                "titan",
                                "websocket",
                            ].map((name, i) => (
                                <div
                                    key={name}
                                    className="absolute flex items-center justify-center"
                                    style={{
                                        top: "50%",
                                        left: "50%",
                                        transform: `rotate(${(i * 360) / 9}deg) translate(140px) rotate(-${
                                            (i * 360) / 9
                                        }deg) translate(-50%, -50%)`,
                                    }}
                                >
                                    <SmartImage name={name} width={32} height={32} />
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[180px] h-[180px] rounded-full border border-white/50"
                        >
                            {["aws", "Twilio", "AssemblyAI", "Sentry", "Grafana"].map((name, i) => (
                                <div
                                    key={name}
                                    className="absolute flex items-center justify-center"
                                    style={{
                                        top: "50%",
                                        left: "50%",
                                        transform: `rotate(${(i * 360) / 5}deg) translate(90px) rotate(-${
                                            (i * 360) / 5
                                        }deg) translate(-50%, -50%)`,
                                    }}
                                >
                                    <SmartImage name={name} width={30} height={30} />
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="absolute z-20 bg-black px-5 py-4 rounded-full shadow-lg"
                        >
                            <Image
                                src="/assets/svg/home/logo.svg"
                                alt="AI Core"
                                width={40}
                                height={40}
                            />
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
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                        Custom AI Agents Built For Your Reality
                    </h2>
                    <p className="text-gray-400">
                        We develop automation working with your existing systems, not against them. Your tools stay; we make them smarter
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                    {services.map((feature, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                    scale: 0.95,
                                    rotateX: isEven ? 5 : -5,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    rotateX: 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 15,
                                    delay: index * 0.12,
                                }}
                                viewport={{ once: true, amount: 0.3 }}

                                className="border border-gray-700 rounded p-6 flex items-start gap-4 0 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-500"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded border border-gray-600 flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <span className="text-lg  bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-semibold mb-1">{feature.title}</span>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
};

export default OrbitAnimation;
