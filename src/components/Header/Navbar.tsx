"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, ChevronDown, Phone, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <nav className="pt-4 px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-300">
            <div className="max-w-7xl mx-auto ">
                <div className={`bg-white/10 border border-white rounded-full px-4 sm:px-6 shadow-lg transition-all duration-300`}>
                    <div className="flex items-center justify-between py-2">
                        <Link href="/" className="flex items-center text-white font-bold text-2xl">
                            <Image
                                src="/assets/home/logo white.png"
                                alt="Logo"
                                priority
                                width={150}
                                height={150}
                            />
                        </Link>
                        <div className="hidden lg:flex gap-4 items-center relative">
                            <div className="flex space-x-6 bg-white/20 px-8 py-2.5 rounded-full">
                                {/* Services dropdown trigger */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                >
                                    <button className="text-white group-hover:text-gray-200 transition-colors flex items-center">
                                        Services <ChevronDown size={20}/>
                                    </button>

                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                                className="absolute top-full left-0 mt-3 bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-2 w-64"
                                            >
                                                <Link
                                                    href="/services/web-development"
                                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                                                >
                                                    <Code2 className="text-white w-5 h-5 mt-1" />
                                                    <div>
                                                        <p className="text-white font-semibold text-sm">
                                                            Custom AI Development
                                                        </p>
                                                        <p className="text-white/70 text-xs">
                                                            Tailored AI solutions to fit your business needs.
                                                        </p>
                                                    </div>
                                                </Link>

                                                <Link
                                                    href="/services/ai-development"
                                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                                                >
                                                    <Cpu className="text-white w-5 h-5 mt-1" />
                                                    <div>
                                                        <p className="text-white font-semibold text-sm">
                                                           AI Development
                                                        </p>
                                                        <p className="text-white/70 text-xs">
                                                            Create stunning and user-friendly interfaces.
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/ui-design"
                                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                                                >
                                                    <Phone className="text-white w-5 h-5 mt-1" />
                                                    <div>
                                                        <p className="text-white font-semibold text-sm">
                                                            Voice Calling AI Agent
                                                        </p>
                                                        <p className="text-white/70 text-xs">
                                                            AI-powered voice agents for seamless customer interactions.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <Link href="/about-us" className="text-white hover:text-gray-200">
                                    About
                                </Link>
                                <Link href="/contact" className="text-white hover:text-gray-200">
                                    Contact
                                </Link>
                            </div>

                            <Link
                                href="#"
                                className="px-6 py-2.5 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105"
                            >
                                Let&#39;s Collaborate
                            </Link>
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-white focus:outline-none"
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
                                        <X className="w-6 h-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="w-6 h-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden mt-2 mx-4"
                    >
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl">
                            <nav className="flex flex-col space-y-4">
                                <Link
                                    href="#"
                                    className="text-white hover:text-purple-200 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white hover:text-purple-200 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white hover:text-purple-200 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                                >
                                    About
                                </Link>
                                <Link
                                    href="#"
                                    className="mt-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold text-center hover:bg-gray-100 transition-all"
                                >
                                    Let&#39;s Collaborate
                                </Link>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
