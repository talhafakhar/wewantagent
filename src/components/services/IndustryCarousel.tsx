"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, LucideIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Industry {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface IndustryCarouselProps {
    industries: Industry[];
}

const IndustryCarousel: React.FC<IndustryCarouselProps> = ({ industries }) => {
    return (
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
                        <SwiperSlide key={idx}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 130, damping: 18, delay: idx * 0.15 }}
                                viewport={{ once: true }}
                                className="h-full min-h-[320px] flex flex-col justify-between bg-white/10 backdrop-blur-lg rounded-xl p-8 text-left shadow-md border border-[#262626] hover:shadow-xl hover:scale-[1.03] transition-all duration-300 hover:border-[#5EA8FF]"
                            >
                                <div className="mb-6">
                                    <div className="p-4 rounded-full bg-primary/10 w-fit shadow-md">
                                        <Icon className="w-10 h-10 text-primary" />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#f2c14e] to-[white] bg-clip-text text-transparent">
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

            <div className="flex justify-center gap-4 mt-10">
                <button className="swiper-prev flex items-center justify-center w-11 h-11 rounded-full border border-[#262626] text-white transition-colors duration-200 hover:border-primary hover:text-primary disabled:opacity-30 disabled:pointer-events-none">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="swiper-next flex items-center justify-center w-11 h-11 rounded-full border border-[#262626] text-white transition-colors duration-200 hover:border-primary hover:text-primary disabled:opacity-30 disabled:pointer-events-none">
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default IndustryCarousel;
