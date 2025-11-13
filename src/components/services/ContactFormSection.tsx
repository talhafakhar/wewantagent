"use client";

import { useState } from "react";
import helpAnimation from "@/assets/lottie/contact.json";
import Lottie from "lottie-react";
import { easeOut, motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };

    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [modalMsg, setModalMsg] = useState<string>("✅ Message sent successfully!");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        industry: "",
        companySize: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.ok) {
                setModalMsg(data.message || "✅ Message sent successfully!");
                setIsSuccess(true);
            } else {
                setModalMsg(data.message || "❌ Something went wrong.");
                setIsSuccess(false);
            }
        } catch (error) {
            console.error(error);
            setModalMsg("❌ Failed to submit the form.");
            setIsSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    const handleBackToForm = () => {
        setIsSuccess(false);
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            companyName: "",
            industry: "",
            companySize: "",
            message: "",
        });
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2 className="text-4xl md:text-5xl text-white text-center font-semibold leading-tight">
                    Get Your{" "}
                    <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
             Custom AI Agent Roadmap
            </span>
                </h2>
                <p className="mt-6 text-gray-300 text-center max-w-4xl mx-auto">
                    Share your automation challenge below. We&#39;ll analyze your workflow and share a custom roadmap showing how AI agents can transform your operations
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center mt-20 gap-10">
                <div className="w-full md:w-1/2">
                    <Lottie
                        animationData={helpAnimation}
                        loop={true}
                        className="w-[400px] h-[400px]"
                    />
                </div>

                <div className="relative w-full md:w-1/2">
                    <div className="absolute inset-0 transform rotate-6 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl"></div>
                    <AnimatePresence mode="wait">
                        {!isSuccess ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: easeOut }}
                                className="relative bg-white/90 rounded-2xl p-10 z-10 shadow-lg"
                            >
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Please Write Your Subject, Message & Notify Your Email.
                                </h2>

                                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-medium text-gray-700">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="Type your full name"
                                                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-medium text-gray-700">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Type your email"
                                                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-medium text-gray-700">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter your phone number"
                                                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-medium text-gray-700">
                                                Company Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                placeholder="Type your company name"
                                                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-medium text-gray-700">
                                                Industry <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                name="industry"
                                                value={formData.industry}
                                                onChange={handleChange}
                                                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none bg-white"
                                                required
                                            >
                                                <option value="">Select Industry</option>
                                                <option value="real-estate">Real Estate</option>
                                                <option value="healthcare">Healthcare</option>
                                                <option value="accounting">Accounting & Bookkeeping</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block font-medium text-gray-700">
                                                Company Size <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                name="companySize"
                                                value={formData.companySize}
                                                onChange={handleChange}
                                                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none bg-white"
                                                required
                                            >
                                                <option value="">Select Size</option>
                                                <option value="solo">Solo</option>
                                                <option value="2-10">2–10</option>
                                                <option value="11-50">11–50</option>
                                                <option value="51-200">51–200</option>
                                                <option value="200+">200+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-medium text-gray-700">
                                            What do you want to automate? <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Describe your automation needs"
                                            rows={5}
                                            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3 rounded-md border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
                                    >
                                        {loading ? "Submitting..." : "Send Message"}
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: easeOut }}
                                className="relative bg-white/90 rounded-2xl p-10 z-10 shadow-lg flex flex-col items-center justify-center text-center"
                            >
                                <h3 className="text-2xl font-bold text-green-600 mb-4">
                                    {modalMsg}
                                </h3>
                                <button
                                    onClick={handleBackToForm}
                                    className="px-6 py-2 bg-black text-white rounded-md hover:scale-105 transition"
                                >
                                    OK
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
