import React from "react";
import {ArrowRight} from "lucide-react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Image from "next/image";
const steps = [
    {
        title: "Business analysis",
        desc: "Assess needs and tech setup, define requirements, and determine AI investment feasibility.",
    },
    {
        title: "Initial data analysis",
        desc: "Map and evaluate data sources, including corporate assets and public databases.",
    },
    {
        title: "Solution design",
        desc: "Choose tech stack, design architecture, create an implementation plan, and provide POC if needed.",
    },
    {
        title: "Model integration and deployment",
        desc: "Integrate trained model into software, deploy it on-premise or in the cloud.",
    },
    {
        title: "Building the AI solution",
        desc: "Preprocess data, set evaluation criteria, and train AI models using various learning methods.",
    },
    {
        title: "Support",
        desc: "Offer ongoing support, maintenance, updates, and retrain models with new data.",
    },
];

function TimelineItem({title, desc, index}:any) {
    const controls = useAnimation();
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.3});
    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    const variants = {
        hidden: {opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.6, delay: index * 0.3},
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="mb-12 last:mb-0"
        >
            <h3 className="font-semibold text-gray-100 text-lg">{title}</h3>
            <p className="text-gray-400 mt-1 text-sm leading-relaxed">{desc}</p>
        </motion.div>
    );
}

export default function MethodicalApproach() {
    return (
        <section className="relative  border border-gray-700 max-w-7xl mx-auto my-16  overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="sticky top-0 p-8 flex flex-col justify-start">
                    <h2 className="text-3xl md:text-4xl font-bold text-white ">
                        Our methodical approach to AI development
                    </h2>
                    <div>
                        <button
                            aria-label="Get in Touch"
                            className="mt-8 inline-flex items-center gap-2 rounded border  px-5 py-2 text-white border-white"
                        >
                            Get in Touch <ArrowRight size={16}/>
                        </button>
                    </div>
                    <div className="mt-10">
                        <Image
                            src="/assets/svg/services/robotFly.svg"
                            alt="Methodical Approach"
                            width={300}
                            height={300}
                            className="mx-auto"
                        />
                    </div>
                </div>
                <div className="relative py-6">
                        {steps.map((step, i) => (
                            <TimelineItem
                                key={step.title}
                                index={i}
                                title={step.title}
                                desc={step.desc}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
}
