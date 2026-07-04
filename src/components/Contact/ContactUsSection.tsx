import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import {
    Facebook,
    Instagram,
    Linkedin,
    Send
} from "lucide-react";


import Link from "next/link";
import CustomSelect from "@/components/ui/CustomSelect";

const INDUSTRY_OPTIONS = [
    { value: "real-estate", label: "Real Estate" },
    { value: "healthcare", label: "Healthcare" },
    { value: "accounting", label: "Accounting & Bookkeeping" },
    { value: "other", label: "Other" },
];

const COMPANY_SIZE_OPTIONS = [
    { value: "solo", label: "Solo" },
    { value: "2-10", label: "2–10" },
    { value: "11-50", label: "11–50" },
    { value: "51-200", label: "51–200" },
    { value: "200+", label: "200+" },
];

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [modalMsg, setModalMsg] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [localTime, setLocalTime] = useState<string>('');
    const sectionRef = useRef<HTMLElement>(null);
    const [formData, setFormData] = useState({

        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        industry: '',
        companySize: '',
        message: '',
    });

    // Live local time for the office, matching the reference design's ticking clock
    useEffect(() => {
        const update = () =>
            setLocalTime(
                new Date().toLocaleTimeString("en-GB", {
                    timeZone: "Asia/Karachi",
                    hour12: true,
                })
            );
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    // Scroll-driven parallax for the ambient background blobs, same as the homepage hero
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const blobs = Array.from(
            section.querySelectorAll<HTMLElement>("[data-parallax]")
        );

        const onScroll = () => {
            const vh = window.innerHeight;
            const rect = section.getBoundingClientRect();
            const center = rect.top + rect.height / 2 - vh / 2;
            blobs.forEach((blob) => {
                const speed = parseFloat(blob.dataset.parallax || "0");
                blob.style.transform = `translate3d(0, ${(-center * speed).toFixed(1)}px, 0)`;
            });
        };

        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        window.addEventListener("resize", onScroll, {passive: true});
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/contact/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.ok) {
                setModalMsg(data.message || '✅ Form submitted successfully!');
                setIsSuccess(true);
                setShowModal(true);
            } else {
                setModalMsg(data.message || '❌ Something went wrong.');
                setIsSuccess(false);
                setShowModal(true);
            }
        } catch (error) {
            console.error(error);
            setModalMsg('❌ Failed to submit the form.');
            setIsSuccess(false);
            setShowModal(true);
        } finally {
            setLoading(false);
        }
    };
    const handleModalClose = () => {
        setShowModal(false);
        if (isSuccess) {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                companyName: '',
                industry: '',
                companySize: '',
                message: '',
            });
        }
    }

    return (
        <div>
            <section
                ref={sectionRef}
                className="relative w-full overflow-hidden bg-[#07080c] px-6 pt-[100px] pb-[60px]"
            >
                {/* ambient gradient blobs — same animated glow as the homepage hero */}
                <div
                    data-parallax="0.14"
                    className="pointer-events-none absolute -left-[8%] -top-[10%] h-[620px] w-[620px] rounded-full blur-[40px]"
                    style={{
                        background: "radial-gradient(circle, rgba(56,150,255,0.55), transparent 65%)",
                        animation: "contactFloatA 14s ease-in-out infinite",
                    }}
                />
                <div
                    data-parallax="0.22"
                    className="pointer-events-none absolute -bottom-[15%] -right-[10%] h-[560px] w-[560px] rounded-full blur-[50px]"
                    style={{
                        background: "radial-gradient(circle, rgba(70,130,255,0.34), transparent 65%)",
                        animation: "contactFloatB 17s ease-in-out infinite",
                    }}
                />
                <div
                    data-parallax="0.1"
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] rounded-full blur-[60px]"
                    style={{
                        background: "radial-gradient(circle, rgba(94,168,255,0.28), transparent 70%)",
                        animation: "contactFloatC 20s ease-in-out infinite",
                        translate: "-50% -50%",
                    }}
                />

                {/* faint grid pattern */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                        maskImage:
                            "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 75%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 75%)",
                    }}
                />

                <div className="relative z-[2] mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
                        {/* left column: heading + contact info */}
                        <div className="flex flex-col justify-center">
                            <h1 className="font-['Space_Grotesk'] text-6xl font-semibold leading-none tracking-[-0.03em] text-white sm:text-7xl">
                                Let&#39;s{" "}
                                <span className="bg-gradient-to-r from-[#8FCBFF] via-[#5EA8FF] to-[#3E7BFF] bg-clip-text text-transparent">
                                    talk!
                                </span>
                            </h1>

                            <div className="mt-16 border-t border-white/10 pt-6">
                                <p className="text-[15px] text-[#5EA8FF]">Office:</p>
                                <p className="mt-2 text-[15px] font-medium leading-relaxed text-[#eceef4]">
                                    Lahore
                                    <br/>
                                    Pakistan
                                    <br/>
                                    Local time: {localTime}
                                </p>
                            </div>

                            <div className="mt-8 border-t border-white/10 pt-6">
                                <p className="text-[15px] text-[#5EA8FF]">Email:</p>
                                <a
                                    href="mailto:hello@wewantagent.com"
                                    className="mt-2 block text-3xl font-medium text-white transition-colors hover:text-[#5EA8FF] sm:text-4xl"
                                >
                                    hello@wewantagent.com
                                </a>
                            </div>

                            <div className="mt-8 border-t border-white/10 pt-6">
                                <p className="text-[15px] text-[#5EA8FF]">Phone:</p>
                                <a
                                    href="tel:+923000000000"
                                    className="mt-2 block text-3xl font-medium text-white transition-colors hover:text-[#5EA8FF] sm:text-4xl"
                                >
                                    +92 300 0000000
                                </a>
                            </div>
                        </div>

                        {/* right column: form */}
                        <div className="rounded-2xl border border-white/[0.12] *:first-letter:bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-[#c2c5d2]">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Your first name..."
                                            className="w-full rounded-lg border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-[#6b6f80] focus:border-[#5EA8FF]/60 focus:outline-none focus:ring-2 focus:ring-[#5EA8FF]/30"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-[#c2c5d2]">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Your last name..."
                                            className="w-full rounded-lg border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-[#6b6f80] focus:border-[#5EA8FF]/60 focus:outline-none focus:ring-2 focus:ring-[#5EA8FF]/30"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-[#c2c5d2]">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="username@example.com"
                                            className="w-full rounded-lg border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-[#6b6f80] focus:border-[#5EA8FF]/60 focus:outline-none focus:ring-2 focus:ring-[#5EA8FF]/30"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-[#c2c5d2]">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number..."
                                            className="w-full rounded-lg border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-[#6b6f80] focus:border-[#5EA8FF]/60 focus:outline-none focus:ring-2 focus:ring-[#5EA8FF]/30"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-[#c2c5d2]">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            placeholder="Enter your company name..."
                                            className="w-full rounded-lg border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-[#6b6f80] focus:border-[#5EA8FF]/60 focus:outline-none focus:ring-2 focus:ring-[#5EA8FF]/30"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-[#c2c5d2]">
                                            Industry
                                        </label>
                                        <CustomSelect
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleSelectChange}
                                            options={INDUSTRY_OPTIONS}
                                            placeholder="Select your industry..."
                                            theme="dark"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Company Size */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-[#c2c5d2]">
                                        Company Size
                                    </label>
                                    <CustomSelect
                                        name="companySize"
                                        value={formData.companySize}
                                        onChange={handleSelectChange}
                                        options={COMPANY_SIZE_OPTIONS}
                                        placeholder="Select company size..."
                                        theme="dark"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-[#c2c5d2]">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Hi team! I'm reaching out for..."
                                        className="w-full resize-none rounded-lg border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-[#6b6f80] focus:border-[#5EA8FF]/60 focus:outline-none focus:ring-2 focus:ring-[#5EA8FF]/30"
                                        rows={4}
                                        required
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="font-['Space_Grotesk'] flex items-center justify-between gap-3 rounded-full bg-[#5EA8FF] px-6 py-2.5 text-sm font-semibold text-[#07080c] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(94,168,255,0.5)] disabled:opacity-60"
                                    >
                                        {loading ? 'Submitting...' : 'Submit'}
                                        {!loading && <Send className="h-4 w-4"/>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {showModal && (
                    <div className="fixed inset-0 z-[9999] flex justify-center bg-black/60">
                        <div className="mt-20">
                            <div className="w-[90%] max-w-sm rounded-xl border border-white/10 bg-[#0d0e14] p-6 text-center shadow-2xl">
                                <p
                                    className={`mb-4 text-lg font-semibold ${
                                        isSuccess ? 'text-green-400' : 'text-red-400'
                                    }`}
                                >
                                    {modalMsg}
                                </p>
                                <button
                                    onClick={handleModalClose}
                                    className="rounded-full bg-[#5EA8FF] px-4 py-1.5 text-sm font-semibold text-[#07080c] transition hover:scale-105"
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <style jsx>{`
                    @keyframes contactFloatA {
                        0%,
                        100% {
                            translate: 0 0;
                            scale: 1;
                        }
                        25% {
                            translate: 26% 18%;
                            scale: 1.25;
                        }
                        50% {
                            translate: 14% -32%;
                            scale: 0.8;
                        }
                        75% {
                            translate: -20% -8%;
                            scale: 1.15;
                        }
                    }
                    @keyframes contactFloatB {
                        0%,
                        100% {
                            translate: 0 0;
                            scale: 1;
                        }
                        25% {
                            translate: -28% -20%;
                            scale: 0.78;
                        }
                        50% {
                            translate: -16% 26%;
                            scale: 1.3;
                        }
                        75% {
                            translate: 22% 10%;
                            scale: 0.9;
                        }
                    }
                    @keyframes contactFloatC {
                        0%,
                        100% {
                            translate: -50% -50%;
                            scale: 1;
                            opacity: 0.7;
                        }
                        33% {
                            translate: calc(-50% + 24%) calc(-50% - 24%);
                            scale: 1.3;
                            opacity: 0.95;
                        }
                        66% {
                            translate: calc(-50% - 24%) calc(-50% + 18%);
                            scale: 0.75;
                            opacity: 0.5;
                        }
                    }
                `}</style>
            </section>
            <footer className="text-white bg-black relative mt-10">
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
                                    We Want Agent builds custom AI automation solutions for real estate, healthcare, and accounting industries. From voice AI agents to workflow automation, we help businesses eliminate repetitive tasks and focus on growth
                                </p>
                                <div className="flex space-x-4 pt-4">
                                    <Link href="#" className="text-gray-400 hover:text-white">
                                        <Facebook className="w-5 h-5" />
                                    </Link>
                                    <Link href="#" className="text-gray-400 hover:text-white">
                                        <Linkedin className="w-5 h-5" />
                                    </Link>
                                    <Link href="#" className="text-gray-400 hover:text-white">
                                        <Instagram className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
                                Services
                            </p>
                            <div className="flex flex-col space-y-2">
                                {[
                                    { name: "AI Agent for Real Estate", href: "/services/realestateaiagent" },
                                    { name: "AI Agent for Healthcare", href: "/services/healthcareautomation" },
                                    { name: "Accounting AI Agent", href: "/services/bookkeepingai" },
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
                                Quick Links
                            </p>
                            <div className="flex flex-col space-y-2">
                                <Link href="/automationexpert" className="text-sm hover:text-white transition duration-150">
                                    About Us
                                </Link>
                                <Link href="/contact" className="text-sm hover:text-white transition duration-150">
                                    Contact Us
                                </Link>
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
        </div>
    );
}
export default ContactForm;