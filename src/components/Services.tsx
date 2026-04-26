"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Bot, MessageSquareCode, Settings2, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    title: "AI Automation",
    description: "Streamline workflows and operations with intelligent, autonomous AI systems.",
    icon: Settings2,
  },
  {
    title: "LLM Applications",
    description: "Custom applications powered by Large Language Models tailored to your data.",
    icon: MessageSquareCode,
  },
  {
    title: "Chatbot Development",
    description: "Intelligent conversational agents for customer support and internal tools.",
    icon: Bot,
  },
  {
    title: "Computer Vision Solutions",
    description: "Advanced image and video analysis systems for detection and profiling.",
    icon: ShieldCheck,
  },
  {
    title: "Custom AI Agents",
    description: "Purpose-built AI agents capable of complex reasoning and task execution.",
    icon: Zap,
  },
];

export function Services() {
  return (
    <section className="py-24 relative" id="services">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Services & Solutions" 
          subtitle="Specialized AI consulting and development services." 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl border border-gray-200 hover:border-[var(--color-primary)] transition-all group shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)]/10 transition-colors">
                <service.icon className="w-7 h-7 text-gray-700 group-hover:text-[var(--color-primary)] transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
