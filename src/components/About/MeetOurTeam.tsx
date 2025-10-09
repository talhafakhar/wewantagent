"use client";
import { motion ,easeOut} from "framer-motion";
import Image from "next/image";

const team = [
    {
        name: "Ayesha Khan",
        role: "Chief Executive Officer",
        image: "/assets/home/user.jpg",
    },
    {
        name: "Ali Raza",
        role: "Head of Design",
        image: "/assets/home/user.jpg",
    },
    {
        name: "Sara Malik",
        role: "Lead Developer",
        image: "/assets/home/user.jpg",
    },
];

export default function MeetOurTeam() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.8, ease: easeOut },
        }),
    };

    return (
        <section className="relative  text-white py-24 px-6  overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <p className=" font-medium  tracking-wide mb-2">
                        03 — Our Team
                    </p>
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Meet Our{" "}
                        <span className="bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] bg-clip-text text-transparent">
              Creative Minds
            </span>
                    </h2>
                    <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                        A passionate team of visionaries, creators, and problem-solvers
                    </p>
                </motion.div>
                <div className="mt-16 grid gap-2 sm:grid-cols-2 md:grid-cols-3 place-items-center">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className=" rounded-tr-[4rem] border shadow-[0_0_30px_rgba(0,209,178,0.3)]"
                        >
                            <div className="rounded-2xl  p-10 h-full flex flex-col items-center">
                                <div className="relative w-40 h-40 mb-6">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="rounded-full object-cover b0 transition-all duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
