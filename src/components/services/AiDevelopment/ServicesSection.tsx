"use client";
import React from "react";
import {easeOut, motion} from "framer-motion";
import { Workflow, Boxes, Brain, BarChart3, PenTool } from "lucide-react";
const ServicesSection = () => {
    const container = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };
    const services = [
        { title: "Custom AI software development", desc: "Turn your ideas into intelligent, high-impact solutions with our custom AI development services. From early prototyping and feasibility testing to MVP delivery, we build tailor-made AI products ready to integrate, scale fast, and make a real mark in your market.", icon: Workflow },
        { title: "AI-powered apps", desc: "We deploy AI-powered mobile and web applications with embedded NLP, computer vision, and neural network engines — arming your business with the ability to anticipate user needs, and the agility to adapt to changing market demands.", icon: Boxes },
        { title: "Strategic AI consulting", desc: "Chart your course with clarity. We map real-world AI strategies, match the right models to your goals, design clean data pipelines, and build validation frameworks that de-risk your investments.", icon: Brain },
        { title: "AI & ML audit", desc: "Our experts audit your AI models for bias, model drift, data leakage, and suboptimal feature selection. We deliver corrective action plans, re-tune hyperparameters, and strengthen model accuracy and generalization.", icon: BarChart3 },
        { title: "MLOps & AI infrastructure", desc: "We implement production-grade MLOps pipelines with automated model deployment, real-time monitoring, data versioning, and retraining triggers — keeping your AI operational, secure, and adaptable at scale.", icon: PenTool },
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto text-white px-4">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                >

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >

                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                            Get comprehensive AI development services
                        </h2>
                        <p className="mt-4 text-gray-300 ">
                            We’re not in this for flashy demos or science fair prototypes. We build AI tools that solve real business problems, work in production, and scale with you.                        </p>
                    </motion.div>
                    <div className="flex justify-center">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="">
                            <div className="grid gap-6  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {services.map((service, i) => {
                                    const Icon = service.icon;
                                    return (
                                        <div
                                            key={i}
                                            className={`relative overflow-hidden  border border-white/10 
              bg-gradient-to-br from-white/10 via-white/5 to-transparent 
              backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl 
              hover:scale-[1.03] transition-all duration-300 group
              ${i === 1 ? 'col-span-1 sm:col-span-2' : ''}`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                                            {/* Animated soft glow */}
                                            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#00D1B2]/20 via-[#FFB347]/20 to-[#FF416C]/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

                                            {/* Content */}
                                            <div className="relative z-10">
                                                <Icon className="w-10 h-10 mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                                                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                                                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className=""
                        >

                        </motion.div>


                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
