"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

interface Industry {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface IndustryCarouselProps {
    industries: Industry[];
}

const IndustryCarousel: React.FC<IndustryCarouselProps> = ({ industries }) => {
    const repeatIndustries = [...industries, ...industries];

    return (
        <div className="overflow-hidden">
            <div className="marquee-row overflow-hidden">
                <div className="marquee-track flex flex-nowrap gap-6 animate-marquee-right">
                    {repeatIndustries.map((industry, idx) => {
                        const Icon = industry.icon;
                        return (
                            <div key={idx} className="shrink-0 w-[280px] sm:w-[320px]">
                                <div className="group h-full min-h-[320px] border border-white/10 rounded-xl p-8 bg-white/[0.06] backdrop-blur-lg shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]">
                                    <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4 shadow-md">
                                        <Icon className="w-10 h-10 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-[#f2c14e] to-white bg-clip-text text-transparent">
                                        {industry.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-6">
                                        {industry.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default IndustryCarousel;
