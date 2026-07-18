"use client";
import React, { useRef } from "react";
import { motion, easeOut } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";

interface ProblemSectionProps {
    heading: string;
    paragraphs: string[];
    buttonText: string;
    buttonHref?: string;
}

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const ProblemSection: React.FC<ProblemSectionProps> = ({
                                                             heading,
                                                             paragraphs,
                                                             buttonText,
                                                             buttonHref = "/contact",
                                                         }) => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative py-28 text-white overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8"
            >
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-12">
                    <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                        {heading}
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {paragraphs.map((para, i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-colors duration-300 hover:border-primary/40 hover:bg-white/[0.07]"
                        >
                            <p className="text-gray-400 leading-relaxed">{para}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <GlowButton href={buttonHref} shape="rect">
                        {buttonText}
                    </GlowButton>
                </div>
            </motion.div>
        </section>
    );
};

export default ProblemSection;
