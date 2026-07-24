"use client";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Header/Navbar";
import useWheelScrollSpeed from "@/hooks/useWheelScrollSpeed";

const ConsentBanner = dynamic(() => import("@/components/Common/CookieConsent"), {
    ssr: false,
});
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
    ssr: false,
});

const alanSans = localFont({
    src: "../fonts/AlanSans-Variable.woff2",
    variable: "--font-alan-sans",
    weight: "300 900",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-space-grotesk",
    display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
    useWheelScrollSpeed(0.7);
    useEffect(() => {
        const getParameterByName = (name: string) => {
            const url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
            const results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return "";
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        };
        const utmSource = getParameterByName("utm_source");
        const utmMedium = getParameterByName("utm_medium");

        if (utmSource && utmMedium) {
            localStorage.setItem("utm_source", utmSource);
            localStorage.setItem("utm_medium", utmMedium);
        }
    }, []);
    return (
        <div className={`${alanSans.variable} ${spaceGrotesk.variable} font-sans`}>
            <CustomCursor />
            <Navbar />
            <Component {...pageProps} />
            <ConsentBanner />
        </div>
    );
}