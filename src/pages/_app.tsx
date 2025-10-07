<<<<<<< HEAD
<<<<<<< HEAD
"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import useGsapSmoothScroll from "@/hooks/useGsapSmoothScroll";
import CustomCursor from "@/components/CustomCursor";
export default function App({ Component, pageProps }: AppProps) {
    useGsapSmoothScroll();

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <CustomCursor />
                <Component {...pageProps} />
            </div>
        </div>
    );
}
=======
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import useGsapSmoothScroll from "@/hooks/useGsapSmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function App({ Component, pageProps }: AppProps) {
    useGsapSmoothScroll();

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <CustomCursor />
                <Component {...pageProps} />
            </div>
        </div>
    );
}
>>>>>>> 70a25946396756ff9f33423c65e1b48df9f82b63
=======
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import useGsapSmoothScroll from "@/hooks/useGsapSmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function App({ Component, pageProps }: AppProps) {
    useGsapSmoothScroll();

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <CustomCursor />
                <Component {...pageProps} />
            </div>
        </div>
    );
}
>>>>>>> 70a25946396756ff9f33423c65e1b48df9f82b63
