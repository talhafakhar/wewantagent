"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import ConsentBanner from "@/components/Common/CookieConsent";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Header/Navbar";
export default function App({ Component, pageProps }: AppProps) {
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
        <>
            <CustomCursor />
            <Navbar />
            <Component {...pageProps} />
            <ConsentBanner />
        </>
    );
}