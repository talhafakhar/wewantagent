"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GlowButton from "@/components/ui/GlowButton";

const NAV_LINKS = [
    { label: "Real Estate", href: "/services/realestateaiagent" },
    { label: "Healthcare", href: "/services/healthcareautomation" },
    { label: "Bookkeeping", href: "/services/bookkeepingai" },
    { label: "About", href: "/automationexpert" },
    { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 sm:px-8 py-[18px] border-b transition-colors duration-300 ${
                scrolled
                    ? "bg-[#08090d]/85 border-white/[0.08] backdrop-blur-xl backdrop-saturate-150"
                    : "bg-transparent border-transparent"
            }`}
        >
            <Link href="/" className="flex items-center">
                <Image
                    src="/assets/home/logo white.png"
                    alt="We Want Agent"
                    width={140}
                    height={37}
                    priority
                    className="h-8 sm:h-9 w-auto object-contain"
                />
            </Link>

            <div className="hidden lg:flex items-center gap-[30px]">
                <div className="flex gap-[26px]">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="group relative font-sans text-[14.5px] font-medium"
                        >
                            <span className="text-[#b6b9c6] transition-opacity duration-200 group-hover:opacity-0">
                                {link.label}
                            </span>
                            <span
                                aria-hidden
                                className="absolute inset-0 bg-gradient-to-r from-white to-[#f2c14e] bg-clip-text text-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                            >
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </div>
                <GlowButton
                    href="https://calendly.com/talhafakhar/discoverycall"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                >
                    Let&#39;s Collaborate
                </GlowButton>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none lg:hidden"
                aria-label="Toggle menu"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="h-6 w-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Menu className="h-6 w-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 right-0 top-full mx-4 mt-2 overflow-hidden lg:hidden"
                    >
                        <div className="flex flex-col gap-1 rounded-3xl border border-white/10 bg-[#0c0e14]/95 p-6 shadow-2xl backdrop-blur-xl">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group relative rounded-lg px-4 py-2.5 font-sans transition-colors hover:bg-white/5"
                                >
                                    <span className="text-[#b6b9c6] transition-opacity duration-200 group-hover:opacity-0">
                                        {link.label}
                                    </span>
                                    <span
                                        aria-hidden
                                        className="absolute inset-y-0 left-4 flex items-center bg-gradient-to-r from-[#4fd1a5] via-[#f2c14e] to-[#f2665b] bg-clip-text text-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                    >
                                        {link.label}
                                    </span>
                                </Link>
                            ))}
                            <GlowButton
                                href="https://calendly.com/talhafakhar/discoverycall"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 w-full justify-center"
                            >
                                Let&#39;s Collaborate
                            </GlowButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
