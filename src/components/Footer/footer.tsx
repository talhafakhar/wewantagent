<<<<<<< HEAD
<<<<<<< HEAD
"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function FooterSection() {
    return (
        <footer className="text-gray-300 relative">
                <div className="relative py-20  rounded max-w-5xl mx-auto shadow-xl text-center overflow-hidden"
                    style={{
                        backgroundImage: "url('/assets/home/banner-bg.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40 "></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-4xl font-semibold max-w-3xl mx-auto text-white mb-6">
                            Get to know the world-class board of directors governing our organization.
                        </h2>
                        <button className="border border-white text-white font-medium py-2 px-8 rounded shadow-md">
                            Meet our Board
                        </button>
                    </div>
                </div>



            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 md:pt-32 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
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
                            Start Learning
                        </p>
                        <div className="flex flex-col space-y-2">
                            {["UX/UI Design", "Software Development", "Workplace Skills", "Job Search", "Digital Freelancing"].map(
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
                            Other Resources
                        </p>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="text-sm hover:text-white transition duration-150">
                                Events
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
            </div>

            <div className="border-t border-gray-800 mt-8 md:mt-12 py-6">
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
        </footer>
    );
}
=======
import React from 'react';
import {ArrowRight, ExternalLink, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter,} from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    const navLinks = [
        {href: '/', label: 'HOME'},
        {href: 'https://tfbusinesssolutions.com/about', label: 'ABOUT'},
        {href: 'https://tfbusinesssolutions.com/contact', label: 'CONTACT'},
        {href: 'https://tfbusinesssolutions.com/startupulse', label: 'OUR COMMUNITY'},
        {href: 'https://tfbusinesssolutions.com/blogs', label: 'BLOGS'},
    ];

    const socialLinks = [
        {icon: Facebook, href: "https://www.facebook.com/tfbusiness.solutions/", label: "Facebook"},
        {icon: Twitter, href: "https://twitter.com/thetalhafakhar", label: "Twitter"},
        {icon: Linkedin, href: "https://www.linkedin.com/company/tfbusinesssolutions/?originalSubdomain=pk#/", label: "LinkedIn"},
        {icon: Instagram, href: "https://www.instagram.com/tfbusiness.solutions/", label: "Instagram"},
    ];

    return (
        <footer className="bg-secondary border-t text-white relative overflow-hidden">
            <div className='container mx-auto px-4'>
                <div>
                    <div className="py-16">
                        <div className="grid lg:grid-cols-4 gap-12">
                            <div className="lg:col-span-2">
                                <Link href="/" className="flex items-center mb-5 group">
                                    <div className="flex">
                                        <div
                                            className="w-10 h-9 transform transition-all duration-300 group-hover:rotate-3">
                                            <Image
                                                src="/assets/logo.webp"
                                                alt="logo"
                                                width={42}
                                                loading="lazy"
                                                height={42}
                                            />
                                        </div>
                                    </div>
                                    <span className="font-logo text-xl text-white">
    Business Solutions
  </span>
                                </Link>
                                <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                                    TF Business Solutions offers Fractional CMO, CTO, SDR and web development services
                                    for startups. We help founders scale with sales automation, AI agents, and
                                    expert-led team training without the overhead of full-time hires.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div
                                        className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors duration-300">
                                        <div
                                            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                            <Mail size={18}/>
                                        </div>
                                        <div>
                                            <p className="font-medium">hello@tfbusinesssolutions.com</p>
                                            <p className="font-medium">hello@talhafakhar.com</p>
                                            <p className="text-sm text-slate-400">Get in touch</p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors duration-300">
                                        <div
                                            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                            <Phone size={18}/>
                                        </div>
                                        <div>
                                            <p className="font-medium">+1 506 700 4391</p>
                                            <p className="font-medium">+92 339 8880 386</p>
                                            <p className="text-sm text-slate-400">Talk to an expert</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:col-span-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 ">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-6 relative">
                                            Quick Links
                                        </h4>
                                        <ul className="space-y-3">
                                            {navLinks.map((links,key) => (
                                                <li key={key}>
                                                    <a
                                                        href={links.href}
                                                        className="group flex items-center gap-2 text-slate-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1"
                                                    >
                                                        <span>{links.label}</span>
                                                        <ExternalLink size={14}
                                                                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                                        <div className="flex gap-3">
                                            {socialLinks.map((social, index) => {
                                                const SocialIcon = social.icon;
                                                return (
                                                    <a
                                                        key={index}
                                                        target="_blank"
                                                        href={social.href}
                                                        className="group bg-white/10 px-2 py-2 rounded-lg flex items-center justify-center"
                                                        aria-label={social.label}
                                                    >
                                                        <SocialIcon size={18}
                                                                    className="text-[#afafaf] "/>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="border-t border-white/10 py-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="text-white text-center md:text-left">
                                <p>&copy; 2025 TF Business Solutions. All rights reserved.</p>
                            </div>
                            <button
                                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                                className="group w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                aria-label="Back to top"
                            >
                                <ArrowRight size={20} className="text-white transform -rotate-90 group-hover:scale-110 transition-transform duration-300"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
>>>>>>> 70a25946396756ff9f33423c65e1b48df9f82b63
=======
import React from 'react';
import {ArrowRight, ExternalLink, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter,} from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    const navLinks = [
        {href: '/', label: 'HOME'},
        {href: 'https://tfbusinesssolutions.com/about', label: 'ABOUT'},
        {href: 'https://tfbusinesssolutions.com/contact', label: 'CONTACT'},
        {href: 'https://tfbusinesssolutions.com/startupulse', label: 'OUR COMMUNITY'},
        {href: 'https://tfbusinesssolutions.com/blogs', label: 'BLOGS'},
    ];

    const socialLinks = [
        {icon: Facebook, href: "https://www.facebook.com/tfbusiness.solutions/", label: "Facebook"},
        {icon: Twitter, href: "https://twitter.com/thetalhafakhar", label: "Twitter"},
        {icon: Linkedin, href: "https://www.linkedin.com/company/tfbusinesssolutions/?originalSubdomain=pk#/", label: "LinkedIn"},
        {icon: Instagram, href: "https://www.instagram.com/tfbusiness.solutions/", label: "Instagram"},
    ];

    return (
        <footer className="bg-secondary border-t text-white relative overflow-hidden">
            <div className='container mx-auto px-4'>
                <div>
                    <div className="py-16">
                        <div className="grid lg:grid-cols-4 gap-12">
                            <div className="lg:col-span-2">
                                <Link href="/" className="flex items-center mb-5 group">
                                    <div className="flex">
                                        <div
                                            className="w-10 h-9 transform transition-all duration-300 group-hover:rotate-3">
                                            <Image
                                                src="/assets/logo.webp"
                                                alt="logo"
                                                width={42}
                                                loading="lazy"
                                                height={42}
                                            />
                                        </div>
                                    </div>
                                    <span className="font-logo text-xl text-white">
    Business Solutions
  </span>
                                </Link>
                                <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                                    TF Business Solutions offers Fractional CMO, CTO, SDR and web development services
                                    for startups. We help founders scale with sales automation, AI agents, and
                                    expert-led team training without the overhead of full-time hires.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div
                                        className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors duration-300">
                                        <div
                                            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                            <Mail size={18}/>
                                        </div>
                                        <div>
                                            <p className="font-medium">hello@tfbusinesssolutions.com</p>
                                            <p className="font-medium">hello@talhafakhar.com</p>
                                            <p className="text-sm text-slate-400">Get in touch</p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors duration-300">
                                        <div
                                            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                            <Phone size={18}/>
                                        </div>
                                        <div>
                                            <p className="font-medium">+1 506 700 4391</p>
                                            <p className="font-medium">+92 339 8880 386</p>
                                            <p className="text-sm text-slate-400">Talk to an expert</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:col-span-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 ">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-6 relative">
                                            Quick Links
                                        </h4>
                                        <ul className="space-y-3">
                                            {navLinks.map((links,key) => (
                                                <li key={key}>
                                                    <a
                                                        href={links.href}
                                                        className="group flex items-center gap-2 text-slate-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1"
                                                    >
                                                        <span>{links.label}</span>
                                                        <ExternalLink size={14}
                                                                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                                        <div className="flex gap-3">
                                            {socialLinks.map((social, index) => {
                                                const SocialIcon = social.icon;
                                                return (
                                                    <a
                                                        key={index}
                                                        target="_blank"
                                                        href={social.href}
                                                        className="group bg-white/10 px-2 py-2 rounded-lg flex items-center justify-center"
                                                        aria-label={social.label}
                                                    >
                                                        <SocialIcon size={18}
                                                                    className="text-[#afafaf] "/>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="border-t border-white/10 py-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="text-white text-center md:text-left">
                                <p>&copy; 2025 TF Business Solutions. All rights reserved.</p>
                            </div>
                            <button
                                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                                className="group w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                aria-label="Back to top"
                            >
                                <ArrowRight size={20} className="text-white transform -rotate-90 group-hover:scale-110 transition-transform duration-300"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
>>>>>>> 70a25946396756ff9f33423c65e1b48df9f82b63
