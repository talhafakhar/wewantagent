
import React from "react";
import HeroSection from "@/components/services/AiDevelopment/HeroSection";
import FooterSection from "@/components/Footer/footer";
import ServicesSection from "@/components/services/AiDevelopment/ServicesSection";
import StatsSection from "@/components/services/AiDevelopment/StatsSection";
import MethodicalApproach from "@/components/services/AiDevelopment/TimeLineItemSection";
import BusinessSolutionsSection from "@/components/services/AiDevelopment/BusinessSolutionsSection";
import ProcessTimeline from "@/components/services/AiDevelopment/FlowSection";
import AIModulesSection from "@/components/services/AiDevelopment/ModalSection";
import IndustrySolutionsSection from "@/components/services/AiDevelopment/IndustrySolutionSection";
export default function AiDevelopment() {
    return (
        <>
            <div className="bg-black">
                <HeroSection/>
                <BusinessSolutionsSection/>
                <StatsSection/>
                <ServicesSection/>
                <MethodicalApproach/>
                <ProcessTimeline/>
                <AIModulesSection/>
                <IndustrySolutionsSection/>
                <FooterSection/>
            </div>
        </>
    );
}

