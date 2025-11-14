"use client";

import CookieConsent from "react-cookie-consent";
import { useEffect, useState } from "react";

declare global {
    interface Window {
        dataLayer?: Array<any>;
        gtag?: (...args: any[]) => void;
    }
}

export default function ConsentBanner() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleAccept = () => {
        if (typeof window.gtag === "function") {
            window.gtag("consent", "update", {
                ad_storage: "granted",
                analytics_storage: "granted",
                functionality_storage: "granted",
                personalization_storage: "granted",
            });
        }

        if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push({ event: "consent_accepted" });
        }
    };

    const handleDecline = () => {
        if (typeof window.gtag === "function") {
            window.gtag("consent", "update", {
                ad_storage: "denied",
                analytics_storage: "denied",
                functionality_storage: "denied",
                personalization_storage: "denied",
            });
        }

        if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push({ event: "consent_declined" });
        }
    };

    if (!isClient) return null;

    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept All"
            declineButtonText="Reject All"
            enableDeclineButton
            onAccept={handleAccept}
            onDecline={handleDecline}
            cookieName="user_cookie_consent"
            expires={365}
            overlay
            containerClasses="cookie-consent-container"
            style={{
                background: "rgba(0,0,0,0.9)",
                padding: "20px",
                fontSize: "14px",
                zIndex: 99999,
                position: "fixed",
            }}
            buttonStyle={{
                background: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "12px 24px",
                fontSize: "14px",
                cursor: "pointer",
                marginLeft: "10px",
            }}
            declineButtonStyle={{
                background: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "12px 24px",
                fontSize: "14px",
                cursor: "pointer",
                marginRight: "10px",
            }}
            overlayStyle={{
                zIndex: 99998,
            }}
        >
            We use cookies to enhance your experience. Choose to accept or reject cookies.
        </CookieConsent>
    );
}