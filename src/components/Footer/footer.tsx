
"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Linkedin, Instagram } from "lucide-react";
export default function FooterSection() {
    return (
        <footer className="text-white relative ">
            <div className="max-w-7xl  mx-auto px-6 lg:px-8 pt-10 border-t ">
                <div className="grid pb-12 grid-cols-1 md:grid-cols-6 gap-8">
                    <div className="col-span-2 md:col-span-2">
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
                                Empowering learners and innovators worldwide through
                                accessible, high-quality education and training programs.
                            </p>
                            <div className="flex space-x-4 pt-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
                            Services
                        </p>
                        <div className="flex flex-col space-y-2">
                            {["AI Agent for Real Estate", "AI Agent for Healthcare", 'Accounting and Bookkeeping Agent'].map(
                                (item, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="text-sm hover:text-white transition duration-150"
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
                            Quick Links
                        </p>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="text-sm hover:text-white transition duration-150">
                                About Us
                            </a>
                             <a href="#" className="text-sm hover:text-white transition duration-150">
                                 Contact Us
                        </a>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
                            Sign up for Newsletter
                        </p>
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className="w-full bg-gray-800 border border-gray-700 rounded-full py-2 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-3 appearance-none"
                        />
                        <button className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-full py-2 px-4 text-sm transition duration-200 mb-6">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="border-t  border-gray-800 mt-8 md:mt-12 py-6">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
                        <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 mb-3 sm:mb-0">
                            {["Privacy Policy", "Terms of Use", "Cookies Policy"].map((link, idx) => (
                                <a key={idx} href="#" className="hover:text-gray-300 transition">
                                    {link}
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 text-center sm:text-right">
                            <span>Copyright 2025 © All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

