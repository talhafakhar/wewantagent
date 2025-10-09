"use client";
import {easeOut, motion} from "framer-motion";
export default function VisionAndMission() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };
    return (
        <section className="relative  text-white py-24 px-6 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="font-medium tracking-wide">04 —</span>
                        <span className="font-medium">Our Reputation</span>
                    </div>

                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
 Bringing Our Mission to Life with a Vision
                        </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative border border-[#00D1B2]/40 rounded-tr-[6rem] p-10 group transition-all duration-500 hover:border-[#00D1B2]"
                    >
                        <div className="text-6xl font-bold"> Our Mission</div>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            With over <span className="font-semibold text-white">700</span> software products delivered and{" "}
                            <span className="font-semibold text-white">$300 million</span> raised in funding for our clients through
                            our expertise, we are committed to pushing boundaries and achieving remarkable outcomes.
                        </p>

                        <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-700 bg-[#00D1B2]/10 blur-2xl" />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative border border-[#00D1B2]/40 rounded-tr-[6rem] p-10 group transition-all duration-500 border-[#00D1B2]"
                    >
                        <div className="text-6xl font-bold "> Our Vision
                        </div>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            Our team of <span className="font-semibold text-white">200+</span> experts and flexible collaboration
                            models ensure tailored solutions that turn challenges into opportunities, providing the utmost
                            convenience and impact for our clients.
                        </p>

                        <div className="absolute inset-0 rounded-[2rem] opacity-100 transition duration-700 bg-[#00D1B2]/10 blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
