'use client';

import React, { memo } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const checkItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const checkContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const Packages: React.FC = memo(() => {
  const advisoryItems = [
    "Weekly 1:1 advisory sessions",
    "Personal brand positioning consultation",
    "Step-by-step LinkedIn profile optimization guidance",
    "Content strategy, topic ideation and post feedback",
    "Analytics reviews and performance insights",
    "Coaching on networking, engagement and outreach"
  ];

  const foundationItems = [
    "Everything in the Advisory Package",
    "Full LinkedIn profile optimization done for you",
    "Content calendar and posting rhythm tailored to your schedule",
    "Co-created content: we draft, you approve/refine",
    "Weekly performance review with recommendations",
    "Guidance on strategic commenting, engagement and relationship-building",
    "Audience growth support focused on relevant, high-quality connections"
  ];

  const authorityItems = [
    "Everything in the Foundation Package",
    "Outreach and connection-building support",
    "Warm, human-first DM and message frameworks",
    "Strategic relationship building with key people in your ecosystem",
    "Higher-touch execution and communication",
    "Close collaboration on long-term authority positioning"
  ];

  return (
    <section id="packages" className="py-24 px-6 relative theme-transition bg-[var(--bg-primary)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={headerVariants}
          >
            Choose the Right <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
            >
              Plan for You
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            We simplify thought leadership into clear, actionable packages.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Advisory */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative p-8 rounded-3xl border border-[#1BB8BD]/15 flex flex-col h-full bg-[linear-gradient(45deg,rgba(240,240,240,0.95)_0%,rgba(245,245,245,0.9)_70%,rgba(250,250,250,0.85)_100%)] dark:bg-[linear-gradient(45deg,var(--bg-primary)_0%,var(--bg-primary)_70%,rgba(63,63,70,0.5)_100%)] shadow-[0_2px_15px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(27,184,189,0.08)] dark:hover:shadow-[0_10px_25px_rgba(27,184,189,0.05)] transition-shadow duration-300 group"
          >
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2">Advisory</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">You execute. We guide.</p>
              <motion.div 
                className="h-1 bg-gradient-to-r from-[#1BB8BD] to-[#1BB8BD]/50 rounded-full mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.3 }}
              />
            </motion.div>

            <motion.div 
              className="flex-grow space-y-4 mb-8"
              variants={checkContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {advisoryItems.map((item, i, arr) => (
                <motion.div key={i} variants={checkItemVariants}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-0.5 rounded-full border border-zinc-900 dark:border-white text-zinc-900 dark:text-white">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-snug">{item}</span>
                  </div>
                  {i < arr.length - 1 && <div className="h-px bg-[#1BB8BD]/15 mt-4" />}
                </motion.div>
              ))}
            </motion.div>

            <motion.a 
              href="#contact"
              onClick={(e) => { e.preventDefault(); window.open('https://calendly.com', '_blank'); }}
              className="self-start py-3 px-8 rounded-full font-bold text-center transition-all duration-300 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-gradient-to-r hover:from-[#1BB8BD] hover:to-[#DC0078] hover:text-white font-btn relative overflow-hidden group/btn hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10">Book a call</span>
            </motion.a>
          </motion.div>

          {/* Foundation */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative p-8 rounded-3xl border border-[#1BB8BD]/15 flex flex-col h-full bg-[linear-gradient(45deg,rgba(240,240,240,0.95)_0%,rgba(245,245,245,0.9)_70%,rgba(250,250,250,0.85)_100%)] dark:bg-[linear-gradient(45deg,var(--bg-primary)_0%,var(--bg-primary)_70%,rgba(63,63,70,0.5)_100%)] shadow-[0_2px_15px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(27,184,189,0.08)] dark:hover:shadow-[0_10px_25px_rgba(27,184,189,0.05)] transition-shadow duration-300 group"
          >
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">Foundation</h3>
                <span className="px-3 py-1 text-xs font-medium rounded-full border border-[#17A8AD] dark:border-[#1BB8BD] text-[#17A8AD] dark:text-[#1BB8BD]">
                  Popular
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">We build your presence with you.</p>
              <motion.div 
                className="h-1 bg-gradient-to-r from-[#1BB8BD] to-[#1BB8BD]/50 rounded-full mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.3 }}
              />
            </motion.div>

            <motion.div 
              className="flex-grow space-y-4 mb-8"
              variants={checkContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {foundationItems.map((item, i, arr) => (
                <motion.div key={i} variants={checkItemVariants}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-0.5 rounded-full border border-zinc-900 dark:border-white text-zinc-900 dark:text-white">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-snug">{item}</span>
                  </div>
                  {i < arr.length - 1 && <div className="h-px bg-[#1BB8BD]/15 mt-4" />}
                </motion.div>
              ))}
            </motion.div>

            <motion.a 
              href="#contact"
              onClick={(e) => { e.preventDefault(); window.open('https://calendly.com', '_blank'); }}
              className="self-start py-3 px-8 rounded-full font-bold text-center transition-all duration-300 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-gradient-to-r hover:from-[#1BB8BD] hover:to-[#DC0078] hover:text-white font-btn relative overflow-hidden group/btn hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10">Book a call</span>
            </motion.a>
          </motion.div>

          {/* Authority */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative p-8 rounded-3xl border border-[#1BB8BD]/15 flex flex-col h-full bg-[linear-gradient(45deg,rgba(240,240,240,0.95)_0%,rgba(245,245,245,0.9)_70%,rgba(250,250,250,0.85)_100%)] dark:bg-[linear-gradient(45deg,var(--bg-primary)_0%,var(--bg-primary)_70%,rgba(63,63,70,0.5)_100%)] shadow-[0_2px_15px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(27,184,189,0.08)] dark:hover:shadow-[0_10px_25px_rgba(27,184,189,0.05)] transition-shadow duration-300 group"
          >
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2">Authority</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">We build your presence for you.</p>
              <motion.div 
                className="h-1 bg-gradient-to-r from-[#1BB8BD] to-[#1BB8BD]/50 rounded-full mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
              />
            </motion.div>

            <motion.div 
              className="flex-grow space-y-4 mb-8"
              variants={checkContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {authorityItems.map((item, i, arr) => (
                <motion.div key={i} variants={checkItemVariants}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-0.5 rounded-full border border-zinc-900 dark:border-white text-zinc-900 dark:text-white">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-snug">{item}</span>
                  </div>
                  {i < arr.length - 1 && <div className="h-px bg-[#1BB8BD]/15 mt-4" />}
                </motion.div>
              ))}
            </motion.div>

            <motion.a 
              href="#contact"
              onClick={(e) => { e.preventDefault(); window.open('https://calendly.com', '_blank'); }}
              className="self-start py-3 px-8 rounded-full font-bold text-center transition-all duration-300 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-gradient-to-r hover:from-[#1BB8BD] hover:to-[#DC0078] hover:text-white font-btn relative overflow-hidden group/btn hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10">Book a call</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

Packages.displayName = 'Packages';

export default Packages;
