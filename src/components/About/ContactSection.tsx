"use client";
import helpAnimation from "@/assets/lottie/contact.json";
import Lottie from 'lottie-react';
import {easeOut, motion} from "framer-motion";

export default function ContactSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };
    return (
        <section className=" max-w-7xl mx-auto  px-6  py-20">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2 className="text-4xl md:text-5xl text-white text-center font-semibold leading-tight">
                  Feel Free to
                    <span className="bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] bg-clip-text text-transparent">
              Contact Us
            </span>
                </h2>
                <p className="mt-6 text-gray-300 text-center">
                    We're here to help and answer any questions you might have. We look forward to hearing from you!
                </p>
            </motion.div>
           <div className="flex flex-col md:flex-row items-center mt-20 gap-10">
               <div className="w-full md:w-1/2 flex ">
                   <Lottie
                       animationData={helpAnimation}
                       loop={true}
                       className="w-[400px] h-[400px]"
                   />
               </div>
               <div className="relative  w-full md:w-1/2 ">
                   <div className="absolute inset-0 transform rotate-6 bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] rounded-2xl"></div>
                   <div className="relative bg-white  p-10 z-10 ">
                       <h2 className="text-xl font-semibold  text-gray-800">
                           <span className="bg-gradient-to-r from-[#00D1B2] via-[#FFB347] to-[#FF416C] text-transparent bg-clip-text font-bold">Get Help?</span> Please Write
                           Your Subject, Message & Notify Your Email.
                       </h2>
                       <form className="mt-5  space-y-4">
                           <div>
                               <label className="block font-medium text-gray-700">Full Name*</label>
                               <input
                                   type="text"
                                   placeholder="Type Name"
                                   className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                               />
                           </div>

                           <div>
                               <label className="block font-medium text-gray-700">Email*</label>
                               <input
                                   type="email"
                                   placeholder="Type Your Email"
                                   className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                               />
                           </div>

                           <div>
                               <label className="block font-medium text-gray-700">Subject*</label>
                               <input
                                   type="text"
                                   placeholder="Type Here"
                                   className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                               />
                           </div>

                           <div>
                               <label className="block font-medium text-gray-700">Your Message*</label>
                               <textarea
                                   placeholder="Type Here"
                                   rows={4}
                                   className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                               ></textarea>
                           </div>

                           <button
                               type="submit"
                               className="w-full py-3   rounded-md  border-black border"
                           >
                               Send Message
                           </button>
                       </form>
                   </div>
               </div>
           </div>
        </section>
    );
}
