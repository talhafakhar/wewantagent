import React, { useState} from 'react';
import Image from 'next/image';
import {
    Menu, X,
} from 'lucide-react';
import Link from 'next/link';
import {AnimatePresence, motion} from "framer-motion";
const BlogNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
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
    )

};
export default BlogNavbar
