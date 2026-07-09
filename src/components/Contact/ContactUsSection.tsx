"use client";
import React, {useEffect, useRef, useState} from 'react';
import {Send} from "lucide-react";
import {easeOut, motion} from "framer-motion";

import CustomSelect from "@/components/ui/CustomSelect";
import FooterSection from "@/components/Footer/footer";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.3},
    },
};

const itemLeft = {
    hidden: {opacity: 0, x: -40, scale: 0.98, filter: "blur(4px)"},
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {duration: 0.8, ease: easeOut},
    },
};

const itemRight = {
    hidden: {opacity: 0, x: 40, scale: 0.98, filter: "blur(4px)"},
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {duration: 0.8, ease: easeOut},
    },
};

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
            <motion.section
                ref={sectionRef}
                initial={{scale: 1.05, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 2, ease: "easeOut"}}
                className="relative w-full overflow-hidden bg-[#07080c] px-6 pt-[100px] pb-[60px]"
            >
                {/* ambient gradient blobs — same animated glow as the homepage hero */}
                <div
                    data-parallax="0.14"
                    className="pointer-events-none absolute -left-[8%] -top-[10%] h-[620px] w-[620px] rounded-full blur-[40px]"
                    style={{
                        background: "radial-gradient(circle, rgba(242,193,78,0.55), transparent 65%)",
                        animation: "contactFloatA 14s ease-in-out infinite",
                    }}
                />
                <div
                    data-parallax="0.22"
                    className="pointer-events-none absolute -bottom-[15%] -right-[10%] h-[560px] w-[560px] rounded-full blur-[50px]"
                    style={{
                        background: "radial-gradient(circle, rgba(79,209,165,0.34), transparent 65%)",
                        animation: "contactFloatB 17s ease-in-out infinite",
                    }}
                />
                {/* <div
                    data-parallax="0.1"
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] rounded-full blur-[60px]"
                    style={{
                        background: "radial-gradient(circle, rgba(242,193,78,0.55), transparent 70%)",
                        animation: "contactFloatC 20s ease-in-out infinite",
                        translate: "-50% -50%",
                    }}
                /> */}

                {/* faint grid pattern */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                        maskImage:
                            "radial-gradient(ellipse 80% 70% at 50% 40%, #000 20%, transparent 50%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 70% at 50% 40%, #000 20%, transparent 50%)",
                    }}
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative z-[2] mx-auto max-w-7xl"
                >
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
                        {/* left column: heading + contact info */}
                        <div className="flex flex-col justify-center">
                            <motion.h1
                                variants={itemLeft}
                                className="font-heading text-6xl font-semibold leading-none tracking-[-0.03em] bg-gradient-to-r from-white via-[#f2c14e] to-[#4fd1a5]. bg-clip-text text-transparent sm:text-7xl"
                            >
                                Let&#39;s Connect & Build Your Agent!
                            </motion.h1>

                            <motion.div variants={itemLeft} className="mt-16 border-t border-white/10 pt-6">
                                <p className="text-[15px] text-[#5EA8FF]">Office:</p>
                                <p className="mt-2 text-[15px] font-medium leading-relaxed text-[#eceef4]">
                                    Lahore
                                    <br/>
                                    Pakistan
                                    <br/>
                                    Local time: {localTime}
                                </p>
                            </motion.div>

                            <motion.div variants={itemLeft} className="mt-8 border-t border-white/10 pt-6">
                                <p className="text-[15px] text-[#5EA8FF]">Email:</p>
                                <a
                                    href="mailto:hello@wewantagent.com"
                                    className="mt-2 block text-3xl font-medium text-white transition-colors hover:text-[#5EA8FF] sm:text-base"
                                >
                                    hello@wewantagent.com
                                </a>
                            </motion.div>

                            <motion.div variants={itemLeft} className="mt-8 border-t border-white/10 pt-6">
                                <p className="text-[15px] text-[#5EA8FF]">Phone:</p>
                                <a
                                    href="tel:+923000000000"
                                    className="mt-2 block text-3xl font-medium text-white transition-colors hover:text-[#5EA8FF] sm:text-base"
                                >
                                    +92 300 0000000
                                </a>
                            </motion.div>
                        </div>

                        {/* right column: form */}
                        <motion.div
                            variants={itemRight}
                            className="relative left-12 rounded-2xl border  border-white/[0.12] *:first-letter:bg-white/[0.03] p-6 backdrop-blur-sm md:p-8 "
                        >
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
                                        className="font-heading flex items-center justify-between gap-3 rounded-full bg-[rgba(79,209,165,0.34)] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(79,209,165,0.34)] disabled:opacity-60"
                                    >
                                        {loading ? 'Submitting...' : 'Submit'}
                                        {!loading && <Send className="h-4 w-4"/>}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>

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
            </motion.section>
            <FooterSection/>
        </div>
    );
}
export default ContactForm;
