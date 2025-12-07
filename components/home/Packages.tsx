'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Packages: React.FC = memo(() => {
  return (
    <section id="packages" className="py-24 px-6 relative theme-transition bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Choose the Right <br />
            <span>Plan for You</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We simplify thought leadership into clear, actionable packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Advisory */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            className="relative p-8 rounded-3xl border flex flex-col h-full bg-white dark:bg-black border-gray-200 dark:border-white/10 hover:border-[#1BB8BD]/50 dark:hover:border-[#1BB8BD]/50 hover:shadow-lg hover:shadow-[#1BB8BD]/10 hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Advisory</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">You execute. We guide.</p>
              <div className="w-12 h-1 bg-gradient-to-r from-[#1BB8BD] to-[#1BB8BD]/50 rounded-full mt-4" />
            </div>

            <div className="flex-grow space-y-4 mb-8">
              {[
                "Weekly 1:1 advisory sessions",
                "Personal brand positioning consultation",
                "Step-by-step LinkedIn profile optimization guidance",
                "Content strategy, topic ideation and post feedback",
                "Analytics reviews and performance insights",
                "Coaching on networking, engagement and outreach"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 p-0.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-[#1BB8BD] group-hover:text-white transition-colors">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact"
              onClick={(e) => { e.preventDefault(); window.open('https://calendly.com', '_blank'); }}
              className="w-full py-4 rounded-full font-bold text-center transition-all duration-300 bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-white border border-gray-200 dark:border-white/10 hover:bg-[#1BB8BD] hover:text-white hover:border-[#1BB8BD] font-btn block relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10">Book a call</span>
            </a>
          </motion.div>

          {/* Foundation - Most Popular */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative p-8 rounded-3xl flex flex-col h-full bg-gradient-to-b from-white/10 dark:from-white/10 to-transparent shadow-[0_0_20px_rgba(27,184,189,0.15),0_0_40px_rgba(220,0,120,0.1)] transition-all duration-300 group"
            style={{
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-primary)), linear-gradient(to right, #1BB8BD, #DC0078)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1BB8BD] to-[#DC0078] text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg">
              Most Popular
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Foundation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">We build your presence with you.</p>
              <div className="w-12 h-1 bg-gradient-to-r from-[#1BB8BD] to-[#DC0078] rounded-full mt-4" />
            </div>

            <div className="flex-grow space-y-4 mb-8">
              {[
                "Everything in the Advisory Package",
                "Full LinkedIn profile optimization done for you",
                "Content calendar and posting rhythm tailored to your schedule",
                "Co-created content: we draft, you approve/refine",
                "Weekly performance review with recommendations",
                "Guidance on strategic commenting, engagement and relationship-building",
                "Audience growth support focused on relevant, high-quality connections"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 p-0.5 rounded-full bg-gradient-to-r from-[#1BB8BD] to-[#DC0078] text-white transition-colors">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact"
              onClick={(e) => { e.preventDefault(); window.open('https://calendly.com', '_blank'); }}
              className="w-full py-4 rounded-full font-bold text-center transition-all duration-300 bg-gradient-to-r from-[#1BB8BD] to-[#DC0078] text-white hover:opacity-90 font-btn block relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10">Book a call</span>
            </a>
          </motion.div>

          {/* Authority */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative p-8 rounded-3xl border flex flex-col h-full bg-white dark:bg-black border-gray-200 dark:border-white/10 hover:border-[#DC0078]/50 dark:hover:border-[#DC0078]/50 hover:shadow-lg hover:shadow-[#DC0078]/10 hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Authority</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">We build your presence for you.</p>
              <div className="w-12 h-1 bg-gradient-to-r from-[#DC0078] to-[#DC0078]/50 rounded-full mt-4" />
            </div>

            <div className="flex-grow space-y-4 mb-8">
              {[
                "Everything in the Foundation Package",
                "Outreach and connection-building support",
                "Warm, human-first DM and message frameworks",
                "Strategic relationship building with key people in your ecosystem",
                "Higher-touch execution and communication",
                "Close collaboration on long-term authority positioning"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 p-0.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-[#DC0078] group-hover:text-white transition-colors">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact"
              onClick={(e) => { e.preventDefault(); window.open('https://calendly.com', '_blank'); }}
              className="w-full py-4 rounded-full font-bold text-center transition-all duration-300 bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-white border border-gray-200 dark:border-white/10 hover:bg-[#DC0078] hover:text-white hover:border-[#DC0078] font-btn block relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10">Book a call</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Packages.displayName = 'Packages';

export default Packages;
