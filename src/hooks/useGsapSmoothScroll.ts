
"use client";
import { useEffect } from "react";
import gsap from "gsap";
export default function useGsapSmoothScroll() {
    useEffect(() => {
        let smoother: any;
        const initSmoothScroll = async () => {
            if (typeof window === "undefined") return;
            try {
                const { ScrollTrigger } = await import("gsap/ScrollTrigger");
                const { ScrollSmoother } = await import("gsap/ScrollSmoother");
                gsap.registerPlugin(ScrollTrigger);
                gsap.registerPlugin(ScrollSmoother);
                requestAnimationFrame(() => {
                    const wrapper = document.querySelector("#smooth-wrapper");
                    const content = document.querySelector("#smooth-content");
                    if (wrapper && content) {
                        smoother = ScrollSmoother.create({
                            wrapper: "#smooth-wrapper",
                            content: "#smooth-content",
                            smooth: 1.5,
                            effects: true,
                        });
                    } else {
                        console.warn(
                            "ScrollSmoother: wrapper or content not found in DOM."
                        );
                    }
                });
            } catch (error) {
                console.error("GSAP ScrollSmoother init failed:", error);
            }
        };
        setTimeout(initSmoothScroll, 100);
        return () => {
            if (smoother) smoother.kill();
        };
    }, []);
    return null;
}
