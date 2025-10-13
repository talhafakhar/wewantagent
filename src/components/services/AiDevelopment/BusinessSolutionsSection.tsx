"use client";

import React from "react";
import { motion,easeOut } from "framer-motion";
import Lottie from "lottie-react";
import aiDevelopmentLottie from "@/assets/lottie/aiDevelopment.json";

const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const lottieVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.9 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 1, ease: easeOut },
    },
};

const BusinessSolutionsSection = () => {
    return (
        <section className=" text-white py-16 px-4 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="md:w-1/2 w-full"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        Smarter and more secure business solutions
                    </h2>
                    <p className="text-lg mb-6 text-gray-400">
                        AI has revolutionized all industries, making tasks that once took hours now possible in seconds and enabling data-driven decisions faster than ever before. With AI, businesses can now free up valuable time for teams to focus on what matters most—creative and strategic work.
                    </p>
                    <p className="text-lg mb-6 text-gray-400">
                        However, embracing AI alone isn’t enough. To truly unlock its potential, businesses need to ensure that AI solutions are secure, scalable, and aligned with long-term goals. That’s why at Rapidops, we combine advanced AI technologies with a security-first approach to deliver solutions that are not only powerful but also safe and dependable.
                    </p>
                </motion.div>

                <motion.div
                    variants={lottieVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="md:w-1/2 w-full flex justify-center"
                >
                    <Lottie
                        animationData={aiDevelopmentLottie}
                        loop
                        className="w-full h-full max-w-md drop-shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default BusinessSolutionsSection;
