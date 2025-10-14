"use client";
import {easeOut, motion, useAnimation} from "framer-motion";
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
                        <span className="font-medium">What Drives Us</span>
                    </div>

                  <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-4xl md:text-5xl font-semibold w-full md:w-1/2">
                          <span className="bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] bg-clip-text text-transparent">Custom Built</span>  Never Template Based
                      </h2>
                      <p className="text-gray-300 border-l-2 px-2  w-full md:w-1/2">
                          Every business operates differently. Your CRM setup, communication style, and workflow quirks matter. We don&#39;t sell pre-packaged solutions that force you to adapt. Our automation expert team builds from scratch, integrating with your existing tools and matching your team&#39;s actual process. Real customization means your AI works like a trained employee who knows exactly how you operate, not a rigid system demanding you change everything
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
                        className="relative border border-primary rounded-tr-[6rem] p-10 group transition-all duration-500"
                    >
                        <div className="text-5xl font-bold"> Honest Timelines Always </div>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            We tell you exactly how long development takes and never overpromise speed. Rush jobs create buggy automation. We&#39;d rather deliver working solutions on realistic schedules than fast failures that waste your investment and break trust completely
                        </p>

                        <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-700 bg-[#00D1B2]/10 blur-2xl" />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative border border-primary rounded-tr-[6rem] p-10 group transition-all duration-500"
                    >
                        <div className="text-5xl font-bold "> Transparent Pricing Upfront</div>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            You know every cost before we start. No surprise fees, no scope creep charges, no hidden maintenance bills. Our automation expert team breaks down exactly what you&#39;re paying for and why. Budget clarity matters as much as technical clarity always
                        </p>

                        <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-700 bg-[#00D1B2]/10 blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
