import React, {useState} from 'react';
import Image from "next/image";
import {
    Clock,
    Facebook,
    Instagram,
    Linkedin,
    Map,
    Menu,
    PhoneCall,
    Send,
    X
} from "lucide-react";


import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";

const ContactForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalMsg, setModalMsg] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
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
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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
            <div className="bg-gray-100">
                <nav className={`pt-4 px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-300`}>
                    <div className="max-w-7xl mx-auto px-4">
                        <div
                            className={`bg-black  border border-white rounded-full px-4 sm:px-6 shadow-lg transition-all duration-300`}>
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
                                        <Link href="/services/realestateaiagent" className="text-white hover:text-gray-200">
                                            Real Estate
                                        </Link>
                                        <Link href="/services/healthcareautomation" className="text-white hover:text-gray-200">
                                            Healthcare
                                        </Link>
                                        <Link href="/services/bookkeepingai" className="text-white hover:text-gray-200">
                                            Bookkeeping
                                        </Link>
                                        <Link href="/automationexpert" className="text-white hover:text-gray-200">
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
                                                initial={{rotate: -90, opacity: 0}}
                                                animate={{rotate: 0, opacity: 1}}
                                                exit={{rotate: 90, opacity: 0}}
                                                transition={{duration: 0.2}}
                                            >
                                                <X className="w-6 h-6"/>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="menu"
                                                initial={{rotate: 90, opacity: 0}}
                                                animate={{rotate: 0, opacity: 1}}
                                                exit={{rotate: -90, opacity: 0}}
                                                transition={{duration: 0.2}}
                                            >
                                                <Menu className="w-6 h-6"/>
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
                                initial={{opacity: 0, height: 0}}
                                animate={{opacity: 1, height: "auto"}}
                                exit={{opacity: 0, height: 0}}
                                transition={{duration: 0.3}}
                                className="lg:hidden mt-2 mx-4"
                            >
                                <div
                                    className="bg-black backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl">
                                    <nav className="flex flex-col space-y-2">

                                        <Link href="/services/realestateaiagent"                                     className="text-white hover:text-purple-200 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                                        >
                                            Real Estate
                                        </Link>
                                        <Link href="/services/healthcareautomation"                                     className="text-white hover:text-purple-200 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                                        >
                                            Healthcare
                                        </Link>
                                        <Link href="/services/bookkeepingai"                                     className="text-white hover:text-purple-200 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                                        >
                                            Bookkeeping
                                        </Link>

                                        <Link
                                            href="/automationexpert"
                                            className="text-white hover:text-purple-200 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                                        >
                                            About
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="text-white hover:text-purple-200 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                                        >
                                            Contact
                                        </Link>
                                        <Link
                                            href="#"
                                            className="mt-3 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold text-center hover:bg-gray-100 transition-all"
                                        >
                                            Let&#39;s Collaborate
                                        </Link>
                                    </nav>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
                <div className="max-w-7xl mx-auto px-4 py-10">
                    <div className="flex justify-center items-center">
                        <div className="bg-white rounded-3xl shadow-2xl p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                            Let&#39;s Build Your AI Agent
                                        </h1>
                                        <p className="text-gray-600 text-base md:text-lg mb-12 leading-relaxed">
                                            Share your automation challenge with us. We&#39;ll map out exactly how AI
                                            agents can transform your workflow, eliminate repetitive tasks, and give you
                                            time back.
                                        </p>

                                        <ul className="space-y-4 mb-12">
                                            <li className="flex items-start gap-3">
                                                <Clock className="w-5 h-5 text-gray-900 mt-1"/>
                                                <span className="text-gray-900 text-lg font-semibold">
      We review your automation needs within 24 hours
    </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <PhoneCall className="w-5 h-5 text-gray-900 mt-1"/>
                                                <span className="text-gray-900 text-lg font-semibold">
      Schedule a free 30-minute strategy call
    </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Map className="w-5 h-5 text-gray-900 mt-1"/>
                                                <span className="text-gray-900 text-lg font-semibold">
      Receive a custom automation roadmap for your business
    </span>
                                            </li>
                                        </ul>


                                        <button
                                            className="bg-black text-white px-6 py-2 rounded-full font-medium text-base flex items-center gap-4 hover:bg-gray-800 transition-colors">
                                            Schedule a Call
                                            <div className="bg-white p-2 rounded-full">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334"
                                                        stroke="black" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-gray-100 rounded-2xl border p-8 md:p-10">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-900 text-sm font-medium mb-3">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your first name..."
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-900 text-sm font-medium mb-3">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your last name..."
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-900 text-sm font-medium mb-3">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email address..."
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-900 text-sm font-medium mb-3">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Enter your phone number..."
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-900 text-sm font-medium mb-3">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your company name..."
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-900 text-sm font-medium mb-3">
                                                    Industry
                                                </label>
                                                <select
                                                    name="industry"
                                                    value={formData.industry}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                                                    required
                                                >
                                                    <option value="">Select your industry...</option>
                                                    <option value="real-estate">Real Estate</option>
                                                    <option value="healthcare">Healthcare</option>
                                                    <option value="accounting">Accounting & Bookkeeping</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Company Size */}
                                        <div>
                                            <label className="block text-gray-900 text-sm font-medium mb-3">
                                                Company Size
                                            </label>
                                            <select
                                                name="companySize"
                                                value={formData.companySize}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                                                required
                                            >
                                                <option value="">Select company size...</option>
                                                <option value="solo">Solo</option>
                                                <option value="2-10">2–10</option>
                                                <option value="11-50">11–50</option>
                                                <option value="51-200">51–200</option>
                                                <option value="200+">200+</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-gray-900 text-sm font-medium mb-3">
                                                What do you want to automate?
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Describe what you’d like to automate..."
                                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none text-sm"
                                                rows={5}
                                                required
                                            />
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium text-base flex items-center justify-between gap-3 hover:bg-gray-800 transition-colors"
                                            >
                                                {loading ? 'Submitting...' : 'Submit message'}
                                                {!loading && <Send className="w-5 h-5"/>}
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {showModal && (
                    <div className="fixed inset-0 flex justify-center bg-black/50 z-[9999]">
                        <div className="mt-20">
                            <div className="bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-sm text-center">
                                <p
                                    className={`mb-4 text-lg font-semibold ${
                                        isSuccess ? 'text-green-600' : 'text-red-600'
                                    }`}
                                >
                                    {modalMsg}
                                </p>
                                <button
                                    onClick={handleModalClose}
                                    className="bg-black text-white px-4 py-1 rounded hover:scale-105 transition"
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
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