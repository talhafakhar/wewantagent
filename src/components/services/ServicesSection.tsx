"use client";
import React from "react";
import { motion, easeOut } from "framer-motion";
import { LucideIcon } from "lucide-react";

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

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto text-white px-4">
                <motion.div variants={container} initial="hidden" animate="show">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto">
                            {heading}
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
                                            className={`relative overflow-hidden border border-white/10 
                        bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                        backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl 
                        hover:scale-[1.03] transition-all duration-300 group
                        ${i === 1 ? "col-span-1 sm:col-span-2" : ""}`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                                            <div className="relative z-10">
                                                <Icon className="w-10 h-10 mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                                                <h3 className="text-xl font-semibold text-white mb-2">
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
