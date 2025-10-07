<<<<<<< HEAD
<<<<<<< HEAD
"use client";
import { useEffect } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    useEffect(() => {
        let posX = 0, posY = 0;
        let mouseX = 0, mouseY = 0;

        const updatePosition = () => {
            posX += (mouseX - posX) / 8;
            posY += (mouseY - posY) / 8;

            gsap.set(".cursor-example", {
                x: posX - 10,
                y: posY - 10,
            });
        };

        gsap.ticker.add(updatePosition);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            gsap.ticker.remove(updatePosition);
        };
    }, []);

    return (
        <div
            className="cursor-example fixed top-0 left-0 w-4 h-4 rounded-full
            bg-white pointer-events-none z-[9999] "
        />
    );
};

export default CustomCursor;
=======
"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    useEffect(() => {
        let posX = 0,
            posY = 0;
        let mouseX = 0,
            mouseY = 0;
        const updatePosition = () => {
            posX += (mouseX - posX) / 8;
            posY += (mouseY - posY) / 8;

            gsap.set(".cursor-example", {
                css: {
                    left: posX - 10,
                    top: posY - 10,
                },
            });
        };
        gsap.ticker.add(updatePosition);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            gsap.ticker.remove(updatePosition);
        };
    }, []);

    return (
        <div
            className="cursor-example fixed top-0 left-0 w-4 h-4 rounded-full
                 bg-white
                pointer-events-none z-[9999] "
        ></div>
    );
}
>>>>>>> 70a25946396756ff9f33423c65e1b48df9f82b63
=======
"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    useEffect(() => {
        let posX = 0,
            posY = 0;
        let mouseX = 0,
            mouseY = 0;
        const updatePosition = () => {
            posX += (mouseX - posX) / 8;
            posY += (mouseY - posY) / 8;

            gsap.set(".cursor-example", {
                css: {
                    left: posX - 10,
                    top: posY - 10,
                },
            });
        };
        gsap.ticker.add(updatePosition);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            gsap.ticker.remove(updatePosition);
        };
    }, []);

    return (
        <div
            className="cursor-example fixed top-0 left-0 w-4 h-4 rounded-full
                 bg-white
                pointer-events-none z-[9999] "
        ></div>
    );
}
>>>>>>> 70a25946396756ff9f33423c65e1b48df9f82b63
