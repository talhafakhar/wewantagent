"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

type GlowButtonProps = {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    size?: "sm" | "md";
    shape?: "pill" | "rect";
    animateGlow?: boolean;
    textGradient?: "blue" | "gold";
};

const GlowButton = ({
    children,
    href,
    onClick,
    type = "button",
    disabled,
    className = "",
    size = "md",
    shape = "pill",
    animateGlow = true,
    textGradient = "blue",
}: GlowButtonProps) => {
    const rootRef = useRef<HTMLElement | null>(null);
    const [box, setBox] = useState({ width: 0, height: 0 });
    const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        const update = () =>
            setBox({ width: el.offsetWidth, height: el.offsetHeight });
        update();
        const observer = new ResizeObserver(update);
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const { width, height } = box;
    const radius = shape === "rect" ? 12 : height ? height / 2 : 0;
    const perimeter =
        width && height
            ? 2 * (width - 2 * radius) + 2 * (height - 2 * radius) + 2 * Math.PI * radius
            : 0;
    const sweepAnimation = `glowBtnSweep${uid}`;

    const content = (
        <>
            {perimeter > 0 && (
                <svg
                    className="glow-btn-border"
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    aria-hidden="true"
                >
                    <rect
                        className="glow-btn-border-track"
                        x="0.75"
                        y="0.75"
                        width={width - 1.5}
                        height={height - 1.5}
                        rx={radius - 0.75}
                    />
                    {animateGlow && (
                        <rect
                            className="glow-btn-border-glow"
                            x="0.75"
                            y="0.75"
                            width={width - 1.5}
                            height={height - 1.5}
                            rx={radius - 0.75}
                            style={{
                                strokeDasharray: `${perimeter * 0.16} ${perimeter * 0.84}`,
                                animation: `${sweepAnimation} 2.6s linear infinite`,
                            }}
                        />
                    )}
                </svg>
            )}
            <span className={`glow-btn-inner glow-btn-inner--${size} glow-btn-inner--${shape}`}>
                <span className={`glow-btn-text glow-btn-text--${textGradient}`}>{children}</span>
            </span>
            {perimeter > 0 && animateGlow && (
                <style jsx>{`
                    @keyframes ${sweepAnimation} {
                        from {
                            stroke-dashoffset: 0;
                        }
                        to {
                            stroke-dashoffset: ${-perimeter};
                        }
                    }
                `}</style>
            )}
        </>
    );

    const sharedClassName = `glow-btn glow-btn--${shape} ${className}`;

    return (
        <>
            {href ? (
                <Link
                    href={href}
                    onClick={onClick}
                    className={sharedClassName}
                    ref={rootRef as React.Ref<HTMLAnchorElement>}
                >
                    {content}
                </Link>
            ) : (
                <button
                    type={type}
                    onClick={onClick}
                    disabled={disabled}
                    className={sharedClassName}
                    ref={rootRef as React.Ref<HTMLButtonElement>}
                >
                    {content}
                </button>
            )}

            <style jsx global>{`
                .glow-btn {
                    position: relative;
                    display: inline-flex;
                    padding: 1.5px;
                    isolation: isolate;
                }
                .glow-btn--pill {
                    border-radius: 9999px;
                }
                .glow-btn--rect {
                    border-radius: 12px;
                }
                .glow-btn-border {
                    position: absolute;
                    inset: 0;
                    z-index: 2;
                    overflow: visible;
                    pointer-events: none;
                }
                .glow-btn-border-track {
                    fill: none;
                    stroke: rgba(94, 168, 255, 0.22);
                    stroke-width: 1.5px;
                }
                .glow-btn-border-glow {
                    fill: none;
                    stroke: #cfe6ff;
                    stroke-width: 1.5px;
                    stroke-linecap: butt;
                    filter: drop-shadow(0 0 4px #5ea8ff) drop-shadow(0 0 8px rgba(94, 168, 255, 0.7));
                }
                .glow-btn-inner {
                    position: relative;
                    z-index: 1;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    width: 100%;
                    background: #07080c;
                    font-family: "Space Grotesk", sans-serif;
                    font-weight: 600;
                    transition: background-color 0.2s ease;
                }
                .glow-btn-inner--pill {
                    border-radius: 9999px;
                }
                .glow-btn-inner--rect {
                    border-radius: 10.5px;
                }
                .glow-btn-inner--md {
                    padding: 13px 28px;
                    font-size: 15px;
                }
                .glow-btn-inner--sm {
                    padding: 9px 19px;
                    font-size: 14px;
                }
                .glow-btn-text {
                    background-size: 250% 100%;
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                    -webkit-text-fill-color: transparent;
                    animation: glowBtnShimmer 3s linear infinite;
                }
                .glow-btn-text--blue {
                    background-image: linear-gradient(
                        90deg,
                        #ffffff,
                        #cfe6ff,
                        #5ea8ff,
                        #cfe6ff,
                        #ffffff
                    );
                }
                .glow-btn-text--gold {
                    background-image: linear-gradient(
                        90deg,
                        #ffffff,
                        #f2c14e,
                        #ffffff
                    );
                }
                .glow-btn:hover .glow-btn-inner {
                    background: #0d0f16;
                }
                .glow-btn:disabled {
                    opacity: 0.65;
                    cursor: not-allowed;
                }

                @keyframes glowBtnShimmer {
                    from {
                        background-position: 250% 0;
                    }
                    to {
                        background-position: -250% 0;
                    }
                }
            `}</style>
        </>
    );
};

export default GlowButton;
