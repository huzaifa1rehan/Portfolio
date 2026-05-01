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
                <h3 className="text-2xl font-bold">AI Solutions Architect & Consultant</h3>
                <span className="text-[var(--color-accent)] font-medium bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full text-sm w-fit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  Available for Consulting
                </span>
              </div>
              
              <p className="text-[var(--color-primary)] text-lg mb-6 font-semibold">
                Independent AI Engineering
              </p>
              
              <ul className="text-gray-600 leading-relaxed space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                  <span>Architected and deployed scalable AI-driven solutions, leading to significant optimization in business workflows and operational efficiency.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                  <span>Designed and implemented sophisticated Agentic AI frameworks to automate complex decision-making processes and data analysis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                  <span>Leveraged state-of-the-art Generative AI and advanced LLM orchestration techniques to build highly capable, customized enterprise applications.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
