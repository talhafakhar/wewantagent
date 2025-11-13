"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const aiModels = [
    { name: "ChatGPT 4.0", img: "/assets/services/openAI.webp" },
    { name: "Llama 2", img: "/assets/services/LLAMA.webp" },
    { name: "PaLM 2", img: "/assets/services/PaLM2.webp" },
    { name: "Claude 3", img: "/assets/services/claude.webp" },
    { name: "DALL·E", img: "/assets/services/Dall-e.webp" },
    { name: "Keras", img: "/assets/services/keras.webp" },
    { name: "Pytourch ", img: "/assets/services/pytourch.webp" },
    { name: "TensorFlow", img: "/assets/services/tensorflow.webp" },
];
const duplicatedModels = [...aiModels, ...aiModels, ...aiModels,...aiModels];

const AIModulesSection = () => {
    return (
        <section className=" text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Powerful Tools Behind Your AI Agents
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-gray-300 text-lg mb-14"
                >
                    We build using advanced language models and n8n automation workflows
                </motion.p>

                <div className="w-full  py-12">
                    <style jsx>{`
                        @keyframes infiniteScroll {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-33.333%);
                            }
                        }

                        .infinite-scroll {
                            animation: infiniteScroll 30s linear infinite;
                        }

                        .infinite-scroll:hover {
                            animation-play-state: paused;
                        }

                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>

                    <div className="overflow-hidden">
                        <div
                            className="infinite-scroll flex space-x-6 px-4"
                            style={{ scrollbarWidth: 'none' }}
                        >
                            {duplicatedModels.map((model, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex flex-col items-center flex-shrink-0"
                                >
                                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36  ">
                                        <Image
                                            src={model.img}
                                            alt={model.name}
                                            fill
                                            className="object-contain invert brightness-0"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIModulesSection;
