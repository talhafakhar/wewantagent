"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface CaseStudyCard {
    heading: string;
    listIcon: LucideIcon;
    listIconColor: string;
    points: string[];
}

interface RealEstateCaseStudyProps {
    heading: string;
    description: string;
    imageSrc: string;
    width?: number;
    cards: CaseStudyCard[];
}

const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.3,
        },
    }),
};

const RealEstateCaseStudy: React.FC<RealEstateCaseStudyProps> = ({
                                                                     heading,
                                                                     description,
                                                                     imageSrc,
                                                                     width,
                                                                     cards,
                                                                 }) => {
    return (
        <section className="text-white max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="flex flex-col justify-start sticky top-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        {heading}
                    </h2>
                    <p className="mt-6 text-gray-400 text-lg max-w-xl">{description}</p>

                    <div className="mt-14 mx-auto">
                        <Image
                            src={imageSrc}
                            alt="Case Study Visual"
                            width={width ? width : 300}
                            height={300}
                            priority
                            className="mx-auto"
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-10">
                    {cards.map(({ heading, points, listIcon: ListIcon, listIconColor }, i) => (
                        <motion.div
                            key={heading}
                            className="bg-white/5 p-6 rounded-xl backdrop-blur-2xl border border-white/10 hover:border-primary/30 transition-all duration-300"
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                        >
                            <div className="mb-4">
                                <h3 className="text-2xl font-semibold text-white">{heading}</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300 text-base leading-relaxed list-none">
                                {points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <ListIcon className={`${listIconColor} mt-1`} size={20} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RealEstateCaseStudy;
