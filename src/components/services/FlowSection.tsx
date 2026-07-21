"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollGlow from "@/components/ui/ScrollGlow";
import GlowButton from "@/components/ui/GlowButton";

interface Step {
    number: number;
    title: string;
    description: string;
}

interface ProcessTimelineProps {
    heading: string;
    steps: Step[];
    buttonText?: string;
    buttonHref?: string;
    buttonTarget?: string;
    buttonRel?: string;
}

interface Point {
    x: number;
    y: number;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
    heading,
    steps,
    buttonText,
    buttonHref = "/contact",
    buttonTarget,
    buttonRel,
}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [segments, setSegments] = useState<string[]>([]);
    const [size, setSize] = useState({ width: 0, height: 0 });
    const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");

    // Measures the rendered numbered-dot positions and builds a smooth
    // S-curve bezier between each consecutive pair, so the connector line
    // always matches the actual (variable-height) card layout.
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const measure = () => {
            const trackRect = track.getBoundingClientRect();
            const points: (Point | null)[] = dotRefs.current.map((el) => {
                if (!el) return null;
                const r = el.getBoundingClientRect();
                return {
                    x: r.left + r.width / 2 - trackRect.left,
                    y: r.top + r.height / 2 - trackRect.top,
                };
            });

            const segs: string[] = [];
            for (let i = 0; i < points.length - 1; i++) {
                const a = points[i];
                const b = points[i + 1];
                if (!a || !b) continue;
                const midY = (a.y + b.y) / 2;
                segs.push(`M ${a.x} ${a.y} C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`);
            }
            setSegments(segs);
            setSize({ width: track.scrollWidth, height: track.scrollHeight });
        };

        measure();
        const raf = requestAnimationFrame(measure);
        const timer = setTimeout(measure, 400);

        const ro = new ResizeObserver(measure);
        ro.observe(track);
        window.addEventListener("resize", measure);

        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(timer);
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, [steps.length]);

    return (
        <section ref={sectionRef} className="relative bg-black text-white py-20 overflow-hidden">
            <ScrollGlow target={sectionRef} speed={0} />
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
                    <span className="bg-gradient-to-r from-white via-[#cfe6ff] to-primary bg-clip-text text-transparent">
                        {heading}
                    </span>
                </h2>

                {/* Desktop: alternating zigzag flow with measured curvy connectors */}
                <div ref={trackRef} className="relative hidden md:block">
                    <svg
                        className="absolute inset-0 overflow-visible pointer-events-none"
                        width={size.width}
                        height={size.height}
                    >
                        <defs>
                            <linearGradient id={`flowGrad-${rawId}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#5EA8FF" stopOpacity="0.1" />
                                <stop offset="50%" stopColor="#8FCBFF" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="#3E7BFF" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                        {segments.map((d, i) => (
                            <motion.path
                                key={i}
                                d={d}
                                fill="none"
                                stroke={`url(#flowGrad-${rawId})`}
                                strokeWidth={2}
                                strokeLinecap="round"
                                style={{ filter: "drop-shadow(0 0 4px rgba(94,168,255,0.6))" }}
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.9, delay: i * 0.18, ease: "easeInOut" }}
                            />
                        ))}
                    </svg>

                    <div className="flex flex-col gap-16">
                        {steps.map((step, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={index} className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
                                    <div className="relative w-[46%]">
                                        <div
                                            ref={(el) => {
                                                dotRefs.current[index] = el;
                                            }}
                                            className={`absolute top-1/2 -translate-y-1/2 z-10 ${
                                                isLeft ? "-right-[52px]" : "-left-[52px]"
                                            }`}
                                        >
                                            <span className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse" />
                                            <div className="relative p-[2px] rounded-full bg-gradient-to-r from-primary via-accent to-secondary">
                                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-bold">
                                                    {step.number}
                                                </div>
                                            </div>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6, delay: index * 0.12 }}
                                            className="group bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[#5EA8FF]/20"
                                        >
                                            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide bg-gradient-to-r from-[#f2c14e] via-white to-[#f2c14e] bg-clip-text text-transparent">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile: vertical flow with an animated growing line */}
                <div className="relative ml-6 border-l-2 border-white/10 md:hidden">
                    <motion.div
                        className="absolute left-0 top-0 w-[2px] origin-top bg-gradient-to-b from-primary via-accent to-secondary"
                        style={{ height: "100%" }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative mb-12 last:mb-0"
                        >
                            <div className="absolute -left-[22px] top-0 flex items-center justify-center">
                                <span className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse" />
                                <div className="relative p-[2px] rounded-full bg-gradient-to-r from-primary via-accent to-secondary">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-bold">
                                        {step.number}
                                    </div>
                                </div>
                            </div>

                            <div className="ml-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-md backdrop-blur-sm transition hover:shadow-[#5EA8FF]/20">
                                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide bg-gradient-to-r from-[#f2c14e] via-white to-[#f2c14e] bg-clip-text text-transparent">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {buttonText && (
                    <div className="mt-14 flex justify-center">
                        <GlowButton href={buttonHref} target={buttonTarget} rel={buttonRel} shape="rect">
                            {buttonText}
                        </GlowButton>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProcessTimeline;
