import HeroSection from "@/components/About/HeroSection";
import React from "react";
import OriginStory from "@/components/About/OriginStorySection";
import SolutionsSection from "@/components/About/SolutionsSection";
import MeetOurTeam from "@/components/About/MeetOurTeam";
import VisionAndMission from "@/components/About/MissionSection";
import ContactSection from "@/components/About/ContactSection";
import FooterSection from "@/components/Footer/footer";

export default function AboutUsPage() {
    return (
        <>
            <div className="bg-black">
                <HeroSection/>
                <OriginStory/>
                <SolutionsSection/>
                <MeetOurTeam/>
                <VisionAndMission/>
                <ContactSection/>
                <FooterSection/>
            </div>
        </>
    );
}

