"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function OriginStory() {
    return (
        <section className="relative   text-white py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <p className="font-medium text-sm tracking-wide">
                        01 — Origin Story
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                        Birth of a{" "}
                        <span className="bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] bg-clip-text text-transparent">
                            We Want Agent
                        </span>
                    </h2>

                    <p className="text-gray-300 leading-relaxed">
                        In 2013, the world was on the edge of a tech revolution—AI was getting
                        smarter, virtual reality was reshaping experiences, and global
                        connectivity was shrinking distances. Amid this change, three
                        classmates saw an opportunity to empower businesses with innovative
                        tech solutions.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        They noticed outdated systems holding companies back and realized
                        custom software was no longer a luxury but a necessity. Their vision
                        was to create technology that adapts, evolves, and drives growth—
                        solutions so seamless that they feel like an extension of the user,
                        pushing the boundaries of what’s possible.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="w-full max-w-md">
                        <Image
                            src="/assets/svg/about/birthofai.svg"
                            alt="Origin Story"
                            width={300}
                            height={400}
                            className="transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
