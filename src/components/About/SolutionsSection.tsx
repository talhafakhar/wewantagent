"use client";
import {easeOut, motion, useAnimation} from "framer-motion";
import CountUp from "react-countup";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function SolutionsSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) controls.start("show");
    }, [inView, controls]);
    return (
        <section className="relative  text-white py-24 px-6 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    ref={ref}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="font-medium tracking-wide">02 —</span>
                        <span className="font-medium">Our Reputation</span>
                    </div>

                  <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-4xl md:text-5xl font-semibold leading-tight w-full md:w-1/2">
                          <span className="bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] bg-clip-text text-transparent">Solutions</span> That Drive Results
                      </h2>
                      <p className="text-gray-300 border-l-2 px-2  w-full md:w-1/2">
                          Since 2013, we want agent has evolved from a small team into a global leader in digital innovation.
                          Specializing in website design, custom software, and web + mobile app development, we’ve partnered
                          with industry leaders to deliver extraordinary results.
                      </p>
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        ref={ref}
                        viewport={{ once: true }}
                        className="relative border border-[#00D1B2]/40 rounded-tr-[6rem] p-10 group transition-all duration-500 hover:border-[#00D1B2]"
                    >
                        <div className="text-6xl font-bold"> {inView && <CountUp start={0} end={700} duration={2.5} />}+</div>
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
                        className="relative border border-[#00D1B2]/40 rounded-tr-[6rem] p-10 group transition-all duration-500 hover:border-[#00D1B2]"
                    >
                        <div className="text-6xl font-bold "> {inView && <CountUp start={0} end={200} duration={2} />}+</div>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            Our team of <span className="font-semibold text-white">200+</span> experts and flexible collaboration
                            models ensure tailored solutions that turn challenges into opportunities, providing the utmost
                            convenience and impact for our clients.
                        </p>

                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-700 bg-[#00D1B2]/10 blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
