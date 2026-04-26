"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Mail, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 relative bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Ready to build the future of AI together? Let's discuss your next project." 
        />
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-900">Contact Information</h3>
            <p className="text-gray-600">
              I'm currently available for freelance projects and full-time opportunities. Reach out via email or phone.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:rehanhuzaifa96@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white text-gray-700 transition-all shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Email</span>
                  <span className="text-lg font-medium group-hover:text-[var(--color-primary)] transition-colors text-gray-900">
                    rehanhuzaifa96@gmail.com
                  </span>
                </div>
              </a>
              
              <a href="tel:03063337601" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white text-gray-700 transition-all shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Phone</span>
                  <span className="text-lg font-medium group-hover:text-[var(--color-accent)] transition-colors text-gray-900">
                    03063337601
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-3xl shadow-lg border border-gray-200"
          >
            <form 
              className="space-y-6" 
              action="https://formsubmit.co/rehanhuzaifa96@gmail.com" 
              method="POST"
            >
              {/* Optional: Add a hidden subject field */}
              <input type="hidden" name="_subject" value="New Message from Portfolio Website!" />
              {/* Optional: Disable captcha for smoother UX */}
              <input type="hidden" name="_captcha" value="false" />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  suppressHydrationWarning
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  suppressHydrationWarning
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  suppressHydrationWarning
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all shadow-sm resize-none"
                />
              </div>
              <button 
                type="submit"
                suppressHydrationWarning 
                className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black hover:shadow-lg transition-all"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
