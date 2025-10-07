
import React from "react";
import HeroSection from "@/components/HomePage/HeroSection";
import BenefitSection from "@/components/HomePage/BenefitSection";
import OrbitAnimation from "@/components/HomePage/FlowSection";
import GlobeSection from "@/components/HomePage/GlobeSection";
import PricingSection from "@/components/HomePage/PricingTableSection";
import TestimonialsSection from "@/components/HomePage/TestimonialSection";
import FaqSection from "@/components/HomePage/FaqSection";
import FooterSection from "@/components/Footer/footer";
export default function Home() {
    return (
        <>
            <div className="bg-black">
                <HeroSection/>
                <BenefitSection/>
                <OrbitAnimation/>
                <GlobeSection/>
                <TestimonialsSection/>
                <PricingSection/>
                <FaqSection/>
                <FooterSection/>
            </div>
        </>
    );
}

