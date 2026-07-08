import { useEffect } from "react";

/**
 * `speed` scales how far each wheel tick moves the target (1 = native
 * distance, < 1 = slower/calmer). `ease` controls how quickly the visible
 * scroll catches up to that target each frame (0-1, lower = glidier).
 */
export default function useWheelScrollSpeed(speed = 0.5, ease = 0.1) {
    useEffect(() => {
        let targetY = window.scrollY;
        let currentY = window.scrollY;
        let rafId: number | null = null;

        const clamp = (y: number) => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            return Math.min(Math.max(y, 0), max);
        };

        const tick = () => {
            currentY += (targetY - currentY) * ease;

            if (Math.abs(targetY - currentY) < 0.5) {
                currentY = targetY;
                window.scrollTo(0, currentY);
                rafId = null;
                return;
            }

            window.scrollTo(0, currentY);
            rafId = requestAnimationFrame(tick);
        };

        const onWheel = (e: WheelEvent) => {
            // Only intercept vertical, mouse-wheel-style scrolling.
            if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

            e.preventDefault();
            targetY = clamp(targetY + e.deltaY * speed);

            if (rafId === null) {
                rafId = requestAnimationFrame(tick);
            }
        };

        const onScroll = () => {
            
            if (rafId === null) {
                targetY = window.scrollY;
                currentY = window.scrollY;
            }
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("scroll", onScroll);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, [speed, ease]);
}
