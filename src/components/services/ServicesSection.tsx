"use client";
import React, { useRef } from "react";
import { motion, easeOut } from "framer-motion";
import { LucideIcon } from "lucide-react";
import ScrollGlow from "@/components/ui/ScrollGlow";

interface ServiceItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

interface ServicesSectionProps {
    heading: string;
    description?: string;
    services: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
                                                             heading,
                                                             description,
                                                             services,
                                                         }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: easeOut },
        },
    };

    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="relative py-16 overflow-hidden">
            <ScrollGlow
                target={sectionRef}
                speed={0}
                positionClassName="left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2"
            />
            <div className="relative z-10 max-w-7xl mx-auto text-white px-4 sm:px-6 lg:px-8">
                <motion.div variants={container} initial="hidden" animate="show">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto">
                            <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                                {heading}
                            </span>
                        </h2>
                        {description && (
                            <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
                                {description}
                            </p>
                        )}
                    </motion.div>

                    <div className="flex justify-center">
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {services.map((service, i) => {
                                    const Icon = service.icon;
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className={`relative rounded-2xl border border-white/10
                        bg-white/5 backdrop-blur-sm p-6
                        transition-all duration-300 group
                        hover:border-primary hover:-translate-y-1
                        ${i === 1 ? "col-span-1 sm:col-span-2" : ""}`}
                                        >
                                            <div className="relative z-10">
                                                <Icon className="w-10 h-10 mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                                                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#f2c14e] to-[white] bg-clip-text text-transparent">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {service.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
