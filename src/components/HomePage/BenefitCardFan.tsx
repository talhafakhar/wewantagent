"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Service = {
    title: string;
    description: string;
    number: string;
};

const AUTOPLAY_DELAY = 5000;

const BenefitCardFan = ({ services }: { services: Service[] }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % services.length);
        }, AUTOPLAY_DELAY);
        return () => clearInterval(id);
    }, [services.length]);

    return (
        <div>
            <div className="flex justify-center items-center gap-3 sm:gap-4 lg:gap-6 [perspective:1500px]">
                {services.map((service, index) => {
                    const offset = index - active;
                    const isActive = offset === 0;
                    const isLeft = offset === -1 || offset === services.length - 1;

                    return (
                        <motion.div
                            key={index}
                            className={`w-full lg:w-1/3 max-w-sm ${isActive ? "block" : "hidden lg:block"}`}
                            animate={{
                                rotateY: isActive ? 0 : isLeft ? 22 : -22,
                                scale: isActive ? 1 : 0.9,
                                y: isActive ? 0 : 16,
                                zIndex: isActive ? 10 : 1,
                                opacity: isActive ? 1 : 0.6,
                            }}
                            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div
                                className={`bg-white/5 backdrop-blur-xl rounded p-4 sm:p-6 lg:p-8 shadow-2xl h-full min-h-[200px] sm:min-h-[240px] lg:min-h-[420px] flex flex-col justify-between relative overflow-hidden border transition-colors duration-500 ${
                                    isActive
                                        ? "border-primary/60 shadow-[0_0_20px_rgba(94,168,255,0.35),0_0_55px_rgba(94,168,255,0.18)] bg-white/10"
                                        : "border-white/10"
                                }`}
                            >
                                <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full" />
                                <div className="relative z-10 mb-3 sm:mb-6">
                                    <span className="font-heading text-3xl sm:text-5xl lg:text-7xl font-bold leading-none bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                        {service.number}
                                    </span>
                                </div>
                                <div className="relative z-10 flex-1">
                                    <h4 className="text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 uppercase lg:mb-4 px-1 sm:px-2 tracking-wide bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                                        {service.title}
                                    </h4>
                                    <p className="text-sm sm:text-sm lg:text-base text-gray-400 leading-relaxed px-1 sm:px-2">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="flex lg:hidden justify-center items-center gap-2 mt-4">
                {services.map((service, index) => (
                    <button
                        key={service.number}
                        type="button"
                        aria-label={`Show card ${index + 1}`}
                        onClick={() => setActive(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === active ? "w-6 bg-primary" : "w-1.5 bg-white/20"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BenefitCardFan;
