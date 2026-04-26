"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Experience" 
        />
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 border-l border-gray-200"
          >
            <div className="absolute top-0 -left-[21px] w-10 h-10 rounded-full glass flex items-center justify-center border border-[var(--color-primary)]/30 text-[var(--color-primary)]">
              <Briefcase className="w-5 h-5" />
            </div>
            
            <div className="glass p-8 rounded-2xl ml-6 relative overflow-hidden group hover:border-[var(--color-primary)] transition-colors shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 blur-3xl rounded-full group-hover:bg-[var(--color-primary)]/20 transition-all" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-2xl font-bold">Freelance AI Engineer</h3>
                <span className="text-[var(--color-accent)] font-medium bg-[var(--color-accent)]/10 px-3 py-1 rounded-full text-sm w-fit">
                  3+ Years
                </span>
              </div>
              
              <p className="text-gray-700 text-lg mb-4 font-medium">
                Independent AI Solutions Provider
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Successfully handled and delivered projects for 7-8 diverse clients. Delivering end-to-end AI solutions, specialized automation systems, and custom Machine Learning models. Focus on leveraging the latest in Generative AI and LLM orchestration to solve complex business problems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
