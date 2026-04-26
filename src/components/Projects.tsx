"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Agentic AI System",
    description: "Autonomous AI system capable of reasoning, planning, and executing tasks using LLMs and agent frameworks.",
    category: "AI Architecture",
  },
  {
    title: "MCP Blender Integration",
    description: "AI automation system integrating MCP with Blender for intelligent 3D workflows.",
    category: "Automation",
  },
  {
    title: "Fine-Tuned LLM",
    description: "Fine-tuned large language model on custom dataset for domain-specific tasks.",
    category: "NLP",
  },
  {
    title: "Face Profiling System",
    description: "Computer vision system for face detection and profiling using deep learning.",
    category: "Computer Vision",
  },
];

export function Projects() {
  return (
    <section className="py-24 relative bg-gray-50" id="projects">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of recent AI engineering and automation solutions." 
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-medium tracking-wider uppercase text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors cursor-pointer shadow-sm">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[var(--color-secondary)] transition-all">
                {project.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
