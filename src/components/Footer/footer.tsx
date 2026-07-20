
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Linkedin } from "lucide-react"; //Instagram and Facebook add later

export default function FooterSection() {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterMessage, setNewsletterMessage] = useState("");
    const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleNewsletterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!newsletterEmail.trim()) {
            setNewsletterStatus("error");
            setNewsletterMessage("Please enter a valid email address.");
            return;
        }

        setNewsletterStatus("loading");
        setNewsletterMessage("");

        try {
            const response = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: newsletterEmail.trim() }),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Subscription failed.");
            }

            setNewsletterStatus("success");
            setNewsletterMessage(data.message || "Thank you for subscribing!");
            setNewsletterEmail("");
        } catch (error: any) {
            setNewsletterStatus("error");
            setNewsletterMessage(error.message || "Unable to subscribe at this time.");
        }
    };

    return (
        <footer className="text-white relative mt-10">
            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t ">
                <div className="grid pb-12 grid-cols-1 md:grid-cols-6 gap-8 md:gap-10">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src="/assets/svg/home/logo.png"
                                    alt="Company Logo"
                                    width={140}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                We Want Agent builds custom AI automation solutions for businesses across industries. From AI consulting and transformation programs to intelligent agents for real estate, healthcare, legal, e-commerce, and more, we help businesses eliminate repetitive tasks and focus on growth.
                            </p>
                            <div className="flex space-x-4 pt-4">
                                {/* <Link href="#" className="text-gray-400 hover:text-white">
                                    <Facebook className="w-5 h-5" />
                                </Link> */}
                                {/* <Link
                                    href="https://www.linkedin.com/company/we-want-agent"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </Link> */}
                                {/* <Link href="#" className="text-gray-400 hover:text-white">
                                    <Instagram className="w-5 h-5" />
                                </Link> */}
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
                            Services
                        </p>
                        <div className="flex flex-col space-y-2">
                            {[
                                { name: "AI Transformation Program", href: "/services/ai-transformation" },
                                { name: "AI Consulting Services", href: "/services/ai-consulting" },

                            ].map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className="text-sm hover:text-white transition duration-150"
                                >
                                    {item.name}
                                </Link>
                            ))}

                        </div>
                    </div>
                    <div>
                        <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
                            Industries
                        </p>
                        <div className="flex flex-col space-y-2">
                            {[
                                "AI Agent for Real Estate",
                                "AI Agent for Healthcare",
                                "AI Agent for Bookkeeping",
                                "AI Agent for Legal",
                                "AI Agent for E-commerce",
                                "AI Agent for Hospitality",
                                "AI Agent for Recruitment",
                                "AI Agent for Marketing Agencies",
                                "AI Agent for Consultants",
                                "AI Agent for SaaS",
                            ].map((item, idx) => (
                                <span key={idx} className="text-sm text-gray-300">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="justify-self-center text-center">
                        <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
                            Quick Links
                        </p>
                        <div className="flex flex-col items-center space-y-2">
                            <Link href="/about" className="text-sm hover:text-white transition duration-150">
                                About Us
                            </Link>
                            <Link href="/contact" className="text-sm hover:text-white transition duration-150">
                                Contact Us
                            </Link>
                            <Link href="/#blog-section" className="text-sm hover:text-white transition duration-150">
                                Blog
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-1 flex justify-start md:justify-end">
                        <div className="w-full max-w-md md:ml-auto">
                            <p className="text-xs uppercase text-center font-semibold text-gray-400 mb-3 tracking-wider">
                                Sign up for Newsletter
                            </p>
                            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                                <input
                                    type="email"
                                    value={newsletterEmail}
                                    onChange={(event) => setNewsletterEmail(event.target.value)}
                                    placeholder="Enter your email..."
                                    className="w-full bg-gray-800 border border-gray-700 rounded-full py-2 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-full py-2 px-4 text-sm transition duration-200"
                                    disabled={newsletterStatus === "loading"}
                                >
                                    {newsletterStatus === "loading" ? "Subscribing..." : "Subscribe"}
                                </button>
                                {newsletterMessage ? (
                                    <p className={`text-sm ${newsletterStatus === "success" ? "text-green-400" : "text-red-400"}`}>
                                        {newsletterMessage}
                                    </p>
                                ) : null}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="border-t  border-gray-800 mt-6 md:mt-0 py-6">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
                        <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 mb-3 sm:mb-0">
                            <Link href="/privacy-policy" className="hover:text-gray-300 transition text-sm">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-use" className="hover:text-gray-300 transition text-sm">
                                Terms of Use
                            </Link>
                            <Link href="/cookies-policy" className="hover:text-gray-300 transition text-sm">
                                Cookies Policy
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 text-center sm:text-right">
                            <span>Copyright 2026 © All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

