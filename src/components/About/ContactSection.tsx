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
                    <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Contact Us
            </span>
                </h2>
                <p className="mt-6 text-gray-300 text-center">
                    We&#39;re here to help and answer any questions you might have. We look forward to hearing from you!
                </p>
            </motion.div>
           <div className="flex flex-col md:flex-row items-center mt-20 gap-10">
               <div className="w-full md:w-1/2  ">
                   <Lottie
                       animationData={helpAnimation}
                       loop={true}
                       className="w-[400px] h-[400px]"
                   />
               </div>
               <div className="relative  w-full md:w-1/2 ">
                   <div className="absolute inset-0 transform rotate-6 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl"></div>
                   <div className="relative bg-white/90 rounded-2xl p-10 z-10 shadow-lg">
                       <h2 className="text-xl font-semibold text-gray-800">
    <span className="bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text font-bold">
      Get Help?
    </span>{" "}
                           Please Write Your Subject, Message & Notify Your Email.
                       </h2>

                       <form className="mt-6 space-y-6">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                               <div>
                                   <label className="block font-medium text-gray-700">
                                       Full Name <span className="text-red-500">*</span>
                                   </label>
                                   <input
                                       type="text"
                                       placeholder="Type your full name"
                                       className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                       required
                                   />
                               </div>

                               <div>
                                   <label className="block font-medium text-gray-700">
                                       Email Address <span className="text-red-500">*</span>
                                   </label>
                                   <input
                                       type="email"
                                       placeholder="Type your email"
                                       className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                       required
                                   />
                               </div>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                               <div>
                                   <label className="block font-medium text-gray-700">
                                       Phone Number <span className="text-red-500">*</span>
                                   </label>
                                   <input
                                       type="tel"
                                       placeholder="Enter your phone number"
                                       className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                       required
                                   />
                               </div>

                               <div>
                                   <label className="block font-medium text-gray-700">
                                       Company Name <span className="text-red-500">*</span>
                                   </label>
                                   <input
                                       type="text"
                                       placeholder="Type your company name"
                                       className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                       required
                                   />
                               </div>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                               <div>
                                   <label className="block font-medium text-gray-700">
                                       Industry <span className="text-red-500">*</span>
                                   </label>
                                   <select
                                       className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none bg-white"
                                       required
                                   >
                                       <option value="">Select Industry</option>
                                       <option value="real-estate">Real Estate</option>
                                       <option value="healthcare">Healthcare</option>
                                       <option value="accounting">Accounting & Bookkeeping</option>
                                       <option value="other">Other</option>
                                   </select>
                               </div>

                               <div>
                                   <label className="block font-medium text-gray-700">
                                       Company Size <span className="text-red-500">*</span>
                                   </label>
                                   <select
                                       className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none bg-white"
                                       required
                                   >
                                       <option value="">Select Size</option>
                                       <option value="solo">Solo</option>
                                       <option value="2-10">2–10</option>
                                       <option value="11-50">11–50</option>
                                       <option value="51-200">51–200</option>
                                       <option value="200+">200+</option>
                                   </select>
                               </div>
                           </div>


                           <div>
                               <label className="block font-medium text-gray-700">
                                   What do you want to automate? <span className="text-red-500">*</span>
                               </label>
                               <textarea
                                   placeholder="Describe your automation needs"
                                   rows={5}
                                   className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                   required
                               ></textarea>
                           </div>
                           <button
                               type="submit"
                               className="w-full py-3 rounded-md border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
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
