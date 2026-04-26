"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="py-24 relative bg-gray-50" id="education">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Education" 
        />
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group hover:border-[var(--color-accent)] transition-colors shadow-sm"
          >
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[var(--color-accent)]/10 blur-3xl rounded-full group-hover:bg-[var(--color-accent)]/20 transition-all" />
            
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center shrink-0 shadow-md">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">Bachelor of Science</h3>
                </div>
                <h4 className="text-xl text-[var(--color-primary)] font-medium mb-4">
                  Artificial Intelligence
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  4-year comprehensive degree program focused on core AI principles, Machine Learning algorithms, Data Structures, and advanced computation.
                </p>
                
                <div className="space-y-3">
                  <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Key Coursework</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Data Structures", "Python"].map((course, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm border border-gray-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors cursor-default">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
