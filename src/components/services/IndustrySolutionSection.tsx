"use client";
import React from "react";
import { motion } from "framer-motion";
import {ArrowLeft,ArrowRight, LucideIcon} from "lucide-react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
interface Industry {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface IndustrySolutionsSectionProps {
    heading: string;
    description: string;
    industries: Industry[];
}

const IndustrySolutionsSection: React.FC<IndustrySolutionsSectionProps> = ({
                                                                               heading,
                                                                               description,
                                                                               industries,
                                                                           }) => {
    return (
        <section className="relative text-white pb-24 pt-16  overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl z-0" />

            <div className="max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto"
                >
                    {heading}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
                >
                    {description}
                </motion.p>
                <div>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".swiper-next",
                            prevEl: ".swiper-prev",
                        }}
                        spaceBetween={24}
                        slidesPerView={3}
                        breakpoints={{
                            0: { slidesPerView: 1.1 },
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="w-full"
                    >
                        {industries.map((industry, idx) => {
                            const Icon = industry.icon;
                            return (
                                <SwiperSlide key={idx} >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ type: "spring", stiffness: 130, damping: 18, delay: idx * 0.15 }}
                                        viewport={{ once: true }}
                                        className="h-full min-h-[320px] flex flex-col justify-between bg-white/10 backdrop-blur-lg rounded-xl p-8 text-left shadow-md border border-[#262626] hover:shadow-xl hover:scale-[1.03] transition-all duration-300 hover:border-[#00D1B2]"
                                    >
                                        <div className="mb-6">
                                            <div className="p-4 rounded-full bg-primary/10 w-fit shadow-md">
                                                <Icon className="w-10 h-10 text-primary" />
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-4">
                                                {industry.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm md:text-base">
                                                {industry.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    <div className="flex justify-end gap-4 mt-8">
                        <button className="swiper-prev bg-white/10 text-white border  hover:border-accent p-3 rounded-full transition">
                            <ArrowLeft/>
                        </button>
                        <button className="swiper-next bg-white/10 text-white border  hover:border-accent p-3 rounded-full transition">
                            <ArrowRight/>
                        </button>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default IndustrySolutionsSection;
