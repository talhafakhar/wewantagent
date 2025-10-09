"use client";
import { useEffect } from "react";
import gsap from "gsap";
const CustomCursor = () => {
    useEffect(() => {
        const g = gsap as any;
        let posX = 0, posY = 0;
        let mouseX = 0, mouseY = 0;
        const updatePosition = () => {
            posX += (mouseX - posX) / 8;
            posY += (mouseY - posY) / 8;
            g.to(".cursor-example", {
                x: posX - 10,
                y: posY - 10,
                duration: 0,
            });
        };
        g.ticker.add(updatePosition);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            g.ticker.remove(updatePosition);
        };
    }, []);

    return (
        <div
            className="cursor-example fixed top-0 left-0 w-4 h-4 rounded-full
      bg-white pointer-events-none z-[9999] mix-blend-difference
      transition-transform duration-100 ease-out"
        />
    );
};

export default CustomCursor;
