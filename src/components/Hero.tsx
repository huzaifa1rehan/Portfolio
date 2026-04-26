"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:pt-16 gap-8 lg:gap-0">
          
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold leading-tight mb-2 text-gray-900 tracking-tight whitespace-nowrap">
                Huzaifa Rehan
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-gray-700">AI Engineer & </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]">
                  Generative AI Specialist
                </span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                AI Engineer specializing in Machine Learning, Computer Vision, Generative AI, and Agentic AI systems. Experienced in building intelligent automation solutions, LLM-based applications, and scalable AI products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#contact" className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:scale-105 hover:bg-black transition-all flex items-center gap-2 group shadow-lg">
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/huzaifa1rehan/" target="_blank" rel="noreferrer" className="p-4 glass rounded-full hover:bg-black/5 transition-colors text-gray-700 hover:text-black">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/huzaifa-rehan-14b719297/" target="_blank" rel="noreferrer" className="p-4 glass rounded-full hover:bg-black/5 transition-colors text-gray-700 hover:text-[#0a66c2]">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:rehanhuzaifa96@gmail.com" className="p-4 glass rounded-full hover:bg-black/5 transition-colors text-gray-700 hover:text-[#ea4335]">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex-1 relative flex justify-center lg:justify-start lg:ml-12 lg:-mt-16 w-full"
          >
            <div className="relative aspect-square w-48 sm:w-56 md:w-64 lg:w-72 rounded-full overflow-hidden glass box-glow p-2 sm:p-3">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 animate-pulse rounded-full" />
              <Image
                src="/huzaifa_profile.png"
                alt="Huzaifa Rehan - AI Engineer"
                fill
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-cover rounded-full relative z-10 border-4 border-white"
                style={{ objectPosition: 'center 20%' }}
                priority
              />
            </div>
            
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-2 right-0 lg:-right-4 glass px-4 py-2 sm:px-6 sm:py-3 rounded-full z-20 shadow-lg border-white"
            >
              <span className="text-[var(--color-primary)] font-bold text-sm sm:text-base">3+ Years</span>
              <span className="block text-[10px] sm:text-xs text-gray-500 font-medium">Experience</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-2 left-0 lg:left-0 glass px-4 py-2 sm:px-6 sm:py-3 rounded-full z-20 shadow-lg border-white"
            >
              <span className="text-[var(--color-accent)] font-bold text-sm sm:text-base">Agentic AI</span>
              <span className="block text-[10px] sm:text-xs text-gray-500 font-medium">Specialist</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
