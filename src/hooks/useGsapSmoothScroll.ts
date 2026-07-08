
"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
export default function useGsapSmoothScroll() {
    const router = useRouter();

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

        // ScrollSmoother owns scroll position via a transform on #smooth-content,
        // independent of native scrollTop. Next.js swaps the routed page in place
        // without resetting that transform, so client-side navigation would
        // otherwise land the new page mid-scroll. Snap both the smoother and the
        // native scroll position back to the top on every route change, unless
        // navigating to an in-page hash (e.g. "#pricing").
        const resetScroll = (url: string) => {
            const [, hash] = url.split("#");
            if (hash) return;
            if (smoother) {
                smoother.scrollTop(0);
            }
            window.scrollTo(0, 0);
        };
        router.events.on("routeChangeComplete", resetScroll);

        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
            if (refreshTimeout) clearTimeout(refreshTimeout);
            resizeObserver?.disconnect();
            router.events.off("routeChangeComplete", resetScroll);
            if (smoother) smoother.kill();
        };
    }, [router.events]);
    return null;
}
