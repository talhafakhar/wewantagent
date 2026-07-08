"use client";
import React, { RefObject, useEffect, useRef } from "react";
import gsap from "gsap";

interface ScrollGlowProps {
    target: RefObject<HTMLElement | null>;
    positionClassName?: string;
    speed?: number;
    color?: string;
}

export default function ScrollGlow({
    target,
    positionClassName = "left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2",
    speed = 0.15,
    color = "rgba(94,168,255,0.28)",
}: ScrollGlowProps) {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!speed) return;
        const el = target.current;
        const glow = glowRef.current;
        if (!el || !glow) return;

        let trigger: any;
        let cancelled = false;

        (async () => {
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);
            if (cancelled) return;

            // Mirrors the previous getBoundingClientRect-based formula (distance of
            // el's center from viewport center) but derives it from ScrollTrigger's
            // own cached start/end + progress instead of reading layout every scroll
            // tick, so it shares ScrollTrigger's single batched scroll listener
            // instead of adding one more per ScrollGlow instance on the page.
            const setY = gsap.quickTo(glow, "y", {
                duration: 0.5,
                ease: "power3.out",
            });

            trigger = ScrollTrigger.create({
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (self) => {
                    const range = self.end - self.start;
                    const center = range * (0.5 - self.progress);
                    setY(-center * speed);
                },
            });
        })();

        return () => {
            cancelled = true;
            trigger?.kill();
        };
    }, [target, speed]);

    return (
        <div
            className={`pointer-events-none absolute overflow-visible ${positionClassName}`}
        >
            <div ref={glowRef} className="h-full w-full rounded-full blur-[80px]">
                <div
                    className="h-full w-full rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${color}, transparent 70%)`,
                    }}
                />
            </div>
        </div>
    );
}
