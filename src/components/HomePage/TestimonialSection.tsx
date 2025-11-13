"use client";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialsSection() {
    const testimonials = [
        {
            title: "Regional Brokerage Real Estate",
            industry: "Real Estate",
            text: "47 second average response time, 64% conversion increase, and 12 hours saved per agent weekly. The ROI was immediate.",
        },
        {
            title: "Multi-Location Clinic Healthcare",
            industry: "Healthcare",
            text: "No-shows dropped from 22% to 8%, saving us $12,600 monthly. The AI handles 200+ calls daily without missing one.",
        },
        {
            title: "Accounting Practice Finance",
            industry: "Finance",
            text: "Month-end close went from 7 days to 2 days. Client satisfaction up 40%, and we doubled capacity without new hires.",
        },
    ];

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
                    <div className="w-full lg:w-2/5">
                        <span className=" text-gray-300 font-medium mb-8 block">What Clients Say</span>
                        <h2 className="text-4xl  text-white leading-[3rem] font-semibold ">
                            Real Results From Beta Partners
                        </h2>

                    </div>

                    <div className="w-full lg:w-3/5">
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                            }}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                768: {slidesPerView: 2},
                                1024: {slidesPerView: 2},
                            }}
                            className="mySwiper mt-12"
                        >
                            {testimonials.map((t, i) => (
                                <SwiperSlide key={i}>
                                    <div className="group border border-gray-600 rounded max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:bg-white/10">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                {t.title}
                                            </h3>
                                            <p className="text-xs uppercase tracking-wide text-gray-400 mb-4">
                                                {t.industry}
                                            </p>
                                            <p className="text-sm text-gray-400 leading-6">
                                                {t.text}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
);
}
