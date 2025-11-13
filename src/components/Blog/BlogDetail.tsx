import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogPost, RichTextBlock } from "@/types/blog";
import BlogNavbar from "@/components/Blog/BlogHeader";
import {ArrowLeft, Facebook, Instagram, Linkedin} from "lucide-react";

interface BlogDetailProps {
    blog: BlogPost | null;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
    if (!blog) {
        return (
            <div className="min-h-screen">
                <BlogNavbar />
                <motion.div
                    className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-md mx-auto">
                        <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
                        <p className="text-gray-600 mb-8">
                            The blog post you&apos;re looking for doesn&apos;t exist or may have been moved.
                        </p>
                        <Link
                            href="/blogs"
                            className="group relative inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-secondary text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
                        >
              <span className="mr-4 inline-flex w-8 h-8 rounded-full bg-white text-primary items-center justify-center transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12">
                <ArrowLeft className="w-4 h-4" />
              </span>
                            Back to List
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }
    const imageUrl = blog.feature_image?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.feature_image.url}`
        : null;

    const formatDate = (iso: string) =>
        new Date(iso).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };

    const renderRichText = (blocks?: RichTextBlock[] | string) => {
        if (!blocks) return null;
        if (typeof blocks === "string") return <p>{blocks}</p>;
        return (
            <>
                {blocks.map((block, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                        {block.children.map((child, i) => (
                            <span key={i}>{child.text}</span>
                        ))}
                    </p>
                ))}
            </>
        );
    };

    return (
      <div>
          <div className="relative min-h-screen">
              <div className="relative z-10 flex flex-col min-h-screen ">
                  <BlogNavbar />
                  <motion.main
                      variants={staggerContainer}
                      initial="initial"
                      animate="animate"
                  >
                      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-44" >
                          <motion.header className="mb-12" variants={fadeInUp}>
                              {blog.tags && (
                                  <motion.div className="flex flex-wrap gap-3 mb-6" variants={fadeInUp}>
                                      {blog.tags?.map((tag, index) => (
                                          <motion.span
                                              key={index}
                                              whileHover={{ scale: 1.05 }}
                                              whileTap={{ scale: 0.95 }}
                                              className="relative inline-block px-[1px] py-[1px]  font-semibold  rounded"
                                          >
    <span
        className="absolute inset-0 rounded p-[1px] bg-gradient-to-r from-primary via-secondary to-accent"
    ></span>
                                              <span
                                                  className="relative block rounded bg-white px-6 py-1"
                                              >
      #{tag.trim()}
    </span>
                                          </motion.span>
                                      ))}
                                  </motion.div>
                              )}

                              <motion.h1
                                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 uppercase"
                                  variants={fadeInUp}
                              >
                                  {blog.title}
                              </motion.h1>

                              <motion.div
                                  className="flex flex-wrap items-center gap-6 text-gray-600 mb-8"
                                  variants={fadeInUp}
                              >
                                  <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                                      <span className="text-sm font-medium">
                  Published {formatDate(blog.published)}
                </span>
                                  </div>

                                  {blog.updatedAt && blog.updatedAt !== blog.published && (
                                      <div className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                          <span className="text-sm font-medium">
                    Updated {formatDate(blog.updatedAt)}
                  </span>
                                      </div>
                                  )}
                              </motion.div>

                              {blog.excerpt && (
                                  <motion.div
                                      className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl"
                                      variants={fadeInUp}
                                  >
                                      {renderRichText(blog.excerpt)}
                                  </motion.div>
                              )}
                          </motion.header>

                          {imageUrl && (
                              <motion.div className="mb-16 group" variants={fadeInUp}>
                                  <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white group h-[300px] md:h-[400px] lg:h-[500px]">
                                      <div
                                          className="absolute inset-0 bg-cover bg-center filter blur-[4px] scale-105"
                                          style={{ backgroundImage: `url(${imageUrl})` }}
                                      />
                                      <div className="relative overflow-hidden rounded-2xl w-full h-full">
                                          <Image
                                              src={imageUrl}
                                              alt={blog.title}
                                              fill
                                              className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                              priority
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                      </div>
                                  </div>
                              </motion.div>
                          )}

                          <motion.article className="max-w-none mb-16" variants={fadeInUp}>
                              <div className="prose prose-lg max-w-none text-gray-800">
                                  {renderRichText(blog.content)}
                              </div>
                          </motion.article>

                          <motion.footer className="py-8 border-t border-black" variants={fadeInUp}>
                              <div className="flex items-center">
                                  <Link
                                      href="/blogs"
                                      className="group relative inline-flex items-center px-6 py-3 rounded bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
                                  >
                <span className="mr-4 inline-flex w-8 h-8 rounded-full bg-white text-primary items-center justify-center transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12">
                  <ArrowLeft className="w-4 h-4" />
                </span>
                                      Back to List
                                  </Link>
                              </div>
                          </motion.footer>
                      </div>
                  </motion.main>
              </div>

          </div>
          <footer className="text-white bg-black relative">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                      <div className="col-span-2 md:col-span-2">
                          <div className="flex flex-col space-y-4">
                              <div className="flex items-center space-x-2">
                                  <Image
                                      src="/assets/svg/home/logo.png"
                                      alt="Company Logo"
                                      width={140}
                                      height={50}
                                      className="object-contain"
                                  />
                              </div>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                  Empowering learners and innovators worldwide through
                                  accessible, high-quality education and training programs.
                              </p>
                              <div className="flex space-x-4 pt-4">
                                  <a href="#" className="text-gray-400 hover:text-white">
                                      <Facebook className="w-5 h-5" />
                                  </a>
                                  <a href="#" className="text-gray-400 hover:text-white">
                                      <Linkedin className="w-5 h-5" />
                                  </a>
                                  <a href="#" className="text-gray-400 hover:text-white">
                                      <Instagram className="w-5 h-5" />
                                  </a>
                              </div>
                          </div>
                      </div>

                      <div>
                          <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
                              Start Learning
                          </p>
                          <div className="flex flex-col space-y-2">
                              {["UX/UI Design", "Software Development", "Workplace Skills", "Job Search", "Digital Freelancing"].map(
                                  (item, idx) => (
                                      <a
                                          key={idx}
                                          href="#"
                                          className="text-sm hover:text-white transition duration-150"
                                      >
                                          {item}
                                      </a>
                                  )
                              )}
                          </div>
                      </div>

                      <div>
                          <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
                              Other Resources
                          </p>
                          <div className="flex flex-col space-y-2">
                              <a href="#" className="text-sm hover:text-white transition duration-150">
                                  Events
                              </a>
                          </div>
                      </div>

                      <div className="col-span-2">
                          <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
                              Sign up for Newsletter
                          </p>
                          <input
                              type="email"
                              placeholder="Enter your email..."
                              className="w-full bg-gray-800 border border-gray-700 rounded-full py-2 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-3 appearance-none"
                          />
                          <button className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-full py-2 px-4 text-sm transition duration-200 mb-6">
                              Subscribe
                          </button>
                      </div>
                  </div>
                  <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6">
                      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
                          <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 mb-3 sm:mb-0">
                              {["Privacy Policy", "Terms of Use", "Cookies Policy"].map((link, idx) => (
                                  <a key={idx} href="#" className="hover:text-gray-300 transition">
                                      {link}
                                  </a>
                              ))}
                          </div>
                          <div className="flex items-center gap-2 text-center sm:text-right">
                              <span>Copyright 2025 © All rights reserved.</span>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
      </div>
    );
};

export default BlogDetail;
