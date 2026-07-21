"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import ScrollGlow from "@/components/ui/ScrollGlow";

interface Persona {
    role: string;
    description: string;
}

interface WhoForSectionProps {
    heading: string;
    personas: Persona[];
    buttonText: string;
    buttonHref?: string;
    buttonTarget?: string;
    buttonRel?: string;
}

const WhoForSection: React.FC<WhoForSectionProps> = ({
                                                           heading,
                                                           personas,
                                                           buttonText,
                                                           buttonHref = "/contact",
                                                           buttonTarget,
                                                           buttonRel,
                                                       }) => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative py-20 text-white overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-semibold text-center mb-14"
                >
                    <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                        {heading}
                    </span>
                </motion.h2>

                <div className="space-y-4">
                    {personas.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-primary/40 transition-all duration-300"
                        >
                            <CheckCircle2 className="text-accent shrink-0 mt-1" size={22} />
                            <p className="text-gray-300">
                                <span className="font-semibold text-white">{p.role}</span> {p.description}
                            </p>
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

export default WhoForSection;
