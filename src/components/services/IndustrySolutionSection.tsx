"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import dynamic from "next/dynamic";
import ScrollGlow from "@/components/ui/ScrollGlow";
import GlowButton from "@/components/ui/GlowButton";

const IndustryCarousel = dynamic(() => import("./IndustryCarousel"), {
    ssr: false,
    loading: () => <div className="min-h-[320px]" />,
});
interface Industry {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface IndustrySolutionsSectionProps {
    heading: string;
    headingLine2?: string;
    description: string;
    industries: Industry[];
    note?: string;
    buttonText?: string;
    buttonHref?: string;
}

const IndustrySolutionsSection: React.FC<IndustrySolutionsSectionProps> = ({
                                                                               heading,
                                                                               headingLine2,
                                                                               description,
                                                                               industries,
                                                                               note,
                                                                               buttonText,
                                                                               buttonHref = "/contact",
                                                                           }) => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative text-white pb-24 pt-16  overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />

            <div className="max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-semibold mb-4 max-w-4xl mx-auto"
                >
                    <span className="block bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                        {heading}
                    </span>
                    {headingLine2 && (
                        <span className="block bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                            {headingLine2}
                        </span>
                    )}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
                >
                    {description}
                </motion.p>
                <IndustryCarousel industries={industries} />

                {note && (
                    <p className="mt-12 text-gray-400 max-w-2xl mx-auto">{note}</p>
                )}

                {buttonText && (
                    <div className="mt-8 flex justify-center">
                        <GlowButton href={buttonHref} shape="rect">
                            {buttonText}
                        </GlowButton>
                    </div>
                )}
            </div>
        </section>
    );
};

export default IndustrySolutionsSection;
