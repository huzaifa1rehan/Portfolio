"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { BrainCircuit, Cpu, Eye, Network, Bot, Workflow, Layers, Sparkles } from "lucide-react";

const skills = [
  { name: "AI Engineering", icon: BrainCircuit, color: "text-blue-400" },
  { name: "Machine Learning", icon: Network, color: "text-green-400" },
  { name: "Computer Vision", icon: Eye, color: "text-purple-400" },
  { name: "Generative AI", icon: Sparkles, color: "text-yellow-400" },
  { name: "Agentic AI", icon: Bot, color: "text-cyan-400" },
  { name: "MCP Integration", icon: Layers, color: "text-orange-400" },
  { name: "AI Automation", icon: Workflow, color: "text-pink-400" },
  { name: "Deep Learning", icon: Cpu, color: "text-red-400" },
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } },
  };

  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Core Expertise" 
          subtitle="Advanced capabilities in building the next generation of intelligent systems." 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 group cursor-pointer border border-gray-200 hover:border-[var(--color-primary)] transition-colors shadow-sm"
            >
              <div className={`p-4 rounded-full bg-gray-100 group-hover:bg-[var(--color-primary)]/10 transition-colors ${skill.color}`}>
                <skill.icon className="w-8 h-8" />
              </div>
              <h3 className="font-medium text-sm md:text-base text-gray-800">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
