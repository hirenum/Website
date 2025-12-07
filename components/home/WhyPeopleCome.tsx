'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, FileText, Users, Megaphone, Clock, Target } from 'lucide-react';
import type { PainPointNode, MobilePainPointNode } from '@/lib/types';

interface WhyPeopleComeProps {
  scrollToSection: (id: string) => void;
}

const WhyPeopleCome: React.FC<WhyPeopleComeProps> = memo(({ scrollToSection }) => {
  const painPointNodes: PainPointNode[] = [
    { text: "They're doing great work, but very few people outside their circle know about it.", icon: User, top: "20%", left: "10%", align: "left", delay: 0.4 },
    { text: "They're relying too much on referrals and outbound, and want more inbound opportunities.", icon: FileText, top: "20%", right: "10%", align: "right", delay: 0.5 },
    { text: "Their competitors with less experience have more visibility and a louder voice in the market.", icon: Users, top: "50%", left: "2%", align: "left", delay: 0.6 },
    { text: "They know they should \"post on LinkedIn,\" but don't have the time, structure or strategy.", icon: Megaphone, top: "50%", right: "2%", align: "right", delay: 0.7 },
    { text: "They've tried posting randomly, but it hasn't turned into leads, clients, or real authority.", icon: Clock, top: "80%", left: "10%", align: "left", delay: 0.8 },
    { text: "They're ready to be seen as a go-to name in their industry, not just another professional.", icon: Target, top: "80%", right: "10%", align: "right", delay: 0.9, isHighlight: true }
  ];

  const mobilePainPointNodes: MobilePainPointNode[] = [
    { text: "They're doing great work, but very few people outside their circle know about it.", icon: User },
    { text: "They're relying too much on referrals and outbound, and want more inbound opportunities.", icon: FileText },
    { text: "Their competitors with less experience have more visibility and a louder voice in the market.", icon: Users },
    { text: "They know they should \"post on LinkedIn,\" but don't have the time, structure or strategy.", icon: Megaphone },
    { text: "They've tried posting randomly, but it hasn't turned into leads, clients, or real authority.", icon: Clock },
    { text: "They're ready to be seen as a go-to name in their industry, not just another professional.", icon: Target, isHighlight: true }
  ];

  return (
    <section id="why-people-come" className="py-24 relative overflow-hidden theme-transition bg-[var(--bg-primary)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden lg:block absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#DC0078]/10 to-[#1BB8BD]/10 dark:from-[#DC0078]/8 dark:to-[#1BB8BD]/8 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Mobile Only */}
        <div className="text-center mb-16 relative lg:hidden">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
          >
            Most people come to us when...
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-brand rounded-full blur-sm opacity-60"></div>
          </motion.h2>
        </div>

        {/* Tree Branch Layout - Desktop */}
        <div className="hidden lg:block relative max-w-7xl mx-auto h-[700px] xl:h-[800px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-[280px] lg:w-[320px] xl:w-[400px]">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400"
            >
              Most people come to us when...
            </motion.h2>
          </div>

          {/* SVG Tree Branches */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DC0078" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1BB8BD" stopOpacity="0.6" />
              </linearGradient>
              <filter id="glowFilter">
                <feGaussianBlur stdDeviation="0.3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {[
              { path: "M 40 45 C 35 45, 35 20, 32 20", delay: 0.3 },
              { path: "M 40 50 C 35 48, 30 52, 24 50", delay: 0.5 },
              { path: "M 40 55 C 35 55, 35 80, 32 80", delay: 0.7 },
              { path: "M 60 45 C 65 45, 65 20, 68 20", delay: 0.4 },
              { path: "M 60 50 C 65 52, 70 48, 76 50", delay: 0.6 },
              { path: "M 60 55 C 65 55, 65 80, 68 80", delay: 0.8 },
            ].map((branch, idx) => (
              <g key={idx}>
                <motion.path
                  d={branch.path}
                  stroke="url(#branchGradient)"
                  strokeWidth="0.2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: branch.delay }}
                  viewport={{ once: true }}
                />
                <circle r="0.4" fill="#DC0078" filter="url(#glowFilter)">
                  <animateMotion dur={`${3 + idx * 0.2}s`} repeatCount="indefinite" path={branch.path} />
                </circle>
              </g>
            ))}
          </svg>

          {/* Nodes */}
          {painPointNodes.map((node, idx) => (
            <motion.div
              key={idx}
              className="absolute w-[220px] lg:w-[250px] xl:w-[300px]"
              style={{ top: node.top, left: node.left, right: node.right, transform: 'translateY(-50%)' }}
              initial={{ opacity: 0, x: node.align === 'left' ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: node.delay }}
              viewport={{ once: true }}
            >
              <div className="relative p-4 lg:p-5 xl:p-6 rounded-2xl border backdrop-blur-sm overflow-hidden group transition-all duration-300 bg-transparent border-gray-300/50 dark:border-white/10">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#DC0078]/5 to-[#1BB8BD]/5" />
                <div className="relative z-10 flex items-start gap-3 xl:gap-4">
                  <div className="p-2 lg:p-2.5 xl:p-3 rounded-xl flex-shrink-0 transition-colors duration-300 bg-gray-200/50 dark:bg-white/5 text-[#1BB8BD] group-hover:bg-[#1BB8BD] group-hover:text-white">
                    <node.icon className="w-5 h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                  </div>
                  <p className="text-sm lg:text-sm xl:text-base font-medium leading-relaxed text-gray-700 dark:text-gray-200">
                    {node.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          <div className="relative pl-8 ml-4">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#1BB8BD] via-[#1BB8BD] via-40% to-[#DC0078]" />
            {mobilePainPointNodes.map((node, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 relative"
              >
                <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1BB8BD] border-4 border-[var(--bg-primary)]" style={{ backgroundColor: idx < 3 ? '#1BB8BD' : idx === 3 ? '#8B5F9E' : '#DC0078' }} />
                <div className="flex items-center gap-4 p-4 rounded-xl border backdrop-blur-sm bg-transparent border-gray-300/50 dark:border-white/10">
                  <div className="p-2 rounded-lg bg-gray-200/50 dark:bg-white/5 text-[#1BB8BD]">
                    <node.icon size={20} />
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{node.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">Sound like you?</p>
          <button 
            onClick={() => scrollToSection('who-we-work-with')} 
            className="bg-[#1BB8BD] text-white text-lg px-8 py-4 rounded-full font-bold transition-all duration-500 inline-flex items-center gap-2 group relative overflow-hidden hover:shadow-[0_10px_30px_rgba(27,184,189,0.25)] hover:scale-105 active:scale-95 font-btn"
          >
            <span className="relative z-10">See who we work with</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#DC0078] to-[#1BB8BD] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
});

WhyPeopleCome.displayName = 'WhyPeopleCome';

export default WhyPeopleCome;
