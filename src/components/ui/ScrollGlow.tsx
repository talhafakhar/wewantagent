"use client";
import React, { RefObject, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

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
    const rawY = useMotionValue(0);
    const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.6 });

    useEffect(() => {
        const el = target.current;
        if (!el) return;

        const onScroll = () => {
            const vh = window.innerHeight;
            const rect = el.getBoundingClientRect();
            const center = rect.top + rect.height / 2 - vh / 2;
            rawY.set(-center * speed);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [target, speed, rawY]);

    return (
        <div
            className={`pointer-events-none absolute overflow-visible ${positionClassName}`}
        >
            <motion.div
                style={{ y }}
                className="h-full w-full rounded-full blur-[80px]"
            >
                <div
                    className="h-full w-full rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${color}, transparent 70%)`,
                    }}
                />
            </motion.div>
        </div>
    );
}
