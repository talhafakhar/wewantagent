"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";

interface Myth {
    myth: string;
    reality: string;
}

interface MythsSectionProps {
    heading: string;
    description?: string;
    myths: Myth[];
    buttonText: string;
    buttonHref?: string;
    buttonTarget?: string;
    buttonRel?: string;
}

const MythsSection: React.FC<MythsSectionProps> = ({
                                                         heading,
                                                         description,
                                                         myths,
                                                         buttonText,
                                                         buttonHref = "/contact",
                                                         buttonTarget,
                                                         buttonRel,
                                                     }) => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative py-20 text-white overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-semibold"
                    >
                        <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                            {heading}
                        </span>
                    </motion.h2>
                    {description && (
                        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">{description}</p>
                    )}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {myths.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-primary/40 transition-all duration-300"
                        >
                            <div className="flex items-start gap-3 mb-4">
                                <XCircle className="text-secondary shrink-0 mt-0.5" size={20} />
                                <span className="text-gray-400">{m.myth}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                                <span className="text-gray-100">{m.reality}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <GlowButton href={buttonHref} target={buttonTarget} rel={buttonRel} shape="rect">
                        {buttonText}
                    </GlowButton>
                </div>
            </div>
        </section>
    );
};

export default MythsSection;
