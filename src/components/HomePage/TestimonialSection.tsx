"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Jane D",
            role: "CEO",
            image: "/assets/home/user.jpg",
            text: "The user interface of this platform is so intuitive, I was able to start using it without any guidance.",
        },
        {
            name: "Harsh P.",
            role: "Product Designer",
            image: "/assets/home/user.jpg",
            text: "I used to dread doing my taxes every year, but this platform has made the process so much simpler and stress-free.",
        },
        {
            name: "Ava C.",
            role: "Marketing Manager",
            image: "/assets/home/user.jpg",
            text: "Excellent service, quick responses, and a product that truly delivers. Highly recommend to others!",
        },
    ];

    return (
        <section className="py-16 bg-black">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
                    <div className="w-full lg:w-2/5">
                        <span className="text-sm text-gray-400 font-medium mb-4 block">Testimonial</span>
                        <h2 className="text-4xl  text-white leading-[3.25rem] mb-8">
                            23k+ Customers gave their Feedback
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
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2 },
                            }}
                            className="mySwiper mt-12"
                        >
                            {testimonials.map((t, i) => (
                                <SwiperSlide key={i}>
                                    <div className="group  border border-gray-600 rounded max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:bg-white/10">
                                        <div className="flex items-center gap-5 mb-5 sm:mb-9">
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                width={60}
                                                height={60}
                                                className="rounded-full object-cover"
                                            />
                                            <div className="grid gap-1">
                                                <h5 className="text-white font-medium">{t.name}</h5>
                                                <span className="text-sm text-gray-400">{t.role}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-400">
                                            {Array.from({ length: 5 }).map((_, starIdx) => (
                                                <i key={starIdx} className="fa-solid fa-star" />
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-400  leading-6 ">
                                            {t.text}
                                        </p>
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
