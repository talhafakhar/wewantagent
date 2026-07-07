
"use client";
import { useEffect } from "react";
import gsap from "gsap";
export default function useGsapSmoothScroll() {
    useEffect(() => {
        let smoother: any;
        let resizeObserver: ResizeObserver | undefined;
        let refreshTimeout: ReturnType<typeof setTimeout> | undefined;
        let cancelled = false;

        const initSmoothScroll = async () => {
            if (typeof window === "undefined") return;
            try {
                const { ScrollTrigger } = await import("gsap/ScrollTrigger");
                const { ScrollSmoother } = await import("gsap/ScrollSmoother");
                gsap.registerPlugin(ScrollTrigger);
                gsap.registerPlugin(ScrollSmoother);
                requestAnimationFrame(() => {
                    if (cancelled) return;
                    const wrapper = document.querySelector("#smooth-wrapper");
                    const content = document.querySelector("#smooth-content");
                    if (wrapper && content) {
                        smoother = ScrollSmoother.create({
                            wrapper: "#smooth-wrapper",
                            content: "#smooth-content",
                            smooth: 0.8,
                        });

                        // Content like the autoplaying testimonial carousel and
                        // async-loaded blog cards can change page height after
                        // the smoother's initial measurement, leaving the native
                        // scroll range out of sync. Refresh (debounced) whenever
                        // that happens.
                        let lastHeight = content.scrollHeight;
                        resizeObserver = new ResizeObserver(() => {
                            const newHeight = content.scrollHeight;
                            if (Math.abs(newHeight - lastHeight) < 2) return;
                            lastHeight = newHeight;
                            if (refreshTimeout) clearTimeout(refreshTimeout);
                            refreshTimeout = setTimeout(() => {
                                ScrollTrigger.refresh();
                            }, 200);
                        });
                        resizeObserver.observe(content);
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
        const timeoutId = setTimeout(initSmoothScroll, 100);
        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
            if (refreshTimeout) clearTimeout(refreshTimeout);
            resizeObserver?.disconnect();
            if (smoother) smoother.kill();
        };
    }, []);
    return null;
}
