"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import Lottie from "lottie-react";

interface BusinessSolutionsSectionProps {
    heading: string;
    paragraphs: string[];
    lottieFile: object;
    reverse?: boolean;
}

const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
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

const BusinessSolutionsSection: React.FC<BusinessSolutionsSectionProps> = ({
                                                                               heading,
                                                                               paragraphs,
                                                                               lottieFile,
                                                                               reverse = false,
                                                                           }) => {
    return (
        <section className="text-white py-16">
            <div
                className={`max-w-7xl px-4 sm:px-6 lg:px-8  mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ${
                    reverse ? "md:flex-row-reverse" : ""
                }`}
            >
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="md:w-1/2 w-full"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        {heading}
                    </h2>

                    {paragraphs.map((para, i) => (
                        <p key={i} className="text-lg mb-6 text-gray-400">
                            {para}
                        </p>
                    ))}
                </motion.div>

                <motion.div
                    variants={lottieVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="md:w-1/2 w-full flex justify-center"
                >
                    <Lottie
                        animationData={lottieFile}
                        loop
                        className="w-full h-full max-w-md drop-shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default BusinessSolutionsSection;
