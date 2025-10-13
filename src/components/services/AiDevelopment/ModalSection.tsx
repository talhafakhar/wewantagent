"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const aiModels = [
    { name: "ChatGPT 4.0", img: "/assets/services/openAi.webp" },
    { name: "Llama 2", img: "/assets/services/LLAMA.webp" },
    { name: "PaLM 2", img: "/assets/services/PaLM2.webp" },
    { name: "Claude 3", img: "/assets/services/claude.webp" },
    { name: "DALL·E", img: "/assets/services/Dall-e.webp" },
];

const AIModulesSection = () => {
    return (
        <section className=" text-white pt-20 pb-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Cutting-edge AI Models We Work With
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-gray-300 text-lg mb-14"
                >
                    Our team is proficient in the latest AI models, including.
                </motion.p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 justify-center items-center">
                    {aiModels.map((model, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative w-32 h-32 md:w-44 md:h-44">
                                <Image
                                    src={model.img}
                                    alt={model.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIModulesSection;
