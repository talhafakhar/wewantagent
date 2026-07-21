"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, easeOut } from "framer-motion";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface BusinessSolutionsSectionProps {
    heading: string;
    headingLine2?: string;
    paragraphs: string[];
    lottieFile: () => Promise<{ default: object }>;
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
                                                                               headingLine2,
                                                                               paragraphs,
                                                                               lottieFile,
                                                                               reverse = false,
                                                                           }) => {
    const lottieRef = useRef<HTMLDivElement>(null);
    const [animationData, setAnimationData] = useState<object | null>(null);

    useEffect(() => {
        const el = lottieRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    lottieFile().then((mod) => setAnimationData(mod.default));
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );
        observer.observe(el);

        return () => observer.disconnect();
    }, [lottieFile]);

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
                    <h2 className="text-3xl md:text-5xl font-semibold mb-8 leading-tight">
                        <span className="block bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                            {heading}
                        </span>
                        {headingLine2 && (
                            <span className="block bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                                {headingLine2}
                            </span>
                        )}
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
                    <div ref={lottieRef} className="w-full max-w-md">
                        {animationData && (
                            <Lottie
                                animationData={animationData}
                                loop
                                className="w-full h-full drop-shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                            />
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BusinessSolutionsSection;
