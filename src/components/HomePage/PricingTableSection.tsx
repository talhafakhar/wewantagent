"use client";
import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const  PricingSection = ()=> {
    const [annual, setAnnual] = useState(false);

    const plans = [
        {
            title: "Starter Pack",
            monthly: "$15",
            annual: "$8",
            description:
                "This plan is ideal for individual users and hobbyists who are looking for essential functionalities to support their projects.",
            features: ["5 mb/PDF", "75 pages/PDF", "10 messages/Day", "Up to 3 PDFs"],
            unavailableFeatures: ["Gpt-3.5-turbo model", "Test mode", "Doc summary"],
            highlight: false,
        },
        {
            title: "Silver Surfer",
            monthly: "$25",
            annual: "$20",
            description:
                "If you're a small business or a startup, this plan is designed to cater to your needs. It offers a balance of essential features.",
            features: [
                "10 mb/PDF",
                "150 pages/PDF",
                "25 messages/Day",
                "Up to 5 PDFs",
                "Gpt-3.5-turbo model",
            ],
            unavailableFeatures: ["Test mode", "Doc summary"],
            highlight: true,
        },
        {
            title: "Golden Unicorn",
            monthly: "$50",
            annual: "$40",
            description:
                "Tailored for medium-sized businesses, this plan offers advanced tools and features to support your growing demands.",
            features: [
                "32 mb/PDF",
                "1500 pages/PDF",
                "1000 messages/Day",
                "Up to 50 PDFs",
                "Gpt-3.5-turbo-16k model",
                "Test mode",
                "Doc summary",
            ],
            unavailableFeatures: [],
            highlight: false,
        },
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };


    return (
        <section className="relative flex flex-col items-center justify-center text-white px-6 py-20">
            <div className="relative max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
                        Pricing Plans
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-base leading-relaxed">
                        Choose the plan that best fits your needs. Whether you&#39;re an individual,
                        a small business, or a large enterprise, we have flexible pricing
                        options to suit your requirements.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="md:max-w-sm mx-auto mb-16"
                >
                    <div className="inline-flex w-full border border-white/20 rounded-full overflow-hidden p-0.5">
                        <button
                            onClick={() => setAnnual(false)}
                            className={`h-12 w-full text-sm font-medium rounded-full transition px-8 ${
                                !annual ? "bg-white/10" : "hover:bg-white/5"
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setAnnual(true)}
                            className={`h-12 w-full text-sm font-medium rounded-full transition px-8 ${
                                annual ? "bg-white/10" : "hover:bg-white/5"
                            }`}
                        >
                            Annual
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-8 lg:grid-cols-3"
                >
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`flex flex-col justify-between p-8 rounded-2xl backdrop-blur-3xl shadow-2xl shadow-gray-900/50 transition-all duration-500 transform hover:scale-[1.03] ${
                                plan.highlight
                                    ? "bg-white/20"
                                    : "bg-white/5 border border-white/10"
                            }`}
                        >
                            <div>
                                <div className="flex flex-col gap-3">
                                    <span className="text-xl font-semibold bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] bg-clip-text text-transparent">{plan.title}</span>
                                    <p>
                                        <span className="text-3xl font-bold tracking-tight">
                                            {annual ? plan.annual : plan.monthly}
                                        </span>{" "}
                                        <span className="text-base font-medium text-white/70">
                                            /m{" "}
                                            {annual && (
                                                <span className="text-xs text-white/50">
                                                    (billed annually)
                                                </span>
                                            )}
                                        </span>
                                    </p>
                                </div>

                                <p className="mt-8 text-sm text-white/80">
                                    {plan.description}
                                </p>

                                <ul className="flex flex-col mt-8 text-sm gap-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-400" />
                                            {feature}
                                        </li>
                                    ))}
                                    {plan.unavailableFeatures.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2 opacity-50"
                                        >
                                            <XCircle className="w-5 h-5 text-red-400" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex mt-10">
                                <a
                                    href="#"
                                    className={`w-full h-12 flex items-center justify-center rounded font-medium transition-all duration-200 ${
                                        plan.highlight
                                            ? "bg-white text-black hover:bg-white/80"
                                            : "bg-white/10 text-white hover:bg-white/5"
                                    }`}
                                >
                                    Get started
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center"
                >
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
    border-transparent bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] p-[2px]"
                    >
  <span className="relative z-10 flex h-full w-full items-center justify-center text-nowrap bg-black rounded-sm">
  Book a free consultation
  </span>
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
}
export default PricingSection;
