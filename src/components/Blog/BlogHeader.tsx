import React, { useState} from 'react';
import Image from 'next/image';
import {
    Building2, Calculator,
    ChevronDown, Menu, Stethoscope, X,
} from 'lucide-react';
import Link from 'next/link';
import {AnimatePresence, motion} from "framer-motion";
const BlogNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    return (
        <nav className={`fixed top-4 left-0 w-full z-50 transition-all duration-300 py-2`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-black border border-white rounded-full px-4 sm:px-6 shadow-lg transition-all duration-300">
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
                                <div
                                    className="relative"
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                >
                                    <button className="text-white group-hover:text-gray-200 transition-colors flex items-center">
                                        Services <ChevronDown size={20} />
                                    </button>

                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                                className="absolute top-full left-0 mt-3 bg-black  border  rounded-2xl shadow-lg p-2 w-64"
                                            >
                                                <Link
                                                    href="/services/realestateaiagent"
                                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                                                >
                                                    <Building2 className="text-white w-5 h-5 mt-1" />
                                                    <div>
                                                        <p className="text-white font-semibold text-sm">
                                                            Real Estate AI Agent
                                                        </p>
                                                        <p className="text-white/70 text-xs">
                                                            AI solutions tailored for the real estate industry.
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/healthcareautomation"
                                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                                                >
                                                    <Stethoscope className="text-white w-5 h-5 mt-1" />
                                                    <div>
                                                        <p className="text-white font-semibold text-sm">
                                                            Health Care AI Agent
                                                        </p>
                                                        <p className="text-white/70 text-xs">
                                                            Streamline healthcare processes with AI automation.
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/bookkeepingai"
                                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                                                >
                                                    <Calculator className="text-white w-5 h-5 mt-1" />
                                                    <div>
                                                        <p className="text-white font-semibold text-sm">
                                                            Bookkeeping AI Agent
                                                        </p>
                                                        <p className="text-white/70 text-xs">
                                                            Automate your bookkeeping tasks with AI.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

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
                        <div className="bg-black backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl">
                            <nav className="flex flex-col space-y-2">
                                <button
                                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                    className="flex items-center justify-between text-white hover:text-purple-200 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                                >
                                    <span>Services</span>
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform ${
                                            isMobileServicesOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isMobileServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="ml-4 mt-1 space-y-2"
                                        >
                                            <Link
                                                href="/services/realestateaiagent"
                                                className="flex items-center gap-2 text-white/80 hover:text-white text-sm py-1.5"
                                            >
                                                <Building2 size={16} /> Real Estate AI Agent
                                            </Link>
                                            <Link
                                                href="/services/healthcareautomation"
                                                className="flex items-center gap-2 text-white/80 hover:text-white text-sm py-1.5"
                                            >
                                                <Stethoscope size={16} /> Health Care AI Agent
                                            </Link>
                                            <Link
                                                href="/services/bookkeepingai"
                                                className="flex items-center gap-2 text-white/80 hover:text-white text-sm py-1.5"
                                            >
                                                <Calculator size={16} /> Bookkeeping AI Agent
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

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
        </nav>    );
};
export default BlogNavbar
